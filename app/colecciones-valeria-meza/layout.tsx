import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Valeria Meza & Arrebol Weddings",
  description: "20% de descuento en colecciones de fotografía y video para bodas. Colaboración exclusiva Valeria Meza & Arrebol Weddings.",
  openGraph: {
    title: "Valeria Meza & Arrebol Weddings - 20% OFF",
    description: "20% de descuento en colecciones de fotografía y video para bodas. Colaboración exclusiva Valeria Meza & Arrebol Weddings.",
    type: "website",
    url: "https://arrebolweddings.com/colecciones-valeria-meza",
    siteName: "Arrebol Weddings",
    locale: "es_MX",
    images: [
      {
        url: "https://arrebolweddings.com/images/gallery/TOP-KyB-236.webp",
        width: 1200,
        height: 630,
        alt: "Valeria Meza & Arrebol Weddings - Bodas",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Valeria Meza & Arrebol Weddings - 20% OFF",
    description: "20% de descuento en colecciones de fotografía y video para bodas.",
    images: ["https://arrebolweddings.com/images/gallery/TOP-KyB-236.webp"],
  },
  keywords: [
    "valeria meza",
    "fotografía bodas",
    "video bodas",
    "arrebol weddings",
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
