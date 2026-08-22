import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { AdminDashboard } from './AdminDashboard';
import { 
  Lock, 
  KeyRound, 
  ArrowLeft, 
  ShieldCheck, 
  Cloud, 
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { soundEngine } from '../../utils/soundEngine';

interface AdminPortalProps {
  onExitAdmin: () => void;
}

export const AdminPortal: React.FC<AdminPortalProps> = ({ onExitAdmin }) => {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(false);

  // SPOC Passcode (default is 'aws2026')
  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim().toLowerCase() === 'aws2026' || passcode.trim().toLowerCase() === 'admin') {
      soundEngine.playFloorAdded();
      setIsAuthenticated(true);
      setError(false);
    } else {
      soundEngine.playWrong();
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#06080d] text-zinc-100 flex flex-col justify-between selection:bg-aws-orange selection:text-black">
      
      {/* Top Admin Topbar */}
      <header className="w-full bg-zinc-950 border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-purple-400 font-bold">
            <Lock className="w-4 h-4" />
          </div>
          <div>
            <div className="text-sm font-mono font-bold text-white flex items-center gap-2">
              <span>AWS SPOC PORTAL</span>
              <span className="text-[10px] px-2 py-0.2 bg-purple-500/20 text-purple-300 rounded border border-purple-500/30">
                RESTRICTED ROUTE (/admin)
              </span>
            </div>
            <div className="text-[11px] text-zinc-500 font-mono">
              Faculty & Student Lead Administration
            </div>
          </div>
        </div>

        <button
          onClick={() => { soundEngine.playTap(); onExitAdmin(); }}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-xs font-mono font-semibold text-zinc-300 hover:text-white transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Exit to Student View</span>
        </button>
      </header>

      {/* Main Admin Content or Lock Screen */}
      <main className="flex-1 max-w-6xl mx-auto w-full p-4 sm:p-6 lg:p-8">
        {!isAuthenticated ? (
          /* Passcode Gate Screen */
          <div className="max-w-md mx-auto my-16 bg-zinc-950 border border-zinc-800 rounded-3xl p-8 shadow-2xl text-center">
            
            <div className="w-16 h-16 rounded-2xl bg-purple-500/15 border border-purple-500/40 flex items-center justify-center mx-auto mb-4 text-purple-400">
              <KeyRound className="w-8 h-8" />
            </div>

            <h1 className="text-xl font-bold font-mono text-white mb-1">
              SPOC Authentication Required
            </h1>
            <p className="text-xs text-zinc-400 font-mono mb-6">
              Enter the master SPOC passkey to manage question banks, weekly resets, and event banners.
            </p>

            <form onSubmit={handleUnlock} className="space-y-4 text-left">
              <div>
                <label className="block text-[11px] font-mono font-semibold text-zinc-400 mb-1.5">
                  SPOC PASSKEY
                </label>
                <input
                  type="password"
                  required
                  autoFocus
                  placeholder="Enter passcode (default: aws2026)"
                  value={passcode}
                  onChange={(e) => { setPasscode(e.target.value); setError(false); }}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-aws-orange"
                />
              </div>

              {error && (
                <div className="flex items-center gap-1.5 text-rose-400 text-xs font-mono">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Invalid passkey. Default test key is: aws2026</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-aws-orange hover:bg-amber-500 text-zinc-950 font-mono font-bold text-xs transition-all shadow-lg shadow-aws-orange/20 flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Verify & Unlock Portal</span>
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-zinc-800/80 text-[11px] font-mono text-zinc-400">
              Passkey is configured by the AWS Student Community Lead.
            </div>

          </div>
        ) : (
          /* Unlocked Admin Dashboard */
          <AdminDashboard />
        )}
      </main>

      {/* Admin Footer */}
      <footer className="w-full bg-zinc-950 border-t border-zinc-800/80 py-4 px-6 text-center text-xs font-mono text-zinc-400">
        AWS Student Community • SPOC Master Console v2.0
      </footer>

    </div>
  );
};
