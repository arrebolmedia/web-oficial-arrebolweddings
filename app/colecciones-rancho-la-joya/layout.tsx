import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arrebol Weddings & Rancho La Joya",
  description: "Descubre nuestras colecciones exclusivas de fotografía y video para bodas en Rancho La Joya. ¡50% DE DESCUENTO! Ahora desde $49,500 MXN. Paquetes premium con fotógrafos y videógrafos profesionales.",
  openGraph: {
    title: "Arrebol Weddings & Rancho La Joya - ¡50% OFF!",
    description: "Colecciones exclusivas para bodas en Rancho La Joya. Ahora desde $49,500 MXN con 50% de descuento. Fotografía y video profesional de alta calidad.",
    type: "website",
    url: "https://arrebolweddings.com/colecciones-rancho-la-joya",
    siteName: "Arrebol Weddings",
    locale: "es_MX",
    images: [
      {
        url: "https://arrebolweddings.com/images/RLJ/L%26A-363_websize.jpg",
        width: 1200,
        height: 630,
        alt: "Arrebol Weddings & Rancho La Joya - Bodas en Cuernavaca",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@arrebolweddings",
    title: "Arrebol Weddings & Rancho La Joya - ¡50% OFF!",
    description: "Colecciones exclusivas para bodas en Rancho La Joya. Ahora desde $49,500 MXN. Fotografía y video profesional.",
    images: ["https://arrebolweddings.com/images/RLJ/L%26A-363_websize.jpg"],
  },
};

export default function ColeccionesRanchoLaJoyaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
