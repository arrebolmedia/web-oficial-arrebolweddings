import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colecciones Josefo Flores & Arrebol Weddings",
  description: "Colecciones exclusivas de fotografía y video para bodas. Paquetes completos desde $59,000 MXN. Colaboración especial Josefo Flores & Arrebol Weddings.",
  openGraph: {
    title: "Colecciones Josefo Flores & Arrebol Weddings",
    description: "Colecciones exclusivas de fotografía y video para bodas. Colaboración especial Josefo Flores & Arrebol Weddings.",
    type: "website",
    images: [
      {
        url: "/images/gallery/SandJ-404.webp",
        width: 1200,
        height: 630,
        alt: "Colecciones Josefo Flores & Arrebol Weddings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Colecciones Josefo Flores & Arrebol Weddings",
    description: "Colecciones exclusivas de fotografía y video para bodas. Paquetes desde $59,000 MXN.",
    images: ["/images/gallery/SandJ-404.webp"],
  },
};

export default function ColeccionesJosefoFloresLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
