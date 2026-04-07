import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fernanda Elías · Foto y Video | Arrebol Weddings",
  description: "Colección de fotografía y video para la boda de Fernanda Elías. 10 horas de cobertura en Piedra Viva.",
  openGraph: {
    title: "Fernanda Elías · Foto y Video | Arrebol Weddings",
    description: "Colección de fotografía y video para la boda de Fernanda Elías. 10 horas de cobertura en Piedra Viva.",
    type: "website",
    images: [
      {
        url: "/images/gallery/TOP-PyP-505.webp",
        width: 1200,
        height: 630,
        alt: "Fernanda Elías · Foto y Video - Arrebol Weddings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fernanda Elías · Foto y Video | Arrebol Weddings",
    description: "Colección de fotografía y video para la boda de Fernanda Elías en Piedra Viva.",
    images: ["/images/gallery/TOP-PyP-505.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
