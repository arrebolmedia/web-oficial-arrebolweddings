import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marcela Meza & Arrebol Weddings",
  description: "Colecciones exclusivas de fotografía y video para bodas. Paquetes premium con fotógrafos y videógrafos profesionales.",
  openGraph: {
    title: "Marcela Meza & Arrebol Weddings",
    description: "Colecciones exclusivas para bodas. Fotografía y video profesional de alta calidad.",
    type: "website",
    url: "https://arrebolweddings.com/colecciones-marcela-meza",
    siteName: "Arrebol Weddings",
    locale: "es_MX",
    images: [
      {
        url: "https://arrebolweddings.com/images/gallery/TOP-KyB-236.webp",
        width: 1200,
        height: 630,
        alt: "Marcela Meza & Arrebol Weddings - Bodas",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcela Meza & Arrebol Weddings",
    description: "Colecciones exclusivas para bodas. Fotografía y video profesional.",
    images: ["https://arrebolweddings.com/images/gallery/TOP-KyB-236.webp"],
  },
  keywords: [
    "marcela meza",
    "fotografía bodas",
    "video bodas",
    "arrebol weddings",
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
