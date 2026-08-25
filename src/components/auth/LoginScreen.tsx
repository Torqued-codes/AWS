import React, { useState } from 'react';
import { Cloud, ArrowRight, Eye, EyeOff, AlertCircle, User, Hash, GraduationCap, ChevronDown, KeyRound } from 'lucide-react';
import { Department, Gender, Student, DEPARTMENTS } from '../../types';
import { CURRENT_DEFAULT_USER } from '../../data/mockData';

interface LoginScreenProps {
  onLogin: (user: Student) => void;
}

const ROLL_PATTERN = /^[0-9]{2}[A-Za-z]{2,6}[0-9]{4,8}$/;

function generateAvatar(name: string): string {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  const colors = ['#FF9900', '#22d3ee', '#a78bfa', '#34d399', '#f87171', '#60a5fa'];
  const color = colors[name.charCodeAt(0) % colors.length];
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'><rect width='64' height='64' rx='12' fill='${color}20'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='${color}' font-size='22' font-family='Inter,sans-serif' font-weight='700'>${initials}</text></svg>`;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [mode, setMode] = useState<'register' | 'login'>('register');
  const [name, setName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [gender, setGender] = useState<Gender>('Male');
  const [department, setDepartment] = useState<Department>('CSE');
  const [year, setYear] = useState<1|2|3|4>(1);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const [loginRoll, setLoginRoll] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim() || name.trim().length < 3) {
      setError('Full name must be at least 3 characters.');
      return;
    }
    if (!ROLL_PATTERN.test(rollNumber.trim())) {
      setError('Register number format invalid. Example: 24ETCS000001');
      return;
    }
    // Mock password validation — before real Supabase Auth is wired in,
    // any non-empty password is accepted locally. This keeps the field
    // present in the UI/data model without blocking local dev testing.
    if (!password || password.length < 4) {
      setError('Password must be at least 4 characters.');
      return;
    }

    // Check if already registered
    const existing = localStorage.getItem(`acc_${rollNumber.trim().toUpperCase()}`);
    if (existing) {
      setError('This register number is already registered. Use Login instead.');
      return;
    }

    const newUser: Student = {
      ...CURRENT_DEFAULT_USER,
      id: `student_${rollNumber.trim().toUpperCase()}`,
      name: name.trim(),
      rollNumber: rollNumber.trim().toUpperCase(),
      department,
      year,
      gender,
      points: 0,
      weeklyPoints: 0,
      streak: 0,
      longestStreak: 0,
      hearts: 5,
      lastHeartLossTime: null,
      unlockedBadges: [],
      buildingTier: 'shack',
      // Strict floor rule: floors = floor(points/50). A brand-new account
      // has 0 points, so it starts at 0 floors — rendered as an empty
      // foundation-only plot in the 3D city until the first 50 points
      // are earned.
      floors: 0,
      accentColor: '#FF9900',
      avatar: generateAvatar(name.trim()),
      isPublic: true,
      joinedWeek: 1,
      registeredAt: Date.now(),
      activityLog: [],
    };

    localStorage.setItem(`acc_${rollNumber.trim().toUpperCase()}`, JSON.stringify(newUser));
    // NOTE: storing plaintext locally is a dev-only placeholder until this
    // is replaced by real Supabase Auth (hashed, server-side). Never do
    // this in production.
    localStorage.setItem(`pw_${rollNumber.trim().toUpperCase()}`, password);
    localStorage.setItem('aws_cc_session', rollNumber.trim().toUpperCase());
    onLogin(newUser);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    const key = loginRoll.trim().toUpperCase();
    const stored = localStorage.getItem(`acc_${key}`);
    if (!stored) {
      setLoginError('No account found with this register number. Please register first.');
      return;
    }
    if (!loginPassword) {
      setLoginError('Please enter your password.');
      return;
    }
    // Mock password check: accepts any non-empty password that matches
    // what was set at registration, so local testing before Supabase
    // Auth wiring stays simple.
    const storedPassword = localStorage.getItem(`pw_${key}`);
    if (storedPassword && loginPassword !== storedPassword) {
      setLoginError('Incorrect password.');
      return;
    }
    const user: Student = JSON.parse(stored);
    localStorage.setItem('aws_cc_session', key);
    onLogin(user);
  };

  return (
    <div className="min-h-screen bg-[#06080d] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-amber-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-cyan-500/4 rounded-full blur-[100px]" />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
      </div>

      <div className="w-full max-w-md relative z-10 animate-fade-in">
        {/* Brand Mark */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl shadow-glow-orange mb-4 overflow-hidden">
            <img 
              src="/images/aws.png" 
              alt="AWS Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-display font-bold text-white tracking-tight">
            AWSxCYNERGY
          </h1>
        <p className="text-xs text-zinc-400 font-sans mt-1">
            College Cloud Computing Challenge Platform
        </p>
      </div>

        {/* Tab Toggle */}
        <div className="flex bg-zinc-900/80 border border-zinc-800 p-1 rounded-2xl mb-6">
          <button
            onClick={() => { setMode('register'); setError(''); }}
            className={`flex-1 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
              mode === 'register'
                ? 'bg-zinc-800 text-white shadow-sm border border-zinc-700/50'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            Register
          </button>
          <button
            onClick={() => { setMode('login'); setLoginError(''); }}
            className={`flex-1 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
              mode === 'login'
                ? 'bg-zinc-800 text-white shadow-sm border border-zinc-700/50'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            Login
          </button>
        </div>

        {/* Register Form */}
        {mode === 'register' && (
          <form onSubmit={handleRegister} className="bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-sm rounded-3xl p-6 space-y-4">
            <div>
              <label className="block text-[11px] font-mono font-bold text-zinc-400 mb-1.5 uppercase tracking-wider">Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="e.g. Arjun Krishnamurthy"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-aws-orange/60 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition-colors font-sans"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono font-bold text-zinc-400 mb-1.5 uppercase tracking-wider">Register Number</label>
              <div className="relative">
                <Hash className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="e.g. 24ETCS000001"
                  value={rollNumber}
                  onChange={e => setRollNumber(e.target.value)}
                  required
                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-aws-orange/60 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition-colors font-stats uppercase"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-mono font-bold text-zinc-400 mb-1.5 uppercase tracking-wider">Gender</label>
                <div className="relative">
                  <select
                    value={gender}
                    onChange={e => setGender(e.target.value as Gender)}
                    className="w-full bg-zinc-900 border border-zinc-800 focus:border-aws-orange/60 rounded-xl px-3 py-2.5 text-sm text-white outline-none appearance-none transition-colors font-sans"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-zinc-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold text-zinc-400 mb-1.5 uppercase tracking-wider">Year</label>
                <div className="relative">
                  <select
                    value={year}
                    onChange={e => setYear(Number(e.target.value) as 1|2|3|4)}
                    className="w-full bg-zinc-900 border border-zinc-800 focus:border-aws-orange/60 rounded-xl px-3 py-2.5 text-sm text-white outline-none appearance-none transition-colors font-stats"
                  >
                    <option value={1}>Year 1</option>
                    <option value={2}>Year 2</option>
                    <option value={3}>Year 3</option>
                    <option value={4}>Year 4</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-zinc-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono font-bold text-zinc-400 mb-1.5 uppercase tracking-wider">
                <span className="inline-flex items-center gap-1"><GraduationCap className="w-3.5 h-3.5" /> Branch / Department</span>
              </label>
              <div className="relative">
                <select
                  value={department}
                  onChange={e => setDepartment(e.target.value as Department)}
                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-aws-orange/60 rounded-xl px-3 py-2.5 text-sm text-white outline-none appearance-none transition-colors font-sans"
                >
                  {DEPARTMENTS.map(d => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-zinc-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono font-bold text-zinc-400 mb-1.5 uppercase tracking-wider">Password</label>
              <div className="relative">
                <KeyRound className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="At least 4 characters"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-aws-orange/60 rounded-xl pl-10 pr-10 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition-colors font-sans"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(p => !p)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="flex items-start gap-2 p-3 bg-rose-950/40 border border-rose-500/30 rounded-xl text-xs text-rose-300 font-mono">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-aws-orange hover:bg-amber-500 text-zinc-950 font-display font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-glow-orange hover:shadow-glow-orange-lg"
            >
              <span>Create Account & Enter City</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-center text-[11px] text-zinc-500 font-sans">
              Already registered?{' '}
              <button type="button" onClick={() => setMode('login')} className="text-aws-orange hover:underline">
                Login here
              </button>
            </p>
          </form>
        )}

        {/* Login Form */}
        {mode === 'login' && (
          <form onSubmit={handleLogin} className="bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-sm rounded-3xl p-6 space-y-4">
            <div>
              <label className="block text-[11px] font-mono font-bold text-zinc-400 mb-1.5 uppercase tracking-wider">Register Number</label>
              <div className="relative">
                <Hash className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="e.g. 24ETCS000001"
                  value={loginRoll}
                  onChange={e => setLoginRoll(e.target.value)}
                  required
                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-aws-orange/60 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition-colors font-stats uppercase"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono font-bold text-zinc-400 mb-1.5 uppercase tracking-wider">Password</label>
              <div className="relative">
                <KeyRound className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showLoginPassword ? 'text' : 'password'}
                  placeholder="Your password"
                  value={loginPassword}
                  onChange={e => setLoginPassword(e.target.value)}
                  required
                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-aws-orange/60 rounded-xl pl-10 pr-10 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition-colors font-sans"
                />
                <button
                  type="button"
                  onClick={() => setShowLoginPassword(p => !p)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
                  tabIndex={-1}
                >
                  {showLoginPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {loginError && (
              <div className="flex items-start gap-2 p-3 bg-rose-950/40 border border-rose-500/30 rounded-xl text-xs text-rose-300 font-mono">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{loginError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-aws-orange hover:bg-amber-500 text-zinc-950 font-display font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-glow-orange"
            >
              <span>Login to Cloud City</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-center text-[11px] text-zinc-500 font-sans">
              New here?{' '}
              <button type="button" onClick={() => setMode('register')} className="text-aws-orange hover:underline">
                Create an account
              </button>
            </p>
          </form>
        )}

        <p className="text-center text-[10px] text-zinc-600 font-mono mt-6">
          Data stored locally · Supabase sync coming soon · SPOC Console: /admin
        </p>
      </div>
    </div>
  );
};
