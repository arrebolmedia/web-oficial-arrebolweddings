import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://arrebolweddings.com"),
  title: "Lilia & Luigi · 27 de febrero de 2027 | Arrebol Weddings",
  description: "Propuesta personalizada de fotografía y video para la boda de Lilia y Luigi en Amara Baja, 27 de febrero de 2027.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Lilia & Luigi · Amara Baja",
    description: "Propuesta personalizada de fotografía y video · 27 de febrero de 2027",
    type: "website",
    url: "https://arrebolweddings.com/colecciones-lilia-luigi",
    siteName: "Arrebol Weddings",
    images: [
      {
        url: "https://arrebolweddings.com/images/gallery/TOP-PyP-505.webp",
        width: 1200,
        height: 630,
        alt: "Lilia & Luigi · Amara Baja · Arrebol Weddings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lilia & Luigi · Amara Baja",
    description: "Propuesta personalizada de fotografía y video · 27 de febrero de 2027",
    images: ["https://arrebolweddings.com/images/gallery/TOP-PyP-505.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
