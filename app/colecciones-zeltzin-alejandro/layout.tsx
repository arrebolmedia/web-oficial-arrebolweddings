import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://arrebolweddings.com"),
  title: "Zeltzin & Alejandro · 7 de noviembre de 2026 | Arrebol Weddings",
  description: "Propuesta personalizada de fotografía y video para la boda de Zeltzin y Alejandro en Las Mañanitas, 7 de noviembre de 2026.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Zeltzin & Alejandro · Las Mañanitas",
    description: "Propuesta personalizada de fotografía y video · 7 de noviembre de 2026",
    type: "website",
    url: "https://arrebolweddings.com/colecciones-zeltzin-alejandro",
    siteName: "Arrebol Weddings",
    images: [
      {
        url: "https://arrebolweddings.com/images/gallery/TOP-PyP-505.webp",
        width: 1200,
        height: 630,
        alt: "Zeltzin & Alejandro · Las Mañanitas · Arrebol Weddings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeltzin & Alejandro · Las Mañanitas",
    description: "Propuesta personalizada de fotografía y video · 7 de noviembre de 2026",
    images: ["https://arrebolweddings.com/images/gallery/TOP-PyP-505.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
