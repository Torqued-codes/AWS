import React from 'react';
import { Student } from '../../types';
import { Flame, Crown, Radio, Zap, Shield, Sparkles } from 'lucide-react';
import { soundEngine } from '../../utils/soundEngine';

interface BuildingNodeProps {
  student: Student;
  isCurrentUser: boolean;
  onSelect: (student: Student) => void;
}

export const BuildingNode: React.FC<BuildingNodeProps> = ({
  student,
  isCurrentUser,
  onSelect
}) => {
  const { floors, points, streak, name, department, rollNumber, buildingTier, accentColor } = student;

  // Height proportional to floors (min 80px, max 320px for visual harmony)
  const calculatedHeight = Math.min(340, Math.max(90, floors * 14 + 60));

  // Determine Tier visuals
  const isApex = buildingTier === 'apex_monolith';
  const isCyber = buildingTier === 'cyber_tower';
  const isDataCenter = buildingTier === 'datacenter';

  const handleClick = () => {
    soundEngine.playTap();
    onSelect(student);
  };

  return (
    <div 
      onClick={handleClick}
      className={`group relative flex flex-col items-center justify-end cursor-pointer transition-all duration-300 select-none ${
        isCurrentUser ? 'scale-105 z-20' : 'hover:scale-105 hover:z-10'
      }`}
      style={{ minWidth: '100px', maxWidth: '140px' }}
    >
      {/* Top Banner / Avatar Floating Badge */}
      <div className="flex flex-col items-center mb-2 transition-transform group-hover:-translate-y-1">
        {isCurrentUser && (
          <div className="mb-1 px-2 py-0.5 rounded-full bg-aws-orange text-slate-950 font-black text-[9px] uppercase tracking-wider shadow-glow-orange flex items-center gap-1 animate-pulse">
            <Zap className="w-2.5 h-2.5 fill-current" />
            <span>YOU</span>
          </div>
        )}

        {isApex && (
          <div className="mb-0.5 px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-aws-orange text-black font-bold text-[9px] flex items-center gap-1 shadow-glow-orange">
            <Crown className="w-3 h-3 fill-current text-black" />
            <span>APEX #1</span>
          </div>
        )}

        {/* Student Avatar Icon */}
        <div className={`relative p-0.5 rounded-xl transition-all ${
          isCurrentUser 
            ? 'ring-2 ring-aws-orange shadow-glow-orange bg-aws-orange/20' 
            : isApex 
              ? 'ring-2 ring-amber-400 shadow-glow-orange bg-amber-400/20'
              : 'border border-slate-700 bg-slate-800/80 group-hover:border-slate-500'
        }`}>
          <img 
            src={student.avatar} 
            alt={name} 
            className="w-7 h-7 rounded-lg bg-slate-900"
          />
          {streak > 0 && (
            <div className="absolute -bottom-1 -right-1 bg-slate-950 border border-amber-500/50 rounded-full px-1 py-0.2 flex items-center text-[9px] font-bold text-amber-400 font-mono">
              <Flame className="w-2 h-2 text-amber-500 fill-amber-500" />
              {streak}
            </div>
          )}
        </div>
      </div>

      {/* Building Rooftop Antenna & Radar */}
      <div className="flex flex-col items-center">
        {isApex && (
          <div className="flex flex-col items-center">
            {/* Pulsing Beacon Light */}
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-ping shadow-[0_0_12px_#F59E0B]" />
            <div className="w-0.5 h-6 bg-gradient-to-t from-amber-500 to-amber-300" />
            {/* Rooftop Helipad / Cloud Emitter */}
            <div className="w-12 h-2 rounded-t-md bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 border-t border-amber-300 flex items-center justify-center">
              <Sparkles className="w-2.5 h-2.5 text-black animate-spin" style={{ animationDuration: '6s' }} />
            </div>
          </div>
        )}

        {isCyber && !isApex && (
          <div className="flex flex-col items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22D3EE]" />
            <div className="w-0.5 h-4 bg-cyan-500" />
            <div className="w-10 h-1.5 rounded-t bg-cyan-700 border-t border-cyan-400 flex items-center justify-center">
              <Radio className="w-2 h-2 text-cyan-200" />
            </div>
          </div>
        )}

        {isDataCenter && !isCyber && (
          <div className="flex flex-col items-center">
            <div className="w-1 h-1 rounded-full bg-emerald-400 animate-ping" />
            <div className="w-0.5 h-3 bg-emerald-600" />
            <div className="w-8 h-1 rounded-t bg-slate-700" />
          </div>
        )}

        {!isApex && !isCyber && !isDataCenter && (
          <div className="w-0.5 h-2 bg-slate-600" />
        )}
      </div>

      {/* The Building Body */}
      <div 
        className={`relative w-full rounded-t-lg transition-all duration-300 flex flex-col justify-between overflow-hidden border ${
          isCurrentUser
            ? 'border-aws-orange bg-gradient-to-b from-[#1E293B] via-[#0F172A] to-[#0A0F1D] shadow-[0_0_30px_rgba(255,153,0,0.3)]'
            : isApex
              ? 'border-amber-400/80 bg-gradient-to-b from-amber-950/40 via-slate-900 to-slate-950 shadow-[0_0_25px_rgba(251,191,36,0.25)]'
              : isCyber
                ? 'border-cyan-500/60 bg-gradient-to-b from-cyan-950/30 via-slate-900 to-slate-950 group-hover:border-cyan-400'
                : 'border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 group-hover:border-slate-600'
        }`}
        style={{ 
          height: `${calculatedHeight}px`,
          width: isApex ? '110px' : isCyber ? '96px' : '86px'
        }}
      >
        {/* Glow Trim Lines on edges */}
        <div 
          className="absolute top-0 inset-x-0 h-1" 
          style={{ backgroundColor: accentColor || '#FF9900' }}
        />

        {/* Windows / Server Floor Grid */}
        <div className="p-2 grid grid-cols-3 gap-1.5 auto-rows-max h-full overflow-hidden opacity-90">
          {Array.from({ length: Math.min(36, floors * 3) }).map((_, idx) => {
            const isLit = (idx + floors) % 3 !== 0;
            return (
              <div
                key={idx}
                className={`h-2 rounded-xs transition-colors duration-700 ${
                  isLit 
                    ? isApex 
                      ? 'bg-amber-300 shadow-[0_0_4px_#FCD34D] window-twinkle' 
                      : isCyber 
                        ? 'bg-cyan-300 shadow-[0_0_4px_#67E8F9] window-twinkle'
                        : isCurrentUser
                          ? 'bg-aws-orange shadow-[0_0_4px_#FF9900]'
                          : 'bg-emerald-400/80 window-twinkle'
                    : 'bg-slate-800/80'
                }`}
                style={{
                  animationDelay: `${(idx % 5) * 0.4}s`
                }}
              />
            );
          })}
        </div>

        {/* Floor Count Stamp & AWS Tag at Base */}
        <div className="px-1.5 py-1 bg-slate-950/90 border-t border-slate-800/80 text-center">
          <div className="flex items-center justify-between text-[9px] font-mono text-slate-400">
            <span className="font-bold text-white">{floors}F</span>
            <span className="text-aws-orange font-bold">{points}p</span>
          </div>
        </div>
      </div>

      {/* Building Base / Foundation Plate */}
      <div 
        className={`w-full h-3 rounded-b-md border-x border-b transition-colors flex items-center justify-center ${
          isCurrentUser 
            ? 'bg-aws-orange/20 border-aws-orange shadow-[0_4px_12px_rgba(255,153,0,0.3)]' 
            : isApex 
              ? 'bg-amber-500/20 border-amber-400' 
              : 'bg-slate-900 border-slate-800 group-hover:border-slate-700'
        }`}
        style={{ width: isApex ? '124px' : isCyber ? '108px' : '98px' }}
      >
        <div className="w-2 h-0.5 rounded-full bg-slate-700" />
      </div>

      {/* Nameplate Below Building */}
      <div className="mt-2 text-center max-w-[110px]">
        <div className="text-xs font-bold text-white truncate group-hover:text-aws-orange transition-colors">
          {name}
        </div>
        <div className="text-[10px] font-mono text-slate-400 flex items-center justify-center gap-1">
          <span className="text-cyan-400">{department}</span>
          <span>•</span>
          <span>{rollNumber}</span>
        </div>
      </div>
    </div>
  );
};
