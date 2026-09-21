import type { Metadata } from "next";
import { contentEs } from "@/lib/content";

// El mismo cálculo que la página: la mitad del precio de la colección completa
const desde = Math.min(
  ...contentEs.colecciones.collections.map(col =>
    Math.round(parseInt(col.price.split(' ')[0].replace(/[^0-9]/g, '')) / 2)
  )
).toLocaleString('es-MX');

const title = "Colecciones de Video 2026 | Arrebol Weddings";
const description = `Colecciones de video de bodas 2026 en Cuernavaca y Morelos, desde $${desde} MXN. De 8 a 12 horas de cobertura, película de 20 a 55 minutos y versión de 1 minuto.`;
const image = {
  url: "/images/gallery/TOP-PyP-505.webp",
  width: 1798,
  height: 1199,
  alt: "Colecciones de Video 2026 - Arrebol Weddings",
};

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/colecciones-de-video-2026" },
  openGraph: {
    title,
    description,
    url: "/colecciones-de-video-2026",
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

export default function ColeccionesVideoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
