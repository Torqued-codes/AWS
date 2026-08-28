import React from 'react';
import { Student } from '../../types';
import { Crown, Trophy } from 'lucide-react';
import { soundEngine } from '../../utils/soundEngine';

interface PodiumProps {
  topThree: Student[];
  onSelectStudent: (student: Student) => void;
  onOpenCertificate: (student: Student, periodType?: 'weekly' | 'monthly' | 'yearly', periodKey?: string) => void;
}

export const Podium: React.FC<PodiumProps> = ({
  topThree,
  onSelectStudent
}) => {
  if (topThree.length < 3) return null;

  const [first, second, third] = topThree;

  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-6 items-end max-w-2xl mx-auto my-8 px-2 select-none font-mono">
      
      {/* Silver #2 */}
      <div 
        onClick={() => { soundEngine.playTap(); onSelectStudent(second); }}
        className="flex flex-col items-center cursor-pointer group order-1"
      >
        <div className="relative mb-2 flex flex-col items-center">
          <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 text-[10px] font-bold uppercase mb-1">
            #2 SILVER
          </span>
          <img 
            src={second.avatar} 
            alt={second.name}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-zinc-800 border border-zinc-500 p-1 group-hover:scale-105 transition-transform" 
          />
        </div>

        <div className="text-center mb-1 max-w-[90px] sm:max-w-none">
          <div className="text-xs sm:text-sm font-bold text-white truncate">{second.name}</div>
          <div className="text-[10px] text-zinc-500">{second.rollNumber} • {second.department}</div>
        </div>

        <div className="w-full h-24 sm:h-32 bg-zinc-900 border-t-2 border-zinc-400 rounded-t-2xl flex flex-col items-center justify-center p-2 shadow-lg">
          <span className="text-lg sm:text-xl font-bold text-zinc-400">2</span>
          <span className="text-xs font-bold text-zinc-200 mt-1">{second.points} PTS</span>
          <span className="text-[10px] text-zinc-500">{second.floors} Floors</span>
        </div>
      </div>

      {/* Gold #1 */}
      <div 
        onClick={() => { soundEngine.playTap(); onSelectStudent(first); }}
        className="flex flex-col items-center cursor-pointer group order-2 -mt-4"
      >
        <div className="relative mb-2 flex flex-col items-center">
          <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 fill-amber-400 mb-1" />
          <span className="px-2 py-0.5 rounded bg-amber-400 text-black text-[10px] font-bold uppercase mb-1">
            #1 APEX
          </span>
          <img 
            src={first.avatar} 
            alt={first.name}
            className="w-14 h-14 sm:w-18 sm:h-18 rounded-2xl bg-zinc-800 border-2 border-amber-400 p-1 shadow-glow-orange group-hover:scale-105 transition-transform" 
          />
        </div>

        <div className="text-center mb-1 max-w-[100px] sm:max-w-none">
          <div className="text-sm sm:text-base font-bold text-white truncate">{first.name}</div>
          <div className="text-[11px] text-amber-400 font-semibold">{first.rollNumber} • {first.department}</div>
        </div>

        <div className="w-full h-32 sm:h-44 bg-zinc-900 border-t-2 border-amber-400 rounded-t-3xl flex flex-col items-center justify-center p-2 shadow-2xl relative overflow-hidden">
          <Trophy className="w-4 h-4 text-amber-400 mb-1" />
          <span className="text-xl sm:text-2xl font-bold text-amber-400">1</span>
          <span className="text-xs sm:text-sm font-bold text-white mt-1">{first.points} PTS</span>
          <span className="text-[10px] text-amber-300 font-bold">{first.floors} Floors</span>
        </div>
      </div>

      {/* Bronze #3 */}
      <div 
        onClick={() => { soundEngine.playTap(); onSelectStudent(third); }}
        className="flex flex-col items-center cursor-pointer group order-3"
      >
        <div className="relative mb-2 flex flex-col items-center">
          <span className="px-2 py-0.5 rounded bg-zinc-800 text-amber-600 text-[10px] font-bold uppercase mb-1">
            #3 BRONZE
          </span>
          <img 
            src={third.avatar} 
            alt={third.name}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-zinc-800 border border-amber-800 p-1 group-hover:scale-105 transition-transform" 
          />
        </div>

        <div className="text-center mb-1 max-w-[90px] sm:max-w-none">
          <div className="text-xs sm:text-sm font-bold text-white truncate">{third.name}</div>
          <div className="text-[10px] text-zinc-500">{third.rollNumber} • {third.department}</div>
        </div>

        <div className="w-full h-20 sm:h-28 bg-zinc-900 border-t-2 border-amber-800 rounded-t-2xl flex flex-col items-center justify-center p-2 shadow-lg">
          <span className="text-lg sm:text-xl font-bold text-amber-600">3</span>
          <span className="text-xs font-bold text-zinc-200 mt-1">{third.points} PTS</span>
          <span className="text-[10px] text-zinc-500">{third.floors} Floors</span>
        </div>
      </div>

    </div>
  );
};
