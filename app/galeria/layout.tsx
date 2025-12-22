import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galería | Arrebol Weddings",
  description: "Explora nuestra galería de bodas reales. Fotografías y videos de celebraciones únicas capturadas con un estilo documental y honesto.",
  openGraph: {
    title: "Galería | Arrebol Weddings",
    description: "Descubre bodas reales capturadas con un estilo documental único.",
    type: "website",
    images: [
      {
        url: "/images/gallery/TOP-SyP-116.webp",
        width: 1200,
        height: 630,
        alt: "Galería de Bodas - Arrebol Weddings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galería | Arrebol Weddings",
    description: "Explora bodas reales capturadas con estilo documental.",
    images: ["/images/gallery/TOP-SyP-116.webp"],
  },
};

export default function GaleriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
