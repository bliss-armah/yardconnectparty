import { NextResponse } from "next/server";

/**
 * Contact form handler.
 *
 * This validates the submission and returns a success response. To deliver
 * messages, connect an email provider (for example Resend, Postmark, or
 * SendGrid) or forward the payload to a Sanity dataset. The place to add that
 * integration is marked below.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!validEmail) {
      return NextResponse.json(
        { ok: false, error: "Invalid email" },
        { status: 400 },
      );
    }

    // Integration point: send an email or store the message here.
    console.log("New contact submission", {
      name,
      email,
      subject: body.subject,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request" },
      { status: 400 },
    );
  }
}
