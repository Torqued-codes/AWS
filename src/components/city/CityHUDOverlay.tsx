import React from 'react';
import { Department, Student } from '../../types';
import {
  Search,
  MapPin,
  Sun,
  Moon,
  Sunset,
  Zap,
  MousePointer2,
  Move,
  Navigation,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Crosshair,
  Layers3,
  Trophy,
  Flame,
  Compass,
  Radio,
} from 'lucide-react';
import { soundEngine } from '../../utils/soundEngine';

interface CityHUDOverlayProps {
  students: Student[];
  currentUser: Student;
  selectedDistrict: Department | 'ALL';
  onSelectDistrict: (district: Department | 'ALL') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  skyTheme: 'midnight' | 'sunset' | 'bright';
  onSkyThemeChange: (theme: 'midnight' | 'sunset' | 'bright') => void;
  onFlyToMyTower: () => void;
  onStartQuiz: () => void;
  onNavigate: (direction: 'up' | 'down' | 'left' | 'right' | 'zoomin' | 'zoomout') => void;
  is360View?: boolean;
  onToggle360?: () => void;
}

export const CityHUDOverlay: React.FC<CityHUDOverlayProps> = ({
  students,
  currentUser,
  selectedDistrict,
  onSelectDistrict,
  searchQuery,
  onSearchChange,
  skyTheme,
  onSkyThemeChange,
  onFlyToMyTower,
  onStartQuiz,
  onNavigate,
  is360View = false,
  onToggle360,
}) => {
  const districts: Array<{ id: Department | 'ALL'; label: string }> = [
    { id: 'ALL', label: 'All Districts' },
    { id: 'CSE', label: 'CSE Sector' },
    { id: 'ISE', label: 'ISE Cyberway' },
    { id: 'AIML', label: 'AI/ML Valley' },
    { id: 'MC', label: 'MC Nexus' },
    { id: 'EEE', label: 'EEE Grid' },
    { id: 'ECE', label: 'ECE Subnet' },
    { id: 'MECH', label: 'MECH Works' },
    { id: 'AUTO', label: 'AUTO Yard' },
    { id: 'CIVIL', label: 'CIVIL Grounds' },
    { id: 'AERO', label: 'AERO Bay' },
    { id: 'OTHERS', label: 'Other Districts' },
  ];

  const handleNav = (dir: 'up' | 'down' | 'left' | 'right' | 'zoomin' | 'zoomout') => {
    soundEngine.playTap();
    onNavigate(dir);
  };

  const toggle360 = () => {
    soundEngine.playTap();
    onToggle360?.();
  };

  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden select-none">
      {/* Ambient HUD edge treatment */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#030914]/90 via-[#06111c]/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030914]/95 via-[#06111c]/50 to-transparent" />

      {/* Top navigation / status HUD */}
      <div className="absolute left-4 right-4 top-4 sm:left-6 sm:right-6 sm:top-5 flex items-start justify-between gap-3">
        <div className="pointer-events-auto flex items-center gap-3 rounded-2xl border border-white/10 bg-[#071321]/88 px-3.5 py-2.5 shadow-[0_16px_45px_rgba(0,0,0,.35)] backdrop-blur-xl">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-orange-400/30 bg-orange-400/10">
            <Radio className="h-4 w-4 text-orange-300" />
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.9)]" />
          </div>
          <div className="leading-none">
            <div className="flex items-center gap-2 text-[11px] font-black tracking-[.18em] text-white">
              CLOUD CITY
              <span className="rounded-md border border-orange-400/20 bg-orange-400/10 px-1.5 py-1 text-[8px] tracking-[.12em] text-orange-300">
                LIVE
              </span>
            </div>
            <div className="mt-1 text-[9px] font-medium tracking-wide text-slate-400">
              Explore · Learn · Earn
            </div>
          </div>
          <div className="hidden h-7 w-px bg-white/10 sm:block" />
          <div className="hidden items-center gap-2 sm:flex">
            <Layers3 className="h-3.5 w-3.5 text-cyan-300" />
            <span className="text-[10px] font-semibold text-slate-300">{students.length} TOWERS</span>
          </div>
        </div>

        <div className="pointer-events-auto flex items-center gap-2">
          <div className="hidden items-center gap-2 rounded-xl border border-white/10 bg-[#071321]/88 px-3 py-2 backdrop-blur-xl md:flex">
            <Flame className="h-3.5 w-3.5 fill-orange-400 text-orange-400" />
            <span className="text-[10px] font-bold text-orange-200">{currentUser.streak} DAY STREAK</span>
          </div>
          <div className="hidden items-center gap-2 rounded-xl border border-white/10 bg-[#071321]/88 px-3 py-2 backdrop-blur-xl lg:flex">
            <Trophy className="h-3.5 w-3.5 text-cyan-300" />
            <span className="font-mono text-[10px] font-bold text-cyan-200">{currentUser.points} PTS</span>
          </div>
          <button
            onClick={() => { soundEngine.playTap(); onStartQuiz(); }}
            className="group flex items-center gap-2 rounded-xl border border-orange-300/40 bg-orange-400 px-3.5 py-2.5 text-[10px] font-black tracking-wide text-slate-950 shadow-[0_8px_30px_rgba(255,153,0,.2)] transition-all hover:-translate-y-0.5 hover:bg-orange-300"
          >
            <Zap className="h-3.5 w-3.5 fill-current transition-transform group-hover:scale-110" />
            WEEKLY ARENA
          </button>
        </div>
      </div>

      {/* Left mission panel */}
      <div className="pointer-events-auto absolute left-4 top-[88px] w-[min(310px,calc(100vw-32px))] sm:left-6 sm:top-[92px]">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#071321]/90 shadow-[0_22px_70px_rgba(0,0,0,.4)] backdrop-blur-2xl">
          <div className="border-b border-white/10 px-4 py-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] font-black tracking-[.18em] text-slate-400">CURRENT OBJECTIVE</div>
                <div className="mt-1 text-sm font-bold text-white">Explore Cloud City</div>
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-orange-400/20 bg-orange-400/10">
                <Crosshair className="h-4 w-4 text-orange-300" />
              </div>
            </div>
          </div>

          <div className="space-y-3 px-4 py-3">
            <div>
              <div className="flex items-center justify-between text-[10px]">
                <span className="font-semibold text-slate-300">City exploration</span>
                <span className="font-mono text-orange-300">{students.length} active</span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-800">
                <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-orange-500 to-amber-300 shadow-[0_0_12px_rgba(255,153,0,.55)]" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => { soundEngine.playTap(); onFlyToMyTower(); }}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[.035] px-3 py-2.5 text-left transition-all hover:border-orange-400/30 hover:bg-orange-400/[.07]"
              >
                <MapPin className="h-3.5 w-3.5 text-orange-300" />
                <span>
                  <span className="block text-[9px] font-black tracking-wide text-white">MY TOWER</span>
                  <span className="block text-[9px] text-slate-500">{currentUser.floors} floors</span>
                </span>
              </button>
              <button
                onClick={toggle360}
                className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 text-left transition-all ${
                  is360View
                    ? 'border-cyan-300/40 bg-cyan-300/10'
                    : 'border-white/10 bg-white/[.035] hover:border-cyan-300/30 hover:bg-cyan-300/[.06]'
                }`}
              >
                <RotateCw className={`h-3.5 w-3.5 ${is360View ? 'animate-spin text-cyan-200' : 'text-cyan-300'}`} />
                <span>
                  <span className="block text-[9px] font-black tracking-wide text-white">{is360View ? '360 ACTIVE' : '360 VIEW'}</span>
                  <span className="block text-[9px] text-slate-500">{is360View ? 'Auto orbiting' : 'Auto orbit'}</span>
                </span>
              </button>
            </div>

            <div className="border-t border-white/10 pt-3">
              <div className="mb-2 flex items-center gap-2">
                <Search className="h-3.5 w-3.5 text-slate-500" />
                <span className="text-[9px] font-black tracking-[.16em] text-slate-500">FIND A STUDENT</span>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Name or register number..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black/20 py-2.5 pl-3 pr-3 text-[11px] font-medium text-slate-200 outline-none transition-all placeholder:text-slate-600 focus:border-orange-300/50 focus:bg-orange-300/[.03]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right utility rail */}
      <div className="pointer-events-auto absolute right-4 top-[88px] flex flex-col gap-2 sm:right-6 sm:top-[92px]">
        <div className="rounded-2xl border border-white/10 bg-[#071321]/90 p-1.5 shadow-[0_18px_55px_rgba(0,0,0,.35)] backdrop-blur-2xl">
          <button
            onClick={toggle360}
            className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all ${
              is360View
                ? 'bg-cyan-300 text-slate-950 shadow-[0_0_22px_rgba(103,232,249,.35)]'
                : 'text-slate-400 hover:bg-white/[.06] hover:text-white'
            }`}
            title="Toggle 360 degree view"
          >
            <RotateCw className={`h-4 w-4 ${is360View ? 'animate-spin' : ''}`} />
          </button>
          <button
            onClick={() => { soundEngine.playTap(); onFlyToMyTower(); }}
            className="flex h-11 w-11 items-center justify-center rounded-xl text-slate-400 transition-all hover:bg-white/[.06] hover:text-orange-300"
            title="Focus my tower"
          >
            <Crosshair className="h-4 w-4" />
          </button>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#071321]/90 p-1.5 shadow-[0_18px_55px_rgba(0,0,0,.35)] backdrop-blur-2xl">
          <button
            onClick={() => { soundEngine.playTap(); onSkyThemeChange('midnight'); }}
            className={`flex h-9 w-11 items-center justify-center rounded-xl ${skyTheme === 'midnight' ? 'bg-orange-400/15 text-orange-200' : 'text-slate-500 hover:text-slate-200'}`}
            title="Midnight"
          >
            <Moon className="h-4 w-4" />
          </button>
          <button
            onClick={() => { soundEngine.playTap(); onSkyThemeChange('sunset'); }}
            className={`flex h-9 w-11 items-center justify-center rounded-xl ${skyTheme === 'sunset' ? 'bg-orange-400/15 text-orange-200' : 'text-slate-500 hover:text-slate-200'}`}
            title="Sunset"
          >
            <Sunset className="h-4 w-4" />
          </button>
          <button
            onClick={() => { soundEngine.playTap(); onSkyThemeChange('bright'); }}
            className={`flex h-9 w-11 items-center justify-center rounded-xl ${skyTheme === 'bright' ? 'bg-cyan-300/15 text-cyan-200' : 'text-slate-500 hover:text-slate-200'}`}
            title="Bright"
          >
            <Sun className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Bottom city / district strip */}
      <div className="pointer-events-auto absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 sm:bottom-5 sm:left-6 sm:right-6">
        <div className="min-w-0 flex-1">
          <div className="mb-2 hidden items-center gap-2 px-1 text-[9px] font-black tracking-[.2em] text-slate-500 lg:flex">
            <Compass className="h-3 w-3 text-orange-300" />
            CITY SECTORS
            <span className="h-px w-16 bg-white/10" />
          </div>
          <div className="flex max-w-[calc(100vw-150px)] items-center gap-1.5 overflow-x-auto rounded-2xl border border-white/10 bg-[#071321]/90 p-1.5 shadow-[0_18px_55px_rgba(0,0,0,.35)] backdrop-blur-2xl scrollbar-hide">
            {districts.map((d) => {
              const isActive = selectedDistrict === d.id;
              return (
                <button
                  key={d.id}
                  onClick={() => { soundEngine.playTap(); onSelectDistrict(d.id); }}
                  className={`shrink-0 rounded-xl px-3 py-2 text-[9px] font-black tracking-wide transition-all ${
                    isActive
                      ? 'bg-orange-400 text-slate-950 shadow-[0_5px_20px_rgba(255,153,0,.22)]'
                      : 'text-slate-500 hover:bg-white/[.05] hover:text-slate-200'
                  }`}
                >
                  {d.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Circular game-style navigation controller */}
        <div className="shrink-0">
          <div className="mb-2 hidden justify-end text-[9px] font-black tracking-[.18em] text-slate-500 sm:flex">CAMERA NAV</div>
          <div className="relative h-[116px] w-[116px] rounded-full border border-white/15 bg-[#06111d]/95 p-2 shadow-[0_18px_60px_rgba(0,0,0,.5),inset_0_0_35px_rgba(24,68,99,.25)] backdrop-blur-2xl">
            <div className="absolute inset-1 rounded-full border border-orange-300/20" />
            <div className="absolute inset-[13px] rounded-full border border-white/[.06]" />

            <button
              onClick={() => handleNav('up')}
              className="absolute left-1/2 top-2 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-lg text-slate-400 transition-all hover:bg-white/[.08] hover:text-white active:scale-90"
              title="Pan up"
            >
              <ChevronUp className="h-4 w-4" />
            </button>
            <button
              onClick={() => handleNav('down')}
              className="absolute bottom-2 left-1/2 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-lg text-slate-400 transition-all hover:bg-white/[.08] hover:text-white active:scale-90"
              title="Pan down"
            >
              <ChevronDown className="h-4 w-4" />
            </button>
            <button
              onClick={() => handleNav('left')}
              className="absolute left-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition-all hover:bg-white/[.08] hover:text-white active:scale-90"
              title="Pan left"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => handleNav('right')}
              className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition-all hover:bg-white/[.08] hover:text-white active:scale-90"
              title="Pan right"
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-300/40 bg-[radial-gradient(circle_at_35%_30%,#ffd27a,#ff9900_52%,#a44d00)] shadow-[0_0_28px_rgba(255,153,0,.35)]">
              <div className="absolute inset-2 rounded-full border border-white/25" />
            </div>

            <button
              onClick={() => handleNav('zoomin')}
              className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-lg text-cyan-300/80 transition-all hover:bg-cyan-300/10 hover:text-cyan-200 active:scale-90"
              title="Zoom in"
            >
              <ZoomIn className="h-3 w-3" />
            </button>
            <button
              onClick={() => handleNav('zoomout')}
              className="absolute bottom-2 right-2 flex h-6 w-6 items-center justify-center rounded-lg text-rose-300/70 transition-all hover:bg-rose-300/10 hover:text-rose-200 active:scale-90"
              title="Zoom out"
            >
              <ZoomOut className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop interaction hint */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-4 rounded-full border border-white/10 bg-[#071321]/75 px-4 py-2 text-[9px] font-semibold tracking-wide text-slate-500 backdrop-blur-xl xl:flex">
        <span className="flex items-center gap-1.5"><MousePointer2 className="h-3 w-3 text-cyan-300" /> DRAG <span className="text-slate-300">ORBIT</span></span>
        <span className="h-3 w-px bg-white/10" />
        <span className="flex items-center gap-1.5"><Move className="h-3 w-3 text-emerald-300" /> SCROLL <span className="text-slate-300">ZOOM</span></span>
        <span className="h-3 w-px bg-white/10" />
        <span className="flex items-center gap-1.5"><Navigation className="h-3 w-3 text-orange-300" /> CLICK GROUND <span className="text-slate-300">TELEPORT</span></span>
      </div>
    </div>
  );
};
