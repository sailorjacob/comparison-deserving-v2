import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// Ensure this route is always dynamic and not statically evaluated at build time
export const dynamic = "force-dynamic"

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, artworkTitle } = await req.json()
    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const subject = artworkTitle ? `Inquiry: ${artworkTitle}` : "General Inquiry"
    const text = `New inquiry received\n\nName: ${name}\nEmail: ${email}\nArtwork: ${artworkTitle ?? "(none specified)"}\n\nMessage:\n${message ?? ""}`

    const to = process.env.INQUIRY_TO_EMAIL || "info@haven.engineer"

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      // Soft-fail with clear error; avoids build-time crashes
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
    }

    const resend = new Resend(apiKey)
    await resend.emails.send({
      from: "inquiries@haven.engineer",
      to,
      subject,
      text,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Failed to send" }, { status: 500 })
  }
}


