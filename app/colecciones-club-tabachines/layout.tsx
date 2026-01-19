import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Valeria Meza & Arrebol Weddings - 50% OFF",
  description: "Promoción exclusiva 50% DE DESCUENTO para boda del 9 de enero 2027 en Club Tabachines. Paquetes premium de fotografía y video para bodas desde $25,000 MXN.",
  openGraph: {
    title: "Valeria Meza & Arrebol Weddings - ¡50% OFF!",
    description: "Oferta única: 50% de descuento en todos nuestros paquetes para la boda del 9 de enero 2027 en Club Tabachines.",
    type: "website",
    url: "https://arrebolweddings.com/colecciones-club-tabachines",
    siteName: "Arrebol Weddings",
    locale: "es_MX",
    images: [
      {
        url: "https://arrebolweddings.com/images/RLJ/L%26A-363_websize.jpg",
        width: 1200,
        height: 630,
        alt: "Suite Especial Club Tabachines - Arrebol Weddings",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suite Especial Club Tabachines - ¡50% OFF!",
    description: "Promoción exclusiva: 50% de descuento para boda del 9 de enero 2027.",
    images: ["https://arrebolweddings.com/images/RLJ/L%26A-363_websize.jpg"],
  },
  keywords: [
    "club tabachines boda",
    "descuento boda 2027",
    "fotografía bodas tabachines",
    "video bodas cuernavaca",
    "promoción bodas",
    "arrebol weddings",
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
