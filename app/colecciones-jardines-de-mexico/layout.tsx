import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jardines de México & Arrebol Weddings | Colecciones",
  description: "Fotografía y video para bodas en Jardines de México. Paquetes completos con fotógrafos y videógrafos profesionales.",
  openGraph: {
    title: "Jardines de México & Arrebol Weddings | Colecciones",
    description: "Paquetes de fotografía y video para bodas en Jardines de México. Cobertura completa desde celebraciones íntimas hasta grandes eventos.",
    type: "website",
    images: [
      {
        url: "/images/gallery/TOP-PyP-505.webp",
        width: 1200,
        height: 630,
        alt: "Jardines de México & Arrebol Weddings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jardines de México & Arrebol Weddings | Colecciones",
    description: "Fotografía y video para bodas en Jardines de México.",
    images: ["/images/gallery/TOP-PyP-505.webp"],
  },
};

export default function ColeccionesJardinesDeMexicoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
