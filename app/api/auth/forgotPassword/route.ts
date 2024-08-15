import { db } from "@/lib/db";
import { compareStrings, hashString } from "@/lib/encryption-server";
import { getUser } from "@/lib/get-user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { email } = await req.json();
    if (!email) {
      return new NextResponse("Email is missing", { status: 400 });
    }
    const user = await db.user.findFirst({
      where: {
        email,
      },
    });
    if (!user){
        return new NextResponse("User Not Found", {status: 404});
    }

    // await db.user.update({
    //   where:{
    //     id:user.id
    //   },data:{
    //     password: newPassword,
    //     isPasswordDefault: false
    //   }
    // });
       
    return NextResponse.json("Updated");
  } catch (error) {
    console.log("SINGIN", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
