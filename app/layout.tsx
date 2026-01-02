import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import EmotionHero from "@/app/components/EmotionHero";
import HeroHeader from "@/components/HeroHeader";
import Footer from "@/components/Footer";
import SmoothScroll from "@/app/components/SmoothScroll";
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
  metadataBase: new URL('https://arrebolweddings.com'),
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
        {/* Google Analytics (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PEMT34VP9H"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-PEMT34VP9H');`,
          }}
        />
        <link rel="stylesheet" href="https://use.typekit.net/kan4vqt.css" />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T2ZVVJKP');`,
          }}
        />
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '774824043467213');
fbq('track', 'PageView');`,
          }}
        />
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T2ZVVJKP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* Meta Pixel (noscript) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=774824043467213&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <LanguageProvider>
          <SmoothScroll />
          <EmotionHero />
          <HeroHeader />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
