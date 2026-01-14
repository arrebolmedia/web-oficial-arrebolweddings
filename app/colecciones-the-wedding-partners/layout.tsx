import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colecciones: The Wedding Partners & Arrebol Weddings | 20% OFF",
  description: "Colecciones exclusivas de fotografía y video para bodas con 20% de descuento. Paquetes completos desde $47,200 MXN. Colaboración especial The Wedding Partners & Arrebol Weddings.",
  openGraph: {
    title: "Colecciones: The Wedding Partners & Arrebol Weddings | 20% OFF",
    description: "Aprovecha 20% de descuento en nuestras colecciones de fotografía y video para bodas. Colaboración exclusiva The Wedding Partners & Arrebol Weddings.",
    type: "website",
    url: "https://arrebolweddings.com/colecciones-the-wedding-partners",
    images: [
      {
        url: "https://arrebolweddings.com/images/gallery/SandJ-404.webp",
        width: 1200,
        height: 630,
        alt: "Colecciones The Wedding Partners & Arrebol Weddings - 20% OFF",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Colecciones: The Wedding Partners & Arrebol Weddings | 20% OFF",
    description: "Colecciones exclusivas con 20% de descuento. Paquetes desde $47,200 MXN.",
    images: ["https://arrebolweddings.com/images/gallery/SandJ-404.webp"],
  },
};

export default function ColeccionesTheWeddingPartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
