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
}) => {
  const districts: Array<{ id: Department | 'ALL'; label: string }> = [
    { id: 'ALL', label: 'All Districts' },
    { id: 'CSE', label: 'CSE Sector' },
    { id: 'IT', label: 'IT Cyberway' },
    { id: 'AI & Data Science', label: 'AI/DS Valley' },
    { id: 'ECE', label: 'ECE Subnet' },
    { id: 'Cyber Security', label: 'Cyber Defense' },
  ];

  const handleNav = (dir: 'up' | 'down' | 'left' | 'right' | 'zoomin' | 'zoomout') => {
    soundEngine.playTap();
    onNavigate(dir);
  };

  return (
    <div className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-between p-4 sm:p-6">
      
      {/* Top HUD */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 pointer-events-auto">
        
        {/* City Info Badge */}
        <div className="flex items-center gap-3 bg-zinc-950/90 border border-zinc-800/90 rounded-2xl px-4 py-2.5 backdrop-blur-md shadow-2xl">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
          <div>
            <div className="text-xs font-mono font-bold text-zinc-100 flex items-center gap-1.5">
              <span>AWS METROPOLIS 3D</span>
              <span className="text-zinc-500">•</span>
              <span className="text-aws-orange">{students.length} TOWERS</span>
            </div>
            <div className="text-[11px] text-zinc-400 font-mono">
              Click ground to teleport • Arrow D-pad to navigate
            </div>
          </div>
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2.5">
          <div className="relative flex-1 sm:w-64">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search student or roll..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-zinc-950/90 border border-zinc-800 rounded-xl pl-9 pr-3 py-2 text-xs font-mono text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-aws-orange/60 transition-colors shadow-2xl"
            />
          </div>

          <button
            onClick={() => { soundEngine.playTap(); onFlyToMyTower(); }}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 text-xs font-mono font-semibold text-zinc-200 hover:text-white transition-all shadow-lg"
          >
            <MapPin className="w-3.5 h-3.5 text-aws-orange" />
            <span className="hidden sm:inline">My Tower ({currentUser.floors}F)</span>
          </button>

          <button
            onClick={() => { soundEngine.playTap(); onStartQuiz(); }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-aws-orange hover:bg-amber-500 text-zinc-950 text-xs font-mono font-bold transition-all shadow-lg shadow-aws-orange/20"
          >
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>Weekly Quiz</span>
          </button>
        </div>
      </div>

      {/* Bottom HUD: Districts + Lighting + D-Pad */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-end justify-between gap-3 pointer-events-auto">
        
        {/* District Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto bg-zinc-950/90 border border-zinc-800/90 p-1.5 rounded-2xl backdrop-blur-md shadow-2xl">
          {districts.map((d) => {
            const isActive = selectedDistrict === d.id;
            return (
              <button
                key={d.id}
                onClick={() => { soundEngine.playTap(); onSelectDistrict(d.id); }}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-aws-orange text-zinc-950 font-bold shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                }`}
              >
                {d.label}
              </button>
            );
          })}
        </div>

        {/* Right cluster: Controls hint + Lighting + D-Pad */}
        <div className="flex items-end gap-3 self-end">
          
          {/* Controls Legend (desktop only) */}
          <div className="hidden lg:flex items-center gap-3 bg-zinc-950/90 border border-zinc-800/90 px-3.5 py-2 rounded-2xl text-[11px] font-mono text-zinc-400 backdrop-blur-md shadow-2xl">
            <span className="flex items-center gap-1 text-zinc-300">
              <Navigation className="w-3 h-3 text-aws-orange" />
              <strong className="text-zinc-200">Click Ground:</strong> Teleport
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-zinc-300">
              <MousePointer2 className="w-3 h-3 text-cyan-400" />
              <strong className="text-zinc-200">Drag:</strong> Orbit
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-zinc-300">
              <Move className="w-3 h-3 text-emerald-400" />
              <strong className="text-zinc-200">Scroll:</strong> Zoom
            </span>
          </div>

          {/* Sky Lighting Toggle */}
          <div className="flex items-center bg-zinc-950/90 border border-zinc-800/90 p-1 rounded-2xl backdrop-blur-md shadow-2xl">
            <button
              onClick={() => { soundEngine.playTap(); onSkyThemeChange('midnight'); }}
              className={`px-2.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-colors flex items-center gap-1.5 ${
                skyTheme === 'midnight' ? 'bg-zinc-800 text-aws-orange' : 'text-zinc-500 hover:text-zinc-300'
              }`}
              title="Cyber Midnight"
            >
              <Moon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Midnight</span>
            </button>
            <button
              onClick={() => { soundEngine.playTap(); onSkyThemeChange('sunset'); }}
              className={`px-2.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-colors flex items-center gap-1.5 ${
                skyTheme === 'sunset' ? 'bg-zinc-800 text-amber-400' : 'text-zinc-500 hover:text-zinc-300'
              }`}
              title="Golden Sunset"
            >
              <Sunset className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Sunset</span>
            </button>
            <button
              onClick={() => { soundEngine.playTap(); onSkyThemeChange('bright'); }}
              className={`px-2.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-colors flex items-center gap-1.5 ${
                skyTheme === 'bright' ? 'bg-zinc-800 text-cyan-400' : 'text-zinc-500 hover:text-zinc-300'
              }`}
              title="Bright Daylight"
            >
              <Sun className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Bright</span>
            </button>
          </div>

          {/* ── Arrow D-Pad Navigation ── */}
          <div className="bg-zinc-950/90 border border-zinc-800/90 p-2 rounded-2xl backdrop-blur-md shadow-2xl">
            <div className="grid grid-cols-3 gap-1 w-[88px]">
              {/* Row 1 */}
              <div />
              <button
                onClick={() => handleNav('up')}
                className="h-7 w-7 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 border border-zinc-700/60 text-zinc-300 hover:text-white flex items-center justify-center transition-all active:scale-95"
                title="Rotate Up"
              >
                <ChevronUp className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleNav('zoomin')}
                className="h-7 w-7 rounded-lg bg-zinc-800/80 hover:bg-aws-orange/20 border border-zinc-700/60 text-zinc-400 hover:text-aws-orange flex items-center justify-center transition-all active:scale-95"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>

              {/* Row 2 */}
              <button
                onClick={() => handleNav('left')}
                className="h-7 w-7 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 border border-zinc-700/60 text-zinc-300 hover:text-white flex items-center justify-center transition-all active:scale-95"
                title="Rotate Left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="h-7 w-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-aws-orange/60" />
              </div>
              <button
                onClick={() => handleNav('right')}
                className="h-7 w-7 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 border border-zinc-700/60 text-zinc-300 hover:text-white flex items-center justify-center transition-all active:scale-95"
                title="Rotate Right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Row 3 */}
              <div />
              <button
                onClick={() => handleNav('down')}
                className="h-7 w-7 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 border border-zinc-700/60 text-zinc-300 hover:text-white flex items-center justify-center transition-all active:scale-95"
                title="Rotate Down"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleNav('zoomout')}
                className="h-7 w-7 rounded-lg bg-zinc-800/80 hover:bg-rose-500/10 border border-zinc-700/60 text-zinc-400 hover:text-rose-400 flex items-center justify-center transition-all active:scale-95"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
