import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colecciones para Gio Sullivan | Arrebol Weddings",
  description: "Colecciones de fotografía y video para tu boda. Paquetes completos desde $59,000 MXN.",
  openGraph: {
    title: "Colecciones para Gio Sullivan | Arrebol Weddings",
    description: "Colecciones de fotografía y video para tu boda.",
    type: "website",
    url: "https://arrebolweddings.com/colecciones-gio-sullivan",
    images: [
      {
        url: "https://arrebolweddings.com/images/gallery/TOP-PyP-505.webp",
        width: 1200,
        height: 630,
        alt: "Colecciones Gio Sullivan - Arrebol Weddings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Colecciones para Gio Sullivan | Arrebol Weddings",
    description: "Colecciones de fotografía y video para tu boda.",
    images: ["https://arrebolweddings.com/images/gallery/TOP-PyP-505.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
