import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://arrebolweddings.com"),
  title: "Liliana & Guillermo · 20 de febrero de 2027 | Arrebol Weddings",
  description: "Propuesta personalizada de fotografía y video para la boda de Liliana y Guillermo en Las Mañanitas, 20 de febrero de 2027.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Liliana & Guillermo · Las Mañanitas",
    description: "Propuesta personalizada de fotografía y video · 20 de febrero de 2027",
    type: "website",
    url: "https://arrebolweddings.com/colecciones-liliana-guillermo",
    siteName: "Arrebol Weddings",
    images: [
      {
        url: "https://arrebolweddings.com/images/gallery/TOP-PyP-505.webp",
        width: 1200,
        height: 630,
        alt: "Liliana & Guillermo · Las Mañanitas · Arrebol Weddings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Liliana & Guillermo · Las Mañanitas",
    description: "Propuesta personalizada de fotografía y video · 20 de febrero de 2027",
    images: ["https://arrebolweddings.com/images/gallery/TOP-PyP-505.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
