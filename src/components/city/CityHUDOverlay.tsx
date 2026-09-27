import React, { useMemo, useRef, useState } from 'react';
import { Department, Student } from '../../types';
import {
  Search, MapPin, Sun, Moon, Sunset, Zap, MousePointer2, Move, Navigation,
  ZoomIn, ZoomOut, Rotate3D, Target, Trophy, Flame, ChevronRight,
  GraduationCap, Crosshair, Map as MapIcon, Compass, Users, Building2
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
  onNavigate: (direction: 'up' | 'down' | 'left' | 'right' | 'zoomin' | 'zoomout' | 'autoorbit') => void;
  onJoystickChange?: (vector: { x: number; y: number }) => void;
  onMapSelect?: (x: number, z: number) => void;
  cameraPosition?: { x: number; z: number };
}

const WORLD_SIZE = 740;
const GRID_DIM = 10;
const BLOCK_SIZE = 60;
const ROAD_WIDTH = 14;
const START_OFFSET = -(((GRID_DIM * (BLOCK_SIZE + ROAD_WIDTH)) - ROAD_WIDTH) / 2) + BLOCK_SIZE / 2;

const getWorldPosition = (index: number) => {
  const plotIndex = index % (GRID_DIM * GRID_DIM * 4);
  const blockIndex = Math.floor(plotIndex / 4);
  const slot = plotIndex % 4;
  const bx = blockIndex % GRID_DIM;
  const bz = Math.floor(blockIndex / GRID_DIM);
  const centerX = START_OFFSET + bx * (BLOCK_SIZE + ROAD_WIDTH);
  const centerZ = START_OFFSET + bz * (BLOCK_SIZE + ROAD_WIDTH);
  const offsets = [
    [-16, -16], [16, -16], [-16, 16], [16, 16],
  ];
  const [ox, oz] = offsets[slot];
  return { x: centerX + ox, z: centerZ + oz };
};

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
  onJoystickChange,
  onMapSelect,
  cameraPosition = { x: 0, z: 0 },
}) => {
  const districts: Array<{ id: Department | 'ALL'; label: string }> = [
    { id: 'ALL', label: 'All Districts' }, { id: 'CSE', label: 'CSE Sector' },
    { id: 'ISE', label: 'ISE Cyberway' }, { id: 'AIML', label: 'AI/ML Valley' },
    { id: 'MC', label: 'MC Nexus' }, { id: 'EEE', label: 'EEE Grid' },
    { id: 'ECE', label: 'ECE Subnet' }, { id: 'MECH', label: 'MECH Works' },
    { id: 'AUTO', label: 'AUTO Yard' }, { id: 'CIVIL', label: 'CIVIL Grounds' },
    { id: 'AERO', label: 'AERO Bay' }, { id: 'OTHERS', label: 'Other Districts' },
  ];

  const [joystickActive, setJoystickActive] = useState(false);
  const joystickRef = useRef<HTMLDivElement>(null);
  const knobRef = useRef<HTMLDivElement>(null);
  const joystickPointer = useRef<number | null>(null);
  const joystickRadius = 52;

  const mapMarkers = useMemo(() => students.slice(0, 80).map((student, index) => ({
    student,
    position: getWorldPosition(index),
  })), [students]);

  const cameraMapPosition = {
    left: `${Math.max(3, Math.min(97, ((cameraPosition.x + WORLD_SIZE / 2) / WORLD_SIZE) * 100))}%`,
    top: `${Math.max(3, Math.min(97, ((cameraPosition.z + WORLD_SIZE / 2) / WORLD_SIZE) * 100))}%`,
  };

  const updateJoystick = (clientX: number, clientY: number) => {
    const rect = joystickRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    let dx = clientX - cx;
    let dy = clientY - cy;
    const distance = Math.hypot(dx, dy);
    if (distance > joystickRadius) {
      const scale = joystickRadius / distance;
      dx *= scale;
      dy *= scale;
    }
    if (knobRef.current) {
      knobRef.current.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
    }
    onJoystickChange?.({ x: dx / joystickRadius, y: dy / joystickRadius });
  };

  const resetJoystick = () => {
    joystickPointer.current = null;
    setJoystickActive(false);
    if (knobRef.current) knobRef.current.style.transform = 'translate(-50%, -50%)';
    onJoystickChange?.({ x: 0, y: 0 });
  };

  const startJoystick = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    joystickPointer.current = e.pointerId;
    setJoystickActive(true);
    e.currentTarget.setPointerCapture?.(e.pointerId);
    soundEngine.playTap();
    updateJoystick(e.clientX, e.clientY);
  };

  const moveJoystick = (e: React.PointerEvent<HTMLDivElement>) => {
    if (joystickPointer.current !== e.pointerId) return;
    e.preventDefault();
    updateJoystick(e.clientX, e.clientY);
  };

  const handleNav = (dir: 'zoomin' | 'zoomout' | 'autoorbit') => {
    soundEngine.playTap();
    onNavigate(dir);
  };

  const handleQuest = (index: number) => {
    soundEngine.playTap();
    if (index === 0) onFlyToMyTower();
    else if (index === 1) onSelectDistrict('AIML');
    else if (index === 2) onStartQuiz();
    else {
      onSelectDistrict('ALL');
      const communityTarget = students.find((student) => student.id !== currentUser.id);
      if (communityTarget) {
        const targetIndex = students.findIndex((student) => student.id === communityTarget.id);
        const pos = getWorldPosition(Math.max(0, targetIndex));
        onMapSelect?.(pos.x, pos.z);
      }
    }
  };

  const normalizedCameraX = Math.round(cameraPosition.x);
  const normalizedCameraZ = Math.round(cameraPosition.z);

  return (
    <div className="pointer-events-none absolute inset-0 z-20 select-none">
      {/* Search / actions */}
      <div className="pointer-events-auto absolute right-4 top-4 flex max-w-[calc(100%-32px)] items-center gap-2">
        <div className="relative hidden sm:block w-52 lg:w-60">
          <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-500" />
          <input value={searchQuery} onChange={(e) => onSearchChange(e.target.value)} placeholder="Search student / roll" className="city-input h-10 w-full rounded-xl pl-9 pr-3 text-[11px] font-mono text-slate-200 outline-none" />
        </div>
        <button onClick={() => { soundEngine.playTap(); onFlyToMyTower(); }} className="city-control h-10 rounded-xl px-3 text-[10px] font-bold text-slate-200"><MapPin className="h-3.5 w-3.5 text-aws-orange" /><span className="hidden lg:inline">MY TOWER</span></button>
        <button onClick={() => { soundEngine.playTap(); onStartQuiz(); }} className="city-primary h-10 rounded-xl px-3.5 text-[10px] font-black"><Zap className="h-3.5 w-3.5 fill-current" /> WEEKLY QUIZ</button>
      </div>


      {/* Player status */}
      <div className="pointer-events-auto absolute right-4 top-[126px] hidden lg:block w-[272px]">
        <div className="city-glass-panel rounded-2xl p-4 shadow-2xl">
          <div className="flex items-center gap-3"><img src={currentUser.avatar} alt="" className="h-11 w-11 rounded-xl border border-cyan-300/30 bg-slate-800 object-cover" /><div className="min-w-0 flex-1"><div className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Level 08</div><div className="truncate text-sm font-black text-white">{currentUser.name}</div><div className="mt-1.5 h-2 overflow-hidden rounded-full bg-slate-800"><div className="h-full w-[62%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" /></div></div></div>
          <div className="mt-2.5 text-[10px] font-mono text-slate-400"><span className="text-cyan-300">{currentUser.points.toLocaleString()} XP</span> / 2,000 XP</div>
          <div className="my-3 h-px bg-white/10" />
          <div className="flex items-center justify-between rounded-xl border border-amber-400/10 bg-amber-400/[0.04] px-3 py-2.5"><span className="flex items-center gap-2 text-[11px] text-slate-200"><Flame className="h-3.5 w-3.5 text-amber-400 fill-amber-400" /> {currentUser.streak} Day Streak</span><span>🔥</span></div>
          <button onClick={onStartQuiz} className="mt-2 flex w-full items-center gap-2 rounded-xl px-2 py-2.5 text-left hover:bg-white/[0.04]"><Trophy className="h-4 w-4 text-amber-300" /><span className="flex-1"><span className="block text-[10px] font-bold text-slate-200">Next Milestone</span><span className="block text-[9px] text-slate-500">Complete 5 more quests</span></span><ChevronRight className="h-3 w-3 text-slate-600" /></button>
        </div>
      </div>

      {/* Zoom + 360 controls beside the joystick */}
      <div className="pointer-events-auto absolute bottom-[88px] left-[158px] flex flex-col overflow-hidden rounded-xl border border-white/10 bg-slate-950/85 shadow-2xl backdrop-blur-xl">
        <button onClick={() => handleNav('zoomin')} className="flex h-10 w-10 items-center justify-center text-slate-300 hover:bg-white/10 hover:text-white" title="Zoom in"><ZoomIn className="h-4 w-4" /></button>
        <div className="h-px bg-white/10" />
        <button onClick={() => handleNav('zoomout')} className="flex h-10 w-10 items-center justify-center text-slate-300 hover:bg-white/10 hover:text-white" title="Zoom out"><ZoomOut className="h-4 w-4" /></button>
        <div className="h-px bg-white/10" />
        <button onClick={() => handleNav('autoorbit')} className="flex h-10 w-10 items-center justify-center text-cyan-300 hover:bg-cyan-400/10" title="Toggle 360° auto orbit"><Rotate3D className="h-4 w-4" /></button>
      </div>

      {/* Analog joystick */}
      <div className="pointer-events-auto absolute bottom-5 left-5">
        <div className="mb-1.5 ml-1 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-slate-950/80 px-2.5 py-1 backdrop-blur-md"><Crosshair className={`h-3 w-3 ${joystickActive ? 'text-amber-300' : 'text-slate-500'}`} /><span className="text-[8px] font-mono font-bold uppercase tracking-[0.16em] text-slate-400">MOVE</span></div>
        <div ref={joystickRef} onPointerDown={startJoystick} onPointerMove={moveJoystick} onPointerUp={resetJoystick} onPointerCancel={resetJoystick} onLostPointerCapture={resetJoystick} className={`relative h-[126px] w-[126px] touch-none rounded-full border border-white/15 bg-[radial-gradient(circle_at_50%_40%,rgba(36,55,78,.96),rgba(5,12,22,.99)_66%)] shadow-[0_12px_45px_rgba(0,0,0,.55),inset_0_1px_0_rgba(255,255,255,.08)] ${joystickActive ? 'ring-2 ring-amber-400/25' : ''}`}>
          <div className="absolute inset-3 rounded-full border border-cyan-300/10" />
          <div className="absolute inset-0 flex items-center justify-center text-slate-400"><span className="absolute top-2 text-lg leading-none">▲</span><span className="absolute bottom-1.5 text-lg leading-none">▼</span><span className="absolute left-2 text-lg leading-none">◀</span><span className="absolute right-2 text-lg leading-none">▶</span></div>
          <div ref={knobRef} className="absolute left-1/2 top-1/2 h-[54px] w-[54px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-300/50 bg-[radial-gradient(circle_at_35%_28%,#ffc04d,#e58b05_55%,#9b5300)] shadow-[0_0_25px_rgba(255,153,0,.38),inset_0_2px_5px_rgba(255,255,255,.35)] transition-transform duration-75"><div className="absolute inset-[8px] rounded-full border border-white/15" /></div>
        </div>
      </div>

      {/* Functional live city map */}
      <div className="pointer-events-auto absolute bottom-[76px] right-4 hidden sm:block h-[154px] w-[154px]">
        <div className="city-glass-panel relative h-full w-full overflow-hidden rounded-2xl p-2 shadow-2xl">
          <div className="absolute left-3 top-2 z-10 flex items-center gap-1.5 text-[8px] font-mono font-bold tracking-wider text-slate-400"><MapIcon className="h-3 w-3 text-cyan-300" /> CITY MAP</div>
          <div className="absolute right-3 top-2 z-10 text-[7px] font-mono text-slate-600">{normalizedCameraX},{normalizedCameraZ}</div>
          <div className="absolute inset-2 top-7 bottom-2 overflow-hidden rounded-xl border border-white/10 bg-[#07111b]" onClick={(e) => {
            if (!onMapSelect) return;
            const rect = e.currentTarget.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * WORLD_SIZE;
            const z = ((e.clientY - rect.top) / rect.height - 0.5) * WORLD_SIZE;
            onMapSelect(x, z);
            soundEngine.playTap();
          }}>
            <div className="absolute inset-0 opacity-45" style={{ backgroundImage: 'linear-gradient(45deg, transparent 47%, #244052 48%, #244052 51%, transparent 52%), linear-gradient(-45deg, transparent 47%, #244052 48%, #244052 51%, transparent 52%)', backgroundSize: '25px 25px' }} />
            {mapMarkers.map(({ student, position }) => {
              const left = `${((position.x + WORLD_SIZE / 2) / WORLD_SIZE) * 100}%`;
              const top = `${((position.z + WORLD_SIZE / 2) / WORLD_SIZE) * 100}%`;
              return <button key={student.id} title={student.name} onClick={(e) => { e.stopPropagation(); onMapSelect?.(position.x, position.z); soundEngine.playTap(); }} className={`absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full ${student.id === currentUser.id ? 'bg-amber-300 shadow-[0_0_8px_rgba(255,193,7,.9)]' : 'bg-cyan-400/70 hover:bg-white'}`} style={{ left, top }} />;
            })}
            <div className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-300/70 bg-amber-400/20 shadow-[0_0_12px_rgba(255,153,0,.55)]" style={{ left: cameraMapPosition.left, top: cameraMapPosition.top }}><div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-amber-300" /></div>
            <span className="absolute left-1/2 top-1 -translate-x-1/2 text-[7px] font-mono text-slate-400">N</span><span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[7px] font-mono text-slate-600">S</span><span className="absolute left-1 top-1/2 -translate-y-1/2 text-[7px] font-mono text-slate-600">W</span><span className="absolute right-1 top-1/2 -translate-y-1/2 text-[7px] font-mono text-slate-600">E</span>
          </div>
        </div>
      </div>

      {/* Compact student-branch rail — sized to the branch content, not the viewport */}
      <div className="pointer-events-auto absolute bottom-4 left-1/2 max-w-[calc(100%-420px)] -translate-x-1/2">
        <div className="city-glass-panel inline-flex max-w-full items-center gap-1 rounded-xl p-1.5">
          <div className="flex max-w-full items-center gap-1 overflow-x-auto scrollbar-hide">
            {districts.map((d) => {
              const isActive = selectedDistrict === d.id;
              return <button key={d.id} onClick={() => { soundEngine.playTap(); onSelectDistrict(d.id); }} className={`shrink-0 whitespace-nowrap rounded-lg px-2.5 py-2 text-[10px] font-mono font-bold transition-all ${isActive ? 'bg-aws-orange text-slate-950 shadow-[0_0_16px_rgba(255,153,0,.2)]' : 'text-slate-300 hover:bg-white/[0.06] hover:text-white'}`}>{d.label}</button>;
            })}
          </div>
        </div>
      </div>

      {/* Theme controls */}
      <div className="pointer-events-auto absolute bottom-4 right-4 hidden xl:flex items-center gap-2">
        <div className="city-glass-panel flex items-center rounded-xl p-1.5">
          {[{ id: 'midnight' as const, icon: Moon, label: 'Night' }, { id: 'sunset' as const, icon: Sunset, label: 'Sunset' }, { id: 'bright' as const, icon: Sun, label: 'Day' }].map(({ id, icon: Icon, label }) => <button key={id} onClick={() => { soundEngine.playTap(); onSkyThemeChange(id); }} className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-[11px] font-mono font-bold ${skyTheme === id ? 'bg-white/10 text-amber-300' : 'text-slate-500 hover:text-slate-200'}`}><Icon className="h-4 w-4" />{label}</button>)}
        </div>
      </div>

      {/* Minimal control hints */}
      <div className="pointer-events-none absolute bottom-1 left-5 hidden items-center gap-2 text-[8px] font-mono text-slate-600 md:flex"><span className="flex items-center gap-1"><Navigation className="h-3 w-3 text-amber-400" /> Click ground: teleport</span><span>•</span><span className="flex items-center gap-1"><MousePointer2 className="h-3 w-3 text-cyan-300" /> Drag: orbit</span><span>•</span><span className="flex items-center gap-1"><Compass className="h-3 w-3 text-emerald-300" /> 360: auto orbit</span></div>
    </div>
  );
};
