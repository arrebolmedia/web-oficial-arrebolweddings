import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lilia & Luigi | Amara Baja · Arrebol Weddings",
  description: "Propuesta de fotografía y video para la boda de Lilia y Luigi el 27 de febrero de 2027 en Amara Baja.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Lilia & Luigi | Amara Baja · Arrebol Weddings",
    description: "Fotografía y video para la boda de Lilia y Luigi en Amara Baja.",
    type: "website",
    images: [
      {
        url: "/images/gallery/TOP-PyP-505.webp",
        width: 1200,
        height: 630,
        alt: "Lilia & Luigi · Amara Baja · Arrebol Weddings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lilia & Luigi | Amara Baja · Arrebol Weddings",
    description: "Fotografía y video para la boda de Lilia y Luigi en Amara Baja.",
    images: ["/images/gallery/TOP-PyP-505.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
