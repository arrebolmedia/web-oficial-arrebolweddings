import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maju · XV Años | Arrebol Weddings",
  description: "Colecciones de fotografía y video para los XV años de Maju. 3 de julio 2026 · Las Mañanitas.",
  openGraph: {
    title: "Maju · XV Años | Arrebol Weddings",
    description: "Colecciones de fotografía y video para los XV años de Maju. 3 de julio 2026 · Las Mañanitas.",
    type: "website",
    images: [
      {
        url: "/images/gallery/TOP-PyP-505.webp",
        width: 1200,
        height: 630,
        alt: "Maju XV Años - Arrebol Weddings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Colecciones XV Años | Arrebol Weddings",
    description: "Colecciones de fotografía y video para los XV años de Maju. 3 de julio 2026 · Las Mañanitas.",
    images: ["/images/gallery/TOP-PyP-505.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
