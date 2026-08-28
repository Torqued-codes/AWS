import React from 'react';
import { Student } from '../../types';
import { 
  X, 
  Flame, 
  Trophy, 
  Building2, 
  ShieldCheck, 
  Award, 
  Zap, 
  CheckCircle2,
  Lock
} from 'lucide-react';
import { useGame } from '../../context/GameContext';
import { soundEngine } from '../../utils/soundEngine';

interface BuildingModalProps {
  student: Student | null;
  onClose: () => void;
  onOpenCertificate: (student: Student, periodType?: 'weekly' | 'monthly' | 'yearly', periodKey?: string) => void;
}

export const BuildingModal: React.FC<BuildingModalProps> = ({
  student,
  onClose,
  onOpenCertificate
}) => {
  const {
    currentUser, badges, isCertEligible,
    weeklyWinners: weeklyWinnersRaw, monthlyWinners: monthlyWinnersRaw, yearlyWinners: yearlyWinnersRaw
  } = useGame();
  // Defensive fallback: same reasoning as ProfileDrawer — never let a
  // missing/mismatched context value crash this modal.
  const weeklyWinners = weeklyWinnersRaw || {};
  const monthlyWinners = monthlyWinnersRaw || {};
  const yearlyWinners = yearlyWinnersRaw || {};

  if (!student) return null;

  const isCurrent = student.id === currentUser.id;
  const eligibleForCert = isCertEligible(student.id);

  // Every announced period (weekly/monthly/yearly) THIS profile's student
  // appears in the Top-5 for — same source of truth as the self-profile
  // drawer, shown here too since it's public achievement info (like the
  // skill badges list below), regardless of who's viewing.
  const wonPeriods = [
    ...Object.entries(weeklyWinners).map(([key, ids]) => ({
      type: 'weekly' as const, key, label: `Week ${key}`, rank: ids.indexOf(student.id) + 1, ids
    })),
    ...Object.entries(monthlyWinners).map(([key, ids]) => ({
      type: 'monthly' as const, key, label: key, rank: ids.indexOf(student.id) + 1, ids
    })),
    ...Object.entries(yearlyWinners).map(([key, ids]) => ({
      type: 'yearly' as const, key, label: key, rank: ids.indexOf(student.id) + 1, ids
    })),
  ]
    .filter(p => p.ids.includes(student.id))
    .sort((a, b) => {
      if (a.type !== b.type) return a.type === 'weekly' ? -1 : b.type === 'weekly' ? 1 : a.type === 'monthly' ? -1 : 1;
      return a.type === 'weekly' ? Number(b.key) - Number(a.key) : b.key.localeCompare(a.key);
    });

  const getTierLabel = (tier: string) => {
    switch (tier) {
      case 'apex_monolith': return { label: 'Apex Monolith', color: 'text-amber-400', bg: 'bg-amber-400/10 border-amber-400/30' };
      case 'cyber_tower': return { label: 'Cyber Skyscraper', color: 'text-cyan-400', bg: 'bg-cyan-400/10 border-cyan-400/30' };
      case 'datacenter': return { label: 'Cloud Data Center', color: 'text-emerald-400', bg: 'bg-emerald-400/10 border-emerald-400/30' };
      default: return { label: 'EC2 Server Shack', color: 'text-zinc-400', bg: 'bg-zinc-800 border-zinc-700' };
    }
  };

  const tierInfo = getTierLabel(student.buildingTier);
  const certReadiness = Math.min(98, Math.max(20, Math.floor((student.points / 1200) * 100)));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in font-sans">
      <div className="relative w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-7 shadow-2xl overflow-hidden text-zinc-100">
        
        {/* Close Button */}
        <button
          onClick={() => { soundEngine.playTap(); onClose(); }}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Student Header */}
        <div className="flex items-center gap-3.5 mb-6">
          <div className="relative">
            <img 
              src={student.avatar} 
              alt={student.name} 
              className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-700 p-1"
            />
            {isCurrent && (
              <span className="absolute -bottom-1 -right-1 px-1.5 py-0.2 rounded bg-aws-orange text-black font-mono font-black text-[9px] uppercase">
                YOU
              </span>
            )}
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-heading text-white">
                {student.name}
              </h2>
              <span className={`text-[10px] font-mono px-2 py-0.2 rounded-full font-bold border ${tierInfo.bg} ${tierInfo.color}`}>
                {tierInfo.label}
              </span>
            </div>

            <p className="text-xs font-mono text-zinc-400 mt-0.5">
              <span className="text-cyan-400">{student.rollNumber}</span> • {student.department} (Year {student.year})
            </p>
          </div>
        </div>

        {/* 4 Metrics Grid */}
        <div className="grid grid-cols-4 gap-2 mb-6 font-mono">
          <div className="bg-zinc-900/90 border border-zinc-800/80 rounded-xl p-2.5 text-center">
            <div className="text-[10px] text-zinc-500 mb-0.5">SCORE</div>
            <div className="text-sm font-bold text-aws-orange">{student.points}</div>
          </div>

          <div className="bg-zinc-900/90 border border-zinc-800/80 rounded-xl p-2.5 text-center">
            <div className="text-[10px] text-zinc-500 mb-0.5">HEIGHT</div>
            <div className="text-sm font-bold text-cyan-400">{student.floors}F</div>
          </div>

          <div className="bg-zinc-900/90 border border-zinc-800/80 rounded-xl p-2.5 text-center">
            <div className="text-[10px] text-zinc-500 mb-0.5">STREAK</div>
            <div className="text-sm font-bold text-amber-400">{student.streak}d</div>
          </div>

          <div className="bg-zinc-900/90 border border-zinc-800/80 rounded-xl p-2.5 text-center">
            <div className="text-[10px] text-zinc-500 mb-0.5">RANK</div>
            <div className="text-sm font-bold text-zinc-300">#{student.rankWeekly || 4}</div>
          </div>
        </div>

        {/* AWS Readiness */}
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-3.5 mb-6">
          <div className="flex items-center justify-between text-xs font-mono mb-2">
            <span className="text-zinc-300 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Cert Exam Readiness
            </span>
            <span className="text-emerald-400 font-bold">{certReadiness}%</span>
          </div>

          <div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-emerald-400 h-full rounded-full transition-all duration-500"
              style={{ width: `${certReadiness}%` }}
            />
          </div>
        </div>

        {/* Badges Section */}
        <div className="mb-6">
          <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2.5">
            UNLOCKED BADGES ({student.unlockedBadges.length})
          </div>

          <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
            {badges.map((badge) => {
              const isUnlocked = student.unlockedBadges.includes(badge.id);
              return (
                <div
                  key={badge.id}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition-all ${
                    isUnlocked
                      ? 'bg-zinc-900 border-zinc-700 text-zinc-200'
                      : 'bg-zinc-950 border-zinc-900 text-zinc-600 opacity-50'
                  }`}
                >
                  <span>{badge.title}</span>
                  {isUnlocked && <CheckCircle2 className="w-3 h-3 text-emerald-400 ml-0.5" />}
                </div>
              );
            })}
          </div>
        </div>

        {/* Winner Badges — one per announced period (weekly/monthly/
            yearly) this student won. Visible to any viewer, same as the
            skill badges above; only the profile owner can click through
            to a certificate — peers just see the badge itself. */}
        {wonPeriods.length > 0 && (
          <div className="mb-6">
            <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2.5">
              WINNER BADGES ({wonPeriods.length})
            </div>
            <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
              {wonPeriods.map(({ type, key, label, rank }) => {
                const medal = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : '🏅';
                const content = (
                  <>
                    <span>{medal}</span>
                    <span>{label} · #{rank}</span>
                  </>
                );
                return isCurrent ? (
                  <button
                    key={`${type}-${key}`}
                    onClick={() => { soundEngine.playTap(); onOpenCertificate(student, type, key); }}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20 transition-colors"
                    title="View certificate"
                  >
                    {content}
                  </button>
                ) : (
                  <div
                    key={`${type}-${key}`}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-300"
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Actions — "Generate Official Certificate" is strictly limited to
            the profile owner AND only once the admin has announced them as
            a Top-5 winner for some period. Viewing peers never see this
            action; if the owner has multiple wins, this opens their best
            available one — the badges above open a specific one instead. */}
        <div className="flex items-center gap-2">
          {isCurrent && eligibleForCert && (
            <button
              onClick={() => {
                soundEngine.playTap();
                onOpenCertificate(student);
              }}
              className="flex-1 py-3 rounded-xl bg-aws-orange hover:bg-amber-500 text-zinc-950 font-mono font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <Award className="w-4 h-4" />
              <span>Generate Official Certificate</span>
            </button>
          )}

          {isCurrent && !eligibleForCert && (
            <div className="flex-1 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-500 font-mono text-[11px] flex items-center justify-center gap-2 text-center px-2">
              <Lock className="w-3.5 h-3.5 shrink-0" />
              <span>Unlocks once the admin announces a period's Top 5</span>
            </div>
          )}

          <button
            onClick={() => { soundEngine.playTap(); onClose(); }}
            className={`py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-mono text-xs border border-zinc-800 transition-all ${
              isCurrent ? 'px-4' : 'flex-1'
            }`}
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
