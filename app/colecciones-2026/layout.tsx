import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colecciones 2026 | Arrebol Weddings",
  description: "Descubre nuestras colecciones de fotografía y video para bodas 2026. Desde $79,000 MXN. Paquetes personalizados con fotógrafos profesionales, videógrafos y cobertura completa.",
  openGraph: {
    title: "Colecciones 2026 | Arrebol Weddings",
    description: "Descubre nuestras colecciones de fotografía y video para bodas 2026. Desde $79,000 MXN con fotógrafos y videógrafos profesionales.",
    type: "website",
    images: [
      {
        url: "/images/gallery/TOP-PyP-505.webp",
        width: 1200,
        height: 630,
        alt: "Colecciones de Boda 2026 - Arrebol Weddings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Colecciones 2026 | Arrebol Weddings",
    description: "Descubre nuestras colecciones de fotografía y video para bodas 2026. Desde $79,000 MXN.",
    images: ["/images/gallery/TOP-PyP-505.webp"],
  },
};

export default function Colecciones2026Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
