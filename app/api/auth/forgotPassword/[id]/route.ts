import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { hashString } from "@/lib/encryption-server";
export async function POST(req: NextRequest, {params}: {params: {id: string}}) {
  try {
    const { password } = await req.json();
    if (!password) {
      return new NextResponse("Password is missing", { status: 400 });
    }
    const {id} = params;
    const user = await db.user.findFirst({
      where: {
        resetId: id,
      },
    });
    if (!user) {
      return new NextResponse("Incorrect Link, Try Again", { status: 404 });
    }
    console.log(user.resetValid, new Date(), user.resetValid < new Date());
    if (user.resetValid < new Date()) {
      return new NextResponse("Link Expired", { status: 400 });
    }

    const newPassword = await hashString(password);
    
    await db.user.update({
      where: { id: user.id },
      data: {
        resetId: null,
        resetValid: null,
        password: newPassword,
      },
    });
   

    return NextResponse.json("Password Updated");
  } catch (error) {
    console.log("SINGIN", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
