import { db } from "@/lib/db";
import { imageDb } from "@/lib/firebase";
import { getUser } from "@/lib/get-user";
import { CopyRight, Patent, StartUpData, TradeMark } from "@prisma/client";
import { ref, deleteObject } from "firebase/storage";
import { NextRequest, NextResponse } from "next/server";
interface RequestData {
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
  patents: Patent[];
  copyrights: CopyRight[];
  trademarks: TradeMark[];
}
export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const headers = req.headers;
    const token = headers.get("Authorization");
    const user = await getUser(token);
    if (!user) {
      return new NextResponse("User Not Found", { status: 404 });
    }
    const {
      name,
      dateOfRegistration,
      dateOfIncorporation,
      isOperational,
      yearsOfIncorporation,
      RegistrationNo,
      ContactPerson,
      email,
      mobile,
      website,
      isGraduatedFromIncubation,
      dateOfGraduation,
      isSignedInvestment,
      investmentFile,
      isInvestedInIncubation,
      investedInIncubationFile,
      quantumOfInvestment,
      quantumOfInvestmentFile,
      sourceOfInvestment,
      sourceOfInvestmentFile,
      hasRaisedFollowingAmount,
      hasRaisedFollowingAmountFile,
      quantumOfRaisedAmount,
      quantumOfRaisedAmountFile,
      hasCrossed1CrAmount,
      hasCrossed1CrAmountFile,
      FinancialYear,
      Institute,
      Role,
      address,
      sector,
      sdgGoal,
      incorporationCertificate,
      udayamCertificate,
      MOU,
      ITR,
      DPIIT,
      patents,
      copyrights,
      trademarks,
    }: RequestData = await req.json();

    // if (patents.length > 0) {
    //   for (let i = 0; i < patents.length; i++) {
    //     const { file, name } = patents[i];

    //     await db.patent.create({
    //       data: {
    //         file,
    //         name,
    //       },
    //     });
    //   }
    // }
    // if (copyrights.length > 0) {
    //   for (let i = 0; i < copyrights.length; i++) {
    //     const { file, name } = copyrights[i];

    //     await db.copyRight.create({
    //       data: {
    //         file,
    //         name,
    //       },
    //     });
    //   }
    // }
    // if (trademarks.length > 0) {
    //   for (let i = 0; i < trademarks.length; i++) {
    //     const { file, name } = trademarks[i];

    //     await db.tradeMark.create({
    //       data: {
    //         file,
    //         name,
    //       },
    //     });
    //   }
    // }

    await db.startUpData.create({
      data: {
        name,
        dateOfRegistration,
        dateOfIncorporation,
        isOperational,
        yearsOfIncorporation,
        RegistrationNo,
        ContactPerson,
        email,
        mobile,
        website,
        isGraduatedFromIncubation,
        dateOfGraduation,
        isSignedInvestment,
        investmentFile,
        isInvestedInIncubation,
        investedInIncubationFile,
        quantumOfInvestment,
        quantumOfInvestmentFile,
        sourceOfInvestment,
        sourceOfInvestmentFile,
        hasRaisedFollowingAmount,
        hasRaisedFollowingAmountFile,
        quantumOfRaisedAmount,
        quantumOfRaisedAmountFile,
        hasCrossed1CrAmount,
        hasCrossed1CrAmountFile,
        FinancialYear,
        Institute,
        Role,
        address,
        sector,
        sdgGoal,
        incorporationCertificate,
        udayamCertificate,
        MOU,
        ITR,
        DPIIT,
        

        addedByUserId: user.id,
      },
    });
    return NextResponse.json("Added");
  } catch (error) {
    console.log("START UP DATA POST", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const response = await db.startUpData.findMany();
    return NextResponse.json({ response });
  } catch (error) {
    console.log("START UP DATA GET", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function PUT(req: NextRequest, res: NextResponse) {
  try {
    const headers = req.headers;
    const token = headers.get("Authorization");
    const user = await getUser(token);
    if (!user) {
      return new NextResponse("User Not Found", { status: 404 });
    }
    const { file, description, id } = await req.json();
    if (!file || !id || !description) {
      return new NextResponse("File or ID or description is missing", {
        status: 404,
      });
    }

    await db.assesment.update({
      where: {
        id,
      },
      data: {
        file,
        description,
        addedByUserId: user.id,
      },
    });
    return NextResponse.json("Updated");
  } catch (error) {
    console.log("START UP DATA PUT", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const headers = req.headers;
    const token = headers.get("Authorization");
    const user = await getUser(token);
    if (!user) {
      return new NextResponse("User Not Found", { status: 404 });
    }
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return new NextResponse("ID is missing", { status: 404 });
    }

    const data = await db.startUpData.findFirst({
      where: {
        id,
      },
    });
    if (!data) {
      return new NextResponse("Data Not Found", { status: 404 });
    }
   
    await db.startUpData.delete({
      where: {
        id,
      },
    });
    return NextResponse.json("Deleted");
  } catch (error) {
    console.log("START UP DATA DELETE", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
