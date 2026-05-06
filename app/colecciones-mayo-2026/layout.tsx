import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colecciones Mayo 2026 | Arrebol Weddings | 30% OFF",
  description: "Durante mayo, 30% de descuento en todas nuestras colecciones de fotografía y video para bodas. Paquetes completos desde $41,300 MXN. Book your wedding date with a special May discount.",
  openGraph: {
    title: "Colecciones Mayo 2026 | Arrebol Weddings | 30% OFF",
    description: "Aprovecha 30% de descuento en nuestras colecciones de fotografía y video para bodas. Promoción especial de mayo. Take advantage of 30% off on our wedding photography and video collections.",
    type: "website",
    images: [
      {
        url: "/images/gallery/TOP-SyP-324-hero.webp",
        width: 1200,
        height: 630,
        alt: "Colecciones Mayo 2026 - Arrebol Weddings - 30% OFF",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Colecciones Mayo 2026 | Arrebol Weddings | 30% OFF",
    description: "Colecciones de mayo con 30% de descuento en fotografía y video para bodas. Paquetes desde $41,300 MXN. May collections with 30% off.",
    images: ["/images/gallery/TOP-SyP-324-hero.webp"],
  },
};

export default function ColeccionesMayo2026Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
