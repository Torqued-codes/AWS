import React, { useState, useMemo, useEffect } from 'react';
import { useGame } from '../../context/GameContext';
import { 
  Heart, 
  Flame, 
  ShieldCheck, 
  Building2, 
  Trophy, 
  ArrowRight,
  Terminal,
  Layers,
  Sparkles
} from 'lucide-react';
import { AnswerReviewModal } from './AnswerReviewModal';
import { HeartCooldownModal } from './HeartCooldownModal';
import { soundEngine } from '../../utils/soundEngine';
import confetti from 'canvas-confetti';

export const QuizArena: React.FC = () => {
  const { 
    questions, 
    activeWeek, 
    submissions, 
    currentUser, 
    submitAnswer, 
    lastAnswerResult, 
    setLastAnswerResult, 
    setActiveTab 
  } = useGame();

  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Filter questions for active week
  const weekQuestions = useMemo(() => {
    return questions.filter((q) => q.weekNumber === activeWeek);
  }, [questions, activeWeek]);

  // Find the first unanswered question
  const currentQuestionIndex = useMemo(() => {
    const answeredIds = new Set(submissions.map((s) => s.questionId));
    const idx = weekQuestions.findIndex((q) => !answeredIds.has(q.id));
    return idx === -1 ? weekQuestions.length : idx;
  }, [weekQuestions, submissions]);

  const isWeekCompleted = currentQuestionIndex >= weekQuestions.length && weekQuestions.length > 0;
  const currentQuestion = weekQuestions[currentQuestionIndex];

  // Number of answered questions in active week
  const answeredCount = useMemo(() => {
    const answeredIds = new Set(submissions.map((s) => s.questionId));
    return weekQuestions.filter((q) => answeredIds.has(q.id)).length;
  }, [weekQuestions, submissions]);

  const handleSelectOption = (key: 'A' | 'B' | 'C' | 'D') => {
    soundEngine.playTap();
    setSelectedOption(key);
  };

  const handleConfirmSubmit = () => {
    if (!currentQuestion || !selectedOption || isSubmitting) return;

    setIsSubmitting(true);
    const success = submitAnswer(currentQuestion.id, selectedOption);

    if (success) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#FF9900', '#10B981', '#38BDF8']
      });
    }

    setIsSubmitting(false);
    setSelectedOption(null);
  };

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lastAnswerResult || isWeekCompleted || !currentQuestion) return;

      const key = e.key.toUpperCase();
      if (key === 'A' || key === '1') handleSelectOption('A');
      else if (key === 'B' || key === '2') handleSelectOption('B');
      else if (key === 'C' || key === '3') handleSelectOption('C');
      else if (key === 'D' || key === '4') handleSelectOption('D');
      else if (e.key === 'Enter' && selectedOption) handleConfirmSubmit();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedOption, lastAnswerResult, isWeekCompleted, currentQuestion]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-zinc-100">
      
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 bg-zinc-950 border border-zinc-800 p-4 rounded-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-aws-orange text-zinc-950 flex items-center justify-center font-mono font-black text-base">
            W{activeWeek}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-mono font-bold text-white text-base sm:text-lg">
                AWS_CERT_SPRINT // WEEK_{activeWeek}
              </h1>
              <span className="text-[10px] font-mono px-2 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                ACTIVE
              </span>
            </div>
            <p className="text-xs text-zinc-400 font-mono mt-0.5">
              Solved: {answeredCount}/{weekQuestions.length} Modules • +50 Pts per node
            </p>
          </div>
        </div>

        {/* Live HUD */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 border border-rose-500/30 text-xs font-mono font-bold text-rose-300">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>{currentUser.hearts}/5 HEARTS</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 border border-amber-500/30 text-xs font-mono font-bold text-amber-300">
            <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>{currentUser.streak}d STREAK</span>
          </div>
        </div>
      </div>

      {/* Segmented Progress Bar */}
      <div className="w-full bg-zinc-900 rounded-full h-1.5 mb-8 overflow-hidden border border-zinc-800">
        <div 
          className="bg-aws-orange h-full rounded-full transition-all duration-300"
          style={{ width: `${weekQuestions.length ? (answeredCount / weekQuestions.length) * 100 : 0}%` }}
        />
      </div>

      {/* Week Completed Screen */}
      {isWeekCompleted ? (
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 text-center shadow-2xl relative overflow-hidden">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-aws-orange/10 border border-aws-orange/40 flex items-center justify-center mb-4 text-aws-orange">
            <Trophy className="w-8 h-8" />
          </div>

          <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold uppercase">
            Sprint Complete
          </span>

          <h2 className="text-2xl font-mono font-bold text-white mt-2 mb-1">
            Week {activeWeek} Mastery Achieved
          </h2>
          
          <p className="text-xs text-zinc-400 font-mono max-w-sm mx-auto mb-6">
            All questions solved. Your tower in the 3D Metropolis has expanded with new floors.
          </p>

          <div className="grid grid-cols-3 gap-3 max-w-md mx-auto mb-8 text-left font-mono text-xs">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3">
              <span className="text-zinc-500 block text-[10px]">TOTAL SCORE</span>
              <span className="text-base font-bold text-aws-orange">{currentUser.points} PTS</span>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3">
              <span className="text-zinc-500 block text-[10px]">SKYLINE</span>
              <span className="text-base font-bold text-cyan-400">{currentUser.floors} FLOORS</span>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3">
              <span className="text-zinc-500 block text-[10px]">STREAK</span>
              <span className="text-base font-bold text-amber-400">{currentUser.streak} DAYS</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => { soundEngine.playTap(); setActiveTab('city'); }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-aws-orange hover:bg-amber-500 text-zinc-950 font-mono font-bold text-xs flex items-center justify-center gap-2 transition-all"
            >
              <Building2 className="w-4 h-4" />
              <span>Inspect 3D Tower in City</span>
            </button>

            <button
              onClick={() => { soundEngine.playTap(); setActiveTab('leaderboard'); }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 font-mono font-semibold text-xs flex items-center justify-center gap-2 transition-all"
            >
              <Trophy className="w-4 h-4" />
              <span>View Leaderboard</span>
            </button>
          </div>
        </div>
      ) : currentQuestion ? (
        /* Active Question Display */
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-xl">
          
          {/* Question Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono font-bold text-aws-orange">
                NODE {currentQuestionIndex + 1}/{weekQuestions.length}
              </span>
              <span className="px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-cyan-400">
                {currentQuestion.domain}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Tier: <strong>{currentQuestion.difficulty}</strong></span>
            </div>
          </div>

          {/* Question Text */}
          <h2 className="text-base sm:text-lg font-semibold text-white leading-relaxed mb-6">
            {currentQuestion.questionText}
          </h2>

          {/* Options */}
          <div className="space-y-2.5 mb-8">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = selectedOption === option.key;
              return (
                <button
                  key={option.key}
                  onClick={() => handleSelectOption(option.key)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 ${
                    isSelected
                      ? 'bg-zinc-900 border-aws-orange text-white ring-1 ring-aws-orange'
                      : 'bg-zinc-900/50 hover:bg-zinc-900 border-zinc-800/80 text-zinc-300'
                  }`}
                >
                  <div className={`w-7 h-7 rounded-lg font-mono font-bold text-xs flex items-center justify-center shrink-0 transition-colors ${
                    isSelected 
                      ? 'bg-aws-orange text-zinc-950' 
                      : 'bg-zinc-800 text-zinc-400 border border-zinc-700'
                  }`}>
                    {option.key}
                  </div>
                  <div className="text-xs sm:text-sm pt-0.5 leading-relaxed">
                    {option.text}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Action Bar */}
          <div className="flex items-center justify-between pt-4 border-t border-zinc-800/80 font-mono text-xs">
            <div className="text-zinc-500 hidden sm:flex items-center gap-1">
              <Terminal className="w-3.5 h-3.5" />
              <span>Keyboard: Press [1..4] or [A..D] to select, [Enter] to submit</span>
            </div>

            <button
              onClick={handleConfirmSubmit}
              disabled={!selectedOption || isSubmitting}
              className={`px-6 py-2.5 rounded-xl bg-aws-orange hover:bg-amber-500 text-zinc-950 font-mono font-bold text-xs flex items-center gap-2 transition-all ${
                !selectedOption || isSubmitting ? 'opacity-40 cursor-not-allowed filter grayscale' : ''
              }`}
            >
              <span>Submit Answer</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      ) : null}

      {/* Result Explanation Modal */}
      {lastAnswerResult && (
        <AnswerReviewModal
          result={lastAnswerResult}
          onNext={() => setLastAnswerResult(null)}
          heartsRemaining={currentUser.hearts}
        />
      )}

      {/* Cooldown Modal */}
      <HeartCooldownModal />

    </div>
  );
};
