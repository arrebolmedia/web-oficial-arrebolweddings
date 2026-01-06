import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arrebol Weddings x Rancho La Joya",
  description: "Descubre nuestras colecciones de fotografía y video para bodas en Rancho La Joya. Desde $79,000 MXN. Paquetes personalizados con fotógrafos profesionales, videógrafos y cobertura completa.",
  openGraph: {
    title: "Arrebol Weddings x Rancho La Joya",
    description: "Descubre nuestras colecciones de fotografía y video para bodas en Rancho La Joya. Desde $79,000 MXN con fotógrafos y videógrafos profesionales.",
    type: "website",
    images: [
      {
        url: "/images/RLJ/L&A-363_websize.jpg",
        width: 1200,
        height: 630,
        alt: "Arrebol Weddings x Rancho La Joya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arrebol Weddings x Rancho La Joya",
    description: "Descubre nuestras colecciones de fotografía y video para bodas en Rancho La Joya. Desde $79,000 MXN.",
    images: ["/images/RLJ/L&A-363_websize.jpg"],
  },
};

export default function ColeccionesRanchoLaJoyaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
