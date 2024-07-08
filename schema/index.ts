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