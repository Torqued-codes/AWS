import React, { useState, useMemo } from 'react';
import { useGame } from '../../context/GameContext';
import { ThreeCityCanvas } from './ThreeCityCanvas';
import { CityHUDOverlay } from './CityHUDOverlay';
import { Department, Student } from '../../types';

interface CloudCityViewProps {
  onOpenCertificate: (student: Student) => void;
}

export const CloudCityView: React.FC<CloudCityViewProps> = ({ onOpenCertificate }) => {
  const { students, currentUser, selectStudentForModal, setSelectedStudentModal, setActiveTab } = useGame();
  const [selectedDistrict, setSelectedDistrict] = useState<Department | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [skyTheme, setSkyTheme] = useState<'midnight' | 'sunset' | 'bright'>('midnight');
  const [targetStudentId, setTargetStudentId] = useState<string | null>(null);
  // Arrow D-pad navigation event trigger
  const [navEvent, setNavEvent] = useState<{ dir: string; t: number } | null>(null);

  const filteredStudents = useMemo(() => {
    return students.filter((s) => {
      const matchDistrict = selectedDistrict === 'ALL' || s.department === selectedDistrict;
      const matchSearch = 
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.rollNumber.toLowerCase().includes(searchQuery.toLowerCase());
      return matchDistrict && matchSearch;
    });
  }, [students, selectedDistrict, searchQuery]);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const match = students.find(
        (s) => s.name.toLowerCase().includes(query.toLowerCase()) || s.rollNumber.toLowerCase().includes(query.toLowerCase())
      );
      if (match) setTargetStudentId(match.id);
    }
  };

  const handleFlyToMyTower = () => {
    setTargetStudentId(currentUser.id);
    setSelectedStudentModal(currentUser); // own profile always visible to self
  };

  const handleNavigate = (direction: 'up' | 'down' | 'left' | 'right' | 'zoomin' | 'zoomout') => {
    setNavEvent({ dir: direction, t: Date.now() });
  };

  return (
    <div className="relative w-full h-[calc(100vh-80px)] min-h-[580px] bg-[#07090e] overflow-hidden flex flex-col">
      
      <ThreeCityCanvas
        students={filteredStudents}
        selectedDistrict={selectedDistrict}
        searchQuery={searchQuery}
        skyTheme={skyTheme}
        onSelectStudent={selectStudentForModal}
        targetStudentId={targetStudentId}
        navEvent={navEvent}
      />

      <CityHUDOverlay
        students={filteredStudents}
        currentUser={currentUser}
        selectedDistrict={selectedDistrict}
        onSelectDistrict={setSelectedDistrict}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        skyTheme={skyTheme}
        onSkyThemeChange={setSkyTheme}
        onFlyToMyTower={handleFlyToMyTower}
        onStartQuiz={() => setActiveTab('quiz')}
        onNavigate={handleNavigate}
      />

      {/* Building/profile modal now renders globally from App.tsx so the
          same click-to-view flow works from the Leaderboard and Podium too. */}

    </div>
  );
};
