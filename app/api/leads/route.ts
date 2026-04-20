import { EMAIL_PASS, EMAIL_TO, EMAIL_USER, SHEETDB_API_URL } from "@/app/constant";
import nodemailer from "nodemailer";

export async function POST(req:any) {
  try {
    const { name, email, telephone, location, schoolName, message, source = "Website General" } = await req.json();

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
          City: location || "",
          School: schoolName || "",
          Message: message || "",
          Source: source,
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
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #8c5a31;">Hello ${name},</h2>
          <p>Thank you for reaching out to <strong>Penchant Learning</strong>.</p>
          <p>We have received your details successfully and our team is currently reviewing your enquiry.</p>
          <p>Expect to hear from us within the next 2 working days.</p>
          <br/>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p style="font-size: 12px; color: #777;">This is an automated confirmation. Please do not reply to this email.</p>
          <p><strong>— Penchant Team</strong></p>
        </div>
      `,
    });

    /* --------- EMAIL TO ADMIN --------- */
    await transporter.sendMail({
      from: `"Penchant Website" <${EMAIL_USER}>`,
      to: EMAIL_TO,
      subject: `New Lead Alert: ${source} - ${name} 🚀`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #8c5a31; padding: 20px; border-radius: 10px;">
          <h2 style="color: #8c5a31; border-bottom: 2px solid #8c5a31; padding-bottom: 10px;">New Enquiry Details</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr><td style="padding: 8px 0; font-weight: bold; width: 150px;">Source:</td><td>${source}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Name:</td><td>${name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td>${email}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td>${telephone}</td></tr>
            ${location ? `<tr><td style="padding: 8px 0; font-weight: bold;">City/Location:</td><td>${location}</td></tr>` : ""}
            ${schoolName ? `<tr><td style="padding: 8px 0; font-weight: bold;">School:</td><td>${schoolName}</td></tr>` : ""}
            ${message ? `<tr><td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Message:</td><td style="padding: 8px 0;">${message}</td></tr>` : ""}
          </table>
          <br/>
          <p style="font-size: 11px; color: #777; margin-top: 20px; border-top: 1px solid #eee; padding-top: 10px;">
            Submitted on: ${new Date().toLocaleString()}
          </p>
        </div>
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
