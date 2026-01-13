import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colecciones: Josema Gorrosquieta & Arrebol Weddings",
  description: "Colecciones exclusivas de fotografía y video para bodas. Paquetes completos desde $59,000 MXN. Colaboración especial Josema Gorrosquieta & Arrebol Weddings.",
  openGraph: {
    title: "Colecciones: Josema Gorrosquieta & Arrebol Weddings",
    description: "Colecciones exclusivas de fotografía y video para bodas. Colaboración especial Josema Gorrosquieta & Arrebol Weddings.",
    type: "website",
    url: "https://arrebolweddings.com/colecciones-josema-gorrosquieta",
    images: [
      {
        url: "https://arrebolweddings.com/images/gallery/SandJ-404.webp",
        width: 1200,
        height: 630,
        alt: "Colecciones Josema Gorrosquieta & Arrebol Weddings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Colecciones: Josema Gorrosquieta & Arrebol Weddings",
    description: "Colecciones exclusivas de fotografía y video para bodas. Paquetes desde $59,000 MXN.",
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
