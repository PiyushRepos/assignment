import mongoose from "mongoose";

interface Applicant extends mongoose.Document {
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

  experience_details?: {
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

const ApplicantSchema = new mongoose.Schema<Applicant>({
  name: { type: String, required: true },
  role: { type: String, required: true },
  experience: { type: String, required: true },
  location: { type: String, required: true },
  score: { type: Number, required: true },
  avatarUrl: { type: String, required: true },
  skills: { type: [String], required: true },
  about: { type: String },
  email: { type: String },
  phone: { type: String },
  website: { type: String },
  resume: { type: String },
  cost: { type: Number, required: true },
  experience_details: [
    {
      company: { type: String, required: true },
      position: { type: String, required: true },
      duration: { type: String, required: true },
    },
  ],
  education: [
    {
      institution: { type: String, required: true },
      degree: { type: String, required: true },
      year: { type: String, required: true },
    },
  ],
  idealNextOpportunity: {
    role: { type: String, required: true },
    salary: { type: String, required: true },
  },
  availability: { type: String },
  college: { type: String },
  graduationYear: { type: String },
  candidateStatus: { type: String },
  isClubMember: { type: Boolean },
  socials: {
    linkedin: { type: String },
  },
  isUnlocked: { type: Boolean, default: false },
});

export const ApplicantModel: mongoose.Model<Applicant> =
  mongoose.models.Applicant ||
  mongoose.model<Applicant>("Applicant", ApplicantSchema);
