import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://arrebolweddings.com"),
  title: "Cecilia & José · 22 de agosto de 2026 | Arrebol Weddings",
  description: "Propuesta personalizada de fotografía y video para la boda de Cecilia y José en Casanueva, 22 de agosto de 2026.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Cecilia & José · Casanueva",
    description: "Propuesta personalizada de fotografía y video · 22 de agosto de 2026",
    type: "website",
    url: "https://arrebolweddings.com/colecciones-cecilia-jose",
    siteName: "Arrebol Weddings",
    images: [
      {
        url: "https://arrebolweddings.com/images/gallery/TOP-PyP-505.webp",
        width: 1200,
        height: 630,
        alt: "Cecilia & José · Casanueva · Arrebol Weddings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cecilia & José · Casanueva",
    description: "Propuesta personalizada de fotografía y video · 22 de agosto de 2026",
    images: ["https://arrebolweddings.com/images/gallery/TOP-PyP-505.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
