import React from 'react';
import { useGame } from '../../context/GameContext';
import { X, Flame, Calendar, Trophy, Zap, Activity } from 'lucide-react';

interface StreakCalendarProps {
  onClose: () => void;
}

function getDaysAgo(n: number): Date {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d;
}

export const StreakCalendar: React.FC<StreakCalendarProps> = ({ onClose }) => {
  const { currentUser, submissions } = useGame();

  // Build a set of days that had activity (from submissions)
  const activeDays = new Set<string>();
  submissions.forEach(s => {
    const d = new Date(s.timestamp);
    activeDays.add(`${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`);
  });

  // Build last 28 days grid (4 weeks)
  const days: { date: Date; active: boolean; isToday: boolean }[] = [];
  for (let i = 27; i >= 0; i--) {
    const d = getDaysAgo(i);
    const key = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    days.push({
      date: d,
      active: activeDays.has(key),
      isToday: i === 0,
    });
  }

  const weekRows = [];
  for (let w = 0; w < 4; w++) {
    weekRows.push(days.slice(w * 7, w * 7 + 7));
  }

  const weekLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const totalActive = activeDays.size;
  const weeksParticipating = currentUser.joinedWeek
    ? Math.max(1, 4 - currentUser.joinedWeek + 1)
    : 1;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-sm bg-zinc-950 border border-zinc-800 rounded-3xl p-5 shadow-2xl text-zinc-100 font-sans">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
              <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
            </div>
            <div>
              <div className="text-sm font-display font-bold text-white">Activity Streak</div>
              <div className="text-[10px] text-zinc-500 font-mono">Last 28 days</div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-zinc-900 text-zinc-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-2 mb-5">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-center">
            <div className="text-[10px] text-zinc-500 font-mono mb-1">STREAK</div>
            <div className="text-xl font-stats font-bold text-amber-400">{currentUser.streak}</div>
            <div className="text-[10px] text-zinc-500">days</div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-center">
            <div className="text-[10px] text-zinc-500 font-mono mb-1">LONGEST</div>
            <div className="text-xl font-stats font-bold text-aws-orange">{currentUser.longestStreak || currentUser.streak}</div>
            <div className="text-[10px] text-zinc-500">days</div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-center">
            <div className="text-[10px] text-zinc-500 font-mono mb-1">ACTIVE</div>
            <div className="text-xl font-stats font-bold text-cyan-400">{totalActive}</div>
            <div className="text-[10px] text-zinc-500">sessions</div>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="bg-zinc-900/60 border border-zinc-800/60 rounded-2xl p-3.5 mb-4">
          {/* Day headers */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {weekLabels.map(d => (
              <div key={d} className="text-center text-[9px] font-mono text-zinc-500 font-bold">{d}</div>
            ))}
          </div>

          {/* Weeks */}
          <div className="space-y-1">
            {weekRows.map((week, wi) => (
              <div key={wi} className="grid grid-cols-7 gap-1">
                {week.map((day, di) => (
                  <div
                    key={di}
                    title={day.date.toLocaleDateString()}
                    className={`h-6 w-full rounded-md transition-all ${
                      day.isToday
                        ? 'ring-1 ring-aws-orange ring-offset-1 ring-offset-zinc-900'
                        : ''
                    } ${
                      day.active
                        ? 'bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.4)]'
                        : 'bg-zinc-800/60'
                    }`}
                  />
                ))}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-3">
            <span className="text-[10px] text-zinc-500 font-mono">Less active</span>
            <div className="flex items-center gap-1">
              {['bg-zinc-800', 'bg-amber-900/60', 'bg-amber-600/70', 'bg-amber-400', 'bg-amber-300'].map((c, i) => (
                <div key={i} className={`w-3.5 h-3.5 rounded-sm ${c}`} />
              ))}
            </div>
            <span className="text-[10px] text-zinc-500 font-mono">More active</span>
          </div>
        </div>

        {/* Extra Info */}
        <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
            <span>Joined Week {currentUser.joinedWeek || 1}</span>
          </div>
          <span className="text-zinc-700">•</span>
          <div className="flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-aws-orange" />
            <span>{submissions.length} total submissions</span>
          </div>
        </div>
      </div>
    </div>
  );
};
