import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://arrebolweddings.com"),
  title: "Colecciones Julio 2026 | Arrebol Weddings | 40% OFF",
  description: "Durante julio, 40% de descuento en todas nuestras colecciones de fotografía y video para bodas. Book your wedding date with a special July discount.",
  openGraph: {
    title: "Colecciones Julio 2026 | Arrebol Weddings | 40% OFF",
    description: "Aprovecha 40% de descuento en nuestras colecciones de fotografía y video para bodas. Promoción especial de julio. Take advantage of 40% off on our wedding photography and video collections.",
    type: "website",
    url: "https://arrebolweddings.com/colecciones-julio-2026",
    siteName: "Arrebol Weddings",
    images: [
      {
        url: "https://arrebolweddings.com/images/gallery/TOP-SyP-324-hero.webp",
        width: 1200,
        height: 630,
        alt: "Colecciones Julio 2026 - Arrebol Weddings - 40% OFF",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Colecciones Julio 2026 | Arrebol Weddings | 40% OFF",
    description: "Colecciones de julio con 40% de descuento en fotografía y video para bodas. July collections with 40% off.",
    images: ["https://arrebolweddings.com/images/gallery/TOP-SyP-324-hero.webp"],
  },
};

export default function ColeccionesJulio2026Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
