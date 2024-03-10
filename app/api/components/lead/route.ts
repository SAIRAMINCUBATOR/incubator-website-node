import { db } from "@/lib/db";
import { getUser } from "@/lib/get-user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const headers = req.headers;
    const token = headers.get("Authorization");
    const user = await getUser(token);
    if (!user) {
      return new NextResponse("User Not Found", { status: 404 });
    }
    const {name , image,designation,facebook,twitter,instagram,linkedin } = await req.json();
    if (!name || !image || !designation || !facebook || !twitter || !instagram || !linkedin) {
      return new NextResponse("Image or Name is missing", { status: 404 });
    }

    await db.lead.create({
      data: {
        name,
        image,
        designation,
        facebook,
        twitter,
        instagram,
        linkedin,
        addedByUserId: user.id,
      },
    });
    return NextResponse.json("Added");
  } catch (error) {
    console.log("LEAD POST", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
  try {
  

    const response = await db.lead.findMany();
    return NextResponse.json({response});
  } catch (error) {
    console.log("LEAD GET", error);
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
    const {name , image, designation,facebook,twitter,instagram,linkedin,id} = await req.json();
    if (!name || !image || !designation || !facebook || !twitter || !instagram || !linkedin || !id) {
      return new NextResponse("Image or Name or ID or designation or insta or facebook or linkedin or twitter is missing", { status: 404 });
    }

    await db.lead.update({
      where:{
        id
      },
      data: {
        name,
        image,
        designation,
        facebook,
        twitter,
        instagram,
        linkedin,
        addedByUserId: user.id,
      },
    });
    return NextResponse.json("Updated");
  } catch (error) {
    console.log("LEAD PUT", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function DELETE(req: NextRequest,
  {params}:{params: {id:string}}) {
  try {
    const headers = req.headers;
    const token = headers.get("Authorization");
    const user = await getUser(token);
    if (!user) {
      return new NextResponse("User Not Found", { status: 404 });
    }
    const {searchParams} = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return new NextResponse("ID is missing", { status: 404 });
    }

    await db.lead.delete({
      where:{
        id
      },
      
    });
    return NextResponse.json("Deleted");
  } catch (error) {
    console.log("LEAD DELETE", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}