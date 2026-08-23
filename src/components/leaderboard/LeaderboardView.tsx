import React, { useState, useMemo } from 'react';
import { useGame } from '../../context/GameContext';
import { Student, Department, DEPARTMENTS } from '../../types';
import { Podium } from './Podium';
import { 
  Trophy, 
  Flame, 
  Building2, 
  Search, 
  Award, 
  Zap, 
  Calendar 
} from 'lucide-react';
import { soundEngine } from '../../utils/soundEngine';
import { sortStudents } from '../../utils/ranking';

interface LeaderboardViewProps {
  onOpenCertificate: (student: Student) => void;
  onSelectStudent: (student: Student) => void;
}

export const LeaderboardView: React.FC<LeaderboardViewProps> = ({
  onOpenCertificate,
  onSelectStudent
}) => {
  const { students, currentUser, isCertEligible } = useGame();
  const [timeframe, setTimeframe] = useState<'weekly' | 'monthly'>('weekly');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState<Department | 'ALL'>('ALL');

  // Cascading tie-breaker (points → who reached it first → weekly
  // correct count → fewest wrong attempts) instead of a raw points-only
  // sort — see utils/ranking.ts for the full rule. Matters most right
  // at the Top-5 boundary since that's what gates certificate access.
  const sortedStudents = useMemo(() => (
    sortStudents(students, timeframe)
  ), [students, timeframe]);

  const filteredStudents = useMemo(() => {
    return sortedStudents.filter((s) => {
      const matchDept = selectedDept === 'ALL' || s.department === selectedDept;
      const matchSearch =
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.rollNumber.toLowerCase().includes(searchQuery.toLowerCase());
      return matchDept && matchSearch;
    });
  }, [sortedStudents, selectedDept, searchQuery]);

  const topThree = sortedStudents.slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in text-zinc-100">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-aws-orange mb-2">
            <Trophy className="w-3 h-3" />
            <span>CAMPUS RANKINGS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading text-white">
            Leaderboard
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 font-sans mt-1">
            Top architects receive official verifiable certification badges and custom 3D skyscraper crests.
          </p>
        </div>

        {/* Timeframe Switcher */}
        <div className="flex items-center bg-zinc-900 border border-zinc-800 p-1 rounded-xl self-start md:self-auto font-mono text-xs">
          <button
            onClick={() => { soundEngine.playTap(); setTimeframe('weekly'); }}
            className={`px-3.5 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
              timeframe === 'weekly'
                ? 'bg-aws-orange text-black'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Weekly Sprint</span>
          </button>

          <button
            onClick={() => { soundEngine.playTap(); setTimeframe('monthly'); }}
            className={`px-3.5 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
              timeframe === 'monthly'
                ? 'bg-zinc-800 text-white'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Monthly All-Time</span>
          </button>
        </div>
      </div>

      {/* Podium */}
      {selectedDept === 'ALL' && searchQuery === '' && (
        <Podium
          topThree={topThree}
          onSelectStudent={onSelectStudent}
          onOpenCertificate={onOpenCertificate}
        />
      )}

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-zinc-950 border border-zinc-800 p-3 rounded-2xl mb-6">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search student or roll number..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-10 pr-4 py-2 text-xs font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-aws-orange"
          />
        </div>

        <select
          value={selectedDept}
          onChange={(e) => {
            soundEngine.playTap();
            setSelectedDept(e.target.value as Department | 'ALL');
          }}
          className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono rounded-xl px-4 py-2 focus:outline-none focus:border-aws-orange"
        >
          <option value="ALL">All Departments</option>
          {DEPARTMENTS.map(d => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-zinc-900/80 text-zinc-400 text-[11px] uppercase tracking-wider border-b border-zinc-800">
              <tr>
                <th className="py-3.5 px-4 text-center w-16">Rank</th>
                <th className="py-3.5 px-4">Student</th>
                <th className="py-3.5 px-4 hidden md:table-cell">Dept & Roll</th>
                <th className="py-3.5 px-4 text-center">Floors</th>
                <th className="py-3.5 px-4 text-center">Streak</th>
                <th className="py-3.5 px-4 text-right">Points</th>
                <th className="py-3.5 px-4 text-center w-28">Badge</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60">
              {filteredStudents.map((student, idx) => {
                const rank = idx + 1;
                const isCurrent = student.id === currentUser.id;
                const pointsToShow = timeframe === 'weekly' ? (student.weeklyPoints || student.points) : student.points;

                return (
                  <tr
                    key={student.id}
                    className={`transition-colors ${
                      isCurrent ? 'bg-aws-orange/10 border-l-2 border-l-aws-orange' : 'hover:bg-zinc-900/40'
                    }`}
                  >
                    <td className="py-3 px-4 text-center font-bold">
                      {rank === 1 ? (
                        <span className="w-6 h-6 rounded-lg bg-amber-400 text-black flex items-center justify-center mx-auto text-xs font-black">
                          1
                        </span>
                      ) : rank === 2 ? (
                        <span className="w-6 h-6 rounded-lg bg-zinc-400 text-black flex items-center justify-center mx-auto text-xs font-black">
                          2
                        </span>
                      ) : rank === 3 ? (
                        <span className="w-6 h-6 rounded-lg bg-amber-800 text-white flex items-center justify-center mx-auto text-xs font-black">
                          3
                        </span>
                      ) : (
                        <span className="text-zinc-500">#{rank}</span>
                      )}
                    </td>

                    <td className="py-3 px-4">
                      <div 
                        onClick={() => { soundEngine.playTap(); onSelectStudent(student); }}
                        className="flex items-center gap-2.5 cursor-pointer group"
                      >
                        <img src={student.avatar} alt={student.name} className="w-8 h-8 rounded-lg bg-zinc-800" />
                        <div>
                          <div className="font-bold text-white group-hover:text-aws-orange transition-colors flex items-center gap-1.5">
                            <span>{student.name}</span>
                            {isCurrent && (
                              <span className="px-1 py-0.2 rounded bg-aws-orange text-black font-black text-[9px]">
                                YOU
                              </span>
                            )}
                          </div>
                          <div className="text-[10px] text-zinc-500 md:hidden">
                            {student.rollNumber} • {student.department}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="py-3 px-4 hidden md:table-cell text-zinc-400">
                      <span className="text-cyan-400 font-semibold">{student.department}</span>
                      <span className="text-zinc-600 mx-1.5">•</span>
                      <span>{student.rollNumber}</span>
                    </td>

                    <td className="py-3 px-4 text-center font-bold text-aws-orange">
                      <span className="inline-flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5 text-zinc-500" />
                        {student.floors}F
                      </span>
                    </td>

                    <td className="py-3 px-4 text-center font-bold text-amber-400">
                      <span className="inline-flex items-center gap-1">
                        <Flame className="w-3.5 h-3.5 fill-amber-500" />
                        {student.streak}d
                      </span>
                    </td>

                    <td className="py-3 px-4 text-right font-bold text-white">
                      {pointsToShow} <span className="text-[10px] text-zinc-500">PTS</span>
                    </td>

                    <td className="py-3 px-4 text-center">
                      {/* "Generate Official Certificate" is only ever shown
                          to the profile owner, and only once they hold a
                          Top-5 spot (weekly or monthly). Peers viewing this
                          row never see the action. */}
                      {isCurrent && isCertEligible(student.id) ? (
                        <button
                          onClick={() => {
                            soundEngine.playTap();
                            onOpenCertificate(student);
                          }}
                          className="px-2.5 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 text-[11px] transition-all inline-flex items-center gap-1 mx-auto"
                        >
                          <Award className="w-3 h-3 text-aws-orange" />
                          <span>Cert</span>
                        </button>
                      ) : (
                        <span className="text-zinc-700 text-[10px]">—</span>
                      )}
                    </td>

                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
