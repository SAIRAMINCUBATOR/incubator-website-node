import { db } from "@/lib/db";
import { getUser } from "@/lib/get-user";
import * as ExcelJs from "exceljs";
import { CreativeCommonsIcon } from "lucide-react";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const headers = req.headers;
    const token = headers.get("Authorization");
    const user = await getUser(token);
    if (!user) {
      return new NextResponse("User Not Found", { status: 404 });
    }
    const formData = await req.formData();
    const file = formData.get("file");
    //@ts-ignore
    const arrayBuffer = await file.arrayBuffer();

    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.load(arrayBuffer);

    const worksheet = workbook.getWorksheet(1);
    const data = [];
    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber > 1) {
        data.push({
          department: row.getCell(1).value as string,
          name: row.getCell(2).value as string,
          fromDate: new Date(row.getCell(3).value as string),
          toDate: new Date(row.getCell(4).value as string),
          status: row.getCell(5).value as string == "Active" ? true : false,
          description: row.getCell(6).value as string,
          companyWebsite: row.getCell(7).value as string,
          aboutCompany: row.getCell(8).value as string,
          companyAddress: row.getCell(9).value as string,
          industryContactPersonDetails: row.getCell(10).value as string,
          institutionContactPersonDetails: row.getCell(11).value as string,
          clubsAligned: row.getCell(12).value as string,
          alignedToSairamSDGGoals: row.getCell(13).value as string,
          keywords: row.getCell(14).value as string,
          studentRegistrationCost: String(row.getCell(15).value),
          placementOpportunity: row.getCell(16).value as string,
          internshipOpportunity: row.getCell(17).value as string,
          goingForRenewal: row.getCell(18).value as string =="Yes" ? true : false,
          benefittedSoFar: row.getCell(19).value as number,
          relationshipWithCompany: row.getCell(20).value as number,
          addedByUserId: user.id,
        });
      }
    });
    console.log(data);
    await db.mOU.createMany({ data });

    return NextResponse.json("Added");
  } catch (error) {
    console.log("Multiple Project Details POST", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
