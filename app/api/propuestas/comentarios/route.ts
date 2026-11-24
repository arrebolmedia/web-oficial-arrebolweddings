import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";
import nodemailer from "nodemailer";

// Comentarios de las propuestas cifradas de /public/propuestas/<slug>/.
// La página manda la misma contraseña con la que se abrió; sin ella no se lee ni se escribe.
// Se guardan en un JSON por propuesta, en un volumen del contenedor (docker-compose.yml).
const PROPUESTAS: Record<string, { clave: string; nombre: string }> = {
  "parrilla-rancho-la-joya": { clave: "RLJ", nombre: "Parrilla Rancho La Joya" },
};
const DIR = process.env.COMENTARIOS_DIR || path.join(process.cwd(), "data", "comentarios");
const MAX_TEXTO = 4000;
const MAX_NOMBRE = 80;

type Comentario = { id: string; post: number; nombre: string; texto: string; fecha: string };

// Una escritura a la vez por archivo (un solo proceso de Node en el contenedor).
let cola: Promise<unknown> = Promise.resolve();
function enCola<T>(fn: () => Promise<T>): Promise<T> {
  const p = cola.then(fn, fn);
  cola = p.catch(() => undefined);
  return p;
}

async function leer(slug: string): Promise<Comentario[]> {
  try {
    const raw = await fs.readFile(path.join(DIR, `${slug}.json`), "utf8");
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

async function escribir(slug: string, lista: Comentario[]) {
  await fs.mkdir(DIR, { recursive: true });
  const destino = path.join(DIR, `${slug}.json`);
  const tmp = `${destino}.${process.pid}.tmp`;
  await fs.writeFile(tmp, JSON.stringify(lista, null, 1), "utf8");
  await fs.rename(tmp, destino);
}

function esc(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
}

async function avisar(prop: string, c: Comentario) {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER) return;
  try {
    const t = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
    const donde = c.post > 0 ? `publicación ${c.post}` : "comentario general";
    await t.sendMail({
      from: `"Arrebol Weddings Web" <${process.env.SMTP_USER}>`,
      to: "anthony@arrebol.com.mx",
      subject: `${prop}: comentario${c.nombre ? ` de ${c.nombre}` : ""} (${donde})`,
      text: `${c.nombre ? `${c.nombre} · ` : ""}${donde}\n\n${c.texto}`,
      html: `<p>${c.nombre ? `<b>${esc(c.nombre)}</b> · ` : ""}${esc(donde)}</p><p style="white-space:pre-line">${esc(c.texto)}</p>`,
    });
  } catch (e) {
    console.error("Aviso de comentario no enviado:", e);
  }
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Solicitud inválida" }, { status: 400 });
  }
  const slug = String(body.propuesta || "");
  const prop = PROPUESTAS[slug];
  if (!prop || body.clave !== prop.clave) {
    return NextResponse.json({ error: "No autorizado" }, { status: 403 });
  }

  if (body.accion === "listar") {
    return NextResponse.json({ comentarios: await leer(slug) });
  }

  if (body.accion === "agregar") {
    const texto = String(body.texto || "").trim().slice(0, MAX_TEXTO);
    const nombre = String(body.nombre || "").trim().slice(0, MAX_NOMBRE);
    const post = Number.isInteger(body.post) ? (body.post as number) : 0;
    if (!texto) {
      return NextResponse.json({ error: "Escribe tu comentario." }, { status: 400 });
    }
    if (post < 0 || post > 500) {
      return NextResponse.json({ error: "Publicación inválida" }, { status: 400 });
    }
    const c: Comentario = { id: randomUUID(), post, nombre, texto, fecha: new Date().toISOString() };
    const lista = await enCola(async () => {
      const l = await leer(slug);
      if (l.length >= 2000) throw new Error("lleno");
      l.push(c);
      await escribir(slug, l);
      return l;
    }).catch(() => null);
    if (!lista) return NextResponse.json({ error: "No se pudo guardar. Intenta de nuevo." }, { status: 500 });
    await avisar(prop.nombre, c);
    return NextResponse.json({ ok: true, comentario: c, comentarios: lista });
  }

  return NextResponse.json({ error: "Acción desconocida" }, { status: 400 });
}
