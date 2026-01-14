import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colecciones: Josema Gorrosquieta & Arrebol Weddings | 40% OFF",
  description: "Colecciones exclusivas de fotografía y video para bodas con 40% de descuento. Paquetes completos desde $35,400 MXN. Colaboración especial Josema Gorrosquieta & Arrebol Weddings.",
  openGraph: {
    title: "Colecciones: Josema Gorrosquieta & Arrebol Weddings | 40% OFF",
    description: "Aprovecha 40% de descuento en nuestras colecciones de fotografía y video para bodas. Colaboración exclusiva Josema Gorrosquieta & Arrebol Weddings.",
    type: "website",
    url: "https://arrebolweddings.com/colecciones-josema-gorrosquieta",
    images: [
      {
        url: "https://arrebolweddings.com/images/gallery/SandJ-404.webp",
        width: 1200,
        height: 630,
        alt: "Colecciones Josema Gorrosquieta & Arrebol Weddings - 40% OFF",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Colecciones: Josema Gorrosquieta & Arrebol Weddings | 40% OFF",
    description: "Colecciones exclusivas con 40% de descuento. Paquetes desde $35,400 MXN.",
    images: ["https://arrebolweddings.com/images/gallery/SandJ-404.webp"],
  },
};

export default function ColeccionesJosemaGorrosquietaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
