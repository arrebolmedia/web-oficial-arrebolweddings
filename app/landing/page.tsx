import { Metadata } from "next";
import LandingHero from "./components/LandingHero";
import AboutSection from "./components/AboutSection";
import LandingGallerySection from "./components/LandingGallerySection";
import RealStoriesSection from "./components/RealStoriesSection";
import UniqueValueSection from "./components/UniqueValueSection";
import ProcessSection from "./components/ProcessSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PackagesSection from "./components/PackagesSection";
import WhyInvestSection from "./components/WhyInvestSection";
import FinalCTASection from "./components/FinalCTASection";

export const metadata: Metadata = {
  title: "Fotografía y Video de Bodas en México | Arrebol Weddings",
  description:
    "Capturamos los momentos que se convertirán en el tesoro de tu familia. Fotografía y video de bodas con un estilo emocional, elegante y auténtico. Respondemos en menos de 24 horas.",
  openGraph: {
    title: "Fotografía y Video de Bodas en México | Arrebol Weddings",
    description:
      "Capturamos los momentos que se convertirán en el tesoro de tu familia. Fotografía y video de bodas con un estilo emocional, elegante y auténtico.",
    images: ["/images/gallery/TOP-SyP-324-hero.webp"],
    type: "website",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fotografía y Video de Bodas en México | Arrebol Weddings",
    description:
      "Capturamos los momentos que se convertirán en el tesoro de tu familia.",
    images: ["/images/gallery/TOP-SyP-324-hero.webp"],
  },
};

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <LandingHero />
      <AboutSection />
      <LandingGallerySection />
      <RealStoriesSection />
      <UniqueValueSection />
      <ProcessSection />
      <TestimonialsSection />
      <PackagesSection />
      <WhyInvestSection />
      <FinalCTASection />
    </main>
  );
}
