import React, { useState } from 'react';
import { 
  Cloud, 
  Heart, 
  Flame, 
  Volume2, 
  VolumeX, 
  Building2, 
  Trophy, 
  Radio, 
  Zap,
  Home,
  Calendar
} from 'lucide-react';
import { useGame } from '../../context/GameContext';
import { soundEngine } from '../../utils/soundEngine';
import { StreakCalendar } from '../profile/StreakCalendar';

interface NavbarProps {
  onOpenProfile: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenProfile }) => {
  const { 
    currentUser, 
    activeTab, 
    setActiveTab, 
    isMuted, 
    toggleMute, 
    cooldownRemainingSecs,
    setShowCooldownModal
  } = useGame();

  const [showHeartTooltip, setShowHeartTooltip] = useState(false);
  const [showStreakCalendar, setShowStreakCalendar] = useState(false);

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const navItems = [
    { id: 'home', label: 'Overview', icon: Home },
    { id: 'city', label: '3D City', icon: Building2 },
    { id: 'quiz', label: 'Weekly Arena', icon: Zap, tag: '+50' },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
    { id: 'announcements', label: 'Certs & Events', icon: Radio },
  ] as const;

  return (
    <>
      <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-neutral-900/60 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Left: Brand Logo → Home */}
          <div 
            onClick={() => { soundEngine.playTap(); setActiveTab('home'); }}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-aws-orange text-zinc-950 font-black shadow-md shadow-aws-orange/20 group-hover:scale-105 transition-transform">
              <Cloud className="w-4 h-4 fill-current" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-aws-orange transition-colors" style={{ letterSpacing: '-0.02em' }}>
                  AWS <span className="text-aws-orange">Cloud City</span>
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.2 text-[9px] font-mono font-bold bg-zinc-900 text-zinc-400 border border-zinc-800 rounded">
                  COLLEGE
                </span>
              </div>
            </div>
          </div>

          {/* Center: Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-900/90 p-1 rounded-xl border border-zinc-800">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => { soundEngine.playTap(); setActiveTab(item.id); }}
                  className={`relative px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold flex items-center gap-1.5 transition-all ${
                    isActive
                      ? 'bg-zinc-800 text-aws-orange border border-zinc-700/80 shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40 border border-transparent'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-aws-orange' : 'text-zinc-400'}`} />
                  <span>{item.label}</span>
                  {'tag' in item && item.tag && (
                    <span className={`text-[9px] px-1 py-0.2 rounded font-mono font-bold ${
                      isActive ? 'bg-aws-orange text-black' : 'bg-zinc-800 text-zinc-400'
                    }`}>
                      {item.tag}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right: HUD & Profile — every pill shares the same h-9 height so
              hearts / streak / mute / profile line up on a single baseline */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            
            {/* Hearts Counter */}
            <div 
              className="relative"
              onMouseEnter={() => setShowHeartTooltip(true)}
              onMouseLeave={() => setShowHeartTooltip(false)}
            >
              <button
                onClick={() => {
                  soundEngine.playTap();
                  if (currentUser.hearts === 0) setShowCooldownModal(true);
                }}
                className="h-9 flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 px-2.5 rounded-xl transition-colors whitespace-nowrap"
              >
                <Heart className={`w-3.5 h-3.5 shrink-0 ${currentUser.hearts > 0 ? 'text-rose-500 fill-rose-500' : 'text-zinc-600'}`} />
                <span className="font-stats font-bold text-xs text-rose-300 leading-none">
                  {currentUser.hearts}/5
                </span>
                {cooldownRemainingSecs > 0 && (
                  <span className="hidden sm:inline-block text-[10px] font-stats text-zinc-400 ml-1 leading-none">
                    ({formatTimer(cooldownRemainingSecs)})
                  </span>
                )}
              </button>

              {showHeartTooltip && (
                <div className="absolute top-full right-0 mt-2 w-56 p-3 bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl z-50 text-xs font-mono text-zinc-300">
                  <p className="font-bold text-white mb-1 flex items-center gap-1">
                    <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> Attempt Hearts
                  </p>
                  <p className="text-zinc-400 text-[11px] mb-2 font-sans">
                    5 wrong attempts allowed. Refills +1 heart every 45 mins.
                  </p>
                  {cooldownRemainingSecs > 0 ? (
                    <p className="text-amber-400 font-semibold text-[11px]">
                      Next refill: {formatTimer(cooldownRemainingSecs)}
                    </p>
                  ) : (
                    <p className="text-emerald-400 font-medium text-[11px]">
                      ⚡ Ready for weekly challenge
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Streak Flame — clickable → opens StreakCalendar */}
            <button
              onClick={() => { soundEngine.playTap(); setShowStreakCalendar(true); }}
              className="h-9 flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 hover:border-amber-500/40 px-2.5 rounded-xl transition-colors group whitespace-nowrap"
              title="View streak history"
            >
              <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500 shrink-0 group-hover:scale-110 transition-transform" />
              <span className="font-stats font-bold text-xs text-amber-300 leading-none">
                {currentUser.streak}d
              </span>
            </button>

            {/* Mute Toggle */}
            <button
              onClick={() => { soundEngine.playTap(); toggleMute(); }}
              className="h-9 w-9 flex items-center justify-center shrink-0 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
              title={isMuted ? 'Unmute' : 'Mute sounds'}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5 text-rose-400" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
            </button>

            {/* Profile Avatar — fixed height matches sibling pills; name/points
                are truncated with nowrap so long names never wrap or overflow */}
            <button
              onClick={() => { soundEngine.playTap(); onOpenProfile(); }}
              className="h-9 flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 pl-1 pr-1 sm:pr-3 rounded-xl transition-all group max-w-[160px] md:max-w-[220px]"
            >
              <img 
                src={currentUser.avatar} 
                alt={currentUser.name} 
                className="w-7 h-7 rounded-lg bg-zinc-800 shrink-0 object-cover"
              />
              <div className="text-left hidden md:flex md:flex-col md:justify-center min-w-0 leading-tight">
                <div className="text-xs font-display font-bold text-white group-hover:text-aws-orange transition-colors truncate whitespace-nowrap">
                  {currentUser.name}
                </div>
                <div className="text-[10px] text-aws-orange font-stats font-bold truncate whitespace-nowrap">
                  {currentUser.points} PTS · {currentUser.floors}F
                </div>
              </div>
            </button>

          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-around bg-zinc-950 border-t border-zinc-800/80 px-2 py-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => { soundEngine.playTap(); setActiveTab(item.id); }}
                className={`flex flex-col items-center py-1 px-3 rounded-lg text-[10px] font-mono font-semibold transition-colors ${
                  isActive ? 'text-aws-orange' : 'text-zinc-400'
                }`}
              >
                <Icon className="w-4 h-4 mb-0.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </header>

      {/* Streak Calendar Popup */}
      {showStreakCalendar && (
        <StreakCalendar onClose={() => setShowStreakCalendar(false)} />
      )}
    </>
  );
};


