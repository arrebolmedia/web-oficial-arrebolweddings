import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colecciones Cristina Vilchis & Arrebol Weddings | 40% OFF",
  description: "Colecciones exclusivas de fotografía y video para bodas con 40% de descuento. Paquetes completos desde $35,400 MXN. Colaboración especial Cristina Vilchis & Arrebol Weddings.",
  openGraph: {
    title: "Colecciones Cristina Vilchis & Arrebol Weddings | 40% OFF",
    description: "Aprovecha 40% de descuento en nuestras colecciones de fotografía y video para bodas. Colaboración exclusiva Cristina Vilchis & Arrebol Weddings.",
    type: "website",
    images: [
      {
        url: "/images/gallery/TOP-PyP-505.webp",
        width: 1200,
        height: 630,
        alt: "Colecciones Cristina Vilchis & Arrebol Weddings - 40% OFF",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Colecciones Cristina Vilchis & Arrebol Weddings | 40% OFF",
    description: "Colecciones exclusivas con 40% de descuento. Paquetes desde $35,400 MXN.",
    images: ["/images/gallery/TOP-PyP-505.webp"],
  },
};

export default function ColeccionesCristinaVilchisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
