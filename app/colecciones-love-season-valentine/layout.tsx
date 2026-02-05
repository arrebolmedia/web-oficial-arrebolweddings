import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Love Season: Valentine's Day | Arrebol Weddings | 30% OFF",
  description: "Celebra el amor con nuestras colecciones especiales de Valentine's Day. 30% de descuento en fotografía y video para bodas. Paquetes completos desde $41,300 MXN. Celebrate love with our special Valentine's Day collections.",
  openGraph: {
    title: "Love Season: Valentine's Day | Arrebol Weddings | 30% OFF",
    description: "Aprovecha 30% de descuento en nuestras colecciones de fotografía y video para bodas. Promoción especial Love Season: Valentine's Day. Take advantage of 30% off on our wedding photography and video collections.",
    type: "website",
    images: [
      {
        url: "/images/gallery/TOP-SyP-324-hero.webp",
        width: 1200,
        height: 630,
        alt: "Love Season: Valentine's Day - Arrebol Weddings - 30% OFF",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Love Season: Valentine's Day | Arrebol Weddings | 30% OFF",
    description: "Colecciones especiales de Valentine's Day con 30% de descuento. Paquetes desde $41,300 MXN. Special Valentine's collections with 30% off.",
    images: ["/images/gallery/TOP-SyP-324-hero.webp"],
  },
};

export default function ColeccionesLoveSeasonValentineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
