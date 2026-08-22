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
import { Student } from './types';
import { Cloud, Lock } from 'lucide-react';
import { soundEngine } from './utils/soundEngine';

const MainAppContent: React.FC = () => {
  const { activeTab, setActiveTab, currentUser, setSelectedStudentModal } = useGame();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [certStudent, setCertStudent] = useState<Student | null>(null);
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

  const handleOpenCertificate = (student: Student) => {
    setCertStudent(student);
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
            onSelectStudent={(student) => setSelectedStudentModal(student)}
          />
        )}
        {activeTab === 'announcements' && (
          <EventsHub />
        )}
      </main>

      {/* Global Modals & Drawers */}
      {certStudent && (
        <CertificateModal
          student={certStudent}
          onClose={() => setCertStudent(null)}
        />
      )}

      <ProfileDrawer
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        onOpenCertificate={() => handleOpenCertificate(currentUser)}
      />

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
            <span>•</span>
            <button 
              onClick={() => { soundEngine.playTap(); handleEnterAdmin(); }}
              className="text-zinc-600 hover:text-purple-400 flex items-center gap-1 transition-colors"
              title="Restricted SPOC Portal"
            >
              <Lock className="w-3 h-3" />
              <span>SPOC Console (/admin)</span>
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
