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
    const { name, image, description, content } = await req.json();
    if (!name || !image || !description || !content) {
      return new NextResponse("Image or Name or Description is missing", {
        status: 404,
      });
    }

    await db.project.create({
      data: {
        name,
        image,
        description,
        content,
        addedByUserId: user.id,
      },
    });
    return NextResponse.json("Added");
  } catch (error) {
    console.log("PROJECT POST", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      const response = await db.project.findMany();
      return NextResponse.json({ response });
    } else {
      const response = await db.project.findFirst({
        where: {
          id,
        },
      });
      return NextResponse.json({ response });
    }
  } catch (error) {
    console.log("PROJECT GET", error);
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
    const { name, image, description, content, id } = await req.json();
    if (!name || !id || !description || !content) {
      return new NextResponse(
        "Image or Name or ID or description or content is missing",
        {
          status: 404,
        }
      );
    }

    await db.project.update({
      where: {
        id,
      },
      data: {
        name,
        image,
        description,
        content,
        addedByUserId: user.id,
      },
    });
    return NextResponse.json("Updated");
  } catch (error) {
    console.log("PROJECT PUT", error);
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

    await db.project.delete({
      where: {
        id,
      },
    });
    return NextResponse.json("Deleted");
  } catch (error) {
    console.log("PROJECT DELETE", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
