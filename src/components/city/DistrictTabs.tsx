import React from 'react';
import { Department } from '../../types';
import { soundEngine } from '../../utils/soundEngine';

interface DistrictTabsProps {
  selectedDistrict: Department | 'ALL';
  onSelectDistrict: (district: Department | 'ALL') => void;
  studentCounts: Record<string, number>;
}

export const DistrictTabs: React.FC<DistrictTabsProps> = ({
  selectedDistrict,
  onSelectDistrict,
  studentCounts
}) => {
  const districts: Array<{ id: Department | 'ALL'; label: string; tag: string }> = [
    { id: 'ALL', label: 'All Districts', tag: 'Skyline' },
    { id: 'CSE', label: 'CSE Sector', tag: 'Compute' },
    { id: 'ISE', label: 'ISE Cyberhub', tag: 'Cloud' },
    { id: 'AIML', label: 'AI/ML Valley', tag: 'ML Ops' },
    { id: 'MC', label: 'MC Nexus', tag: 'Data' },
    { id: 'EEE', label: 'EEE Grid', tag: 'Power' },
    { id: 'ECE', label: 'ECE Subnet', tag: 'IoT' },
    { id: 'MECH', label: 'MECH Works', tag: 'Systems' },
    { id: 'AUTO', label: 'AUTO Yard', tag: 'Mobility' },
    { id: 'CIVIL', label: 'CIVIL Grounds', tag: 'Infra' },
    { id: 'AERO', label: 'AERO Bay', tag: 'Flight' },
    { id: 'OTHERS', label: 'Other Districts', tag: 'Misc' },
  ];

  return (
    <div className="flex items-center gap-2 overflow-x-auto py-2 px-1 scrollbar-none">
      {districts.map((district) => {
        const isActive = selectedDistrict === district.id;
        const count = district.id === 'ALL' 
          ? Object.values(studentCounts).reduce((a, b) => a + b, 0)
          : studentCounts[district.id] || 0;

        return (
          <button
            key={district.id}
            onClick={() => {
              soundEngine.playTap();
              onSelectDistrict(district.id);
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
              isActive
                ? 'bg-aws-orange text-slate-950 shadow-glow-orange font-bold'
                : 'bg-slate-900/90 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <span>{district.label}</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold ${
              isActive ? 'bg-black/30 text-black' : 'bg-slate-800 text-slate-400'
            }`}>
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};
