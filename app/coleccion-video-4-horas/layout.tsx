import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colección de Video 4 Horas | Arrebol Weddings",
  description:
    "Colección esencial de video cinematográfico en 4 horas de cobertura. Ideal para ceremonias y celebraciones íntimas en Cuernavaca y Morelos.",
  openGraph: {
    title: "Colección de Video 4 Horas | Arrebol Weddings",
    description:
      "4 horas de videografía cinematográfica para capturar cada momento de tu celebración. Video de 10–15 minutos + versión 1 minuto.",
    images: ["/images/gallery/TOP-PyP-505.webp"],
    type: "website",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "Colección de Video 4 Horas | Arrebol Weddings",
    description:
      "4 horas de videografía cinematográfica para capturar cada momento de tu celebración.",
    images: ["/images/gallery/TOP-PyP-505.webp"],
  },
};

export default function ColeccionVideo4HorasLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
