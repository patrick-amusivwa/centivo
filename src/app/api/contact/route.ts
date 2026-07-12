import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, message } = await req.json();

    const data = await resend.emails.send({
      from: "contact@centivotechnology.co.ke",
      to: "info@centivotechnology.co.ke",
      subject: `New inquiry from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Service: ${service}

        Message:
        ${message}
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send",
      },
      { status: 500 },
    );
  }
}
