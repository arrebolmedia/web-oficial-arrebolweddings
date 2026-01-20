import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colecciones Gio Sullivan & Arrebol Weddings",
  description: "Colecciones exclusivas de fotografía y video para bodas. Paquetes completos desde $59,000 MXN. Colaboración especial Gio Sullivan & Arrebol Weddings.",
  openGraph: {
    title: "Colecciones Gio Sullivan & Arrebol Weddings",
    description: "Colecciones exclusivas de fotografía y video para bodas. Colaboración especial Gio Sullivan & Arrebol Weddings.",
    type: "website",
    images: [
      {
        url: "/images/gallery/TOP-PyP-505.webp",
        width: 1200,
        height: 630,
        alt: "Colecciones Gio Sullivan & Arrebol Weddings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Colecciones Gio Sullivan & Arrebol Weddings",
    description: "Colecciones exclusivas de fotografía y video para bodas. Paquetes desde $59,000 MXN.",
    images: ["/images/gallery/TOP-PyP-505.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;ColeccionesGioSullivanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>
