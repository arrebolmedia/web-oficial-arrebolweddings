import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://arrebolweddings.com"),
  title: "Colecciones - Constanza & Jorge | Arrebol Weddings",
  description:
    "Colecciones exclusivas de fotografía y video para Constanza & Jorge - 23 de enero 2027, Aztlán. 50% de descuento en fotografía y video.",
  openGraph: {
    title: "Colecciones - Constanza & Jorge | Arrebol Weddings",
    description:
      "Propuesta especial de fotografía y video para su boda. 23 de enero 2027 · Aztlán · 50% de descuento.",
    type: "website",
    url: "https://arrebolweddings.com/colecciones-constanza-jorge",
    siteName: "Arrebol Weddings",
    images: [
      {
        url: "https://arrebolweddings.com/images/gallery/TOP-SyP-324-hero.webp",
        width: 1200,
        height: 630,
        alt: "Colecciones Constanza & Jorge - Arrebol Weddings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Colecciones - Constanza & Jorge | Arrebol Weddings",
    description:
      "Colecciones de fotografía y video para Constanza & Jorge. 23 de enero 2027 · Aztlán.",
    images: ["https://arrebolweddings.com/images/gallery/TOP-SyP-324-hero.webp"],
  },
};

export default function ColeccionesConstanzaJorgeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
