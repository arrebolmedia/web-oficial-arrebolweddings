import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colecciones: Boda Huayacán 16 Enero 2027 | Arrebol Weddings",
  description: "Colección exclusiva de fotografía y video para la boda en Huayacán el 16 de enero 2027. Precio especial $80,000 MXN.",
  openGraph: {
    title: "Colecciones: Boda Huayacán 16 Enero 2027 | Arrebol Weddings",
    description: "Colección exclusiva de fotografía y video para la boda en Huayacán el 16 de enero 2027. Precio especial $80,000 MXN.",
    type: "website",
    url: "https://arrebolweddings.com/colecciones-16-enero-2027",
    images: [
      {
        url: "https://arrebolweddings.com/images/gallery/SandJ-404.webp",
        width: 1200,
        height: 630,
        alt: "Colecciones Boda Huayacán 16 Enero 2027",
      },
    ],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ColeccionesHuayacanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
