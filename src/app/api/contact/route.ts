import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 465,
      secure: true,
      auth: {
        user: "info@rrgeminiservices.com",
        pass: "@reebXrrgemini26",
      },
    });

    // Email to company
    await transporter.sendMail({
      from: `"RR Gemini Website" <info@rrgeminiservices.com>`,
      to: "info@rrgeminiservices.com",
      subject: `New Contact Form Submission: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Subject: ${subject}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Auto-reply to customer
    await transporter.sendMail({
      from: `"RR Gemini Services" <info@rrgeminiservices.com>`,
      to: email,
      subject: "Thank you for contacting RR Gemini Services",
      text: `
        Dear ${name},

        Thank you for contacting RR Gemini Services. This is to confirm that we have received your message.
        
        Our team will review your inquiry and get back to you as soon as possible.
        
        Best regards,
        RR Gemini Services Team
      `,
      html: `
        <h2>Thank you for contacting RR Gemini Services</h2>
        <p>Dear ${name},</p>
        <p>Thank you for contacting RR Gemini Services. This is to confirm that we have received your message.</p>
        <p>Our team will review your inquiry and get back to you as soon as possible.</p>
        <p>Best regards,<br>RR Gemini Services Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
