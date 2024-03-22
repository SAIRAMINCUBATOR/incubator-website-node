import { db } from "@/lib/db";
import { getUser } from "@/lib/get-user";
import { Management, MemberRole } from "@prisma/client";
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
    const response = await db.management.findMany();
    return NextResponse.json({ response });
  } catch (error) {
    console.log("MANAGEMENT GET", error);
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
    const { management } = await req.json();
    if (!management) {
      return new NextResponse("MANAGEMENT List is missing", { status: 404 });
    }

    management.map(async (member: Management, index: number) => {
      if (member.id != null) {
        await db.management.update({
          where: {
            id: member.id,
          },
          data: {
            name: member.name,
            designation: member.designation,
            experience: member.experience,
          },
        });
      } else {
        await db.management.createMany({
          data: {
            name: member.name,
            designation: member.designation,
            experience: member.experience,
            addedByUserId: user.id,
          },
        });
      }
    });

    return NextResponse.json("Updated");
  } catch (error) {
    console.log("STARTUP PUT", error);
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

    await db.management.delete({
      where: {
        id,
      },
    });
    return NextResponse.json("Deleted");
  } catch (error) {
    console.log("STARTUP DELETE", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
