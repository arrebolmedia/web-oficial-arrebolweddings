import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://arrebolweddings.com"),
  title: "Andrea & Likith · 8 de noviembre de 2026 | Arrebol Weddings",
  description: "Propuesta personalizada de fotografía y video para la boda de Andrea y Likith en Las Mañanitas, 8 de noviembre de 2026.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Andrea & Likith · Las Mañanitas",
    description: "Propuesta personalizada de fotografía y video · 8 de noviembre de 2026",
    type: "website",
    url: "https://arrebolweddings.com/colecciones-andrea-likith",
    siteName: "Arrebol Weddings",
    images: [
      {
        url: "https://arrebolweddings.com/images/gallery/TOP-PyP-505.webp",
        width: 1200,
        height: 630,
        alt: "Andrea & Likith · Las Mañanitas · Arrebol Weddings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrea & Likith · Las Mañanitas",
    description: "Propuesta personalizada de fotografía y video · 8 de noviembre de 2026",
    images: ["https://arrebolweddings.com/images/gallery/TOP-PyP-505.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
