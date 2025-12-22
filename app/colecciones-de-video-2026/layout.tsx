import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colecciones de Video 2026 | Arrebol Weddings",
  description:
    "Descubre nuestras colecciones de video de bodas 2026 en Cuernavaca. Paquetes exclusivos de videografía cinematográfica con precios actualizados.",
};

export default function ColeccionesVideoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
