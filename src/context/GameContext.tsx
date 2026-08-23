import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { Student, Question, UserSubmission, Announcement, Badge, BuildingTier } from '../types';
import { 
  INITIAL_QUESTIONS, 
  MOCK_STUDENTS, 
  CURRENT_DEFAULT_USER, 
  INITIAL_ANNOUNCEMENTS, 
  INITIAL_BADGES 
} from '../data/mockData';
import { soundEngine } from '../utils/soundEngine';
import { loadFromStorage, saveToStorage, STORAGE_KEYS } from '../utils/storage';

const REFILL_INTERVAL_SECS = 45 * 60;
const MAX_HEARTS = 5;

interface GameContextType {
  currentUser: Student;
  students: Student[];
  questions: Question[];
  submissions: UserSubmission[];
  announcements: Announcement[];
  badges: Badge[];
  activeWeek: number;
  isMuted: boolean;
  cooldownRemainingSecs: number;
  isAdminMode: boolean;
  activeTab: 'home' | 'city' | 'quiz' | 'leaderboard' | 'announcements' | 'admin';
  selectedStudentModal: Student | null;
  privacyNotice: string | null;
  isAuthenticated: boolean;
  showCooldownModal: boolean;
  lastAnswerResult: {
    question: Question;
    selectedOption: 'A' | 'B' | 'C' | 'D';
    isCorrect: boolean;
    earnedPoints: number;
  } | null;
  submitAnswer: (questionId: string, selectedOption: 'A' | 'B' | 'C' | 'D') => boolean;
  refillHearts: () => void;
  toggleMute: () => void;
  setActiveTab: (tab: 'home' | 'city' | 'quiz' | 'leaderboard' | 'announcements' | 'admin') => void;
  setIsAdminMode: (admin: boolean) => void;
  setSelectedStudentModal: (student: Student | null) => void;
  selectStudentForModal: (student: Student) => void;
  dismissPrivacyNotice: () => void;
  loginAsUser: (user: Student) => void;
  logoutUser: () => void;
  setShowCooldownModal: (show: boolean) => void;
  setLastAnswerResult: (result: GameContextType['lastAnswerResult']) => void;
  setActiveWeek: (week: number) => void;
  addNewQuestion: (question: Omit<Question, 'id'>) => void;
  addNewAnnouncement: (announcement: Omit<Announcement, 'id'>) => void;
  removeStudent: (studentId: string) => void;
  updateUserProfile: (updates: Partial<Student>) => void;
  trackActiveDay: () => void;
  toggleBuildingLights: () => void;
  isCertEligible: (studentId: string) => boolean;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

function calculateTier(points: number): BuildingTier {
  if (points >= 1000) return 'apex_monolith';
  if (points >= 500) return 'cyber_tower';
  if (points >= 180) return 'datacenter';
  return 'shack';
}

function calculateFloors(points: number): number {
  // Strict rule: floors = floor(score / 50). A brand-new account with
  // 0–49 points has ZERO floors (an empty foundation-only plot in the
  // 3D city) — the first floor is only granted upon reaching 50
  // cumulative points. No artificial "+1 free floor" baseline.
  return Math.max(0, Math.floor(points / 50));
}

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<Student>(() => 
    loadFromStorage<Student>(STORAGE_KEYS.CURRENT_USER, CURRENT_DEFAULT_USER)
  );

  const [studentList, setStudentList] = useState<Student[]>(() => {
    const saved = loadFromStorage<Student[]>('aws_cloud_city_students_list', []);
    return saved.length > 0 ? saved : MOCK_STUDENTS;
  });

  const [submissions, setSubmissions] = useState<UserSubmission[]>(() => 
    loadFromStorage<UserSubmission[]>(STORAGE_KEYS.SUBMISSIONS, [])
  );

  const [customQuestions, setCustomQuestions] = useState<Question[]>(() => 
    loadFromStorage<Question[]>(STORAGE_KEYS.CUSTOM_QUESTIONS, [])
  );

  const [questions, setQuestions] = useState<Question[]>([
    ...INITIAL_QUESTIONS,
    ...customQuestions
  ]);

  const [announcements, setAnnouncements] = useState<Announcement[]>(INITIAL_ANNOUNCEMENTS);
  const [badges] = useState<Badge[]>(INITIAL_BADGES);
  const [activeWeek, setActiveWeekState] = useState<number>(() => 
    loadFromStorage<number>(STORAGE_KEYS.ACTIVE_WEEK, 1)
  );
  const [isMuted, setIsMuted] = useState<boolean>(() => 
    loadFromStorage<boolean>(STORAGE_KEYS.MUTED, false)
  );

  const [cooldownRemainingSecs, setCooldownRemainingSecs] = useState<number>(0);
  const [isAdminMode, setIsAdminMode] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'home' | 'city' | 'quiz' | 'leaderboard' | 'announcements' | 'admin'>('home');
  const [selectedStudentModal, setSelectedStudentModal] = useState<Student | null>(null);
  const [privacyNotice, setPrivacyNotice] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    try {
      return !!localStorage.getItem('aws_cc_session');
    } catch {
      return false;
    }
  });
  const [showCooldownModal, setShowCooldownModal] = useState<boolean>(false);
  const [lastAnswerResult, setLastAnswerResult] = useState<GameContextType['lastAnswerResult']>(null);

  // Sync mute state
  useEffect(() => {
    soundEngine.setMuted(isMuted);
    saveToStorage(STORAGE_KEYS.MUTED, isMuted);
  }, [isMuted]);

  // Persist Current User
  useEffect(() => {
    saveToStorage(STORAGE_KEYS.CURRENT_USER, currentUser);
    // Also update their account record keyed by roll number
    if (currentUser.rollNumber) {
      localStorage.setItem(`acc_${currentUser.rollNumber}`, JSON.stringify(currentUser));
    }
  }, [currentUser]);

  // Persist Submissions
  useEffect(() => {
    saveToStorage(STORAGE_KEYS.SUBMISSIONS, submissions);
  }, [submissions]);

  // Persist Students List
  useEffect(() => {
    saveToStorage('aws_cloud_city_students_list', studentList);
  }, [studentList]);

  // Handle Heart Refill Timer
  useEffect(() => {
    const timer = setInterval(() => {
      if (currentUser.hearts < MAX_HEARTS && currentUser.lastHeartLossTime) {
        const elapsedSecs = Math.floor((Date.now() - currentUser.lastHeartLossTime) / 1000);
        const heartsToAdd = Math.floor(elapsedSecs / REFILL_INTERVAL_SECS);

        if (heartsToAdd > 0) {
          const newHearts = Math.min(MAX_HEARTS, currentUser.hearts + heartsToAdd);
          const newLastTime = newHearts >= MAX_HEARTS ? null : currentUser.lastHeartLossTime + (heartsToAdd * REFILL_INTERVAL_SECS * 1000);
          
          setCurrentUser(prev => ({
            ...prev,
            hearts: newHearts,
            lastHeartLossTime: newLastTime
          }));
          soundEngine.playRefill();
        }

        const remaining = REFILL_INTERVAL_SECS - (elapsedSecs % REFILL_INTERVAL_SECS);
        setCooldownRemainingSecs(remaining);
      } else {
        setCooldownRemainingSecs(0);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [currentUser.hearts, currentUser.lastHeartLossTime]);

  const toggleMute = () => {
    setIsMuted(prev => !prev);
  };

  const refillHearts = useCallback(() => {
    setCurrentUser(prev => ({
      ...prev,
      hearts: MAX_HEARTS,
      lastHeartLossTime: null
    }));
    setCooldownRemainingSecs(0);
    soundEngine.playRefill();
    setShowCooldownModal(false);
  }, []);

  const removeStudent = useCallback((studentId: string) => {
    soundEngine.playFloorAdded();
    setStudentList(prev => prev.filter(s => s.id !== studentId));
  }, []);

  const updateUserProfile = useCallback((updates: Partial<Student>) => {
    setCurrentUser(prev => ({ ...prev, ...updates }));
    // Also sync in studentList if student is in it
    setStudentList(prev => prev.map(s => 
      s.id === currentUser.id ? { ...s, ...updates } : s
    ));
  }, [currentUser.id]);

  // Respects a student's public/private visibility before opening their
  // profile/building modal. Own profile is always visible to self.
  const selectStudentForModal = useCallback((student: Student) => {
    const isSelf = student.id === currentUser.id;
    if (isSelf || student.isPublic !== false) {
      setSelectedStudentModal(student);
    } else {
      soundEngine.playWrong();
      setPrivacyNotice(`${student.name}'s profile is private.`);
    }
  }, [currentUser.id]);

  const dismissPrivacyNotice = useCallback(() => setPrivacyNotice(null), []);

  // Auto-dismiss privacy toast after a few seconds
  useEffect(() => {
    if (!privacyNotice) return;
    const t = setTimeout(() => setPrivacyNotice(null), 3200);
    return () => clearTimeout(t);
  }, [privacyNotice]);

  const loginAsUser = useCallback((user: Student) => {
    setCurrentUser(user);
    setIsAuthenticated(true);
    try {
      localStorage.setItem('aws_cc_session', user.rollNumber);
    } catch { /* ignore storage failures */ }
    // Merge into student list so they appear on leaderboard/city immediately
    setStudentList(prev => {
      const exists = prev.some(s => s.id === user.id);
      return exists ? prev.map(s => (s.id === user.id ? user : s)) : [user, ...prev];
    });
  }, []);

  const logoutUser = useCallback(() => {
    try {
      localStorage.removeItem('aws_cc_session');
    } catch { /* ignore */ }
    setIsAuthenticated(false);
  }, []);

  // Marks today as an active day for the 5D streak / heatmap views.
  // Safe to call multiple times per day (de-duplicated by calendar day).
  const trackActiveDay = useCallback(() => {
    const now = Date.now();
    setCurrentUser(prev => {
      const last = prev.activityLog?.[prev.activityLog.length - 1];
      if (last) {
        const lastDate = new Date(last);
        const today = new Date(now);
        const sameDay =
          lastDate.getFullYear() === today.getFullYear() &&
          lastDate.getMonth() === today.getMonth() &&
          lastDate.getDate() === today.getDate();
        if (sameDay) return prev;
      }
      return { ...prev, activityLog: [...(prev.activityLog || []), now] };
    });
  }, []);

  // Toggles the current user's OWN building lights on/off in the 3D City.
  // Only ever mutates `currentUser` — there is no path for a student to
  // flip anyone else's building lights. `lightsOn` defaults to true when
  // undefined, so existing/mock students remain lit exactly as before.
  const toggleBuildingLights = useCallback(() => {
    soundEngine.playTap();
    setCurrentUser(prev => ({
      ...prev,
      lightsOn: prev.lightsOn === false ? true : false,
    }));
  }, []);

  const submitAnswer = useCallback((questionId: string, selectedOption: 'A' | 'B' | 'C' | 'D'): boolean => {
    const question = questions.find(q => q.id === questionId);
    if (!question) return false;

    const alreadyAnswered = submissions.some(s => s.questionId === questionId);
    if (alreadyAnswered) return false;

    if (currentUser.hearts <= 0) {
      soundEngine.playWrong();
      setShowCooldownModal(true);
      return false;
    }

    const isCorrect = selectedOption === question.correctOption;

    if (isCorrect) {
      const basePoints = 50;
      const streakMultiplier = Math.min(currentUser.streak, 5) * 5;
      const earnedPoints = basePoints + streakMultiplier;

      const newPoints = currentUser.points + earnedPoints;
      const newWeeklyPoints = currentUser.weeklyPoints + earnedPoints;
      const newStreak = currentUser.streak + 1;
      const prevFloors = currentUser.floors;
      const newFloors = calculateFloors(newPoints);
      const newTier = calculateTier(newPoints);
      const newLongestStreak = Math.max(currentUser.longestStreak || 0, newStreak);

      const newSubmission: UserSubmission = {
        questionId,
        selectedOption,
        isCorrect: true,
        timestamp: Date.now(),
        earnedPoints
      };

      setSubmissions(prev => [...prev, newSubmission]);

      setCurrentUser(prev => ({
        ...prev,
        points: newPoints,
        weeklyPoints: newWeeklyPoints,
        streak: newStreak,
        longestStreak: newLongestStreak,
        floors: newFloors,
        buildingTier: newTier,
        activityLog: [...(prev.activityLog || []), Date.now()],
      }));

      soundEngine.playCorrect();
      if (newFloors > prevFloors) {
        setTimeout(() => soundEngine.playFloorAdded(), 350);
      }

      setLastAnswerResult({
        question,
        selectedOption,
        isCorrect: true,
        earnedPoints
      });

      return true;
    } else {
      const newHearts = Math.max(0, currentUser.hearts - 1);
      const newSubmission: UserSubmission = {
        questionId,
        selectedOption,
        isCorrect: false,
        timestamp: Date.now(),
        earnedPoints: 0
      };

      setSubmissions(prev => [...prev, newSubmission]);

      setCurrentUser(prev => ({
        ...prev,
        hearts: newHearts,
        lastHeartLossTime: prev.lastHeartLossTime || Date.now(),
        streak: 0,
        activityLog: [...(prev.activityLog || []), Date.now()],
      }));

      soundEngine.playWrong();

      setLastAnswerResult({
        question,
        selectedOption,
        isCorrect: false,
        earnedPoints: 0
      });

      if (newHearts === 0) {
        setTimeout(() => {
          setShowCooldownModal(true);
        }, 600);
      }

      return false;
    }
  }, [questions, submissions, currentUser]);

  const setActiveWeek = (week: number) => {
    setActiveWeekState(week);
    saveToStorage(STORAGE_KEYS.ACTIVE_WEEK, week);
  };

  const addNewQuestion = (q: Omit<Question, 'id'>) => {
    const newQ: Question = {
      ...q,
      id: `q_custom_${Date.now()}`
    };
    const updated = [newQ, ...questions];
    setQuestions(updated);
    setCustomQuestions(prev => {
      const u = [newQ, ...prev];
      saveToStorage(STORAGE_KEYS.CUSTOM_QUESTIONS, u);
      return u;
    });
  };

  const addNewAnnouncement = (ann: Omit<Announcement, 'id'>) => {
    const newAnn: Announcement = {
      ...ann,
      id: `ann_${Date.now()}`
    };
    setAnnouncements(prev => [newAnn, ...prev]);
  };

  // Combine currentUser with studentList for rankings & 3D city.
  //
  // IMPORTANT: this MUST be memoized. Previously it was a plain array
  // literal recomputed on every GameProvider render — including renders
  // triggered by totally unrelated state like `selectedStudentModal`
  // (set every time a building is clicked in the 3D City). Because
  // ThreeCityCanvas's WebGL setup effect depends on `students` by
  // reference, a fresh array on every click caused the entire Three.js
  // scene (renderer, camera, controls, lights, event listeners, render
  // loop) to be torn down and rebuilt on every single click — visible
  // as the camera "snapping"/resetting in a loop instead of smoothly
  // flying to the clicked building. Memoizing keeps the reference
  // stable unless `currentUser` or `studentList` actually change.
  const allStudents: Student[] = useMemo(() => (
    [
      currentUser,
      ...studentList.filter(s => s.id !== currentUser.id)
    ].sort((a, b) => b.points - a.points)
  ), [currentUser, studentList]);

  // Weekly / monthly (all-time) rankings, used to gate certificate access
  // to only the current top-5 performers. "Monthly" reuses the same
  // all-time point totals as `allStudents` since that's the full-history
  // metric; weekly uses each student's rolling weeklyPoints.
  const weeklyRanked = useMemo(() => (
    [...allStudents].sort((a, b) => (b.weeklyPoints || b.points) - (a.weeklyPoints || a.points))
  ), [allStudents]);
  const monthlyRanked = allStudents; // already sorted by all-time points

  // A student may only generate/download a certificate for themselves,
  // and only while they hold a Top-5 spot on either the weekly or the
  // monthly/all-time leaderboard.
  const isCertEligible = useCallback((studentId: string): boolean => {
    if (studentId !== currentUser.id) return false;
    const weeklyIdx = weeklyRanked.findIndex(s => s.id === studentId);
    const monthlyIdx = monthlyRanked.findIndex(s => s.id === studentId);
    return (weeklyIdx >= 0 && weeklyIdx < 5) || (monthlyIdx >= 0 && monthlyIdx < 5);
  }, [currentUser.id, weeklyRanked, monthlyRanked]);

  return (
    <GameContext.Provider
      value={{
        currentUser,
        students: allStudents,
        questions,
        submissions,
        announcements,
        badges,
        activeWeek,
        isMuted,
        cooldownRemainingSecs,
        isAdminMode,
        activeTab,
        selectedStudentModal,
        privacyNotice,
        isAuthenticated,
        showCooldownModal,
        lastAnswerResult,
        submitAnswer,
        refillHearts,
        toggleMute,
        setActiveTab,
        setIsAdminMode,
        setSelectedStudentModal,
        selectStudentForModal,
        dismissPrivacyNotice,
        loginAsUser,
        logoutUser,
        setShowCooldownModal,
        setLastAnswerResult,
        setActiveWeek,
        addNewQuestion,
        addNewAnnouncement,
        removeStudent,
        updateUserProfile,
        trackActiveDay,
        toggleBuildingLights,
        isCertEligible,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
