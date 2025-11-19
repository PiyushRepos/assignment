export interface Applicant {
  _id: string;
  name: string;
  role: string;
  experience: string;
  location: string;
  score: number;
  avatarUrl: string;
  skills: string[];
  about?: string;
  email?: string;
  phone?: string;
  website?: string;
  resume?: string;
  cost: number;

  experience_details: {
    company: string;
    position: string;
    duration: string;
  }[];

  education?: {
    institution: string;
    degree: string;
    year: string;
  }[];

  idealNextOpportunity?: {
    role: string;
    salary: string;
  };

  availability?: string;
  college?: string;
  graduationYear?: string;
  candidateStatus?: string;
  isClubMember?: boolean;
  socials?: {
    linkedin?: string;
  };
  isUnlocked?: boolean;
}
