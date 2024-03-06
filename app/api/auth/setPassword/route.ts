import { db } from "@/lib/db";
import { compareStrings, hashString } from "@/lib/encryption-server";
import { getUser } from "@/lib/get-user";
import { generateToken } from "@/lib/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    console.log("set Password Backedn")
    const { password } = await req.json();
    if (!password) {
      return new NextResponse("Password is missing", { status: 400 });
    }
    const headers = req.headers;
    const token = headers.get("Authorization");
    const user = await getUser(token);
    if (!user){
        return new NextResponse("User Not Found", {status: 404});
    }

    const newPassword = await hashString(password);
    await db.user.update({
      where:{
        id:user.id
      },data:{
        password: newPassword,
        isPasswordDefault: false
      }
    });
       
    return NextResponse.json("Updated");
  } catch (error) {
    console.log("SINGIN", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
