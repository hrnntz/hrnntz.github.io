import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

interface ContactBody {
  name: string;
  email: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  let body: ContactBody;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Cuerpo de la solicitud inválido." }, { status: 400 });
  }

  const { name, email, message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Todos los campos son requeridos." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "El email no tiene un formato válido." }, { status: 400 });
  }

  if (message.trim().length < 10) {
    return NextResponse.json({ error: "El mensaje debe tener al menos 10 caracteres." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("[contact] RESEND_API_KEY no está configurada.");
    return NextResponse.json({ error: "Error de configuración del servidor." }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "Contacto hrnntz.me <contacto@hrnntz.me>",
      to: "hola@hrnntz.me",
      replyTo: email,
      subject: `Mensaje de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("[contact] Error al enviar email:", err);
    return NextResponse.json({ error: "No se pudo enviar el mensaje. Intenta de nuevo." }, { status: 500 });
  }
}
