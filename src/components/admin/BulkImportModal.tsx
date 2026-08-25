import React, { useEffect, useRef, useState } from 'react';
import { useGame } from '../../context/GameContext';
import { CertDomain, Question } from '../../types';
import { extractTextFromDocument } from '../../utils/documentParser';
import {
  parseQuestionsWithGroq,
  StagedQuestion,
  getGroqApiKey,
  isGroqApiKeyFromEnv,
  setGroqApiKeyOverride,
} from '../../utils/groqService';
import {
  X,
  UploadCloud,
  ScanText,
  Loader2,
  Trash2,
  CheckCircle2,
  AlertTriangle,
  KeyRound,
  Send,
  ChevronDown,
  ChevronRight,
  ListChecks,
} from 'lucide-react';
import { soundEngine } from '../../utils/soundEngine';

const CARD = 'bg-neutral-900/60 border border-neutral-800 rounded-xl shadow-2xl backdrop-blur-md';
const INPUT = 'w-full bg-neutral-950/80 border border-neutral-800 rounded-lg px-3 py-2 text-sm font-sans text-white placeholder-neutral-500 focus:outline-none focus:border-aws-orange transition-colors';

// Best-effort mapping from Groq's free-text domain/difficulty tags to the
// strict CertDomain / difficulty unions the live Question type requires.
// The admin can still override either dropdown per-draft in the review step.
function mapToCertDomain(freeText: string): CertDomain {
  const t = freeText.toLowerCase();
  if (t.includes('iam') || t.includes('security')) return 'IAM & Security';
  if (t.includes('ec2') || t.includes('lambda') || t.includes('compute')) return 'Compute (EC2 & Lambda)';
  if (t.includes('s3') || t.includes('ebs') || t.includes('storage')) return 'Storage (S3 & EBS)';
  if (t.includes('vpc') || t.includes('network')) return 'VPC & Networking';
  if (t.includes('rds') || t.includes('dynamo') || t.includes('database')) return 'Databases (RDS & DynamoDB)';
  return 'Cloud Architecture & Cost';
}

function mapToDifficulty(freeText: string): 'Beginner' | 'Associate' | 'Pro' {
  const t = freeText.toLowerCase();
  if (t.includes('practitioner') || t.includes('beginner') || t.includes('foundational')) return 'Beginner';
  if (t.includes('pro') || t.includes('specialty') || t.includes('expert')) return 'Pro';
  return 'Associate';
}

interface EditableStaged extends StagedQuestion {
  mappedDomain: CertDomain;
  mappedDifficulty: 'Beginner' | 'Associate' | 'Pro';
  awsDocTopic: string;
}

interface BulkImportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Phase = 'upload' | 'extracting' | 'parsing' | 'review';

export const BulkImportModal: React.FC<BulkImportModalProps> = ({ isOpen, onClose }) => {
  const { activeWeek, addNewQuestions } = useGame();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [phase, setPhase] = useState<Phase>('upload');
  const [fileName, setFileName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [wasTruncated, setWasTruncated] = useState(false);
  const [chunkProgress, setChunkProgress] = useState<{ current: number; total: number } | null>(null);
  const [waitSeconds, setWaitSeconds] = useState(0);
  const [staged, setStaged] = useState<EditableStaged[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [targetWeek, setTargetWeek] = useState(activeWeek);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [apiKeyInput, setApiKeyInput] = useState('');

  const keyFromEnv = isGroqApiKeyFromEnv();

  useEffect(() => {
    if (waitSeconds <= 0) return;
    const timer = setInterval(() => {
      setWaitSeconds((s) => (s > 1 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [waitSeconds > 0]);

  if (!isOpen) return null;

  const resetAll = () => {
    setPhase('upload');
    setFileName('');
    setError(null);
    setWasTruncated(false);
    setChunkProgress(null);
    setWaitSeconds(0);
    setStaged([]);
    setExpandedId(null);
    setShowSuccessToast(false);
  };

  const handleClose = () => {
    resetAll();
    onClose();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    setError(null);
    setPhase('extracting');

    try {
      const { text } = await extractTextFromDocument(file);

      const apiKey = getGroqApiKey() || apiKeyInput;
      if (!apiKey) {
        setError('No Groq API key configured. Add VITE_GROQ_API_KEY to your .env file (run `npm run setup:groq` for instructions), or paste a key in the field above and try again.');
        setPhase('upload');
        return;
      }
      if (!keyFromEnv && apiKeyInput) {
        setGroqApiKeyOverride(apiKeyInput);
      }

      setPhase('parsing');
      const { questions, wasTruncated: truncated } = await parseQuestionsWithGroq(text, {
        apiKey,
        onProgress: (current, total) => setChunkProgress(total > 1 ? { current, total } : null),
        onWaiting: (seconds) => setWaitSeconds(seconds),
      });
      setWasTruncated(truncated);

      if (questions.length === 0) {
        setError('No questions could be identified in this document. Try a different file, or check that it contains clearly formatted MCQs with answer options.');
        setPhase('upload');
        return;
      }

      const editable: EditableStaged[] = questions.map((q) => ({
        ...q,
        mappedDomain: mapToCertDomain(q.domain),
        mappedDifficulty: mapToDifficulty(q.difficulty),
        awsDocTopic: q.domain,
      }));

      setStaged(editable);
      setExpandedId(editable.find((q) => !isQuestionValid(q))?.stagingId ?? null);
      soundEngine.playFloorAdded();
      setPhase('review');
    } catch (err) {
      setError((err as Error).message);
      setPhase('upload');
    } finally {
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const updateStaged = (stagingId: string, updates: Partial<EditableStaged>) => {
    setStaged((prev) => prev.map((q) => (q.stagingId === stagingId ? { ...q, ...updates } : q)));
  };

  const updateStagedOption = (stagingId: string, key: 'A' | 'B' | 'C' | 'D', text: string) => {
    setStaged((prev) =>
      prev.map((q) =>
        q.stagingId === stagingId
          ? { ...q, options: q.options.map((o) => (o.key === key ? { ...o, text } : o)) }
          : q
      )
    );
  };

  const removeStaged = (stagingId: string) => {
    soundEngine.playTap();
    setStaged((prev) => prev.filter((q) => q.stagingId !== stagingId));
  };

  const isQuestionValid = (q: EditableStaged) =>
    q.questionText.trim().length > 0 &&
    q.options.every((o) => o.text.trim().length > 0) &&
    q.explanation.trim().length > 0;

  const validCount = staged.filter(isQuestionValid).length;

  const handlePublishAll = () => {
    const validQuestions = staged.filter(isQuestionValid);
    if (validQuestions.length === 0) return;

    const payload: Omit<Question, 'id'>[] = validQuestions.map((q) => ({
      weekNumber: targetWeek,
      domain: q.mappedDomain,
      difficulty: q.mappedDifficulty,
      questionText: q.questionText,
      options: q.options,
      correctOption: q.correctKey,
      explanation: q.explanation,
      awsDocTopic: q.awsDocTopic || 'AWS Cloud Architecture',
    }));

    addNewQuestions(payload);
    soundEngine.playFloorAdded();
    setShowSuccessToast(true);
    setTimeout(() => {
      handleClose();
    }, 1400);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in font-sans">
      <div className={`${CARD} w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col`}>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-aws-orange/15 border border-aws-orange/40 flex items-center justify-center text-aws-orange">
              <ScanText className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-display font-bold text-white">Bulk Question Import</h2>
              <p className="text-[11px] text-zinc-500">Turn a study guide into ready-to-publish MCQs, drafted for your review</p>
            </div>
          </div>
          <button onClick={handleClose} className="p-1.5 rounded-lg text-zinc-500 hover:text-white hover:bg-neutral-800 transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">

          {/* Upload / Processing Phase */}
          {phase !== 'review' && (
            <div className="space-y-4">
              {!keyFromEnv && (
                <div className="p-3.5 rounded-lg bg-amber-950/40 border border-amber-500/30 text-[11px] text-amber-200 flex items-start gap-2">
                  <KeyRound className="w-4 h-4 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="mb-2">
                      No <code className="font-stats">VITE_GROQ_API_KEY</code> found in your environment. Paste a key
                      below for this session (stored only in your browser's localStorage), or run{' '}
                      <code className="font-stats">npm run setup:groq</code> in your terminal for full .env setup instructions.
                    </p>
                    <input
                      type="password"
                      placeholder="gsk_..."
                      value={apiKeyInput}
                      onChange={(e) => setApiKeyInput(e.target.value)}
                      disabled={phase !== 'upload'}
                      className={INPUT}
                    />
                  </div>
                </div>
              )}

              <label
                htmlFor="bulk-import-file"
                className={`flex flex-col items-center justify-center gap-3 border-2 border-dashed rounded-xl py-14 px-6 transition-colors ${
                  phase === 'upload'
                    ? 'border-neutral-700 hover:border-aws-orange/60 bg-neutral-950/40 cursor-pointer'
                    : 'border-aws-orange/40 bg-neutral-950/60 cursor-wait'
                }`}
              >
                {phase === 'upload' && (
                  <>
                    <UploadCloud className="w-10 h-10 text-zinc-500" />
                    <div className="text-center">
                      <p className="text-sm font-semibold text-white">Click to upload a PDF or DOCX</p>
                      <p className="text-[11px] text-zinc-500 mt-1">Study guides, past-paper dumps, or notes containing MCQs</p>
                    </div>
                  </>
                )}
                {phase === 'extracting' && (
                  <>
                    <Loader2 className="w-8 h-8 text-aws-orange animate-spin" />
                    <p className="text-sm font-semibold text-white">Reading {fileName}...</p>
                  </>
                )}
                {phase === 'parsing' && (
                  <>
                    <Loader2 className="w-8 h-8 text-aws-orange animate-spin" />
                    <p className="text-sm font-semibold text-white">
                      {waitSeconds > 0
                        ? `Pausing for the free-tier rate limit — ${waitSeconds}s`
                        : chunkProgress
                          ? `Extracting questions — pass ${chunkProgress.current} of ${chunkProgress.total}`
                          : 'Extracting questions...'}
                    </p>
                    {chunkProgress && chunkProgress.total > 1 && (
                      <div className="w-48 h-1 rounded-full bg-neutral-800 overflow-hidden">
                        <div
                          className="h-full bg-aws-orange transition-all duration-300"
                          style={{ width: `${(chunkProgress.current / chunkProgress.total) * 100}%` }}
                        />
                      </div>
                    )}
                    <p className="text-[11px] text-zinc-500">
                      {waitSeconds > 0
                        ? 'Groq\'s free tier caps requests per minute — this pauses automatically and resumes on its own.'
                        : 'Long documents are read in multiple passes so nothing near the end gets skipped.'}
                    </p>
                  </>
                )}
                <input
                  ref={fileInputRef}
                  id="bulk-import-file"
                  type="file"
                  accept=".pdf,.docx"
                  onChange={handleFileChange}
                  disabled={phase !== 'upload'}
                  className="hidden"
                />
              </label>

              {error && (
                <div className="p-3.5 rounded-lg bg-rose-950/40 border border-rose-500/30 text-[11px] text-rose-300 flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}
            </div>
          )}

          {/* Review / Staging Phase */}
          {phase === 'review' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <ListChecks className="w-4 h-4 text-aws-orange" />
                  <span>
                    <strong className="text-white">{fileName}</strong> — {staged.length} question{staged.length !== 1 ? 's' : ''} found, {validCount} ready to publish
                  </span>
                </div>
                {wasTruncated && (
                  <span className="text-[10px] px-2 py-1 rounded bg-amber-950/40 text-amber-300 border border-amber-500/30">
                    Document is unusually long — only the first section was scanned
                  </span>
                )}
              </div>

              <div className="rounded-xl border border-neutral-800 divide-y divide-neutral-800 overflow-hidden">
                {staged.map((q, idx) => {
                  const valid = isQuestionValid(q);
                  const isOpen = expandedId === q.stagingId;
                  return (
                    <div key={q.stagingId} className={!valid ? 'bg-rose-950/10' : 'bg-neutral-950/40'}>
                      {/* Collapsed row */}
                      <button
                        type="button"
                        onClick={() => setExpandedId(isOpen ? null : q.stagingId)}
                        className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-neutral-900/60 transition-colors"
                      >
                        {isOpen ? (
                          <ChevronDown className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                        ) : (
                          <ChevronRight className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                        )}
                        <span className="w-6 h-6 rounded-md bg-neutral-800 text-zinc-400 font-stats text-[10px] font-bold flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <span className="flex-1 text-xs text-zinc-200 truncate">
                          {q.questionText.trim() || <span className="text-zinc-600 italic">Empty question text</span>}
                        </span>
                        <span className="w-5 h-5 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-stats text-[10px] font-bold flex items-center justify-center shrink-0">
                          {q.correctKey}
                        </span>
                        {!valid && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 font-stats font-bold shrink-0">
                            INCOMPLETE
                          </span>
                        )}
                        <span
                          role="button"
                          tabIndex={0}
                          onClick={(e) => {
                            e.stopPropagation();
                            removeStaged(q.stagingId);
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.stopPropagation();
                              removeStaged(q.stagingId);
                            }
                          }}
                          className="p-1.5 rounded-lg text-zinc-600 hover:text-rose-400 hover:bg-rose-950/40 transition-colors shrink-0"
                          title="Remove this question"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </span>
                      </button>

                      {/* Expanded editor */}
                      {isOpen && (
                        <div className="px-4 pb-4 pt-1">
                          <textarea
                            rows={2}
                            value={q.questionText}
                            onChange={(e) => updateStaged(q.stagingId, { questionText: e.target.value })}
                            className={`${INPUT} mb-2.5 text-xs`}
                            placeholder="Question text"
                          />

                          <div className="space-y-1.5 mb-2.5">
                            {q.options.map((opt) => (
                              <div key={opt.key} className="flex items-center gap-2">
                                <button
                                  type="button"
                                  onClick={() => updateStaged(q.stagingId, { correctKey: opt.key })}
                                  className={`w-6 h-6 rounded-md font-stats font-bold text-[11px] flex items-center justify-center shrink-0 transition-all ${
                                    q.correctKey === opt.key ? 'bg-emerald-500 text-black' : 'bg-neutral-800 text-zinc-400 hover:text-white'
                                  }`}
                                  title="Mark as correct answer"
                                >
                                  {opt.key}
                                </button>
                                <input
                                  type="text"
                                  value={opt.text}
                                  onChange={(e) => updateStagedOption(q.stagingId, opt.key, e.target.value)}
                                  className={`flex-1 ${INPUT} text-xs py-1.5`}
                                />
                              </div>
                            ))}
                          </div>

                          <textarea
                            rows={1}
                            value={q.explanation}
                            onChange={(e) => updateStaged(q.stagingId, { explanation: e.target.value })}
                            className={`${INPUT} mb-2.5 text-xs`}
                            placeholder="Explanation"
                          />

                          <div className="grid grid-cols-2 gap-2.5">
                            <select
                              value={q.mappedDomain}
                              onChange={(e) => updateStaged(q.stagingId, { mappedDomain: e.target.value as CertDomain })}
                              className={`${INPUT} text-xs py-1.5`}
                            >
                              <option value="IAM & Security">IAM & Security</option>
                              <option value="Compute (EC2 & Lambda)">Compute (EC2 & Lambda)</option>
                              <option value="Storage (S3 & EBS)">Storage (S3 & EBS)</option>
                              <option value="VPC & Networking">VPC & Networking</option>
                              <option value="Databases (RDS & DynamoDB)">Databases (RDS & DynamoDB)</option>
                              <option value="Cloud Architecture & Cost">Cloud Architecture & Cost</option>
                            </select>
                            <select
                              value={q.mappedDifficulty}
                              onChange={(e) =>
                                updateStaged(q.stagingId, { mappedDifficulty: e.target.value as 'Beginner' | 'Associate' | 'Pro' })
                              }
                              className={`${INPUT} text-xs py-1.5`}
                            >
                              <option value="Beginner">Beginner</option>
                              <option value="Associate">Associate</option>
                              <option value="Pro">Pro</option>
                            </select>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
                {staged.length === 0 && (
                  <div className="py-10 text-center text-zinc-500 text-xs">
                    All drafts removed. Close this dialog and upload another document to try again.
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {phase === 'review' && (
          <div className="px-6 py-4 border-t border-neutral-800 shrink-0 flex items-center justify-between gap-4 flex-wrap">
            {showSuccessToast ? (
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>{validCount} question{validCount !== 1 ? 's' : ''} published to the Master Question Bank!</span>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-stats uppercase tracking-wide text-zinc-400">Target Sprint</span>
                  <select
                    value={targetWeek}
                    onChange={(e) => setTargetWeek(Number(e.target.value))}
                    className="bg-neutral-950/80 border border-neutral-800 rounded-lg px-2.5 py-1.5 text-xs font-sans text-white focus:outline-none focus:border-aws-orange"
                  >
                    <option value={1}>Week 1</option>
                    <option value={2}>Week 2</option>
                    <option value={3}>Week 3</option>
                    <option value={4}>Week 4</option>
                  </select>
                </div>

                <button
                  onClick={handlePublishAll}
                  disabled={validCount === 0}
                  className="px-5 py-2.5 rounded-lg bg-aws-orange hover:bg-amber-500 disabled:bg-neutral-800 disabled:text-zinc-500 disabled:cursor-not-allowed text-zinc-950 font-bold text-xs flex items-center gap-2 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Publish All Validated Questions to Sprint W{targetWeek} ({validCount})</span>
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
