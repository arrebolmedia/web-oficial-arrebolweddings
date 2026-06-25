import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://arrebolweddings.com"),
  title: "Colecciones Junio 2026 | Arrebol Weddings | 30% OFF",
  description: "Durante junio, 30% de descuento en todas nuestras colecciones de fotografía y video para bodas. Book your wedding date with a special June discount.",
  openGraph: {
    title: "Colecciones Junio 2026 | Arrebol Weddings | 30% OFF",
    description: "Aprovecha 30% de descuento en nuestras colecciones de fotografía y video para bodas. Promoción especial de junio. Take advantage of 30% off on our wedding photography and video collections.",
    type: "website",
    url: "https://arrebolweddings.com/colecciones-junio-2026",
    siteName: "Arrebol Weddings",
    images: [
      {
        url: "https://arrebolweddings.com/images/gallery/TOP-SyP-324-hero.webp",
        width: 1200,
        height: 630,
        alt: "Colecciones Junio 2026 - Arrebol Weddings - 30% OFF",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Colecciones Junio 2026 | Arrebol Weddings | 30% OFF",
    description: "Colecciones de junio con 30% de descuento en fotografía y video para bodas. June collections with 30% off.",
    images: ["https://arrebolweddings.com/images/gallery/TOP-SyP-324-hero.webp"],
  },
};

export default function ColeccionesJunio2026Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
