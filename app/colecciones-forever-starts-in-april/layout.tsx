import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forever Starts in April | Arrebol Weddings",
  description: "30% de descuento en todas nuestras colecciones de fotografía y video para bodas. Por tiempo limitado — Forever Starts in April.",
  openGraph: {
    title: "Forever Starts in April | Arrebol Weddings",
    description: "30% off on all our wedding photography and video collections. Limited time — Forever Starts in April.",
    type: "website",
    images: [
      {
        url: "/images/gallery/TOP-SyP-324-hero.webp",
        width: 1200,
        height: 630,
        alt: "Forever Starts in April - Arrebol Weddings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forever Starts in April | Arrebol Weddings",
    description: "30% de descuento en fotografía y video para bodas. Por tiempo limitado.",
    images: ["/images/gallery/TOP-SyP-324-hero.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
