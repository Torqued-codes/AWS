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
  ChevronDown,
  Shuffle,
  Hash,
  LogOut
} from 'lucide-react';
import { soundEngine } from '../../utils/soundEngine';
import { Department, Gender } from '../../types';
import { isTopFive } from '../../utils/ranking';

const DEPARTMENTS: Department[] = ['CSE', 'IT', 'AI & Data Science', 'ECE', 'Cyber Security', 'CS-BS'];
const GENDERS: Gender[] = ['Male', 'Female', 'Other'];
const AVATAR_STYLES = ['bottts', 'adventurer', 'shapes', 'identicon', 'thumbs', 'rings'];
const ROLL_PATTERN = /^[0-9]{2}[A-Za-z]{2,6}[0-9]{4,8}$/;

function generateAvatarUrl(seed: string, style: string): string {
  return `https://api.dicebear.com/7.x/${style}/svg?seed=${encodeURIComponent(seed || 'cadet')}`;
}

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
  const { currentUser, badges, submissions, updateUserProfile, logoutUser, isCertEligible } = useGame();

  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(currentUser.name);
  const [editRoll, setEditRoll] = useState(currentUser.rollNumber);
  const [editGender, setEditGender] = useState<Gender>(currentUser.gender || 'Other');
  const [editDept, setEditDept] = useState<Department>(currentUser.department);
  const [editYear, setEditYear] = useState<1|2|3|4>(currentUser.year);
  const [editPublic, setEditPublic] = useState<boolean>(currentUser.isPublic ?? true);
  const [editAvatar, setEditAvatar] = useState(currentUser.avatar);
  const [editBio, setEditBio] = useState(currentUser.bio || '');
  const [rollError, setRollError] = useState('');

  const totalAnswered = submissions.length;
  const correctCount = submissions.filter(s => s.isCorrect).length;
  const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 100;

  const handleSave = () => {
    const trimmedRoll = editRoll.trim().toUpperCase();
    if (!ROLL_PATTERN.test(trimmedRoll)) {
      setRollError('Invalid format. Example: 24ETCS000001');
      return;
    }
    setRollError('');
    soundEngine.playTap();
    updateUserProfile({
      name: editName.trim() || currentUser.name,
      rollNumber: trimmedRoll,
      gender: editGender,
      department: editDept,
      year: editYear,
      isPublic: editPublic,
      avatar: editAvatar,
      bio: editBio.trim().slice(0, 160),
    });
    setIsEditing(false);
  };

  const handleEdit = () => {
    soundEngine.playTap();
    setEditName(currentUser.name);
    setEditRoll(currentUser.rollNumber);
    setEditGender(currentUser.gender || 'Other');
    setEditDept(currentUser.department);
    setEditYear(currentUser.year);
    setEditPublic(currentUser.isPublic ?? true);
    setEditAvatar(currentUser.avatar);
    setEditBio(currentUser.bio || '');
    setRollError('');
    setIsEditing(true);
  };

  const handleShuffleAvatar = () => {
    soundEngine.playTap();
    const style = AVATAR_STYLES[Math.floor(Math.random() * AVATAR_STYLES.length)];
    const seed = `${editName || currentUser.name}${Math.floor(Math.random() * 10000)}`;
    setEditAvatar(generateAvatarUrl(seed, style));
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
              <div className="relative shrink-0">
                <img 
                  src={isEditing ? editAvatar : currentUser.avatar} 
                  alt={currentUser.name} 
                  className="w-14 h-14 rounded-2xl bg-zinc-800 border border-zinc-700 p-1"
                />
                {isEditing && (
                  <button
                    type="button"
                    onClick={handleShuffleAvatar}
                    title="Shuffle avatar icon"
                    className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-aws-orange text-zinc-950 flex items-center justify-center border-2 border-zinc-900 hover:bg-amber-500 transition-colors"
                  >
                    <Shuffle className="w-3 h-3" />
                  </button>
                )}
              </div>
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

                {isEditing ? (
                  <div>
                    <div className="relative mt-1">
                      <Hash className="w-3 h-3 text-zinc-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={editRoll}
                        onChange={e => setEditRoll(e.target.value)}
                        placeholder="24ETCS000001"
                        className="w-full bg-zinc-800 border border-zinc-700 focus:border-aws-orange/60 rounded-lg pl-7 pr-2.5 py-1.5 text-xs font-stats uppercase text-cyan-300 outline-none"
                      />
                    </div>
                    {rollError && (
                      <p className="text-[10px] text-rose-400 font-mono mt-1">{rollError}</p>
                    )}
                  </div>
                ) : (
                  <div className="text-xs text-cyan-400 font-mono mt-0.5">
                    {currentUser.rollNumber}
                  </div>
                )}

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
              <div className="space-y-3 mb-5">
                <div className="grid grid-cols-2 gap-3">
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

                <div>
                  <label className="block text-[10px] font-mono text-zinc-500 mb-1 uppercase tracking-wider">Gender</label>
                  <div className="relative">
                    <select
                      value={editGender}
                      onChange={e => setEditGender(e.target.value as Gender)}
                      className="w-full bg-zinc-900 border border-zinc-800 focus:border-aws-orange/60 rounded-xl px-3 py-2 text-xs text-white outline-none appearance-none"
                    >
                      {GENDERS.map(g => <option key={g} value={g}>{g}</option>)}
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-zinc-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="flex items-center justify-between text-[10px] font-mono text-zinc-500 mb-1 uppercase tracking-wider">
                    <span>Bio</span>
                    <span className="text-zinc-600 normal-case">{editBio.length}/160</span>
                  </label>
                  <textarea
                    value={editBio}
                    onChange={e => setEditBio(e.target.value.slice(0, 160))}
                    placeholder="A short line about yourself — what you're learning, your goals, etc."
                    rows={3}
                    className="w-full bg-zinc-900 border border-zinc-800 focus:border-aws-orange/60 rounded-xl px-3 py-2 text-xs text-zinc-200 placeholder-zinc-600 outline-none resize-none font-sans"
                  />
                </div>
              </div>
            )}

            {/* Non-edit: bio */}
            {!isEditing && currentUser.bio && (
              <p className="text-xs text-zinc-400 font-sans italic mb-5 leading-relaxed">
                “{currentUser.bio}”
              </p>
            )}

            {/* Non-edit: dept/year/gender info */}
            {!isEditing && (
              <div className="text-xs text-zinc-400 font-mono mb-5">
                {currentUser.department} · Year {currentUser.year}
                {currentUser.gender && <> · {currentUser.gender}</>}
                {' '}· Joined Week {currentUser.joinedWeek || 1}
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
          <div className="pt-4 border-t border-zinc-800 space-y-2">
            {isCertEligible(currentUser.id) ? (
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
            ) : (
              <div className="w-full py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-500 font-mono text-xs flex items-center justify-center gap-2 text-center px-3">
                <Lock className="w-3.5 h-3.5 shrink-0" />
                <span>Certificates unlock at Top 5 (weekly or monthly)</span>
              </div>
            )}

            <button
              onClick={() => { soundEngine.playTap(); logoutUser(); }}
              className="w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-rose-400 font-mono text-xs flex items-center justify-center gap-1.5 transition-all"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log Out</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
