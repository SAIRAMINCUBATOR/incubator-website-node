import { db } from "@/lib/db";
import { imageDb } from "@/lib/firebase";
import { getUser } from "@/lib/get-user";
import { RequestData } from "@/schema";
import { CopyRight, Patent, StartUpData, TradeMark } from "@prisma/client";
import { ref, deleteObject } from "firebase/storage";
import { NextRequest, NextResponse } from "next/server";

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
      Patents,
      CopyRights,
      TradeMarks,
    }: RequestData = await req.json();

    console.log(dateOfRegistration);

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
        Patents: {
          ...(Patents.length > 0 && {
            createMany: {
              data: Patents.map((patent) => ({
                name: patent.name,
                file: patent.file,
              })),
            },
          }),
        },
        CopyRights: {
          ...(CopyRights.length > 0 && {
            createMany: {
              data: CopyRights.map((copyRight) => ({
                name: copyRight.name,
                file: copyRight.file,
              })),
            },
          }),
        },
        TradeMarks: {
          ...(TradeMarks.length > 0 && {
            createMany: {
              data: TradeMarks.map((tradeMark) => ({
                name: tradeMark.name,
                file: tradeMark.file,
              })),
            },
          }),
        },

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
    const response: RequestData[] = await db.startUpData.findMany({
      include: { Patents: true, CopyRights: true, TradeMarks: true },
    });
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
    const {
      id,
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
      Patents,
      CopyRights,
      TradeMarks,
    }: RequestData = await req.json();

    await db.startUpData.update({
      where: {
        id,
      },
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
        Patents: {
          deleteMany: {},
          ...(Patents.length > 0 && {
            createMany: {
              data: Patents.map((patent) => ({
                name: patent.name,
                file: patent.file,
              })),
            },
          }),
        },
        CopyRights: {
          deleteMany: {},
          ...(CopyRights.length > 0 && {
            createMany: {
              data: CopyRights.map((copyRight) => ({
                name: copyRight.name,
                file: copyRight.file,
              })),
            },
          }),
        },
        TradeMarks: {
          deleteMany: {},
          ...(TradeMarks.length > 0 && {
            createMany: {
              data: TradeMarks.map((tradeMark) => ({
                name: tradeMark.name,
                file: tradeMark.file,
              })),
            },
          }),
        },
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
    await db.patent.deleteMany({
      where: {
        startUpDataId: id,
      },
    });

    await db.copyRight.deleteMany({
      where: {
        startUpDataId: id,
      },
    });

    await db.tradeMark.deleteMany({
      where: {
        startUpDataId: id,
      },
    });

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
