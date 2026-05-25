import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Propuesta Especial | Amara Baja · Arrebol Weddings",
  description: "Propuesta de fotografía y video para tu boda el 27 de febrero de 2027 en Amara Baja. Cobertura completa de 10 horas.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Propuesta Especial | Amara Baja · Arrebol Weddings",
    description: "Fotografía y video para tu boda en Amara Baja. Cobertura completa de 10 horas.",
    type: "website",
    images: [
      {
        url: "/images/gallery/TOP-PyP-505.webp",
        width: 1200,
        height: 630,
        alt: "Amara Baja · Arrebol Weddings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Propuesta Especial | Amara Baja · Arrebol Weddings",
    description: "Fotografía y video para tu boda en Amara Baja. Cobertura completa de 10 horas.",
    images: ["/images/gallery/TOP-PyP-505.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
