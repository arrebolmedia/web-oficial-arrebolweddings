import { Metadata } from "next";
import AlianzasHero from "./components/AlianzasHero";
import AlianzasAboutSection from "./components/AlianzasAboutSection";
import AlianzasGallerySection from "./components/AlianzasGallerySection";
import BenefitsSection from "./components/BenefitsSection";
import HowWeWorkSection from "./components/HowWeWorkSection";
import PlannerTestimonialsSection from "./components/PlannerTestimonialsSection";
import PackagesSection from "./components/PackagesSection";
import FAQSection from "./components/FAQSection";
import FinalCTASection from "./components/FinalCTASection";

export const metadata: Metadata = {
  title: "Alianzas para Wedding Planners | Arrebol Weddings",
  description:
    "Colaboremos para crear experiencias extraordinarias. Entrega impecable, comunicación fluida y resultados que reflejan tu excelencia como wedding planner.",
  openGraph: {
    title: "Alianzas para Wedding Planners | Arrebol Weddings",
    description:
      "Tu aliado de confianza en foto y video. Tarifas especiales, comunicación directa y resultados que impresionan.",
    images: ["/images/gallery/TOP-SyP-324-hero.webp"],
    type: "website",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alianzas para Wedding Planners | Arrebol Weddings",
    description:
      "Tu aliado de confianza en foto y video para bodas.",
    images: ["/images/gallery/TOP-SyP-324-hero.webp"],
  },
};

export default function AlianzasPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <AlianzasHero />
      <AlianzasAboutSection />
      <AlianzasGallerySection />
      <BenefitsSection />
      <HowWeWorkSection />
      {/* <PlannerTestimonialsSection /> */}
      <PackagesSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
}
