import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://arrebolweddings.com"),
  title: "Jenny & Sergio · 9 de abril de 2027 | Arrebol Weddings",
  description: "Propuesta personalizada de fotografía y video para la boda de Jenny y Sergio en Casanueva by Las Mañanitas, 9 de abril de 2027.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Jenny & Sergio · Casanueva by Las Mañanitas",
    description: "Propuesta personalizada de fotografía y video · 9 de abril de 2027",
    type: "website",
    url: "https://arrebolweddings.com/colecciones-jenny-sergio",
    siteName: "Arrebol Weddings",
    images: [
      {
        url: "https://arrebolweddings.com/images/gallery/TOP-PyP-505.webp",
        width: 1200,
        height: 630,
        alt: "Jenny & Sergio · Casanueva by Las Mañanitas · Arrebol Weddings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jenny & Sergio · Casanueva by Las Mañanitas",
    description: "Propuesta personalizada de fotografía y video · 9 de abril de 2027",
    images: ["https://arrebolweddings.com/images/gallery/TOP-PyP-505.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
