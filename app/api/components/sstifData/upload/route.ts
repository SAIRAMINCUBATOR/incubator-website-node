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
          studentName: row.getCell(1).value as string,
          studentID: row.getCell(2).value as string,
          year: row.getCell(3).value as string,
          collegeName: row.getCell(4).value as string,
          sstifStartDate: new Date(row.getCell(5).value as string), // Convert to Date
          sstifEndDate: new Date(row.getCell(6).value as string), // Convert to Date
          numberOfDays: parseInt(row.getCell(7).value as string, 10), // Convert to Number
          projectTitle: row.getCell(8).value as string,
          projectStatus: row.getCell(9).value as string,
          sstifMentor: row.getCell(11).value as string,
          studentCategory: row.getCell(12).value as string,
          addedByUserId: user.id,
        });
      }
    });
    // console.log(data);
    await db.sSTIFDetail.createMany({ data });

    return NextResponse.json("Added");
  } catch (error) {
    console.log("Multiple Project Details POST", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
