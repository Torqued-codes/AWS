export type Department = 
  | 'CSE' 
  | 'IT' 
  | 'AI & Data Science' 
  | 'ECE' 
  | 'Cyber Security' 
  | 'CS-BS';

export type Gender = 'Male' | 'Female' | 'Other';

export type CertDomain = 
  | 'IAM & Security' 
  | 'Compute (EC2 & Lambda)' 
  | 'Storage (S3 & EBS)' 
  | 'VPC & Networking' 
  | 'Databases (RDS & DynamoDB)' 
  | 'Cloud Architecture & Cost';

export type BuildingTier = 'shack' | 'datacenter' | 'cyber_tower' | 'apex_monolith';

export interface Badge {
  id: string;
  title: string;
  iconName: string;
  description: string;
  domain: CertDomain | 'General';
  unlocked: boolean;
}

export interface Student {
  id: string;
  name: string;
  rollNumber: string;
  department: Department;
  year: 1 | 2 | 3 | 4;
  gender?: Gender;
  points: number;
  weeklyPoints: number;
  streak: number;
  longestStreak?: number;
  hearts: number; // Max 5
  lastHeartLossTime: number | null; // Timestamp
  unlockedBadges: string[];
  buildingTier: BuildingTier;
  floors: number;
  accentColor: string;
  avatar: string;
  rankWeekly?: number;
  rankMonthly?: number;
  isPublic?: boolean; // Public profile visibility
  joinedWeek?: number; // Which week they registered
  registeredAt?: number; // Timestamp of registration
  activityLog?: number[]; // Array of timestamps for activity heat-map
  activeDays?: number; // Consecutive days participated (5D streak)
}

export interface QuestionOption {
  key: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface Question {
  id: string;
  weekNumber: number;
  domain: CertDomain;
  difficulty: 'Beginner' | 'Associate' | 'Pro';
  questionText: string;
  codeSnippet?: string;
  options: QuestionOption[];
  correctOption: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  awsDocTopic: string;
}

export interface UserSubmission {
  questionId: string;
  selectedOption: 'A' | 'B' | 'C' | 'D';
  isCorrect: boolean;
  timestamp: number;
  earnedPoints: number;
}

export interface Announcement {
  id: string;
  title: string;
  category: 'Certification' | 'Event' | 'Voucher' | 'Workshop' | 'Hackathon';
  description: string;
  linkUrl: string;
  linkText: string;
  date: string;
  isHot?: boolean;
}

export interface AuthSession {
  rollNumber: string;
  name: string;
  registeredAt: number;
}
