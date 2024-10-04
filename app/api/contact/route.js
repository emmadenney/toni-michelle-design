import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, email, message } = await req.json();

  // Create the Nodemailer transporter using Zoho's SMTP server
  let transporter = nodemailer.createTransport({
    host: "smtppro.zoho.eu",
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
      user: process.env.ZOHO_USER,
      pass: process.env.ZOHO_PASS,
    },
  });

  try {
    // Send mail with defined transport object
    await transporter.sendMail({
      from: '"Contact Form" <contact@tonimichelledesign.com>',
      to: "tm.campbell@outlook.com",
      subject: "New Contact Form Submission",
      text: `You have a new contact form submission from: 
        Name: ${name}
        Email: ${email}
        Message: ${message}`,
      replyTo: email,
    });

    // Respond with a success message
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { message: "Error sending email", error },
      { status: 500 }
    );
  }
}
