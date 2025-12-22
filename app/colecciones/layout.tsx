import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colecciones | Arrebol Weddings",
  description: "Descubre nuestras colecciones de fotografía y video para bodas. Paquetes completos desde $49,000 MXN con fotógrafos y videógrafos profesionales.",
  openGraph: {
    title: "Colecciones | Arrebol Weddings",
    description: "Paquetes de fotografía y video para bodas con cobertura completa. Desde celebraciones íntimas hasta grandes eventos.",
    type: "website",
    images: [
      {
        url: "/images/gallery/TOP-PyP-505.webp",
        width: 1200,
        height: 630,
        alt: "Colecciones de Boda - Arrebol Weddings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Colecciones | Arrebol Weddings",
    description: "Paquetes de fotografía y video para bodas desde $49,000 MXN.",
    images: ["/images/gallery/TOP-PyP-505.webp"],
  },
};

export default function ColeccionesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
