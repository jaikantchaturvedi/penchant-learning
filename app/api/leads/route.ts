import { EMAIL_PASS, EMAIL_USER, SHEETDB_API_URL } from "@/app/constant";
import nodemailer from "nodemailer";

export async function POST(req:any) {
  try {
    const { name, email, telephone, location } = await req.json();

    /* --------- CHECK DUPLICATE --------- */
    const checkRes = await fetch(
      `${SHEETDB_API_URL}/search?email=${email}&telephone=${telephone}`
    );

    const existing = await checkRes.json();

    if (existing.length > 0) {
      return Response.json(
        { message: "Duplicate entry" },
        { status: 409 }
      );
    }

    /* --------- INSERT DATA --------- */
    await fetch(SHEETDB_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: {
          Name: name,
          Email: email,
          Telephone: telephone,
          City: location,
          Date: new Date().toLocaleString(),
        },
      }),
    });

    /* --------- EMAIL TO USER --------- */
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Penchant" <${EMAIL_USER}>`,
      to: email,
      subject: "We received your request 🌟",
      html: `
        <h2>Hello ${name},</h2>
        <p>Thank you for contacting us.</p>
        <p>Your details have been received successfully.</p>
        <p>Our team will reach out shortly.</p>
        <br/>
        <p><strong>— Penchant Team</strong></p>
      `,
    });

    return Response.json({ message: "Success" }, { status: 200 });

  } catch (error) {
    console.error(error);
    return Response.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}
