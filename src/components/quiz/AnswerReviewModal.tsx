import React from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Zap, 
  Heart, 
  BookOpen, 
  Building2, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { Question } from '../../types';
import { soundEngine } from '../../utils/soundEngine';

interface AnswerReviewModalProps {
  result: {
    question: Question;
    selectedOption: 'A' | 'B' | 'C' | 'D';
    isCorrect: boolean;
    earnedPoints: number;
  } | null;
  onNext: () => void;
  heartsRemaining: number;
}

export const AnswerReviewModal: React.FC<AnswerReviewModalProps> = ({
  result,
  onNext,
  heartsRemaining
}) => {
  if (!result) return null;

  const { question, selectedOption, isCorrect, earnedPoints } = result;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl bg-[#0D1322] border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden text-slate-100">
        
        {/* Glow Header */}
        <div className={`absolute top-0 inset-x-0 h-2 bg-gradient-to-r ${
          isCorrect ? 'from-emerald-500 via-teal-400 to-emerald-500' : 'from-rose-500 via-pink-500 to-rose-500'
        }`} />

        {/* Status Indicator */}
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${
            isCorrect 
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shadow-glow-neon' 
              : 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
          }`}>
            {isCorrect ? <CheckCircle2 className="w-8 h-8" /> : <XCircle className="w-8 h-8" />}
          </div>

          <div>
            <h2 className="text-2xl font-black font-display tracking-tight text-white flex items-center gap-2">
              {isCorrect ? 'Brilliant! Correct Answer' : 'Incorrect Attempt'}
            </h2>
            <p className="text-xs font-semibold mt-0.5">
              {isCorrect ? (
                <span className="text-emerald-400 flex items-center gap-1 font-mono">
                  <Zap className="w-3.5 h-3.5 fill-current" /> +{earnedPoints} Points Awarded • Skyline Expanded!
                </span>
              ) : (
                <span className="text-rose-400 flex items-center gap-1 font-mono">
                  <Heart className="w-3.5 h-3.5 fill-current" /> -1 Heart Lost ({heartsRemaining}/5 remaining)
                </span>
              )}
            </p>
          </div>
        </div>

        {/* Selected vs Correct Choice Comparison */}
        <div className="space-y-2.5 mb-6">
          <div className={`p-3.5 rounded-xl border text-xs ${
            isCorrect 
              ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200' 
              : 'bg-rose-950/30 border-rose-500/40 text-rose-200'
          }`}>
            <span className="font-bold uppercase tracking-wider block text-[10px] mb-1 opacity-80">
              Your Selection: Option {selectedOption}
            </span>
            <p>{question.options.find(o => o.key === selectedOption)?.text}</p>
          </div>

          {!isCorrect && (
            <div className="p-3.5 rounded-xl border bg-emerald-950/40 border-emerald-500/50 text-emerald-100 text-xs">
              <span className="font-bold uppercase tracking-wider block text-[10px] text-emerald-400 mb-1">
                ✓ Correct Answer: Option {question.correctOption}
              </span>
              <p>{question.options.find(o => o.key === question.correctOption)?.text}</p>
            </div>
          )}
        </div>

        {/* Architectural Explanation */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 mb-6">
          <div className="flex items-center gap-2 text-xs font-bold text-aws-orange uppercase tracking-wider mb-2">
            <BookOpen className="w-4 h-4" />
            <span>AWS Architectural Rationale</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {question.explanation}
          </p>

          {question.awsDocTopic && (
            <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <span>Domain Reference: <strong className="text-white">{question.awsDocTopic}</strong></span>
              <span className="text-cyan-400 flex items-center gap-1 font-mono text-[10px]">
                AWS SAA-C03 / CCP Verified
              </span>
            </div>
          )}
        </div>

        {/* Action Button */}
        <button
          onClick={() => {
            soundEngine.playTap();
            onNext();
          }}
          className="w-full cyber-btn-primary py-3.5 text-sm"
        >
          <span>Continue Next Question</span>
          <ArrowRight className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
};
