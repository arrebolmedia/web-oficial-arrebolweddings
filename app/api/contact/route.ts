import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Función para agregar lead a Baserow
async function addToBaserow(data: {
  couple: string;
  email: string;
  phone?: string;
  date?: string;
  venue?: string;
  guests?: string;
  source?: string;
  message: string;
}) {
  try {
    const baserowUrl = process.env.BASEROW_URL || "https://data.arrebolweddings.com";
    const tableId = process.env.BASEROW_TABLE_ID || "34";
    const token = process.env.BASEROW_TOKEN;

    if (!token) {
      console.error("BASEROW_TOKEN no configurado");
      return;
    }

    // Mapear "Cómo nos conocieron" a los IDs de Canal en Baserow
    const canalMap: Record<string, number> = {
      "Instagram": 54,
      "Recomendación": 57,
      "Recommendation": 57,
      "Planner": 57,
      "Búsqueda en Google": 55, // Sitio Web
      "Google Search": 55,
      "Otro": 55, // Sitio Web por defecto
      "Other": 55,
    };

    const canalId = data.source ? canalMap[data.source] || 55 : 55; // Default: Sitio Web

    // Construir notas con toda la info adicional
    const notas = [
      `Email: ${data.email}`,
      data.guests ? `Invitados: ${data.guests}` : null,
      data.source ? `Nos conocieron por: ${data.source}` : null,
      `\nMensaje:\n${data.message}`,
    ].filter(Boolean).join("\n");

    const response = await fetch(`${baserowUrl}/api/database/rows/table/${tableId}/?user_field_names=true`, {
      method: "POST",
      headers: {
        "Authorization": `Token ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "Nombre": data.couple,
        "Teléfono": data.phone || "",
        "Status": 39, // "Sin contactar"
        "Canal": canalId,
        "Notas": notas,
        "Fecha del Evento": data.date || null,
        "Venue": data.venue || "",
        "Tipo": 85, // "Boda"
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Error Baserow:", error);
    }
  } catch (error) {
    console.error("Error agregando a Baserow:", error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { couple, email, phone, date, venue, guests, source, message } = body;

    // Validate required fields
    if (!couple || !email || !message) {
      return NextResponse.json(
        { error: "Campos requeridos faltantes" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Arrebol Weddings Web" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || "hola@arrebolweddings.com",
      cc: "anthony@arrebol.com.mx",
      replyTo: email,
      subject: `💍 Nueva consulta de ${couple}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f7f4;">
          <h1 style="color: #5a4a3a; font-weight: 300; border-bottom: 1px solid #d4c5b5; padding-bottom: 10px;">
            Nueva consulta de boda
          </h1>

          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 10px 0; color: #8a7a6a; width: 140px;">Pareja:</td>
              <td style="padding: 10px 0; color: #5a4a3a; font-weight: 500;">${couple}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #8a7a6a;">Email:</td>
              <td style="padding: 10px 0; color: #5a4a3a;">
                <a href="mailto:${email}" style="color: #5a4a3a;">${email}</a>
              </td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 10px 0; color: #8a7a6a;">Teléfono:</td>
              <td style="padding: 10px 0; color: #5a4a3a;">
                <a href="tel:${phone}" style="color: #5a4a3a;">${phone}</a>
              </td>
            </tr>
            ` : ''}
            ${date ? `
            <tr>
              <td style="padding: 10px 0; color: #8a7a6a;">Fecha tentativa:</td>
              <td style="padding: 10px 0; color: #5a4a3a;">${date}</td>
            </tr>
            ` : ''}
            ${venue ? `
            <tr>
              <td style="padding: 10px 0; color: #8a7a6a;">Venue:</td>
              <td style="padding: 10px 0; color: #5a4a3a;">${venue}</td>
            </tr>
            ` : ''}
            ${guests ? `
            <tr>
              <td style="padding: 10px 0; color: #8a7a6a;">Invitados:</td>
              <td style="padding: 10px 0; color: #5a4a3a;">${guests}</td>
            </tr>
            ` : ''}
            ${source ? `
            <tr>
              <td style="padding: 10px 0; color: #8a7a6a;">Nos conocieron por:</td>
              <td style="padding: 10px 0; color: #5a4a3a;">${source}</td>
            </tr>
            ` : ''}
          </table>

          <div style="background-color: white; padding: 20px; border-left: 3px solid #d4c5b5; margin: 20px 0;">
            <p style="color: #8a7a6a; margin: 0 0 10px 0; font-size: 14px;">Mensaje:</p>
            <p style="color: #5a4a3a; margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="color: #8a7a6a; font-size: 12px; text-align: center; margin-top: 30px;">
            Este mensaje fue enviado desde el formulario de contacto de arrebolweddings.com
          </p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Add to Baserow CRM
    await addToBaserow({ couple, email, phone, date, venue, guests, source, message });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje" },
      { status: 500 }
    );
  }
}