"use client";

import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import CollectionsView from "@/components/CollectionsView";
import { useLanguage } from "../context/LanguageContext";

export default function ColeccionesConstanzaJorge() {
  const { language } = useLanguage();

  const pageTitle = "CONSTANZA & JORGE";

  const subtitle =
    language === "es"
      ? "23 de enero 2027 • Aztlán"
      : "January 23, 2027 • Aztlán";

  const whatsappMessage =
    language === "es"
      ? "¡Hola! Somos Constanza y Jorge (boda 23 de enero 2027, Aztlán). Nos interesan sus colecciones de fotografía y video con 30% de descuento. ¿Está disponible nuestra fecha?"
      : "Hello! We're Constanza and Jorge (wedding January 23, 2027, Aztlán). We're interested in your photography and video collections with 30% off. Is our date available?";

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
