import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

import { NextRequest, NextResponse } from "next/server";
import EmailTemplate from '@/components/EmailTemplate';

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { email, name, message } = await req.json();
    if (!email || !name || !message) {
      return new NextResponse("Email or Name or Message is missing", {
        status: 400,
      });
    }
    const data = await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>',
        to: ['delivered@resend.dev'],
        subject: `New Contact Form Submission from ${name}`,
        react: EmailTemplate({ name, email, message }),
      });
  

    return NextResponse.json(data);
  } catch (error) {
    console.log("CONTACTUS", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
