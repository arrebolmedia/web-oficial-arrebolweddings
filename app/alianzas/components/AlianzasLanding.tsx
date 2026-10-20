import type { AlianzaVariant } from "../content";
import AlianzasHero from "./AlianzasHero";
import AlianzasAboutSection from "./AlianzasAboutSection";
import AlianzasGallerySection from "./AlianzasGallerySection";
import BenefitsSection from "./BenefitsSection";
import OffersSection from "./OffersSection";
import HowWeWorkSection from "./HowWeWorkSection";
import FAQSection from "./FAQSection";
import ContactSection from "./ContactSection";
import FloatingWhatsApp from "./FloatingWhatsApp";

// Misma landing para planners y venues; solo cambia el texto (ver content.ts).
export default function AlianzasLanding({ variant }: { variant: AlianzaVariant }) {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <AlianzasHero variant={variant} />
      <AlianzasAboutSection variant={variant} />
      <AlianzasGallerySection variant={variant} />
      <BenefitsSection variant={variant} />
      <OffersSection variant={variant} />
      <HowWeWorkSection variant={variant} />
      <FAQSection variant={variant} />
      <ContactSection variant={variant} />
      <FloatingWhatsApp variant={variant} />
    </main>
  );
}
