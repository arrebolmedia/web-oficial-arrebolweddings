import { Metadata } from "next";
import PauliaHero from "./components/PauliaHero";
import PauliaPackagesSection from "./components/PauliaPackagesSection";
import ContactSection from "./components/ContactSection";

export const metadata: Metadata = {
  title: "Colecciones para Paulia R. Vasconcelos | Arrebol Weddings",
  description:
    "Colecciones exclusivas de fotografía y video para la boda de Paulia R. Vasconcelos - 14 de noviembre 2026 en Mérida, Yucatán.",
  openGraph: {
    title: "Colecciones para Paulia R. Vasconcelos | Arrebol Weddings",
    description:
      "Colecciones exclusivas de fotografía y video para tu boda del 14 de noviembre 2026 en Mérida, Yucatán.",
    images: ["/images/gallery/TOP-SyP-324-hero.webp"],
    type: "website",
    locale: "es_MX",
  },
  robots: {
    index: false, // No indexar esta página personalizada
    follow: false,
  },
};

export default function LandingPauliaPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <PauliaHero />
      <PauliaPackagesSection />
      <ContactSection />
    </main>
  );
}
