import { db } from "@/lib/db";
import { imageDb } from "@/lib/firebase";
import { getUser } from "@/lib/get-user";
import { Category, MainGallery } from "@prisma/client";
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
    const { name, image, category } = await req.json();

    if (!name || !image || !category) {
      return new NextResponse("Image or Name or Category is missing", {
        status: 404,
      });
    }

    await db.mainGallery.create({
      data: {
        name,
        image,
        categoryId: category,
        addedByUserId: user.id,
      },
    });
    return NextResponse.json("Added");
  } catch (error) {
    console.log("MAIN GALLERY POST", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category") as string;
    let response: MainGallery[];
    if (category) {
      response = await db.mainGallery.findMany({
        where: {
          categoryId: category,
        },
        include: {
          category: true,
        },
      });
    } else {
      response = await db.mainGallery.findMany({
        include: {
          category: true,
        },
      });
    }
    return NextResponse.json({ response });
  } catch (error) {
    console.log("MAIN GALLERY GET", error);
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
    const { name, image, id, category } = await req.json();
    if (!name || !image || !id || !category) {
      return new NextResponse("Image or Name or ID or Category is missing", {
        status: 404,
      });
    }

    await db.mainGallery.update({
      where: {
        id,
      },
      data: {
        name,
        image,
        categoryId: category,
        addedByUserId: user.id,
      },
    });
    return NextResponse.json("Updated");
  } catch (error) {
    console.log("MAIN GALLERY PUT", error);
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
    const data = await db.mainGallery.findFirst({
      where: {
        id,
      },
    });
    if (!data) {
      return new NextResponse("Data Not Found", { status: 404 });
    }
    const url = data.image.substring(
      data.image.indexOf("files") + 8,
      data.image.lastIndexOf("?")
    );
    const imgRef = ref(imageDb, "files/" + url.replaceAll("%20", " "));
    try {
      await deleteObject(imgRef);
    } catch (err) {}
    await db.mainGallery.delete({
      where: {
        id,
      },
    });
    return NextResponse.json("Deleted");
  } catch (error) {
    console.log("MAIN GALLERY DELETE", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
