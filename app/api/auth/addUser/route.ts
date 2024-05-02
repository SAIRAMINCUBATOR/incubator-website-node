import { db } from "@/lib/db";
import { compareStrings, getDefaultPassword, hashString } from "@/lib/encryption-server";
import { getUser } from "@/lib/get-user";
import { generateToken } from "@/lib/jwt";
import { Gender } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { email, gender, name, password, setDefaultPassword } = await req.json();
    const headers = req.headers;
    const token = headers.get("Authorization");
    if (!email || !name || !gender ) {
      return new NextResponse("Email or Name or Gender is missing", {
        status: 400,
      });
    }
    if (!password && !setDefaultPassword){
      return new NextResponse("Either Password or CheckBox is needed", {
        status: 400,
      });
    }
    const user = await getUser(token);
    if (!user) {
      return new NextResponse("User not Logged In", { status: 400 });
    }
    const newUser = await db.user.findFirst({
      where: {
        email,
      },
    });
    if (newUser) {
      return new NextResponse("User Already Exists with email: " + email, {
        status: 400,
      });
    }
    let hashedPassword;
    if (!setDefaultPassword){
      hashedPassword = await hashString(password)
    }else{
      hashedPassword = await getDefaultPassword();
    }
    await db.user.create({
      data: {
        name,
        email,
        gender,
        isPasswordDefault: setDefaultPassword,
        password: hashedPassword,
      },
    });
    return NextResponse.json("User created");
  } catch (error) {
    console.log("SINGIN", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
