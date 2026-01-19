import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HT Planner & Arrebol Weddings",
  description: "20% de descuento en colecciones de fotografía y video para bodas. Colaboración exclusiva HT Planner & Arrebol Weddings.",
  openGraph: {
    title: "HT Planner & Arrebol Weddings - 20% OFF",
    description: "20% de descuento en colecciones de fotografía y video para bodas. Colaboración exclusiva HT Planner & Arrebol Weddings.",
    type: "website",
    url: "https://arrebolweddings.com/colecciones-ht-planner",
    siteName: "Arrebol Weddings",
    locale: "es_MX",
    images: [
      {
        url: "https://arrebolweddings.com/images/gallery/TOP-KyB-236.webp",
        width: 1200,
        height: 630,
        alt: "HT Planner & Arrebol Weddings - 20% OFF",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HT Planner & Arrebol Weddings - 20% OFF",
    description: "20% de descuento en colecciones de fotografía y video para bodas.",
    images: ["https://arrebolweddings.com/images/gallery/TOP-KyB-236.webp"],
  },
  keywords: [
    "ht planner",
    "fotografía bodas",
    "video bodas",
    "arrebol weddings",
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
