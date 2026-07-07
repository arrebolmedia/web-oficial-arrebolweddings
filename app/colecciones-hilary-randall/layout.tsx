import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://arrebolweddings.com"),
  title: "Hilary & Randall · 19 de diciembre de 2026 | Arrebol Weddings",
  description: "Propuesta personalizada de video para la boda de Hilary y Randall en Posada del Tepozteco, 19 de diciembre de 2026.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Hilary & Randall · Posada del Tepozteco",
    description: "Propuesta personalizada de video · 19 de diciembre de 2026",
    type: "website",
    url: "https://arrebolweddings.com/colecciones-hilary-randall",
    siteName: "Arrebol Weddings",
    images: [
      {
        url: "https://arrebolweddings.com/images/gallery/TOP-PyP-505.webp",
        width: 1200,
        height: 630,
        alt: "Hilary & Randall · Posada del Tepozteco · Arrebol Weddings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hilary & Randall · Posada del Tepozteco",
    description: "Propuesta personalizada de video · 19 de diciembre de 2026",
    images: ["https://arrebolweddings.com/images/gallery/TOP-PyP-505.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
