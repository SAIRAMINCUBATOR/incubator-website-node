import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

import { NextRequest, NextResponse } from "next/server";
import EmailTemplate from "@/components/EmailTemplate";

/**
 * Handle Contact Us form submission.
 *
 * @param {NextRequest} req The request object
 * @param {NextResponse} res The response object
 * @returns {Promise<NextResponse>} The response object
 */
export async function POST(
  req: NextRequest,
  res: NextResponse
): Promise<NextResponse> {
  // Handle Contact Us form submission
  try {
    // Parse request JSON data
    const { email, name, message } = await req.json();
    console.log(email);

    // Check that all required fields are present
    if (!email || !name || !message) {
      // Return a 400 Bad Request response with a message
      return new NextResponse("Email or Name or Message is missing", {
        status: 400,
      });
    }

    // Send email using Resend API
    const data = await resend.emails.send({
      // From address
      from: "Contact Form <contactus-form@sairamincubation.com>",
      // To address
      to: ["queries@sairam.edu.in"],
      // Email subject
      subject: `New Contact Form Submission at Sairam Incubation Website`,
      // Render React component as email body
      react: EmailTemplate({ name, email, message }),
    });

    // Return the response data as JSON
    return NextResponse.json(data);
  } catch (error) {
    console.log("CONTACTUS", error);
    // Internal Server Error
    return new NextResponse("Internal Error", { status: 500 });
  }
}
