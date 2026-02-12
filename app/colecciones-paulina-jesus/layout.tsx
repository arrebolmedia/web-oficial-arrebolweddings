import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colecciones Fotografía - Paulina & Jesús | Arrebol Weddings",
  description: "Colecciones exclusivas de fotografía para Paulina & Jesús - 11 de abril 2026, Las Mañanitas. Paquetes de 10 horas desde $20,000 MXN.",
  openGraph: {
    title: "Colecciones Fotografía - Paulina & Jesús | Arrebol Weddings",
    description: "Paquetes exclusivos de fotografía profesional para tu boda. 10 horas de cobertura desde $20,000 MXN.",
    type: "website",
    images: [
      {
        url: "/images/gallery/TOP-AyJ-500.webp",
        width: 1200,
        height: 630,
        alt: "Colecciones Fotografía Paulina & Jesús - Arrebol Weddings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Colecciones Fotografía - Paulina & Jesús",
    description: "Paquetes exclusivos de fotografía profesional desde $20,000 MXN.",
    images: ["/images/gallery/TOP-AyJ-500.webp"],
  },
};

export default function ColeccionesPaulinaJesusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
