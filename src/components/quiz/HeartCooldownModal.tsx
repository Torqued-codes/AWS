import React from 'react';
import { 
  Heart, 
  Clock, 
  ShieldAlert, 
  Sparkles, 
  RotateCcw, 
  Lightbulb, 
  Building2,
  X 
} from 'lucide-react';
import { useGame } from '../../context/GameContext';
import { soundEngine } from '../../utils/soundEngine';

export const HeartCooldownModal: React.FC = () => {
  const { 
    showCooldownModal, 
    setShowCooldownModal, 
    cooldownRemainingSecs, 
    refillHearts,
    setActiveTab 
  } = useGame();

  if (!showCooldownModal) return null;

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const tips = [
    "AWS Security Best Practice: Never attach AdministratorAccess policies to EC2 instance profiles; adhere to Least Privilege.",
    "S3 Glacier Deep Archive provides the lowest storage cost on AWS with a 12-hour standard retrieval window.",
    "NAT Gateways are fully managed, highly available, and placed in public subnets to provide internet egress for private workloads.",
    "DynamoDB provides single-digit millisecond latency; add DAX (DynamoDB Accelerator) for microsecond in-memory caching."
  ];

  const randomTip = tips[Math.floor(Math.random() * tips.length)];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#0E1526] border border-rose-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(239,68,68,0.2)] text-slate-100 text-center">
        
        {/* Close Button */}
        <button
          onClick={() => { soundEngine.playTap(); setShowCooldownModal(false); }}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800/80 hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Pulsing Broken Heart Icon */}
        <div className="mx-auto w-20 h-20 rounded-3xl bg-rose-500/15 border-2 border-rose-500/40 flex items-center justify-center mb-5 text-rose-500 shadow-[0_0_30px_rgba(239,68,68,0.3)] animate-pulse">
          <Heart className="w-10 h-10 fill-rose-500/30" />
        </div>

        <h2 className="text-2xl font-black font-display text-white tracking-tight">
          All 5 Hearts Exhausted!
        </h2>
        
        <p className="text-sm text-slate-300 mt-2 max-w-sm mx-auto">
          To encourage thoughtful learning and avoid guess-spamming, attempts are paused for a cooldown period.
        </p>

        {/* Live Countdown Clock Box */}
        <div className="my-6 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 flex flex-col items-center">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400 mb-2">
            <Clock className="w-4 h-4 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Next Heart Recharging In</span>
          </div>

          <div className="text-4xl sm:text-5xl font-mono font-black text-white tracking-wider text-glow-orange">
            {formatTimer(cooldownRemainingSecs || 2700)}
          </div>

          <p className="text-[11px] text-slate-400 mt-2">
            Each heart refills automatically every 45 minutes (+5 full hearts in 3.5 hrs).
          </p>
        </div>

        {/* Pro Tip while waiting */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3.5 mb-6 text-left">
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 mb-1">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>Study Tip while you wait:</span>
          </div>
          <p className="text-xs text-slate-300">
            {randomTip}
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <button
            onClick={() => {
              soundEngine.playTap();
              setShowCooldownModal(false);
              setActiveTab('city');
            }}
            className="w-full cyber-btn-secondary py-3 text-xs sm:text-sm"
          >
            <Building2 className="w-4 h-4 text-cyan-400" />
            <span>Explore The Cloud City Skyline</span>
          </button>

          {/* Dev / SPOC instant refill demo button */}
          <button
            onClick={() => {
              refillHearts();
            }}
            className="w-full bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-400 border border-emerald-500/40 rounded-xl py-2 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>[Instant Refill Demo Test Key]</span>
          </button>
        </div>

      </div>
    </div>
  );
};
