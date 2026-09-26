import React, { useState, useMemo, useCallback } from 'react';
import { useGame } from '../../context/GameContext';
import { ThreeCityCanvas } from './ThreeCityCanvas';
import { CityHUDOverlay } from './CityHUDOverlay';
import { Department, Student } from '../../types';

interface CloudCityViewProps {
  onOpenCertificate: (student: Student, periodType?: 'weekly' | 'monthly' | 'yearly', periodKey?: string) => void;
}

export const CloudCityView: React.FC<CloudCityViewProps> = ({ onOpenCertificate }) => {
  const { students, currentUser, selectStudentForModal, setSelectedStudentModal, setActiveTab } = useGame();
  const [selectedDistrict, setSelectedDistrict] = useState<Department | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [skyTheme, setSkyTheme] = useState<'midnight' | 'sunset' | 'bright'>('midnight');
  const [targetStudentId, setTargetStudentId] = useState<string | null>(null);
  // Arrow D-pad navigation event trigger
  const [navEvent, setNavEvent] = useState<{ dir: string; t: number } | null>(null);
  const [joystickVector, setJoystickVector] = useState({ x: 0, y: 0 });
  const [mapPoint, setMapPoint] = useState<{ x: number; z: number; t: number } | null>(null);
  const [cameraPosition, setCameraPosition] = useState({ x: 0, z: 0 });

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

  const handleNavigate = useCallback((direction: 'up' | 'down' | 'left' | 'right' | 'zoomin' | 'zoomout' | 'autoorbit') => {
    setNavEvent({ dir: direction, t: Date.now() });
  }, []);

  const handleMapSelect = useCallback((x: number, z: number) => {
    setMapPoint({ x, z, t: Date.now() });
  }, []);

  const handleCameraPositionChange = useCallback((position: { x: number; z: number }) => {
    setCameraPosition(position);
  }, []);

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
        joystickVector={joystickVector}
        mapPoint={mapPoint}
        onCameraPositionChange={handleCameraPositionChange}
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
        onJoystickChange={setJoystickVector}
        onMapSelect={handleMapSelect}
        cameraPosition={cameraPosition}
      />

      {/* Building/profile modal now renders globally from App.tsx so the
          same click-to-view flow works from the Leaderboard and Podium too. */}

    </div>
  );
};
