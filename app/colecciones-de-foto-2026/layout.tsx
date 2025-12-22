import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colecciones de Fotografía 2026 | Arrebol Weddings",
  description:
    "Descubre nuestras colecciones de fotografía de bodas 2026 en Cuernavaca. Paquetes exclusivos de fotografía profesional con precios actualizados.",
};

export default function ColeccionesFotoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
