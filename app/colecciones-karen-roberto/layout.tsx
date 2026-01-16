import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colecciones para Karen & Roberto | Las Mañanitas",
  description: "Colecciones de fotografía y video para su boda en Las Mañanitas, Cuernavaca. Paquetes completos desde $59,000 MXN.",
  openGraph: {
    title: "Colecciones para Karen & Roberto | Las Mañanitas",
    description: "Colecciones de fotografía y video para su boda en Las Mañanitas, Cuernavaca.",
    type: "website",
    url: "https://arrebolweddings.com/colecciones-karen-roberto",
    images: [
      {
        url: "https://arrebolweddings.com/images/gallery/TOP-PyP-505.webp",
        width: 1200,
        height: 630,
        alt: "Colecciones Karen & Roberto - Las Mañanitas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Colecciones para Karen & Roberto | Las Mañanitas",
    description: "Colecciones de fotografía y video para su boda en Las Mañanitas, Cuernavaca.",
    images: ["https://arrebolweddings.com/images/gallery/TOP-PyP-505.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
