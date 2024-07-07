import { Gender } from "@prisma/client";
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
  patents: z
    .array(
      z.object({
        id: z.string().optional(),
        name: z.string().optional(),
        file: z.string().optional(),
      })
    )
    .nullable(),
  copyrights: z
    .array(
      z.object({
        id: z.string().optional().default(""),
        name: z.string().optional().default(""),
        file: z.string().optional().default(""),
      })
    )
    .nullable()
    .default([]),
  trademarks: z
    .array(
      z.object({
        id: z.string().optional().default(""),
        name: z.string().optional().default(""),
        file: z.string().optional().default(""),
      })
    )
    .nullable()
    .default([]),
});
