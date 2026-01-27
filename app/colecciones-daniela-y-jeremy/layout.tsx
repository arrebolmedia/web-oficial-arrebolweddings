import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colecciones para Daniela & Jeremy | Arrebol Weddings",
  description: "Colecciones exclusivas de fotografía y video para la boda de Daniela & Jeremy. Paquetes especiales desde $53,000 MXN.",
  openGraph: {
    title: "Colecciones para Daniela & Jeremy | Arrebol Weddings",
    description: "Colecciones exclusivas de fotografía y video para su boda.",
    type: "website",
    url: "https://arrebolweddings.com/colecciones-daniela-y-jeremy",
    images: [
      {
        url: "https://arrebolweddings.com/images/gallery/TOP-PyP-505.webp",
        width: 1200,
        height: 630,
        alt: "Colecciones Daniela & Jeremy - Arrebol Weddings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Colecciones para Daniela & Jeremy | Arrebol Weddings",
    description: "Colecciones exclusivas de fotografía y video para su boda.",
    images: ["https://arrebolweddings.com/images/gallery/TOP-PyP-505.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
