import { db } from "@/lib/db";
import { imageDb } from "@/lib/firebase";
import { getUser } from "@/lib/get-user";
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
    const {name , image,designation,facebook,twitter,instagram,linkedin, experience } = await req.json();
    if (!name || !image || !designation ) {
      return new NextResponse("Image or Name or Designation is missing", { status: 404 });
    }

    await db.team.create({
      data: {
        name,
        image,
        designation,
        facebook,
        twitter,
        instagram,
        linkedin,
        experience,
        addedByUserId: user.id,
      },
    });
    return NextResponse.json("Added");
  } catch (error) {
    console.log("TEAM POST", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
  try {
  

    const response = await db.team.findMany();
    return NextResponse.json({response});
  } catch (error) {
    console.log("TEAM GET", error);
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
    const {name , image, designation,facebook,twitter,instagram,linkedin,id ,experience} = await req.json();
    if (!name || !image || !designation || !id) {
      return new NextResponse("Image or Name or ID or Designation is missing", { status: 404 });
    }

    await db.team.update({
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
        experience,
        addedByUserId: user.id,
      },
    });
    return NextResponse.json("Updated");
  } catch (error) {
    console.log("TEAM PUT", error);
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
    const data = await db.team.findFirst({
      where: {
        id,
      },
    });
    if (!data) {
      return new NextResponse("Data Not Found", { status: 404 });
    }
    const url = data.image.substring(data.image.indexOf("files") + 8, data.image.lastIndexOf("?"));
    const imgRef = ref(imageDb, "files/" + url.replaceAll("%20", " "));
    await deleteObject(imgRef);
    await db.team.delete({
      where:{
        id
      },
      
    });
    return NextResponse.json("Deleted");
  } catch (error) {
    console.log("TEAM DELETE", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}