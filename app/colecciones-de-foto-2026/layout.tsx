import type { Metadata } from "next";
import { contentEs } from "@/lib/content";

// El mismo cálculo que la página: la mitad del precio de la colección completa
const desde = Math.min(
  ...contentEs.colecciones.collections.map(col =>
    Math.round(parseInt(col.price.split(' ')[0].replace(/[^0-9]/g, '')) / 2)
  )
).toLocaleString('es-MX');

const title = "Colecciones de Fotografía 2026 | Arrebol Weddings";
const description = `Colecciones de fotografía de bodas 2026 en Cuernavaca y Morelos, desde $${desde} MXN. De 8 a 12 horas de cobertura, 1 o 2 fotógrafos y galería digital.`;
const image = {
  url: "/images/gallery/TOP-PyP-505.webp",
  width: 1798,
  height: 1199,
  alt: "Colecciones de Fotografía 2026 - Arrebol Weddings",
};

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/colecciones-de-foto-2026" },
  openGraph: {
    title,
    description,
    url: "/colecciones-de-foto-2026",
    type: "website",
    locale: "es_MX",
    siteName: "Arrebol Weddings",
    images: [image],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image.url],
  },
};

export default function ColeccionesFotoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
