import React, { useState, useEffect } from 'react';
import { GameProvider, useGame } from './context/GameContext';
import { Navbar } from './components/layout/Navbar';
import { HomePage } from './components/home/HomePage';
import { CloudCityView } from './components/city/CloudCityView';
import { QuizArena } from './components/quiz/QuizArena';
import { LeaderboardView } from './components/leaderboard/LeaderboardView';
import { EventsHub } from './components/announcements/EventsHub';
import { AdminPortal } from './components/admin/AdminPortal';
import { CertificateModal } from './components/certificate/CertificateModal';
import { ProfileDrawer } from './components/profile/ProfileDrawer';
import { BuildingModal } from './components/city/BuildingModal';
import { LoginScreen } from './components/auth/LoginScreen';
import { Student } from './types';
import { Cloud, Lock, ShieldAlert } from 'lucide-react';
import { soundEngine } from './utils/soundEngine';

const MainAppContent: React.FC = () => {
  const {
    activeTab,
    setActiveTab,
    currentUser,
    selectedStudentModal,
    setSelectedStudentModal,
    selectStudentForModal,
    privacyNotice,
    dismissPrivacyNotice,
    isAuthenticated,
    loginAsUser,
    weeklyWinners: weeklyWinnersRaw,
    monthlyWinners: monthlyWinnersRaw,
    yearlyWinners: yearlyWinnersRaw,
  } = useGame();
  // Defensive fallback: never let a missing/mismatched context value
  // crash certificate resolution — same reasoning as ProfileDrawer/BuildingModal.
  const weeklyWinners = weeklyWinnersRaw || {};
  const monthlyWinners = monthlyWinnersRaw || {};
  const yearlyWinners = yearlyWinnersRaw || {};
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [certTarget, setCertTarget] = useState<{
    student: Student;
    periodType?: 'weekly' | 'monthly' | 'yearly';
    periodLabel?: string;
    rank?: number;
  } | null>(null);
  const [isAdminRoute, setIsAdminRoute] = useState<boolean>(() => {
    return window.location.pathname.includes('/admin') || window.location.search.includes('portal=admin');
  });

  // Listen to browser URL changes
  useEffect(() => {
    const checkRoute = () => {
      const isAdm = window.location.pathname.includes('/admin') || window.location.search.includes('portal=admin');
      setIsAdminRoute(isAdm);
    };
    window.addEventListener('popstate', checkRoute);
    return () => window.removeEventListener('popstate', checkRoute);
  }, []);

  // Resolves which announced period to show by default when a caller
  // (leaderboard row, 3D city building card) opens a certificate without
  // specifying one — prefers the "biggest" honor first (yearly, then
  // monthly, then the most recent week), so the quick-access buttons
  // always surface a student's best available certificate.
  const resolveDefaultPeriod = (student: Student): { type: 'weekly' | 'monthly' | 'yearly'; key: string; rank: number } | null => {
    const yearlyEntries = Object.entries(yearlyWinners).filter(([, ids]) => ids.includes(student.id));
    if (yearlyEntries.length > 0) {
      const [key, ids] = yearlyEntries[yearlyEntries.length - 1];
      return { type: 'yearly', key, rank: ids.indexOf(student.id) + 1 };
    }
    const monthlyEntries = Object.entries(monthlyWinners).filter(([, ids]) => ids.includes(student.id));
    if (monthlyEntries.length > 0) {
      const [key, ids] = monthlyEntries[monthlyEntries.length - 1];
      return { type: 'monthly', key, rank: ids.indexOf(student.id) + 1 };
    }
    const weeklyEntries = Object.entries(weeklyWinners)
      .filter(([, ids]) => ids.includes(student.id))
      .sort((a, b) => Number(a[0]) - Number(b[0]));
    if (weeklyEntries.length > 0) {
      const [key, ids] = weeklyEntries[weeklyEntries.length - 1];
      return { type: 'weekly', key, rank: ids.indexOf(student.id) + 1 };
    }
    return null;
  };

  // `periodType`/`periodKey` are optional so existing "quick access" cert
  // buttons (leaderboard row, 3D city building card) keep working with
  // zero changes — when omitted, this falls back to the student's best
  // available announced win. The per-period badge list in ProfileDrawer/
  // BuildingModal passes both explicitly so each certificate matches the
  // exact badge the student clicked.
  const handleOpenCertificate = (
    student: Student,
    periodType?: 'weekly' | 'monthly' | 'yearly',
    periodKey?: string
  ) => {
    if (periodType && periodKey !== undefined) {
      const map: Record<string, string[]> = periodType === 'weekly' ? weeklyWinners : periodType === 'monthly' ? monthlyWinners : yearlyWinners;
      const ids = map[periodKey];
      const rank = ids ? ids.indexOf(student.id) + 1 : undefined;
      setCertTarget({
        student,
        periodType,
        periodLabel: periodType === 'weekly' ? `Week ${periodKey}` : periodKey,
        rank: rank && rank > 0 ? rank : undefined,
      });
      return;
    }

    const resolved = resolveDefaultPeriod(student);
    if (resolved) {
      setCertTarget({
        student,
        periodType: resolved.type,
        periodLabel: resolved.type === 'weekly' ? `Week ${resolved.key}` : resolved.key,
        rank: resolved.rank,
      });
    } else {
      setCertTarget({ student });
    }
  };

  const handleExitAdmin = () => {
    window.history.pushState({}, '', '/');
    setIsAdminRoute(false);
  };

  const handleEnterAdmin = () => {
    window.history.pushState({}, '', '/admin');
    setIsAdminRoute(true);
  };

  // If on `/admin` route, render the isolated SPOC Portal
  if (isAdminRoute) {
    return <AdminPortal onExitAdmin={handleExitAdmin} />;
  }

  // Gate the entire experience behind student onboarding/login until a
  // session exists — collects Name, Register Number, Gender, Branch.
  if (!isAuthenticated) {
    return <LoginScreen onLogin={loginAsUser} />;
  }

  return (
    <div className="min-h-screen bg-[#06080d] text-zinc-100 flex flex-col justify-between selection:bg-aws-orange selection:text-black font-sans">
      
      {/* Top Navigation Bar */}
      <div className="w-full">
        <Navbar onOpenProfile={() => setIsProfileOpen(true)} />
      </div>

      {/* Main Tab View Content */}
      <main className="flex-1 w-full">
        {activeTab === 'home' && (
          <HomePage />
        )}
        {activeTab === 'city' && (
          <CloudCityView onOpenCertificate={handleOpenCertificate} />
        )}
        {activeTab === 'quiz' && (
          <QuizArena />
        )}
        {activeTab === 'leaderboard' && (
          <LeaderboardView
            onOpenCertificate={handleOpenCertificate}
            onSelectStudent={(student) => selectStudentForModal(student)}
          />
        )}
        {activeTab === 'announcements' && (
          <EventsHub />
        )}
      </main>

      {/* Global Modals & Drawers */}
      {certTarget && (
        <CertificateModal
          student={certTarget.student}
          periodLabel={certTarget.periodLabel}
          rank={certTarget.rank}
          onClose={() => setCertTarget(null)}
        />
      )}

      <ProfileDrawer
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        onOpenCertificate={(periodType, periodKey) => handleOpenCertificate(currentUser, periodType, periodKey)}
      />

      {/* Global student profile/building modal — works from any tab
          (Leaderboard, 3D City, Podium) and always respects the
          target student's Public/Private visibility setting. */}
      {selectedStudentModal && (
        <BuildingModal
          student={selectedStudentModal}
          onClose={() => setSelectedStudentModal(null)}
          onOpenCertificate={handleOpenCertificate}
        />
      )}

      {/* Privacy toast — shown briefly when trying to open a private profile */}
      {privacyNotice && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] animate-fade-in">
          <div
            onClick={dismissPrivacyNotice}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900/95 border border-zinc-700 shadow-2xl backdrop-blur-md text-xs font-mono text-zinc-200 cursor-pointer"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>{privacyNotice}</span>
          </div>
        </div>
      )}

      {/* Sleek Minimal Footer */}
      <footer className="w-full bg-zinc-950 border-t border-zinc-800/80 py-6 px-4 sm:px-6 lg:px-8 text-xs text-zinc-500 font-mono">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-aws-orange text-zinc-950 flex items-center justify-center font-bold">
              <Cloud className="w-3 h-3 fill-current" />
            </div>
            <span className="text-zinc-300 font-semibold">AWS Student Community</span>
            <span className="text-zinc-700">•</span>
            <span>3D Metropolis Challenge Platform</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <button 
              onClick={() => { soundEngine.playTap(); setActiveTab('home'); }}
              className="hover:text-white transition-colors"
            >
              Home
            </button>
            <span>•</span>
            <button 
              onClick={() => { soundEngine.playTap(); setActiveTab('city'); }}
              className="hover:text-cyan-400 transition-colors"
            >
              3D City
            </button>
            <span>•</span>
            <button 
              onClick={() => { soundEngine.playTap(); setActiveTab('quiz'); }}
              className="hover:text-aws-orange transition-colors"
            >
              Weekly Arena
            </button>
            <span>•</span>
            <button 
              onClick={() => { soundEngine.playTap(); setActiveTab('leaderboard'); }}
              className="hover:text-zinc-300 transition-colors"
            >
              Leaderboard
            </button>
            
          </div>

        </div>
      </footer>

    </div>
  );
};

export function App() {
  return (
    <GameProvider>
      <MainAppContent />
    </GameProvider>
  );
}

export default App;

