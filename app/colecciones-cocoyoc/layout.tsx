import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Propuesta Especial | Hacienda Cocoyoc · Arrebol Weddings",
  description: "Propuesta de fotografía y video para tu boda el 23 de octubre en Hacienda Cocoyoc. Cobertura completa de 10 horas con grabación de ceremonia.",
  openGraph: {
    title: "Propuesta Especial | Hacienda Cocoyoc · Arrebol Weddings",
    description: "Fotografía y video para tu boda en Hacienda Cocoyoc. Cobertura completa de 10 horas con grabación completa de ceremonia.",
    type: "website",
    images: [
      {
        url: "/images/gallery/TOP-PyP-505.webp",
        width: 1200,
        height: 630,
        alt: "Hacienda Cocoyoc · Arrebol Weddings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Propuesta Especial | Hacienda Cocoyoc · Arrebol Weddings",
    description: "Fotografía y video para tu boda en Hacienda Cocoyoc. Cobertura completa de 10 horas.",
    images: ["/images/gallery/TOP-PyP-505.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
