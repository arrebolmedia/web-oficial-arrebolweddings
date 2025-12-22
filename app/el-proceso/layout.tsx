import { Metadata } from "next";

export const metadata: Metadata = {
  title: "El Proceso | Arrebol Weddings",
  description: "Descubre cómo trabajamos: desde la primera llamada hasta la entrega final. Un proceso transparente y cercano diseñado para capturar tu boda sin estrés.",
  openGraph: {
    title: "El Proceso | Arrebol Weddings",
    description: "Conoce nuestro proceso de trabajo: transparente, cercano y diseñado para tu tranquilidad.",
    type: "website",
    images: [
      {
        url: "/images/gallery/TOP-SyD-162.webp",
        width: 1200,
        height: 630,
        alt: "Proceso de Trabajo - Arrebol Weddings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "El Proceso | Arrebol Weddings",
    description: "Proceso transparente desde la primera llamada hasta la entrega.",
    images: ["/images/gallery/TOP-SyD-162.webp"],
  },
};

export default function ProcesoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
