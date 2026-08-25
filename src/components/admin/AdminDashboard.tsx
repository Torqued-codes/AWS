import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { CertDomain, Student, Question, Announcement, Department, Gender, DEPARTMENTS } from '../../types';
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
  Pencil,
  X,
  UserPlus,
  AlertTriangle,
  FileUp
} from 'lucide-react';
import { soundEngine } from '../../utils/soundEngine';
import { BulkImportModal } from './BulkImportModal';

const CARD = 'bg-neutral-900/60 border border-neutral-800 rounded-xl shadow-2xl backdrop-blur-md';
const INPUT = 'w-full bg-neutral-950/80 border border-neutral-800 rounded-lg px-3 py-2 text-sm font-sans text-white placeholder-neutral-500 focus:outline-none focus:border-aws-orange transition-colors';
const LABEL = 'block text-[11px] font-stats tracking-wide uppercase text-neutral-400 mb-1.5';

const CATEGORY_PRESETS: { value: string; label: string }[] = [
  { value: 'Voucher', label: 'Exam Discount Voucher' },
  { value: 'Event', label: 'Community Event' },
  { value: 'Workshop', label: 'Technical Workshop' },
  { value: 'Certification', label: 'Certification' },
  { value: 'Hackathon', label: 'Hackathon' },
];
const CUSTOM_CATEGORY_VALUE = '__custom__';

const emptyQuestionForm = {
  domain: 'IAM & Security' as CertDomain,
  difficulty: 'Associate' as 'Beginner' | 'Associate' | 'Pro',
  questionText: '',
  optionA: '',
  optionB: '',
  optionC: '',
  optionD: '',
  correctOption: 'A' as 'A' | 'B' | 'C' | 'D',
  explanation: '',
  awsDocTopic: '',
};

export const AdminDashboard: React.FC = () => {
  const { 
    activeWeek, 
    setActiveWeek, 
    questions, 
    addNewQuestion,
    editQuestion,
    deleteQuestion,
    deleteAllQuestions,
    addNewAnnouncement, 
    editAnnouncement,
    deleteAnnouncement,
    announcements,
    students,
    removeStudent,
    addNewStudent,
    refillAllHearts,
  } = useGame();

  const [activeAdminTab, setActiveAdminTab] = useState<'students' | 'questions' | 'announcements' | 'settings'>('students');
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [studentSearch, setStudentSearch] = useState('');
  const [studentDeptFilter, setStudentDeptFilter] = useState<Department | 'ALL'>('ALL');
  const [studentToRemove, setStudentToRemove] = useState<Student | null>(null);

  // ── Add Student form ──────────────────────────────────────────────
  const [showAddStudent, setShowAddStudent] = useState(false);
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentRoll, setNewStudentRoll] = useState('');
  const [newStudentDept, setNewStudentDept] = useState<Department>('CSE');
  const [newStudentYear, setNewStudentYear] = useState<1 | 2 | 3 | 4>(1);
  const [newStudentGender, setNewStudentGender] = useState<Gender | ''>('');

  // ── Question form state (shared by add + edit) ────────────────────
  const [editingQuestionId, setEditingQuestionId] = useState<string | null>(null);
  const [weekNum, setWeekNum] = useState<number>(activeWeek);
  const [domain, setDomain] = useState<CertDomain>(emptyQuestionForm.domain);
  const [difficulty, setDifficulty] = useState<'Beginner' | 'Associate' | 'Pro'>(emptyQuestionForm.difficulty);
  const [questionText, setQuestionText] = useState(emptyQuestionForm.questionText);
  const [optionA, setOptionA] = useState(emptyQuestionForm.optionA);
  const [optionB, setOptionB] = useState(emptyQuestionForm.optionB);
  const [optionC, setOptionC] = useState(emptyQuestionForm.optionC);
  const [optionD, setOptionD] = useState(emptyQuestionForm.optionD);
  const [correctOption, setCorrectOption] = useState<'A' | 'B' | 'C' | 'D'>(emptyQuestionForm.correctOption);
  const [explanation, setExplanation] = useState(emptyQuestionForm.explanation);
  const [awsDocTopic, setAwsDocTopic] = useState(emptyQuestionForm.awsDocTopic);
  const [questionToDelete, setQuestionToDelete] = useState<Question | null>(null);
  const [showDeleteAllQuestionsConfirm, setShowDeleteAllQuestionsConfirm] = useState(false);

  // ── Announcement form state (shared by add + edit) ─────────────────
  const [editingAnnouncementId, setEditingAnnouncementId] = useState<string | null>(null);
  const [annTitle, setAnnTitle] = useState('');
  const [annCategorySelect, setAnnCategorySelect] = useState<string>('Voucher');
  const [annCustomCategory, setAnnCustomCategory] = useState('');
  const [annDesc, setAnnDesc] = useState('');
  const [annLink, setAnnLink] = useState('');
  const [annLinkText, setAnnLinkText] = useState('Register Now');
  const [announcementToDelete, setAnnouncementToDelete] = useState<Announcement | null>(null);

  // AI Bulk Question Importer (PDF/DOCX) — separate modal, keeps the
  // manual question creation form below completely untouched.
  const [showBulkImport, setShowBulkImport] = useState(false);

  const flashSuccess = () => {
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 2500);
  };

  const filteredStudents = students.filter(s => {
    const matchesSearch =
      s.name.toLowerCase().includes(studentSearch.toLowerCase()) ||
      s.rollNumber.toLowerCase().includes(studentSearch.toLowerCase()) ||
      s.department.toLowerCase().includes(studentSearch.toLowerCase());
    const matchesDept = studentDeptFilter === 'ALL' || s.department === studentDeptFilter;
    return matchesSearch && matchesDept;
  });

  const handleConfirmRemove = () => {
    if (!studentToRemove) return;
    removeStudent(studentToRemove.id);
    setStudentToRemove(null);
    flashSuccess();
  };

  const resetAddStudentForm = () => {
    setNewStudentName('');
    setNewStudentRoll('');
    setNewStudentDept('CSE');
    setNewStudentYear(1);
    setNewStudentGender('');
  };

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStudentName.trim() || !newStudentRoll.trim()) return;

    addNewStudent({
      name: newStudentName.trim(),
      rollNumber: newStudentRoll.trim(),
      department: newStudentDept,
      year: newStudentYear,
      gender: newStudentGender || undefined,
    });

    resetAddStudentForm();
    setShowAddStudent(false);
    flashSuccess();
  };

  const resetQuestionForm = () => {
    setEditingQuestionId(null);
    setWeekNum(activeWeek);
    setDomain(emptyQuestionForm.domain);
    setDifficulty(emptyQuestionForm.difficulty);
    setQuestionText('');
    setOptionA('');
    setOptionB('');
    setOptionC('');
    setOptionD('');
    setCorrectOption('A');
    setExplanation('');
    setAwsDocTopic('');
  };

  const handleEditQuestionClick = (q: Question) => {
    soundEngine.playTap();
    setEditingQuestionId(q.id);
    setWeekNum(q.weekNumber);
    setDomain(q.domain);
    setDifficulty(q.difficulty);
    setQuestionText(q.questionText);
    setOptionA(q.options.find(o => o.key === 'A')?.text || '');
    setOptionB(q.options.find(o => o.key === 'B')?.text || '');
    setOptionC(q.options.find(o => o.key === 'C')?.text || '');
    setOptionD(q.options.find(o => o.key === 'D')?.text || '');
    setCorrectOption(q.correctOption);
    setExplanation(q.explanation);
    setAwsDocTopic(q.awsDocTopic);
  };

  const handleSubmitQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!questionText || !optionA || !optionB || !optionC || !optionD || !explanation) return;

    const payload = {
      weekNumber: Number(weekNum),
      domain,
      difficulty,
      questionText,
      options: [
        { key: 'A' as const, text: optionA },
        { key: 'B' as const, text: optionB },
        { key: 'C' as const, text: optionC },
        { key: 'D' as const, text: optionD },
      ],
      correctOption,
      explanation,
      awsDocTopic: awsDocTopic || 'AWS Cloud Architecture'
    };

    soundEngine.playFloorAdded();

    if (editingQuestionId) {
      editQuestion({ id: editingQuestionId, ...payload });
    } else {
      addNewQuestion(payload);
    }

    resetQuestionForm();
    flashSuccess();
  };

  const handleConfirmDeleteQuestion = () => {
    if (!questionToDelete) return;
    deleteQuestion(questionToDelete.id);
    if (editingQuestionId === questionToDelete.id) resetQuestionForm();
    setQuestionToDelete(null);
    flashSuccess();
  };

  const handleConfirmDeleteAllQuestions = () => {
    deleteAllQuestions();
    resetQuestionForm();
    setShowDeleteAllQuestionsConfirm(false);
    flashSuccess();
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

  const resetAnnouncementForm = () => {
    setEditingAnnouncementId(null);
    setAnnTitle('');
    setAnnCategorySelect('Voucher');
    setAnnCustomCategory('');
    setAnnDesc('');
    setAnnLink('');
    setAnnLinkText('Register Now');
  };

  const handleEditAnnouncementClick = (a: Announcement) => {
    soundEngine.playTap();
    setEditingAnnouncementId(a.id);
    setAnnTitle(a.title);
    const matchesPreset = CATEGORY_PRESETS.some(p => p.value === a.category);
    if (matchesPreset) {
      setAnnCategorySelect(a.category);
      setAnnCustomCategory('');
    } else {
      setAnnCategorySelect(CUSTOM_CATEGORY_VALUE);
      setAnnCustomCategory(a.category);
    }
    setAnnDesc(a.description);
    setAnnLink(a.linkUrl === '#' ? '' : a.linkUrl);
    setAnnLinkText(a.linkText);
  };

  const handleSubmitAnnouncement = (e: React.FormEvent) => {
    e.preventDefault();
    const finalCategory = annCategorySelect === CUSTOM_CATEGORY_VALUE
      ? annCustomCategory.trim()
      : annCategorySelect;
    if (!annTitle || !annDesc || !finalCategory) return;

    soundEngine.playFloorAdded();

    if (editingAnnouncementId) {
      editAnnouncement({
        id: editingAnnouncementId,
        title: annTitle,
        category: finalCategory,
        description: annDesc,
        linkUrl: annLink || '#',
        linkText: annLinkText,
        date: announcements.find(a => a.id === editingAnnouncementId)?.date || 'Just now',
        isHot: true,
      });
    } else {
      addNewAnnouncement({
        title: annTitle,
        category: finalCategory,
        description: annDesc,
        linkUrl: annLink || '#',
        linkText: annLinkText,
        date: 'Just now',
        isHot: true
      });
    }

    resetAnnouncementForm();
    flashSuccess();
  };

  const handleConfirmDeleteAnnouncement = () => {
    if (!announcementToDelete) return;
    deleteAnnouncement(announcementToDelete.id);
    if (editingAnnouncementId === announcementToDelete.id) resetAnnouncementForm();
    setAnnouncementToDelete(null);
    flashSuccess();
  };

  return (
    <div className="text-zinc-100 font-sans">
      
      {/* Top Banner */}
      <div className={`flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 ${CARD} p-6`}>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-display font-bold text-white">
              Administration Console
            </h1>
        
          </div>
          <p className="text-xs text-zinc-400 font-sans mt-1.5">
            Manage registered student accounts, master question banks, and weekly challenge sprints.
          </p>
        </div>

        {/* Active Week Switcher */}
        <div className="flex items-center gap-2 bg-neutral-950/60 border border-neutral-800 p-2 rounded-lg">
          <span className="text-[11px] font-stats font-semibold text-zinc-400 pl-2 uppercase tracking-wide">Active Sprint</span>
          {[1, 2, 3, 4].map((w) => (
            <button
              key={w}
              onClick={() => {
                soundEngine.playTap();
                setActiveWeek(w);
              }}
              className={`w-8 h-8 rounded-lg text-xs font-stats font-bold transition-all ${
                activeWeek === w
                  ? 'bg-aws-orange text-black shadow-sm'
                  : 'bg-neutral-900 text-zinc-400 hover:text-white'
              }`}
            >
              W{w}
            </button>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-6 border-b border-neutral-800 pb-2 overflow-x-auto">
        <button
          onClick={() => { soundEngine.playTap(); setActiveAdminTab('students'); }}
          className={`px-4 py-2 rounded-lg text-xs font-sans font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
            activeAdminTab === 'students'
              ? 'bg-aws-orange text-black font-bold'
              : 'text-zinc-400 hover:text-white hover:bg-neutral-900'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Student Directory ({students.length})</span>
        </button>

        <button
          onClick={() => { soundEngine.playTap(); setActiveAdminTab('questions'); }}
          className={`px-4 py-2 rounded-lg text-xs font-sans font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
            activeAdminTab === 'questions'
              ? 'bg-aws-orange text-black font-bold'
              : 'text-zinc-400 hover:text-white hover:bg-neutral-900'
          }`}
        >
          <PlusCircle className="w-4 h-4" />
          <span>Question Bank ({questions.length})</span>
        </button>

        <button
          onClick={() => { soundEngine.playTap(); setActiveAdminTab('announcements'); }}
          className={`px-4 py-2 rounded-lg text-xs font-sans font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
            activeAdminTab === 'announcements'
              ? 'bg-aws-orange text-black font-bold'
              : 'text-zinc-400 hover:text-white hover:bg-neutral-900'
          }`}
        >
          <Radio className="w-4 h-4" />
          <span>Broadcast Events ({announcements.length})</span>
        </button>

        <button
          onClick={() => { soundEngine.playTap(); setActiveAdminTab('settings'); }}
          className={`px-4 py-2 rounded-lg text-xs font-sans font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
            activeAdminTab === 'settings'
              ? 'bg-aws-orange text-black font-bold'
              : 'text-zinc-400 hover:text-white hover:bg-neutral-900'
          }`}
        >
          <RefreshCw className="w-4 h-4" />
          <span>Dev Controls</span>
        </button>
      </div>

      {/* Success Notification */}
      {showSuccessToast && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-emerald-300 text-xs font-sans font-semibold flex items-center gap-2 animate-fade-in">
          <CheckCircle2 className="w-4 h-4" />
          <span>Operation completed successfully! Database updated.</span>
        </div>
      )}

      {/* Tab 1: Student Directory & Removal */}
      {activeAdminTab === 'students' && (
        <div className="space-y-4">
          
          <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 ${CARD} p-3`}>
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filter by name, roll number, or department..."
                value={studentSearch}
                onChange={(e) => setStudentSearch(e.target.value)}
                className="w-full bg-neutral-950/80 border border-neutral-800 rounded-lg pl-10 pr-4 py-2 text-xs font-sans text-white placeholder-zinc-500 focus:outline-none focus:border-aws-orange"
              />
            </div>

            <select
              value={studentDeptFilter}
              onChange={(e) => setStudentDeptFilter(e.target.value as Department | 'ALL')}
              className="bg-neutral-950/80 border border-neutral-800 rounded-lg px-3 py-2 text-xs font-sans text-white focus:outline-none focus:border-aws-orange sm:w-44"
            >
              <option value="ALL">All Departments</option>
              {DEPARTMENTS.map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>

            <span className="text-xs font-sans text-zinc-400 self-center whitespace-nowrap">
              {filteredStudents.length} of {students.length} students
            </span>

            <button
              onClick={() => { soundEngine.playTap(); setShowAddStudent(v => !v); }}
              className="px-3.5 py-2 rounded-lg bg-aws-orange hover:bg-amber-500 text-zinc-950 text-xs font-sans font-bold flex items-center justify-center gap-1.5 transition-all whitespace-nowrap"
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>Add Student</span>
            </button>
          </div>

          {/* Add Student Form */}
          {showAddStudent && (
            <div className={`${CARD} p-5 animate-fade-in`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-display font-bold text-white">Register New Student</h3>
                <button
                  onClick={() => { setShowAddStudent(false); resetAddStudentForm(); }}
                  className="p-1 rounded-lg text-zinc-500 hover:text-white hover:bg-neutral-800 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <form onSubmit={handleAddStudent} className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                <div className="sm:col-span-2">
                  <label className={LABEL}>Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={newStudentName}
                    onChange={(e) => setNewStudentName(e.target.value)}
                    className={INPUT}
                  />
                </div>
                <div>
                  <label className={LABEL}>Roll Number</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 24CS123"
                    value={newStudentRoll}
                    onChange={(e) => setNewStudentRoll(e.target.value)}
                    className={INPUT}
                  />
                </div>
                <div>
                  <label className={LABEL}>Department</label>
                  <select
                    value={newStudentDept}
                    onChange={(e) => setNewStudentDept(e.target.value as Department)}
                    className={INPUT}
                  >
                    {DEPARTMENTS.map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={LABEL}>Year</label>
                  <select
                    value={newStudentYear}
                    onChange={(e) => setNewStudentYear(Number(e.target.value) as 1 | 2 | 3 | 4)}
                    className={INPUT}
                  >
                    <option value={1}>Year 1</option>
                    <option value={2}>Year 2</option>
                    <option value={3}>Year 3</option>
                    <option value={4}>Year 4</option>
                    <option value={5}>Year 5</option>
                    <option value={6}>Year 6</option>
                    <option value={7}>Year 7</option>
                    <option value={8}>Year 8</option>
                    <option value={9}>Year 9</option>
                    <option value={10}>Year 10</option>
                    <option value={11}>Year 11</option>
                    <option value={12}>Year 12</option>
                    <option value={13}>Year 13</option>
                    <option value={14}>Year 14</option>
                    <option value={15}>Year 15</option>
                    <option value={16}>Year 16</option>
                    <option value={17}>Year 17</option>
                    <option value={18}>Year 18</option>
                    <option value={19}>Year 19</option>
                    <option value={20}>Year 20</option>
                    <option value={21}>Year 21</option>
                    <option value={22}>Year 22</option>
                    <option value={23}>Year 23</option>
                    <option value={24}>Year 24</option>
                    <option value={25}>Year 25</option>
                    <option value={26}>Year 26</option>
                    <option value={27}>Year 27</option>
                    <option value={28}>Year 28</option>
                    <option value={29}>Year 29</option>
                    <option value={30}>Year 30</option>
                    <option value={31}>Year 31</option>
                    <option value={32}>Year 32</option>
                    <option value={33}>Year 33</option>
                    <option value={34}>Year 34</option>
                    <option value={35}>Year 35</option>
                    <option value={36}>Year 36</option>
                    <option value={37}>Year 37</option>
                    <option value={38}>Year 38</option>
                    <option value={39}>Year 39</option>
                    <option value={40}>Year 40</option>
                    <option value={41}>Year 41</option>
                    <option value={42}>Year 42</option>
                    <option value={43}>Year 43</option>
                    <option value={44}>Year 44</option>
                    <option value={45}>Year 45</option>
                    <option value={46}>Year 46</option>
                    <option value={47}>Year 47</option>
                    <option value={48}>Year 48</option>
                    <option value={49}>Year 49</option>
                    <option value={50}>Year 50</option>
                    <option value={51}>Year 51</option>
                    <option value={52}>Year 52</option>
                  </select>
                </div>
                <div className="sm:col-span-5 flex items-end gap-3">
                  <div className="flex-1">
                    <label className={LABEL}>Gender (Optional)</label>
                    <select
                      value={newStudentGender}
                      onChange={(e) => setNewStudentGender(e.target.value as Gender | '')}
                      className={INPUT}
                    >
                      <option value="">Prefer not to say</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-lg bg-aws-orange hover:bg-amber-500 text-zinc-950 font-sans font-bold text-xs shrink-0"
                  >
                    Register Student
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className={`${CARD} overflow-hidden`}>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-sans">
                <thead className="bg-neutral-950/60 text-zinc-400 text-[11px] font-stats uppercase tracking-wider border-b border-neutral-800">
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
                <tbody className="divide-y divide-neutral-800/60">
                  {filteredStudents.map((student) => (
                    <tr key={student.id} className="hover:bg-neutral-900/40 transition-colors">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2.5">
                          <img src={student.avatar} alt={student.name} className="w-7 h-7 rounded-lg bg-zinc-800" />
                          <span className="font-semibold text-white">{student.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-cyan-400 font-stats">{student.rollNumber}</td>
                      <td className="py-3 px-4 text-zinc-300">{student.department} • Year {student.year}</td>
                      <td className="py-3 px-4 text-center text-aws-orange font-stats font-bold">{student.floors}F</td>
                      <td className="py-3 px-4 text-center text-amber-400 font-stats">{student.streak}d</td>
                      <td className="py-3 px-4 text-right font-stats font-bold text-white">{student.points}</td>
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
                  {filteredStudents.length === 0 && (
                    <tr>
                      <td colSpan={7} className="py-8 px-4 text-center text-zinc-500">
                        No students match this search / filter.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Delete Confirmation Modal */}
          {studentToRemove && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in font-sans">
              <div className="bg-neutral-900/95 border border-rose-500/40 rounded-xl p-6 max-w-sm w-full text-center shadow-2xl backdrop-blur-md">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="text-base font-display font-bold text-white mb-1">Remove Student Account?</h3>
                <p className="text-xs text-zinc-400 mb-6">
                  Are you sure you want to remove <strong className="text-white">{studentToRemove.name}</strong> ({studentToRemove.rollNumber})? Their 3D tower and scores will be deleted.
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleConfirmRemove}
                    className="flex-1 py-2.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs transition-all"
                  >
                    Yes, Remove
                  </button>
                  <button
                    onClick={() => setStudentToRemove(null)}
                    className="flex-1 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-zinc-300 font-semibold text-xs border border-neutral-700 transition-all"
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
          <div className={`lg:col-span-2 ${CARD} p-6`}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-display font-bold text-white flex items-center gap-2">
                <PlusCircle className="w-4 h-4 text-aws-orange" />
                {editingQuestionId ? 'Edit AWS Certification MCQ' : 'Create AWS Certification MCQ'}
              </h2>

              <div className="flex items-center gap-2">
                {editingQuestionId && (
                  <button
                    type="button"
                    onClick={() => { soundEngine.playTap(); resetQuestionForm(); }}
                    className="text-[11px] font-sans font-semibold text-zinc-400 hover:text-white bg-neutral-800/60 border border-neutral-700 px-2.5 py-1 rounded-lg flex items-center gap-1"
                  >
                    <X className="w-3 h-3" />
                    <span>Cancel Edit</span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => { soundEngine.playTap(); setShowBulkImport(true); }}
                  className="text-[11px] font-sans font-semibold text-black bg-aws-orange hover:bg-amber-500 px-2.5 py-1 rounded-lg flex items-center gap-1"
                >
                  <FileUp className="w-3 h-3" />
                  <span>Bulk Import (PDF/DOCX)</span>
                </button>
                <button
                  type="button"
                  onClick={handleLoadSampleQuestion}
                  className="text-[11px] font-sans font-semibold text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-2.5 py-1 rounded-lg flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>Auto-Fill Cert Sample</span>
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmitQuestion} className="space-y-4 text-xs font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className={LABEL}>Week Schedule</label>
                  <select
                    value={weekNum}
                    onChange={(e) => setWeekNum(Number(e.target.value))}
                    className={INPUT}
                  >
                    <option value={1}>Week 1</option>
                    <option value={2}>Week 2</option>
                    <option value={3}>Week 3</option>
                    <option value={4}>Week 4</option>
                    <option value={5}>Week 5</option>
                    <option value={6}>Week 6</option>
                    
                  </select>
                </div>

                <div>
                  <label className={LABEL}>Cert Domain</label>
                  <select
                    value={domain}
                    onChange={(e) => setDomain(e.target.value as CertDomain)}
                    className={INPUT}
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
                  <label className={LABEL}>Difficulty</label>
                  <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value as 'Beginner' | 'Associate' | 'Pro')}
                    className={INPUT}
                  >
                    <option value="Beginner">Beginner (Cloud Practitioner)</option>
                    <option value="Associate">Associate (Solutions Architect)</option>
                    <option value="Pro">Pro / Specialty</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={LABEL}>Question Text</label>
                <textarea
                  rows={3}
                  required
                  placeholder="e.g. An enterprise needs to host an application across Multi-AZ..."
                  value={questionText}
                  onChange={(e) => setQuestionText(e.target.value)}
                  className={INPUT}
                />
              </div>

              <div className="space-y-2">
                <label className={LABEL}>Options (Select Correct Key on Left)</label>
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
                      className={`w-7 h-7 rounded-lg font-stats font-bold flex items-center justify-center transition-all shrink-0 ${
                        correctOption === key 
                          ? 'bg-emerald-500 text-black shadow-sm' 
                          : 'bg-neutral-800 text-zinc-400 hover:text-white'
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
                      className={`flex-1 ${INPUT}`}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className={LABEL}>Architectural Explanation</label>
                <textarea
                  rows={2}
                  required
                  placeholder="Explain why the answer is correct..."
                  value={explanation}
                  onChange={(e) => setExplanation(e.target.value)}
                  className={INPUT}
                />
              </div>

              <div>
                <label className={LABEL}>AWS Topic Tag</label>
                <input
                  type="text"
                  placeholder="e.g. Amazon Route 53 DNS Policies"
                  value={awsDocTopic}
                  onChange={(e) => setAwsDocTopic(e.target.value)}
                  className={INPUT}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-aws-orange hover:bg-amber-500 text-zinc-950 font-bold text-xs flex items-center justify-center gap-2"
              >
                <Save className="w-4 h-4" />
                <span>{editingQuestionId ? `Update Question` : `Save Question to Week ${weekNum}`}</span>
              </button>
            </form>
          </div>

          <div className={`${CARD} p-5`}>
            <h3 className="text-xs font-display font-bold text-white mb-3 flex items-center justify-between">
              <span>Master Question Bank</span>
              <div className="flex items-center gap-2">
                <span className="text-aws-orange font-stats">{questions.length} Items</span>
                {questions.length > 0 && (
                  <button
                    onClick={() => setShowDeleteAllQuestionsConfirm(true)}
                    className="flex items-center gap-1 px-2 py-1 rounded-lg bg-rose-950/40 hover:bg-rose-900/60 text-rose-400 border border-rose-500/30 transition-colors text-[10px] font-bold"
                    title="Delete all questions"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Delete All</span>
                  </button>
                )}
              </div>
            </h3>

            <div className="space-y-2.5 max-h-[560px] overflow-y-auto pr-1">
              {questions.map((q, idx) => (
                <div key={q.id} className={`p-3 bg-neutral-950/60 border rounded-lg text-[11px] font-sans ${editingQuestionId === q.id ? 'border-aws-orange/60' : 'border-neutral-800'}`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-zinc-400 font-stats font-bold">W{q.weekNumber} • Q{idx + 1}</span>
                    <span className="text-cyan-400 truncate max-w-[100px]">{q.domain}</span>
                  </div>
                  <p className="text-zinc-200 line-clamp-2">{q.questionText}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-emerald-400 font-stats font-bold">
                      Correct: {q.correctOption}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleEditQuestionClick(q)}
                        className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-zinc-300 hover:text-white transition-colors"
                        title="Edit question"
                      >
                        <Pencil className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => setQuestionToDelete(q)}
                        className="p-1.5 rounded-lg bg-rose-950/40 hover:bg-rose-900/60 text-rose-400 border border-rose-500/30 transition-colors"
                        title="Delete question"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {questions.length === 0 && (
                <div className="py-8 text-center text-zinc-500 text-xs">No questions in the bank yet.</div>
              )}
            </div>
          </div>

          {/* Delete Question Confirmation */}
          {questionToDelete && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in font-sans">
              <div className="bg-neutral-900/95 border border-rose-500/40 rounded-xl p-6 max-w-sm w-full text-center shadow-2xl backdrop-blur-md">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="text-base font-display font-bold text-white mb-1">Delete This Question?</h3>
                <p className="text-xs text-zinc-400 mb-6">
                  This will permanently remove it from Week {questionToDelete.weekNumber}'s question bank.
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleConfirmDeleteQuestion}
                    className="flex-1 py-2.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs transition-all"
                  >
                    Yes, Delete
                  </button>
                  <button
                    onClick={() => setQuestionToDelete(null)}
                    className="flex-1 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-zinc-300 font-semibold text-xs border border-neutral-700 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Delete All Questions Confirmation */}
          {showDeleteAllQuestionsConfirm && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in font-sans">
              <div className="bg-neutral-900/95 border border-rose-500/40 rounded-xl p-6 max-w-sm w-full text-center shadow-2xl backdrop-blur-md">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="text-base font-display font-bold text-white mb-1">Delete All Questions?</h3>
                <p className="text-xs text-zinc-400 mb-6">
                  This will permanently remove all <strong className="text-white">{questions.length}</strong> questions from the Master Question Bank across every week. This cannot be undone.
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleConfirmDeleteAllQuestions}
                    className="flex-1 py-2.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs transition-all"
                  >
                    Yes, Delete All
                  </button>
                  <button
                    onClick={() => setShowDeleteAllQuestionsConfirm(false)}
                    className="flex-1 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-zinc-300 font-semibold text-xs border border-neutral-700 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab 3: Announcements */}
      {activeAdminTab === 'announcements' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className={`${CARD} p-6 font-sans text-xs`}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-display font-bold text-white flex items-center gap-2">
                <Radio className="w-4 h-4 text-aws-orange" />
                {editingAnnouncementId ? 'Edit Broadcast' : 'Publish Community Event / Voucher Announcement'}
              </h2>
              {editingAnnouncementId && (
                <button
                  type="button"
                  onClick={() => { soundEngine.playTap(); resetAnnouncementForm(); }}
                  className="text-[11px] font-sans font-semibold text-zinc-400 hover:text-white bg-neutral-800/60 border border-neutral-700 px-2.5 py-1 rounded-lg flex items-center gap-1"
                >
                  <X className="w-3 h-3" />
                  <span>Cancel Edit</span>
                </button>
              )}
            </div>

            <form onSubmit={handleSubmitAnnouncement} className="space-y-4">
              <div>
                <label className={LABEL}>Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. AWS Student Cloud Day Registrations Open"
                  value={annTitle}
                  onChange={(e) => setAnnTitle(e.target.value)}
                  className={INPUT}
                />
              </div>

              <div>
                <label className={LABEL}>Category</label>
                <select
                  value={annCategorySelect}
                  onChange={(e) => setAnnCategorySelect(e.target.value)}
                  className={INPUT}
                >
                  {CATEGORY_PRESETS.map(p => (
                    <option key={p.value} value={p.value}>{p.label}</option>
                  ))}
                  <option value={CUSTOM_CATEGORY_VALUE}>Custom / Type manually...</option>
                </select>

                {annCategorySelect === CUSTOM_CATEGORY_VALUE && (
                  <input
                    type="text"
                    required
                    autoFocus
                    placeholder="Type a custom category tag..."
                    value={annCustomCategory}
                    onChange={(e) => setAnnCustomCategory(e.target.value)}
                    className={`${INPUT} mt-2`}
                  />
                )}
              </div>

              <div>
                <label className={LABEL}>Description</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Event details, date, timing, and prerequisites..."
                  value={annDesc}
                  onChange={(e) => setAnnDesc(e.target.value)}
                  className={INPUT}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={LABEL}>Link URL</label>
                  <input
                    type="url"
                    placeholder="https://..."
                    value={annLink}
                    onChange={(e) => setAnnLink(e.target.value)}
                    className={INPUT}
                  />
                </div>

                <div>
                  <label className={LABEL}>Link Label</label>
                  <input
                    type="text"
                    placeholder="Register Now"
                    value={annLinkText}
                    onChange={(e) => setAnnLinkText(e.target.value)}
                    className={INPUT}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-aws-orange hover:bg-amber-500 text-zinc-950 font-bold text-xs"
              >
                {editingAnnouncementId ? 'Update Broadcast' : 'Broadcast Announcement'}
              </button>
            </form>
          </div>

          <div className={`${CARD} p-5 font-sans text-xs`}>
            <h3 className="text-xs font-display font-bold text-white mb-3 flex items-center justify-between">
              <span>Active Broadcasts</span>
              <span className="text-aws-orange font-stats">{announcements.length} Live</span>
            </h3>

            <div className="space-y-2.5 max-h-[560px] overflow-y-auto pr-1">
              {announcements.map((a) => (
                <div key={a.id} className={`p-3 bg-neutral-950/60 border rounded-lg ${editingAnnouncementId === a.id ? 'border-aws-orange/60' : 'border-neutral-800'}`}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="px-2 py-0.5 rounded bg-neutral-900 text-zinc-400 text-[10px] font-stats uppercase font-bold">
                      {a.category}
                    </span>
                    <span className="text-[10px] text-zinc-500">{a.date}</span>
                  </div>
                  <p className="text-white font-semibold mb-1">{a.title}</p>
                  <p className="text-zinc-400 line-clamp-2 mb-2">{a.description}</p>
                  <div className="flex items-center justify-end gap-1.5">
                    <button
                      onClick={() => handleEditAnnouncementClick(a)}
                      className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-zinc-300 hover:text-white transition-colors"
                      title="Edit announcement"
                    >
                      <Pencil className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => setAnnouncementToDelete(a)}
                      className="p-1.5 rounded-lg bg-rose-950/40 hover:bg-rose-900/60 text-rose-400 border border-rose-500/30 transition-colors"
                      title="Delete announcement"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
              {announcements.length === 0 && (
                <div className="py-8 text-center text-zinc-500 text-xs">No active broadcasts.</div>
              )}
            </div>
          </div>

          {/* Delete Announcement Confirmation */}
          {announcementToDelete && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in font-sans">
              <div className="bg-neutral-900/95 border border-rose-500/40 rounded-xl p-6 max-w-sm w-full text-center shadow-2xl backdrop-blur-md">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="text-base font-display font-bold text-white mb-1">Remove This Broadcast?</h3>
                <p className="text-xs text-zinc-400 mb-6">
                  "{announcementToDelete.title}" will be pulled from the student portal's Certs & Events feed immediately.
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleConfirmDeleteAnnouncement}
                    className="flex-1 py-2.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs transition-all"
                  >
                    Yes, Remove
                  </button>
                  <button
                    onClick={() => setAnnouncementToDelete(null)}
                    className="flex-1 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-zinc-300 font-semibold text-xs border border-neutral-700 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab 4: Dev Controls */}
      {activeAdminTab === 'settings' && (
        <div className={`${CARD} p-6 max-w-xl mx-auto space-y-4 font-sans text-xs`}>
          <h2 className="text-sm font-display font-bold text-white flex items-center gap-2 mb-2">
            <RefreshCw className="w-4 h-4 text-aws-orange" />
            Developer & Demo Controls
          </h2>

          <div className="p-4 bg-neutral-950/60 border border-neutral-800 rounded-xl flex items-center justify-between gap-4">
            <div>
              <div className="font-semibold text-white">Replenish All Student Hearts (5/5)</div>
              <div className="text-[11px] text-zinc-400 mt-0.5">Resets hearts to full for every registered student record in local storage — bypasses the 45-minute refill cooldown for the whole roster.</div>
            </div>
            <button
              onClick={() => {
                refillAllHearts();
                flashSuccess();
              }}
              className="px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white font-semibold shrink-0"
            >
              Refill Hearts
            </button>
          </div>

          <div className="p-4 bg-neutral-950/60 border border-neutral-800 rounded-xl flex items-center justify-between gap-4">
            <div>
              <div className="font-semibold text-white">Reset Local Database</div>
              <div className="text-[11px] text-zinc-400 mt-0.5">Clear test storage and revert to fresh default roster</div>
            </div>
            <button
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
              className="bg-rose-950/60 hover:bg-rose-900/60 text-rose-300 border border-rose-500/40 px-3 py-1.5 rounded-lg font-semibold shrink-0"
            >
              Clear Storage
            </button>
          </div>
        </div>
      )}

      <BulkImportModal isOpen={showBulkImport} onClose={() => setShowBulkImport(false)} />

    </div>
  );
};
