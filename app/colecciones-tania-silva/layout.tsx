import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colecciones Tania Silva & Arrebol Weddings | 30% OFF",
  description: "Colecciones exclusivas de fotografía y video para bodas con 30% de descuento. Paquetes completos desde $41,300 MXN. Colaboración especial Tania Silva & Arrebol Weddings.",
  openGraph: {
    title: "Colecciones Tania Silva & Arrebol Weddings | 30% OFF",
    description: "Aprovecha 30% de descuento en nuestras colecciones de fotografía y video para bodas. Colaboración exclusiva Tania Silva & Arrebol Weddings.",
    type: "website",
    images: [
      {
        url: "/images/gallery/TOP-PyP-505.webp",
        width: 1200,
        height: 630,
        alt: "Colecciones Tania Silva & Arrebol Weddings - 30% OFF",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Colecciones Tania Silva & Arrebol Weddings | 30% OFF",
    description: "Colecciones exclusivas con 30% de descuento. Paquetes desde $41,300 MXN.",
    images: ["/images/gallery/TOP-PyP-505.webp"],
  },
};

export default function ColeccionesTaniaSilvaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
