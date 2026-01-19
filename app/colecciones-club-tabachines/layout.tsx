import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Valeria Meza & Arrebol Weddings - Club de Golf Tabachines",
  description: "Paquetes especiales para la boda del 9 de enero 2027 en Club de Golf Tabachines. Fotografía y video profesional desde $25,000 MXN.",
  openGraph: {
    title: "Valeria Meza & Arrebol Weddings",
    description: "Paquetes especiales: 9 de enero 2027, Club de Golf Tabachines. Fotografía y video profesional para bodas.",
    type: "website",
    url: "https://arrebolweddings.com/colecciones-club-tabachines",
    siteName: "Arrebol Weddings",
    locale: "es_MX",
    images: [
      {
        url: "https://arrebolweddings.com/images/RLJ/L%26A-363_websize.jpg",
        width: 1200,
        height: 630,
        alt: "Valeria Meza & Arrebol Weddings - Club de Golf Tabachines",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Valeria Meza & Arrebol Weddings",
    description: "Paquetes especiales: 9 de enero 2027, Club de Golf Tabachines",
    images: ["https://arrebolweddings.com/images/RLJ/L%26A-363_websize.jpg"],
  },
  keywords: [
    "club tabachines boda",
    "valeria meza",
    "fotografía bodas tabachines",
    "video bodas cuernavaca",
    "arrebol weddings",
    "club de golf tabachines",
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
