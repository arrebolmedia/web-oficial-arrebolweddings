import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import HeroHeader from "@/components/HeroHeader";
import Footer from "@/components/Footer";
import SmoothScroll from "@/app/components/SmoothScroll";
import CookieAlert from "@/components/CookieAlert";
import { LanguageProvider } from "@/app/context/LanguageContext";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arrebol Weddings | Fotografía y Video de Bodas en México",
  description: "Capturamos el tipo de recuerdos que se vuelven más valiosos con el tiempo. Fotografía y video de bodas en México con un estilo cercano, honesto y sin poses.",
  openGraph: {
    title: "Arrebol Weddings | Fotografía y Video de Bodas en México",
    description: "Capturamos el tipo de recuerdos que se vuelven más valiosos con el tiempo.",
    type: "website",
    locale: "es_MX",
    siteName: "Arrebol Weddings",
    images: [
      {
        url: "/images/gallery/TOP-SyP-116.webp",
        width: 1200,
        height: 630,
        alt: "Arrebol Weddings - Fotografía y Video de Bodas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arrebol Weddings | Fotografía y Video de Bodas en México",
    description: "Capturamos el tipo de recuerdos que se vuelven más valiosos con el tiempo.",
    images: ["/images/gallery/TOP-SyP-116.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${poppins.variable}`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/gallery/TOP-SyP-324.webp"
          type="image/webp"
          fetchPriority="high"
        />
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.typekit.net/kan4vqt.css" media="print" onLoad="this.media='all'" />
        <noscript><link rel="stylesheet" href="https://use.typekit.net/kan4vqt.css" /></noscript>
      </head>
      <body className="antialiased">
        <LanguageProvider>
          <SmoothScroll />
          <CookieAlert />
          <HeroHeader />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
