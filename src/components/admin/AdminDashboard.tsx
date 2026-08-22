import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { CertDomain, Student } from '../../types';
import { 
  PlusCircle, 
  Sparkles, 
  Radio, 
  Save, 
  CheckCircle2, 
  RefreshCw,
  Users,
  Trash2,
  Search,
  Building2,
  Flame,
  AlertTriangle
} from 'lucide-react';
import { soundEngine } from '../../utils/soundEngine';

export const AdminDashboard: React.FC = () => {
  const { 
    activeWeek, 
    setActiveWeek, 
    questions, 
    addNewQuestion, 
    addNewAnnouncement, 
    announcements,
    students,
    removeStudent,
    refillHearts 
  } = useGame();

  const [activeAdminTab, setActiveAdminTab] = useState<'students' | 'questions' | 'announcements' | 'settings'>('students');
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [studentSearch, setStudentSearch] = useState('');
  const [studentToRemove, setStudentToRemove] = useState<Student | null>(null);

  // New Question Form State
  const [domain, setDomain] = useState<CertDomain>('IAM & Security');
  const [difficulty, setDifficulty] = useState<'Beginner' | 'Associate' | 'Pro'>('Associate');
  const [weekNum, setWeekNum] = useState<number>(activeWeek);
  const [questionText, setQuestionText] = useState('');
  const [optionA, setOptionA] = useState('');
  const [optionB, setOptionB] = useState('');
  const [optionC, setOptionC] = useState('');
  const [optionD, setOptionD] = useState('');
  const [correctOption, setCorrectOption] = useState<'A' | 'B' | 'C' | 'D'>('A');
  const [explanation, setExplanation] = useState('');
  const [awsDocTopic, setAwsDocTopic] = useState('');

  // New Announcement Form State
  const [annTitle, setAnnTitle] = useState('');
  const [annCategory, setAnnCategory] = useState<'Voucher' | 'Event' | 'Workshop' | 'Certification'>('Voucher');
  const [annDesc, setAnnDesc] = useState('');
  const [annLink, setAnnLink] = useState('');
  const [annLinkText, setAnnLinkText] = useState('Register Now');

  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(studentSearch.toLowerCase()) ||
    s.rollNumber.toLowerCase().includes(studentSearch.toLowerCase()) ||
    s.department.toLowerCase().includes(studentSearch.toLowerCase())
  );

  const handleConfirmRemove = () => {
    if (!studentToRemove) return;
    removeStudent(studentToRemove.id);
    setStudentToRemove(null);
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 3000);
  };

  const handleAddQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!questionText || !optionA || !optionB || !optionC || !optionD || !explanation) return;

    soundEngine.playFloorAdded();
    addNewQuestion({
      weekNumber: Number(weekNum),
      domain,
      difficulty,
      questionText,
      options: [
        { key: 'A', text: optionA },
        { key: 'B', text: optionB },
        { key: 'C', text: optionC },
        { key: 'D', text: optionD },
      ],
      correctOption,
      explanation,
      awsDocTopic: awsDocTopic || 'AWS Cloud Architecture'
    });

    setQuestionText('');
    setOptionA('');
    setOptionB('');
    setOptionC('');
    setOptionD('');
    setExplanation('');
    setAwsDocTopic('');

    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 3000);
  };

  const handleAddAnnouncement = (e: React.FormEvent) => {
    e.preventDefault();
    if (!annTitle || !annDesc) return;

    soundEngine.playFloorAdded();
    addNewAnnouncement({
      title: annTitle,
      category: annCategory,
      description: annDesc,
      linkUrl: annLink || '#',
      linkText: annLinkText,
      date: 'Just now',
      isHot: true
    });

    setAnnTitle('');
    setAnnDesc('');
    setAnnLink('');
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 3000);
  };

  const handleLoadSampleQuestion = () => {
    soundEngine.playTap();
    setQuestionText('A media company needs to distribute low-latency video streaming content globally while preventing unauthorized downloads through geo-restrictions. Which AWS solution meets this requirement?');
    setOptionA('Amazon CloudFront with Signed URLs and Geo-restriction enabled.');
    setOptionB('Amazon S3 with Cross-Region Replication to all regions.');
    setOptionC('AWS Direct Connect with dedicated fiber optic links.');
    setOptionD('Elastic Load Balancing with AWS Global Accelerator.');
    setCorrectOption('A');
    setDomain('Cloud Architecture & Cost');
    setDifficulty('Associate');
    setExplanation('Amazon CloudFront is a global Content Delivery Network (CDN) with built-in support for signed URLs/cookies for access control and geo-restriction to restrict viewers in specific countries.');
    setAwsDocTopic('Amazon CloudFront Edge Optimization');
  };

  return (
    <div className="text-zinc-100 font-sans">
      
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 bg-zinc-950 border border-zinc-800 p-5 rounded-3xl">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-heading text-white">
              SPOC Administration Console
            </h1>
            <span className="px-2 py-0.2 rounded bg-purple-500/10 text-purple-300 border border-purple-500/30 text-[10px] font-mono font-bold uppercase">
              FACULTY/SPOC ONLY
            </span>
          </div>
          <p className="text-xs text-zinc-400 font-mono mt-1">
            Manage registered student accounts, master question banks, and weekly challenge sprints.
          </p>
        </div>

        {/* Active Week Switcher */}
        <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 p-2 rounded-2xl">
          <span className="text-xs font-mono font-bold text-zinc-400 pl-2">ACTIVE SPRINT:</span>
          {[1, 2, 3, 4].map((w) => (
            <button
              key={w}
              onClick={() => {
                soundEngine.playTap();
                setActiveWeek(w);
              }}
              className={`w-8 h-8 rounded-xl text-xs font-mono font-bold transition-all ${
                activeWeek === w
                  ? 'bg-aws-orange text-black shadow-sm'
                  : 'bg-zinc-800 text-zinc-400 hover:text-white'
              }`}
            >
              W{w}
            </button>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-6 border-b border-zinc-800 pb-2 overflow-x-auto">
        <button
          onClick={() => { soundEngine.playTap(); setActiveAdminTab('students'); }}
          className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
            activeAdminTab === 'students'
              ? 'bg-aws-orange text-black font-bold'
              : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Student Directory ({students.length})</span>
        </button>

        <button
          onClick={() => { soundEngine.playTap(); setActiveAdminTab('questions'); }}
          className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
            activeAdminTab === 'questions'
              ? 'bg-aws-orange text-black font-bold'
              : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
          }`}
        >
          <PlusCircle className="w-4 h-4" />
          <span>Question Bank ({questions.length})</span>
        </button>

        <button
          onClick={() => { soundEngine.playTap(); setActiveAdminTab('announcements'); }}
          className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
            activeAdminTab === 'announcements'
              ? 'bg-aws-orange text-black font-bold'
              : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
          }`}
        >
          <Radio className="w-4 h-4" />
          <span>Broadcast Events ({announcements.length})</span>
        </button>

        <button
          onClick={() => { soundEngine.playTap(); setActiveAdminTab('settings'); }}
          className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
            activeAdminTab === 'settings'
              ? 'bg-aws-orange text-black font-bold'
              : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
          }`}
        >
          <RefreshCw className="w-4 h-4" />
          <span>Dev Controls</span>
        </button>
      </div>

      {/* Success Notification */}
      {showSuccessToast && (
        <div className="mb-6 p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/50 text-emerald-300 text-xs font-mono font-bold flex items-center gap-2 animate-fade-in">
          <CheckCircle2 className="w-4 h-4" />
          <span>Operation completed successfully! Database updated.</span>
        </div>
      )}

      {/* Tab 1: Student Directory & Removal */}
      {activeAdminTab === 'students' && (
        <div className="space-y-4">
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-zinc-950 border border-zinc-800 p-3 rounded-2xl">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filter by name, roll number, or department..."
                value={studentSearch}
                onChange={(e) => setStudentSearch(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-10 pr-4 py-2 text-xs font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-aws-orange"
              />
            </div>
            <span className="text-xs font-mono text-zinc-400 self-center">
              Showing {filteredStudents.length} of {students.length} Registered Students
            </span>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-zinc-900/80 text-zinc-400 text-[11px] uppercase tracking-wider border-b border-zinc-800">
                  <tr>
                    <th className="py-3.5 px-4">Student</th>
                    <th className="py-3.5 px-4">Roll Number</th>
                    <th className="py-3.5 px-4">Department & Year</th>
                    <th className="py-3.5 px-4 text-center">Floors</th>
                    <th className="py-3.5 px-4 text-center">Streak</th>
                    <th className="py-3.5 px-4 text-right">Points</th>
                    <th className="py-3.5 px-4 text-center w-28">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/60">
                  {filteredStudents.map((student) => (
                    <tr key={student.id} className="hover:bg-zinc-900/40 transition-colors">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2.5">
                          <img src={student.avatar} alt={student.name} className="w-7 h-7 rounded-lg bg-zinc-800" />
                          <span className="font-bold text-white">{student.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-cyan-400">{student.rollNumber}</td>
                      <td className="py-3 px-4 text-zinc-300">{student.department} • Year {student.year}</td>
                      <td className="py-3 px-4 text-center text-aws-orange font-bold">{student.floors}F</td>
                      <td className="py-3 px-4 text-center text-amber-400">{student.streak}d</td>
                      <td className="py-3 px-4 text-right font-bold text-white">{student.points}</td>
                      <td className="py-3 px-4 text-center">
                        <button
                          onClick={() => setStudentToRemove(student)}
                          className="p-1.5 rounded-lg bg-rose-950/40 text-rose-400 hover:bg-rose-900/60 border border-rose-500/30 transition-all inline-flex items-center gap-1 text-[10px]"
                          title="Remove student from database"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Remove</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Delete Confirmation Modal */}
          {studentToRemove && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in font-mono">
              <div className="bg-zinc-950 border border-rose-500/40 rounded-3xl p-6 max-w-sm w-full text-center shadow-2xl">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white mb-1">Remove Student Account?</h3>
                <p className="text-xs text-zinc-400 mb-6">
                  Are you sure you want to remove <strong className="text-white">{studentToRemove.name}</strong> ({studentToRemove.rollNumber})? Their 3D tower and scores will be deleted.
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleConfirmRemove}
                    className="flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs transition-all"
                  >
                    Yes, Remove
                  </button>
                  <button
                    onClick={() => setStudentToRemove(null)}
                    className="flex-1 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-semibold text-xs border border-zinc-700 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      )}

      {/* Tab 2: Question Bank */}
      {activeAdminTab === 'questions' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-zinc-950 border border-zinc-800 rounded-3xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-mono font-bold text-white flex items-center gap-2">
                <PlusCircle className="w-4 h-4 text-aws-orange" />
                Create AWS Certification MCQ
              </h2>

              <button
                type="button"
                onClick={handleLoadSampleQuestion}
                className="text-[11px] font-mono font-bold text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-2.5 py-1 rounded-lg flex items-center gap-1"
              >
                <Sparkles className="w-3 h-3" />
                <span>Auto-Fill Cert Sample</span>
              </button>
            </div>

            <form onSubmit={handleAddQuestion} className="space-y-4 text-xs font-mono">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-zinc-400 font-semibold mb-1">Week Schedule</label>
                  <select
                    value={weekNum}
                    onChange={(e) => setWeekNum(Number(e.target.value))}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-aws-orange"
                  >
                    <option value={1}>Week 1 (Active)</option>
                    <option value={2}>Week 2</option>
                    <option value={3}>Week 3</option>
                    <option value={4}>Week 4</option>
                  </select>
                </div>

                <div>
                  <label className="block text-zinc-400 font-semibold mb-1">Cert Domain</label>
                  <select
                    value={domain}
                    onChange={(e) => setDomain(e.target.value as CertDomain)}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-aws-orange"
                  >
                    <option value="IAM & Security">IAM & Security</option>
                    <option value="Compute (EC2 & Lambda)">Compute (EC2 & Lambda)</option>
                    <option value="Storage (S3 & EBS)">Storage (S3 & EBS)</option>
                    <option value="VPC & Networking">VPC & Networking</option>
                    <option value="Databases (RDS & DynamoDB)">Databases (RDS & DynamoDB)</option>
                    <option value="Cloud Architecture & Cost">Cloud Architecture & Cost</option>
                  </select>
                </div>

                <div>
                  <label className="block text-zinc-400 font-semibold mb-1">Difficulty</label>
                  <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value as 'Beginner' | 'Associate' | 'Pro')}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-aws-orange"
                  >
                    <option value="Beginner">Beginner (Cloud Practitioner)</option>
                    <option value="Associate">Associate (Solutions Architect)</option>
                    <option value="Pro">Pro / Specialty</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-zinc-400 font-semibold mb-1">Question Text</label>
                <textarea
                  rows={3}
                  required
                  placeholder="e.g. An enterprise needs to host an application across Multi-AZ..."
                  value={questionText}
                  onChange={(e) => setQuestionText(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-white focus:outline-none focus:border-aws-orange"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-zinc-400 font-semibold">Options (Select Correct Key on Left)</label>
                {[
                  { key: 'A', val: optionA, setVal: setOptionA },
                  { key: 'B', val: optionB, setVal: setOptionB },
                  { key: 'C', val: optionC, setVal: setOptionC },
                  { key: 'D', val: optionD, setVal: setOptionD },
                ].map(({ key, val, setVal }) => (
                  <div key={key} className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setCorrectOption(key as 'A' | 'B' | 'C' | 'D')}
                      className={`w-7 h-7 rounded-lg font-mono font-bold flex items-center justify-center transition-all ${
                        correctOption === key 
                          ? 'bg-emerald-500 text-black shadow-sm' 
                          : 'bg-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      {key}
                    </button>
                    <input
                      type="text"
                      required
                      placeholder={`Option ${key} text...`}
                      value={val}
                      onChange={(e) => setVal(e.target.value)}
                      className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-1.5 text-white focus:outline-none focus:border-aws-orange"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-zinc-400 font-semibold mb-1">Architectural Explanation</label>
                <textarea
                  rows={2}
                  required
                  placeholder="Explain why the answer is correct..."
                  value={explanation}
                  onChange={(e) => setExplanation(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-white focus:outline-none focus:border-aws-orange"
                />
              </div>

              <div>
                <label className="block text-zinc-400 font-semibold mb-1">AWS Topic Tag</label>
                <input
                  type="text"
                  placeholder="e.g. Amazon Route 53 DNS Policies"
                  value={awsDocTopic}
                  onChange={(e) => setAwsDocTopic(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-aws-orange"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-aws-orange hover:bg-amber-500 text-zinc-950 font-bold text-xs flex items-center justify-center gap-2"
              >
                <Save className="w-4 h-4" />
                <span>Save Question to Week {weekNum}</span>
              </button>
            </form>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-5 shadow-xl font-mono">
            <h3 className="text-xs font-bold text-white mb-3 flex items-center justify-between">
              <span>Master Question Bank</span>
              <span className="text-aws-orange">{questions.length} Items</span>
            </h3>

            <div className="space-y-2.5 max-h-[560px] overflow-y-auto pr-1">
              {questions.map((q, idx) => (
                <div key={q.id} className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-[11px]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-zinc-400 font-bold">W{q.weekNumber} • Q{idx + 1}</span>
                    <span className="text-cyan-400 truncate max-w-[120px]">{q.domain}</span>
                  </div>
                  <p className="text-zinc-200 line-clamp-2">{q.questionText}</p>
                  <div className="mt-1 text-emerald-400 font-bold">
                    Correct: Option {q.correctOption}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Announcements */}
      {activeAdminTab === 'announcements' && (
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 shadow-xl max-w-xl mx-auto font-mono text-xs">
          <h2 className="text-sm font-bold text-white flex items-center gap-2 mb-4">
            <Radio className="w-4 h-4 text-aws-orange" />
            Publish Community Event / Voucher Announcement
          </h2>

          <form onSubmit={handleAddAnnouncement} className="space-y-4">
            <div>
              <label className="block text-zinc-400 font-semibold mb-1">Title</label>
              <input
                type="text"
                required
                placeholder="e.g. AWS Student Cloud Day Registrations Open"
                value={annTitle}
                onChange={(e) => setAnnTitle(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-aws-orange"
              />
            </div>

            <div>
              <label className="block text-zinc-400 font-semibold mb-1">Category</label>
              <select
                value={annCategory}
                onChange={(e) => setAnnCategory(e.target.value as 'Voucher' | 'Event' | 'Workshop' | 'Certification')}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-aws-orange"
              >
                <option value="Voucher">Exam Discount Voucher</option>
                <option value="Event">Community Event</option>
                <option value="Workshop">Technical Workshop</option>
              </select>
            </div>

            <div>
              <label className="block text-zinc-400 font-semibold mb-1">Description</label>
              <textarea
                rows={3}
                required
                placeholder="Event details, date, timing, and prerequisites..."
                value={annDesc}
                onChange={(e) => setAnnDesc(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-white focus:outline-none focus:border-aws-orange"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-zinc-400 font-semibold mb-1">Link URL</label>
                <input
                  type="url"
                  placeholder="https://..."
                  value={annLink}
                  onChange={(e) => setAnnLink(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-aws-orange"
                />
              </div>

              <div>
                <label className="block text-zinc-400 font-semibold mb-1">Link Label</label>
                <input
                  type="text"
                  placeholder="Register Now"
                  value={annLinkText}
                  onChange={(e) => setAnnLinkText(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-aws-orange"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-aws-orange hover:bg-amber-500 text-zinc-950 font-bold text-xs"
            >
              Broadcast Announcement
            </button>
          </form>
        </div>
      )}

      {/* Tab 4: Dev Controls */}
      {activeAdminTab === 'settings' && (
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 shadow-xl max-w-xl mx-auto space-y-4 font-mono text-xs">
          <h2 className="text-sm font-bold text-white flex items-center gap-2 mb-2">
            <RefreshCw className="w-4 h-4 text-aws-orange" />
            Developer & Demo Controls
          </h2>

          <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-between">
            <div>
              <div className="font-bold text-white">Replenish Player Hearts (5/5)</div>
              <div className="text-[11px] text-zinc-400">Instantly bypass the 45-minute refill cooldown for testing</div>
            </div>
            <button
              onClick={() => {
                refillHearts();
                setShowSuccessToast(true);
                setTimeout(() => setShowSuccessToast(false), 2000);
              }}
              className="px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold"
            >
              Refill Hearts
            </button>
          </div>

          <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-between">
            <div>
              <div className="font-bold text-white">Reset Local Database</div>
              <div className="text-[11px] text-zinc-400">Clear test storage and revert to fresh default roster</div>
            </div>
            <button
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
              className="bg-rose-950/60 hover:bg-rose-900/60 text-rose-300 border border-rose-500/40 px-3 py-1.5 rounded-xl font-bold"
            >
              Clear Storage
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
