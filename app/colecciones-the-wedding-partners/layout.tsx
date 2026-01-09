import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colecciones: The Wedding Partners & Arrebol Weddings",
  description: "Colecciones exclusivas de fotografía y video para bodas. Paquetes completos desde $59,000 MXN. Colaboración especial The Wedding Partners & Arrebol Weddings.",
  openGraph: {
    title: "Colecciones: The Wedding Partners & Arrebol Weddings",
    description: "Colecciones exclusivas de fotografía y video para bodas. Colaboración especial The Wedding Partners & Arrebol Weddings.",
    type: "website",
    url: "https://arrebolweddings.com/colecciones-the-wedding-partners",
    images: [
      {
        url: "https://arrebolweddings.com/images/gallery/SandJ-404.webp",
        width: 1200,
        height: 630,
        alt: "Colecciones The Wedding Partners & Arrebol Weddings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Colecciones: The Wedding Partners & Arrebol Weddings",
    description: "Colecciones exclusivas de fotografía y video para bodas. Paquetes desde $59,000 MXN.",
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
