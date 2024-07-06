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
    const { file, description } = await req.json();
    if (!file || !description) {
      return new NextResponse("File or Description is missing", {
        status: 404,
      });
    }

    await db.assesment.create({
      data: {
        file,
        description,
        addedByUserId: user.id,
      },
    });
    return NextResponse.json("Added");
  } catch (error) {
    console.log("ASSESMENT POST", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const response = await db.assesment.findMany();
    return NextResponse.json({ response });
  } catch (error) {
    console.log("ASSESMENT GET", error);
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
    console.log("ASSESMENT PUT", error);
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

    const data = await db.assesment.findFirst({
      where: {
        id,
      },
    });
    if (!data) {
      return new NextResponse("Data Not Found", { status: 404 });
    }
    const url = data.file.substring(
      data.file.indexOf("files") + 8,
      data.file.lastIndexOf("?")
    );
    const imgRef = ref(imageDb, "files/" + url.replaceAll("%20", " "));
    await deleteObject(imgRef);
    await db.assesment.delete({
      where: {
        id,
      },
    });
    return NextResponse.json("Deleted");
  } catch (error) {
    console.log("ASSESMENT DELETE", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
