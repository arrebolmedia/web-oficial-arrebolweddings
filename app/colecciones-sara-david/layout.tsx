import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colecciones - Sara & David | Arrebol Weddings",
  description:
    "Colecciones exclusivas de fotografía y video para Sara & David - 13 de febrero 2027, Las Mañanitas. Colección Uno desde $35,400 MXN.",
  openGraph: {
    title: "Colecciones - Sara & David | Arrebol Weddings",
    description:
      "Propuesta especial de fotografía y video para tu boda. Colección Uno · 13 de febrero 2027 · Las Mañanitas.",
    type: "website",
    images: [
      {
        url: "/images/gallery/TOP-SyP-324-hero.webp",
        width: 1200,
        height: 630,
        alt: "Colecciones Sara & David - Arrebol Weddings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Colecciones - Sara & David",
    description: "Propuesta especial de fotografía y video desde $35,400 MXN.",
    images: ["/images/gallery/TOP-SyP-324-hero.webp"],
  },
};

export default function ColeccionesSaraDavidLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
