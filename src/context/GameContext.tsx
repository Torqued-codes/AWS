import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
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
  setShowCooldownModal: (show: boolean) => void;
  setLastAnswerResult: (result: GameContextType['lastAnswerResult']) => void;
  setActiveWeek: (week: number) => void;
  addNewQuestion: (question: Omit<Question, 'id'>) => void;
  addNewAnnouncement: (announcement: Omit<Announcement, 'id'>) => void;
  removeStudent: (studentId: string) => void;
  updateUserProfile: (updates: Partial<Student>) => void;
  trackActiveDay: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

function calculateTier(points: number): BuildingTier {
  if (points >= 1000) return 'apex_monolith';
  if (points >= 500) return 'cyber_tower';
  if (points >= 180) return 'datacenter';
  return 'shack';
}

function calculateFloors(points: number): number {
  return Math.max(1, Math.floor(points / 50) + 1);
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

  // Combine currentUser with studentList for rankings & 3D city
  const allStudents: Student[] = [
    currentUser,
    ...studentList.filter(s => s.id !== currentUser.id)
  ].sort((a, b) => b.points - a.points);

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
        showCooldownModal,
        lastAnswerResult,
        submitAnswer,
        refillHearts,
        toggleMute,
        setActiveTab,
        setIsAdminMode,
        setSelectedStudentModal,
        setShowCooldownModal,
        setLastAnswerResult,
        setActiveWeek,
        addNewQuestion,
        addNewAnnouncement,
        removeStudent,
        updateUserProfile,
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
