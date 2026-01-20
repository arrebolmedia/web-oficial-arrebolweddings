import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colecciones Giovana Sullivan & Arrebol Weddings | 20% OFF",
  description: "Colecciones exclusivas de fotografía y video para bodas con 20% de descuento. Paquetes completos desde $47,200 MXN. Colaboración especial Giovana Sullivan & Arrebol Weddings.",
  openGraph: {
    title: "Colecciones Giovana Sullivan & Arrebol Weddings | 20% OFF",
    description: "Aprovecha 20% de descuento en nuestras colecciones de fotografía y video para bodas. Colaboración exclusiva Giovana Sullivan & Arrebol Weddings.",
    type: "website",
    images: [
      {
        url: "/images/gallery/TOP-KyB-236.webp",
        width: 1200,
        height: 630,
        alt: "Colecciones Giovana Sullivan & Arrebol Weddings - 20% OFF",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Colecciones Giovana Sullivan & Arrebol Weddings | 20% OFF",
    description: "Colecciones exclusivas con 20% de descuento. Paquetes desde $47,200 MXN.",
    images: ["/images/gallery/TOP-KyB-236.webp"],
  },
};

export default function ColeccionesGioSullivanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
