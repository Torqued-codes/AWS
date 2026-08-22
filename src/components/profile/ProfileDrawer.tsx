import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { 
  X, 
  User, 
  Award, 
  CheckCircle2,
  Edit3,
  Save,
  Globe,
  Lock,
  ChevronDown
} from 'lucide-react';
import { soundEngine } from '../../utils/soundEngine';
import { Department } from '../../types';

const DEPARTMENTS: Department[] = ['CSE', 'IT', 'AI & Data Science', 'ECE', 'Cyber Security', 'CS-BS'];

interface ProfileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCertificate: () => void;
}

export const ProfileDrawer: React.FC<ProfileDrawerProps> = ({
  isOpen,
  onClose,
  onOpenCertificate
}) => {
  const { currentUser, badges, submissions, updateUserProfile } = useGame();

  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(currentUser.name);
  const [editDept, setEditDept] = useState<Department>(currentUser.department);
  const [editYear, setEditYear] = useState<1|2|3|4>(currentUser.year);
  const [editPublic, setEditPublic] = useState<boolean>(currentUser.isPublic ?? true);

  const totalAnswered = submissions.length;
  const correctCount = submissions.filter(s => s.isCorrect).length;
  const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 100;

  const handleSave = () => {
    soundEngine.playTap();
    updateUserProfile({
      name: editName.trim() || currentUser.name,
      department: editDept,
      year: editYear,
      isPublic: editPublic,
    });
    setIsEditing(false);
  };

  const handleEdit = () => {
    soundEngine.playTap();
    setEditName(currentUser.name);
    setEditDept(currentUser.department);
    setEditYear(currentUser.year);
    setEditPublic(currentUser.isPublic ?? true);
    setIsEditing(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in font-sans">
      <div 
        onClick={() => { soundEngine.playTap(); onClose(); }}
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity" 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-zinc-950 border-l border-zinc-800 p-6 shadow-2xl overflow-y-auto text-zinc-100 flex flex-col justify-between">
          
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-aws-orange uppercase tracking-wider">
                <User className="w-3.5 h-3.5" />
                <span>Cloud Profile</span>
              </div>
              <div className="flex items-center gap-2">
                {!isEditing ? (
                  <button
                    onClick={handleEdit}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white hover:border-zinc-700 transition-all"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>Edit Profile</span>
                  </button>
                ) : (
                  <button
                    onClick={handleSave}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-aws-orange text-zinc-950 text-xs font-mono font-bold hover:bg-amber-500 transition-all"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>Save</span>
                  </button>
                )}
                <button
                  onClick={() => { soundEngine.playTap(); onClose(); }}
                  className="p-1.5 rounded-full bg-zinc-900 text-zinc-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Avatar Card */}
            <div className="flex items-center gap-3.5 bg-zinc-900 border border-zinc-800 p-4 rounded-2xl mb-5">
              <img 
                src={currentUser.avatar} 
                alt={currentUser.name} 
                className="w-14 h-14 rounded-2xl bg-zinc-800 border border-zinc-700 p-1"
              />
              <div className="flex-1 min-w-0">
                {isEditing ? (
                  <input
                    type="text"
                    value={editName}
                    onChange={e => setEditName(e.target.value)}
                    className="w-full bg-zinc-800 border border-zinc-700 focus:border-aws-orange/60 rounded-lg px-2.5 py-1.5 text-sm font-display font-bold text-white outline-none mb-1"
                    placeholder="Your name"
                  />
                ) : (
                  <div className="text-base font-display font-bold text-white truncate">
                    {currentUser.name}
                  </div>
                )}
                <div className="text-xs text-cyan-400 font-mono mt-0.5">
                  {currentUser.rollNumber}
                </div>

                {/* Public / Private toggle */}
                <div className="flex items-center gap-2 mt-2">
                  {isEditing ? (
                    <button
                      type="button"
                      onClick={() => setEditPublic(p => !p)}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold border transition-all ${
                        editPublic
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                          : 'bg-zinc-800 border-zinc-700 text-zinc-400'
                      }`}
                    >
                      {editPublic ? <Globe className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
                      <span>{editPublic ? 'Public Profile' : 'Private Profile'}</span>
                    </button>
                  ) : (
                    <span className={`flex items-center gap-1.5 px-2 py-0.5 rounded-lg text-[10px] font-mono font-bold border ${
                      currentUser.isPublic !== false
                        ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-500'
                    }`}>
                      {currentUser.isPublic !== false ? <Globe className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
                      {currentUser.isPublic !== false ? 'Public' : 'Private'}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Editable fields when editing */}
            {isEditing && (
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div>
                  <label className="block text-[10px] font-mono text-zinc-500 mb-1 uppercase tracking-wider">Department</label>
                  <div className="relative">
                    <select
                      value={editDept}
                      onChange={e => setEditDept(e.target.value as Department)}
                      className="w-full bg-zinc-900 border border-zinc-800 focus:border-aws-orange/60 rounded-xl px-3 py-2 text-xs text-white outline-none appearance-none"
                    >
                      {DEPARTMENTS.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-zinc-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-zinc-500 mb-1 uppercase tracking-wider">Year</label>
                  <div className="relative">
                    <select
                      value={editYear}
                      onChange={e => setEditYear(Number(e.target.value) as 1|2|3|4)}
                      className="w-full bg-zinc-900 border border-zinc-800 focus:border-aws-orange/60 rounded-xl px-3 py-2 text-xs text-white outline-none appearance-none font-stats"
                    >
                      {[1,2,3,4].map(y => <option key={y} value={y}>Year {y}</option>)}
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-zinc-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>
            )}

            {/* Non-edit: dept/year info */}
            {!isEditing && (
              <div className="text-xs text-zinc-400 font-mono mb-5">
                {currentUser.department} · Year {currentUser.year} · Joined Week {currentUser.joinedWeek || 1}
              </div>
            )}

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-2.5 mb-5 font-stats">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-center">
                <span className="text-[10px] text-zinc-500 block mb-1 font-mono">TOTAL POINTS</span>
                <span className="text-lg font-bold text-aws-orange">{currentUser.points}</span>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-center">
                <span className="text-[10px] text-zinc-500 block mb-1 font-mono">TOWER HEIGHT</span>
                <span className="text-lg font-bold text-cyan-400">{currentUser.floors}F</span>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-center">
                <span className="text-[10px] text-zinc-500 block mb-1 font-mono">ACCURACY</span>
                <span className="text-lg font-bold text-emerald-400">{accuracy}%</span>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-center">
                <span className="text-[10px] text-zinc-500 block mb-1 font-mono">STREAK</span>
                <span className="text-lg font-bold text-amber-400">{currentUser.streak}d</span>
              </div>
            </div>

            {/* Badges */}
            <div className="mb-4">
              <div className="text-xs font-mono font-bold text-zinc-400 mb-3 flex items-center justify-between">
                <span>Earned AWS Badges</span>
                <span className="text-aws-orange">{currentUser.unlockedBadges.length}/{badges.length}</span>
              </div>
              <div className="space-y-2 text-xs">
                {badges.map(badge => {
                  const isUnlocked = currentUser.unlockedBadges.includes(badge.id);
                  return (
                    <div 
                      key={badge.id}
                      className={`p-3 rounded-xl border flex items-center justify-between ${
                        isUnlocked 
                          ? 'bg-zinc-900 border-zinc-700 text-zinc-200' 
                          : 'bg-zinc-950 border-zinc-900 text-zinc-600'
                      }`}
                    >
                      <div>
                        <div className="font-mono font-bold text-white text-[12px]">{badge.title}</div>
                        <div className="text-[11px] text-zinc-400 font-sans mt-0.5">{badge.description}</div>
                      </div>
                      {isUnlocked && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Action */}
          <div className="pt-4 border-t border-zinc-800">
            <button
              onClick={() => {
                soundEngine.playTap();
                onOpenCertificate();
                onClose();
              }}
              className="w-full py-3 rounded-xl bg-aws-orange hover:bg-amber-500 text-zinc-950 font-display font-bold text-sm flex items-center justify-center gap-2 transition-all"
            >
              <Award className="w-4 h-4" />
              <span>View & Download Certificate</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
