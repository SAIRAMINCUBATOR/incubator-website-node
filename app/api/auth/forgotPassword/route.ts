import { db } from "@/lib/db";
import { v4 as uuid } from "uuid";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
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
    if (!user) {
      return new NextResponse("User Not Found", { status: 404 });
    }
    const id = uuid();
    const limit = new Date();
    limit.setDate(limit.getHours() + 6);
    await db.user.update({
      where: { id: user.id },
      data: {
        resetId: id,
        resetValid: limit,
      },
    });
    await resend.emails.send({
      from: "noreply-sairamincubation <no-reply@sairamincubation.com>",
      to: email,
      subject: "Reset Password Link for Sairam Techno Incubator Portal",
      html: `Dear ${user.name}, <br><br>You have requested to reset your password <br> Click this link to reset your password: <a href="https://sairamincubation.com/auth/forgotPassword/${id}">Reset Password Link</a><br>This link will expire in 6 hours.<br> <br> or copy paste this url: <br>https://sairamincubation.com/auth/forgotPassword/${id}`,
    });

    return NextResponse.json("Updated");
  } catch (error) {
    console.log("SINGIN", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
