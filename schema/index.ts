import { CopyRight, Gender, Patent, TradeMark } from "@prisma/client";
import { z } from "zod";

export interface ImageData {
  image: string;
  name: string;
}

export interface UserData {
  name: String;
  email: String;
  gender: Gender;
}

export const StartUpDataFormSchema = z.object({
  id:z.string().nullable().default(""),
  name: z.string().nullable().default(""),
  dateOfRegistration: z.date().nullable().default(null),
  dateOfIncorporation: z.date().nullable().default(null),
  isOperational: z.boolean().nullable().default(null),
  yearsOfIncorporation: z.number().nullable().default(null),
  RegistrationNo: z.string().nullable().default(""),
  ContactPerson: z.string().nullable().default(""),
  email: z.string().nullable().default(""),
  mobile: z.string().nullable().default(""),
  website: z.string().nullable().default(""),
  isGraduatedFromIncubation: z.boolean().nullable().default(null),
  dateOfGraduation: z.date().nullable().default(null),
  isSignedInvestment: z.boolean().nullable().default(null),
  investmentFile: z.string().nullable().default(""),
  isInvestedInIncubation: z.boolean().nullable().default(null),
  investedInIncubationFile: z.string().nullable().default(""),
  quantumOfInvestment: z.number().nullable().default(null),
  quantumOfInvestmentFile: z.string().nullable().default(""),
  sourceOfInvestment: z.string().nullable().default(""),
  sourceOfInvestmentFile: z.string().nullable().default(""),
  hasRaisedFollowingAmount: z.boolean().nullable().default(null),
  hasRaisedFollowingAmountFile: z.string().nullable().default(""),
  quantumOfRaisedAmount: z.number().nullable().default(null),
  quantumOfRaisedAmountFile: z.string().nullable().default(""),
  hasCrossed1CrAmount: z.boolean().nullable().default(null),
  hasCrossed1CrAmountFile: z.string().nullable().default(""),
  FinancialYear: z.string().nullable().default(""),
  Institute: z.string().nullable().default(""),
  Role: z.string().nullable().default(""),
  address: z.string().nullable().default(""),
  sector: z.string().nullable().default(""),
  sdgGoal: z.array(z.string()).nullable().default([]),
  incorporationCertificate: z.string().nullable().default(""),
  udayamCertificate: z.string().nullable().default(""),
  MOU: z.string().nullable().default(""),
  ITR: z.string().nullable().default(""),
  DPIIT: z.string().nullable().default(""),
  Patents: z
    .array(
      z.object({
        id: z.string().optional().nullable(),
        name: z.string().optional(),
        file: z.string().optional(),
      })
    )
    .nullable(),
  CopyRights: z
    .array(
      z.object({
        id: z.string().optional().nullable(),
        name: z.string().optional(),
        file: z.string().optional(),
      })
    )
    .nullable(),
  TradeMarks: z
    .array(
      z.object({
        id: z.string().optional().nullable(),
        name: z.string().optional(),
        file: z.string().optional(),
      })
    )
    .nullable(),
});

export interface RequestData {
  id: string | null;
  name: string | null;
  dateOfRegistration: Date | null;
  dateOfIncorporation: Date | null;
  isOperational: boolean | null;
  yearsOfIncorporation: number | null;
  RegistrationNo: string | null;
  ContactPerson: string | null;
  email: string | null;
  mobile: string | null;
  website: string | null;
  isGraduatedFromIncubation: boolean | null;
  dateOfGraduation: Date | null;
  isSignedInvestment: boolean | null;
  investmentFile: string | null;
  isInvestedInIncubation: boolean | null;
  investedInIncubationFile: string | null;
  quantumOfInvestment: number | null;
  quantumOfInvestmentFile: string | null;
  sourceOfInvestment: string | null;
  sourceOfInvestmentFile: string | null;
  hasRaisedFollowingAmount: boolean | null;
  hasRaisedFollowingAmountFile: string | null;
  quantumOfRaisedAmount: number | null;
  quantumOfRaisedAmountFile: string | null;
  hasCrossed1CrAmount: boolean | null;
  hasCrossed1CrAmountFile: string | null;
  FinancialYear: string | null;
  Institute: string | null;
  Role: string | null;
  address: string | null;
  sector: string | null;
  sdgGoal: string[] | null;
  incorporationCertificate: string | null;
  udayamCertificate: string | null;
  MOU: string | null;
  ITR: string | null;
  DPIIT: string | null;
  Patents: Patent[];
  CopyRights: CopyRight[];
  TradeMarks: TradeMark[];
}

export const MOUFormSchema = z.object({
  department: z.string().default('').nullable(),
  name: z.string().default('').nullable(),
  fromDate: z.date().default(new Date()).nullable(),
  toDate: z.date().default(new Date()).nullable(),
  status: z.boolean().default(false).nullable(),
  scannedCopy: z.string().default('').nullable(),
  description: z.string().default('').nullable(),
  companyWebsite: z.string().default('').nullable(),
  aboutCompany: z.string().default('').nullable(),
  companyAddress: z.string().default('').nullable(),
  industryContactPersonDetails: z.string().default('').nullable(),
  institutionContactPersonDetails: z.string().default('').nullable(),
  clubsAligned: z.string().default('').nullable(),
  alignedToSairamSDGGoals: z.string().default('').nullable(),
  keywords: z.string().default('').nullable(),
  studentRegistrationCost: z.string().default('').nullable(),
  placementOpportunity: z.string().default('').nullable(),
  internshipOpportunity: z.string().default('').nullable(),
  goingForRenewal: z.boolean().default(false).nullable(),
  benefittedSoFar: z.number().default(0).nullable(),
  relationshipWithCompany: z.number().min(1).max(5).default(1).nullable(),
});


export const InternshipDetailsSchema = z.object({
  studentName: z.string().nullable().default(''),
  studentID: z.string().nullable().default(''),
  year: z.string().nullable().default(null),
  collegeName: z.string().nullable().default(''),
  internshipStartDate: z.date().nullable().default(null),
  internshipEndDate: z.date().nullable().default(null),
  numberOfDays: z.number().nullable().default(null),
  topic: z.string().nullable().default(''),
  sstifMentor: z.string().nullable().default(''),
  grade: z.string().nullable().default(''),
});



export const SSTIFDetailsSchema = z.object({
  studentName: z.string().nullable().default(''),
  studentID: z.string().nullable().default(''),
  year: z.string().nullable().default(''), // No enum, just a string
  collegeName: z.string().nullable().default(''),
  sstifStartDate: z.date().nullable().default(null),
  sstifEndDate: z.date().nullable().default(null),
  numberOfDays: z.number().nullable().default(null),
  projectTitle: z.string().nullable().default(''), // No enum, just a string
  projectStatus: z.string().nullable().default(''), // No enum, just a string
  projectReport: z.string().nullable().default(''), // No enum, just a string
  sstifMentor: z.string().nullable().default(''),
  studentCategory: z.string().nullable().default(''), // No enum, just a string
});



