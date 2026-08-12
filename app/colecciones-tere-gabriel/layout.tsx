import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://arrebolweddings.com"),
  title: "Colecciones - Tere & Gabriel | Arrebol Weddings",
  description:
    "Colecciones exclusivas de fotografía y video para Tere & Gabriel - 17 de abril 2027, Aztlán. 30% de descuento en fotografía y video.",
  openGraph: {
    title: "Colecciones - Tere & Gabriel | Arrebol Weddings",
    description:
      "Propuesta especial de fotografía y video para su boda. 17 de abril 2027 · Aztlán · 30% de descuento.",
    type: "website",
    url: "https://arrebolweddings.com/colecciones-tere-gabriel",
    siteName: "Arrebol Weddings",
    images: [
      {
        url: "https://arrebolweddings.com/images/gallery/TOP-SyP-324-hero.webp",
        width: 1200,
        height: 630,
        alt: "Colecciones Tere & Gabriel - Arrebol Weddings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Colecciones - Tere & Gabriel | Arrebol Weddings",
    description:
      "Colecciones de fotografía y video para Tere & Gabriel. 17 de abril 2027 · Aztlán.",
    images: ["https://arrebolweddings.com/images/gallery/TOP-SyP-324-hero.webp"],
  },
};

export default function ColeccionesTereGabrielLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
