import { getUser } from "@/lib/get-user";
import { UserData } from "@/schema";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const headers = req.headers;
    const token = headers.get("Authorization");
    const user = await getUser(token);
    if (!user) {
      return new NextResponse("User Not Found", { status: 404 });
    }
    const newUser: UserData = {
      name: user.name,
      email: user.email,
      gender: user.gender,
    };
    return NextResponse.json({ user:newUser });
  } catch (error) {
    console.log("GET USER", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
