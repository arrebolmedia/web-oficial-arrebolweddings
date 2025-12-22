import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Arrebol Weddings",
  description: "Cuéntanos sobre tu boda. Revisa disponibilidad y descubre cómo podemos capturar los recuerdos más importantes de tu día especial.",
  openGraph: {
    title: "Contacto | Arrebol Weddings",
    description: "Cuéntanos sobre tu boda y revisa disponibilidad para tu fecha.",
    type: "website",
    images: [
      {
        url: "/images/gallery/TOP-SyD-162.webp",
        width: 1200,
        height: 630,
        alt: "Contacto - Arrebol Weddings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | Arrebol Weddings",
    description: "Cuéntanos sobre tu boda y revisa disponibilidad.",
    images: ["/images/gallery/TOP-SyD-162.webp"],
  },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
