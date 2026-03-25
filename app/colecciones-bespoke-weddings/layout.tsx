import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bespoke Weddings & Arrebol Weddings | Colecciones",
  description: "Fotografía y video para bodas en colaboración con Bespoke Weddings. Paquetes completos con fotógrafos y videógrafos profesionales.",
  openGraph: {
    title: "Bespoke Weddings & Arrebol Weddings | Colecciones",
    description: "Paquetes de fotografía y video para bodas. Cobertura completa desde celebraciones íntimas hasta grandes eventos.",
    type: "website",
    images: [
      {
        url: "/images/gallery/TOP-PyP-505.webp",
        width: 1200,
        height: 630,
        alt: "Bespoke Weddings & Arrebol Weddings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bespoke Weddings & Arrebol Weddings | Colecciones",
    description: "Fotografía y video para bodas en colaboración con Bespoke Weddings.",
    images: ["/images/gallery/TOP-PyP-505.webp"],
  },
};

export default function ColeccionesBespokeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
