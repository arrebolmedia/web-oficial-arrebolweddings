import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colecciones: Sebastián Ramírez & Arrebol Weddings",
  description: "Colecciones exclusivas de fotografía y video para bodas. Paquetes completos desde $59,000 MXN. Colaboración especial Sebastián Ramírez & Arrebol Weddings.",
  openGraph: {
    title: "Colecciones: Sebastián Ramírez & Arrebol Weddings",
    description: "Colecciones exclusivas de fotografía y video para bodas. Colaboración especial Sebastián Ramírez & Arrebol Weddings.",
    type: "website",
    url: "https://arrebolweddings.com/colecciones-sebastian-ramirez",
    images: [
      {
        url: "https://arrebolweddings.com/images/gallery/SandJ-404.webp",
        width: 1200,
        height: 630,
        alt: "Colecciones Sebastián Ramírez & Arrebol Weddings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Colecciones: Sebastián Ramírez & Arrebol Weddings",
    description: "Colecciones exclusivas de fotografía y video para bodas. Paquetes desde $59,000 MXN.",
    images: ["https://arrebolweddings.com/images/gallery/SandJ-404.webp"],
  },
};

export default function ColeccionesSebastianRamirezLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
