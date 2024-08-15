import { db } from "@/lib/db";
import { getUser } from "@/lib/get-user";
import { InternshipDetails } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const headers = req.headers;
    const token = headers.get("Authorization");
    const user = await getUser(token);
    if (!user) {
      return new NextResponse("User Not Found", { status: 404 });
    }
    const data: InternshipDetails = await req.json();

    await db.internshipDetails.create({
      data: { ...data, addedByUserId: user.id },
    });
    return NextResponse.json("Added");
  } catch (error) {
    console.log("Internship Details POST", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const response: InternshipDetails[] = await db.internshipDetails.findMany();
    return NextResponse.json({ response });
  } catch (error) {
    console.log("Internship Details GET", error);
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
    const data: InternshipDetails = await req.json();
    const processedData = {...data};
    delete processedData.id;
    await db.internshipDetails.update({
      where: {
        id: data.id,
      },
      data: { ...processedData, addedByUserId: user.id },
    });
    return NextResponse.json("Updated");
  } catch (error) {
    console.log("Internship Details PUT", error);
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

    const data = await db.internshipDetails.findFirst({
      where: {
        id,
      },
    });
    if (!data) {
      return new NextResponse("Data Not Found", { status: 404 });
    }
  

    await db.internshipDetails.delete({
      where: {
        id,
      },
    });

    return NextResponse.json("Deleted");
  } catch (error) {
    console.log("Internship Details DELETE", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
