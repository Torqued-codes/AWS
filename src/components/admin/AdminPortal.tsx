import React, { useState } from 'react';
import { AdminDashboard } from './AdminDashboard';
import { 
  Lock, 
  KeyRound, 
  ArrowLeft, 
  ShieldCheck, 
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
    <div className="min-h-screen bg-[#06080d] text-zinc-100 flex flex-col justify-between selection:bg-aws-orange selection:text-black font-sans">
      
      {/* Top Admin Topbar — cleaned up: no restricted-route badge, no subtitle clutter */}
      <header className="w-full bg-zinc-950 border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-purple-400 font-bold">
            <Lock className="w-4 h-4" />
          </div>
          <span className="text-base font-display font-bold text-white tracking-tight">
            AWSxCYNERGY PORTAL
          </span>
        </div>

        <button
          onClick={() => { soundEngine.playTap(); onExitAdmin(); }}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-neutral-900/60 hover:bg-neutral-800 border border-neutral-800 text-xs font-sans font-semibold text-zinc-300 hover:text-white transition-all backdrop-blur-md"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Exit to Student View</span>
        </button>
      </header>

      {/* Main Admin Content or Lock Screen */}
      <main className="flex-1 max-w-6xl mx-auto w-full p-4 sm:p-6 lg:p-8">
        {!isAuthenticated ? (
          /* Passcode Gate Screen */
          <div className="max-w-md mx-auto my-16 bg-neutral-900/60 border border-neutral-800 rounded-xl p-8 shadow-2xl backdrop-blur-md text-center">
            
            <div className="w-16 h-16 rounded-2xl bg-purple-500/15 border border-purple-500/40 flex items-center justify-center mx-auto mb-4 text-purple-400">
              <KeyRound className="w-8 h-8" />
            </div>

            <h1 className="text-xl font-display font-bold text-white mb-6">
              ADMIN Authentication Required
            </h1>

            <form onSubmit={handleUnlock} className="space-y-4 text-left">
              <div>
                <label className="block text-[11px] font-stats tracking-wide uppercase font-semibold text-zinc-400 mb-1.5">
                  ADMIN Passkey
                </label>
                <input
                  type="password"
                  required
                  autoFocus
                  placeholder="Enter passcode"
                  value={passcode}
                  onChange={(e) => { setPasscode(e.target.value); setError(false); }}
                  className="w-full bg-neutral-950/80 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm font-sans text-white placeholder-zinc-600 focus:outline-none focus:border-aws-orange transition-colors"
                />
              </div>

              {error && (
                <div className="flex items-center gap-1.5 text-rose-400 text-xs font-sans">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Invalid passkey. Please try again.</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-aws-orange hover:bg-amber-500 text-zinc-950 font-sans font-bold text-sm transition-all shadow-lg shadow-aws-orange/20 flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Verify & Unlock Portal</span>
              </button>
            </form>

          </div>
        ) : (
          /* Unlocked Admin Dashboard */
          <AdminDashboard />
        )}
      </main>

      {/* Admin Footer */}
      <footer className="w-full bg-zinc-950 border-t border-zinc-800/80 py-4 px-6 text-center text-xs font-sans text-zinc-500">
        AWSxCYNERGY Portal • ADMIN Console
      </footer>

    </div>
  );
};
