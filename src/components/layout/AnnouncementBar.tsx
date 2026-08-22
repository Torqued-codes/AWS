import React, { useState } from 'react';
import { Sparkles, ExternalLink, ChevronRight, Megaphone, X, Ticket, Calendar, Award } from 'lucide-react';
import { useGame } from '../../context/GameContext';
import { soundEngine } from '../../utils/soundEngine';

export const AnnouncementBar: React.FC = () => {
  const { announcements } = useGame();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible || announcements.length === 0) return null;

  const currentAnn = announcements[currentIndex];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Voucher': return <Ticket className="w-3.5 h-3.5 text-amber-400" />;
      case 'Event': return <Calendar className="w-3.5 h-3.5 text-cyan-400" />;
      case 'Workshop': return <Sparkles className="w-3.5 h-3.5 text-purple-400" />;
      default: return <Award className="w-3.5 h-3.5 text-emerald-400" />;
    }
  };

  return (
    <aside aria-label="Community Announcements" className="relative bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-aws-orange/20 px-4 py-2 text-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left: Announcement Content */}
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="flex items-center gap-1.5 bg-aws-orange/15 text-aws-orange border border-aws-orange/30 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider text-[10px] shrink-0">
            <Megaphone className="w-3 h-3 animate-bounce-subtle" />
            <span>COMMUNITY BROADCAST</span>
          </div>

          <div className="flex items-center gap-2 truncate">
            <span className="flex items-center gap-1 font-semibold text-white">
              {getCategoryIcon(currentAnn.category)}
              <span className="truncate">{currentAnn.title}</span>
            </span>
            <span className="hidden md:inline-block text-slate-400 text-[11px] truncate">
              — {currentAnn.description}
            </span>
          </div>
        </div>

        {/* Right: Actions & Switcher */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={currentAnn.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundEngine.playTap()}
            className="flex items-center gap-1 px-3 py-1 bg-aws-orange hover:bg-aws-amber text-slate-950 font-bold rounded-lg transition-colors text-[11px]"
          >
            <span>{currentAnn.linkText}</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          {announcements.length > 1 && (
            <button
              onClick={() => {
                soundEngine.playTap();
                setCurrentIndex((prev) => (prev + 1) % announcements.length);
              }}
              className="p-1 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
              title="Next Announcement"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={() => setIsVisible(false)}
            className="p-1 text-slate-500 hover:text-slate-300 rounded hover:bg-slate-800 transition-colors"
            title="Dismiss announcement bar"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
