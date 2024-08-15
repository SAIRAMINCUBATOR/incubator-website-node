import { db } from "@/lib/db";
import { getUser } from "@/lib/get-user";
import { RequestData } from "@/schema";
import { MOU, SSTIFDetail } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const headers = req.headers;
    const token = headers.get("Authorization");
    const user = await getUser(token);
    if (!user) {
      return new NextResponse("User Not Found", { status: 404 });
    }
    const data: SSTIFDetail = await req.json();

    await db.sSTIFDetail.create({
      data: { ...data, addedByUserId: user.id },
    });
    return NextResponse.json("Added");
  } catch (error) {
    console.log("Project Details POST", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const response: SSTIFDetail[] = await db.sSTIFDetail.findMany();
    return NextResponse.json({ response });
  } catch (error) {
    console.log("Project Details GET", error);
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
    const data: SSTIFDetail = await req.json();
    const processedData = {...data};
    delete processedData.id;
    await db.sSTIFDetail.update({
      where: {
        id: data.id,
      },
      data: { ...processedData, addedByUserId: user.id },
    });
    return NextResponse.json("Updated");
  } catch (error) {
    console.log("Project Details PUT", error);
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

    const data = await db.sSTIFDetail.findFirst({
      where: {
        id,
      },
    });
    if (!data) {
      return new NextResponse("Data Not Found", { status: 404 });
    }
  

    await db.sSTIFDetail.delete({
      where: {
        id,
      },
    });

    return NextResponse.json("Deleted");
  } catch (error) {
    console.log("Project Details DELETE", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
