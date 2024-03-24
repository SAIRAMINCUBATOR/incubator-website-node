import { db } from "@/lib/db";
import { getUser } from "@/lib/get-user";
import { AdvisoryBoard, MemberRole } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest, res: NextResponse) {
//   try {
//     const headers = req.headers;
//     const token = headers.get("Authorization");
//     const user = await getUser(token);
//     if (!user) {
//       return new NextResponse("User Not Found", { status: 404 });
//     }
//     const {name , list} = await req.json();
//     if (!name || !list ) {
//       return new NextResponse("Name or Startup List is missing", { status: 404 });
//     }

//     await db.startUp.create({
//       data: {
//         name,
//         list,
//         addedByUserId: user.id,
//       },
//     });
//     return NextResponse.json("Added");
//   } catch (error) {
//     console.log("STARTUP POST", error);
//     return new NextResponse("Internal Server Error", { status: 500 });
//   }
// }

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const response = await db.advisoryBoard.findMany();
    return NextResponse.json({ response });
  } catch (error) {
    console.log("ADVISORY BOARD GET", error);
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
    const { advisoryBoard } = await req.json();
    if (!advisoryBoard) {
      return new NextResponse("ADVISORY BOARD List is missing", { status: 404 });
    }

    advisoryBoard.map(async (member: AdvisoryBoard, index: number) => {
      if (member.id != null) {
        await db.advisoryBoard.update({
          where: {
            id: member.id,
          },
          data: {
            name: member.name,
            organization:member.organization,
            designation: member.designation,
            expertise: member.expertise,
          },
        });
      } else {
        await db.advisoryBoard.createMany({
          data: {
            name: member.name,
            organization:member.organization,
            designation: member.designation,
            expertise: member.expertise,
            addedByUserId: user.id,
          },
        });
      }
    });

    return NextResponse.json("Updated");
  } catch (error) {
    console.log("AdvisoryBoard PUT", error);
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
    const data = await db.advisoryBoard.findFirst({
      where: {
        id
      }
    })
    if (!data){
      return new NextResponse("Data Not Found", { status: 404 });
    }


    await db.advisoryBoard.delete({
      where: {
        id,
      },
    });
    return NextResponse.json("Deleted");
  } catch (error) {
    console.log("AdvisoryBoard DELETE", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
