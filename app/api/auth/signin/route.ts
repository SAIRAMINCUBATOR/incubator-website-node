import { db } from "@/lib/db";
import { compareStrings } from "@/lib/encryption-server";
import { generateToken } from "@/lib/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return new NextResponse("Email or Password is missing", { status: 400 });
    }
    const user = await db.user.findFirst({
      where: {
        email,
      },
    });
    if (!user) {
      return new NextResponse("User Doesnt Exists", { status: 400 });
    }
    if (!(await compareStrings(password, user.password))) {
      return new NextResponse("Incorrect Password", { status: 400 });
    }
    return NextResponse.json({
      token: generateToken({ email }),
      role: user.role,
      isPasswordDefault: user.isPasswordDefault,
    });
  } catch (error) {
    console.log("SINGIN", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
