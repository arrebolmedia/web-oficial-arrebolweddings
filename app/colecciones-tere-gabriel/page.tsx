"use client";

import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import CollectionsView from "@/components/CollectionsView";
import { useLanguage } from "../context/LanguageContext";

export default function ColeccionesTereGabriel() {
  const { language } = useLanguage();

  const pageTitle = "TERE & GABRIEL";

  const subtitle =
    language === "es"
      ? "17 de abril 2027 • Aztlán"
      : "April 17, 2027 • Aztlán";

  const whatsappMessage =
    language === "es"
      ? "¡Hola! Somos Tere y Gabriel (boda 17 de abril 2027, Aztlán). Nos interesan sus colecciones de fotografía y video con 30% de descuento. ¿Está disponible nuestra fecha?"
      : "Hello! We're Tere and Gabriel (wedding April 17, 2027, Aztlán). We're interested in your photography and video collections with 30% off. Is our date available?";

  return (
    <div>
      <FadeIn>
        <SectionHeader
          title={pageTitle}
          subtitle={subtitle}
          backgroundImage="/images/gallery/TOP-SyP-324-hero.webp"
        />
      </FadeIn>
      <CollectionsView
        adjustmentType="percentage"
        adjustmentValue={-30}
        showDiscount={true}
        whatsappMessage={whatsappMessage}
      />
    </div>
  );
}
