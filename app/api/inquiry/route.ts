import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, artworkTitle } = await req.json()
    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const subject = artworkTitle ? `Inquiry: ${artworkTitle}` : "General Inquiry"
    const text = `New inquiry received\n\nName: ${name}\nEmail: ${email}\nArtwork: ${artworkTitle ?? "(none specified)"}\n\nMessage:\n${message ?? ""}`

    const to = process.env.INQUIRY_TO_EMAIL || "info@haven.engineer"

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


