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
    const {name , list} = await req.json();
    if (!name || !list ) {
      return new NextResponse("Name or Startup List is missing", { status: 404 });
    }

    await db.startUp.create({
      data: {
        name,
        list,
        addedByUserId: user.id,
      },
    });
    return NextResponse.json("Added");
  } catch (error) {
    console.log("STARTUP POST", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
  try {
  

    const response = await db.startUp.findMany();
    return NextResponse.json({response});
  } catch (error) {
    console.log("STARTUP GET", error);
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
    const {name , list, id} = await req.json();
    if (!name || !list ) {
      return new NextResponse("Name or Startup List is missing", { status: 404 });
    }

    await db.startUp.update({
      where:{
        id
      },
      data: {
        name,
        list,
        addedByUserId: user.id,
      },
    });
    return NextResponse.json("Updated");
  } catch (error) {
    console.log("STARTUP PUT", error);
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

    await db.startUp.delete({
      where:{
        id
      },
      
    });
    return NextResponse.json("Deleted");
  } catch (error) {
    console.log("STARTUP DELETE", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}