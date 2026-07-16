"use client";

import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import CollectionsView from "@/components/CollectionsView";
import { useLanguage } from "../context/LanguageContext";

export default function ColeccionesJulio2026() {
  const { language } = useLanguage();

  const pageTitle = "COLECCIONES JULIO 2026 | ARREBOL WEDDINGS";

  const subtitle =
    language === "es"
      ? "30% de descuento en fotografía y video — sólo durante julio"
      : "30% off on photography and video — July only";

  const whatsappMessage =
    language === "es"
      ? "¡Hola! ☀️ Me interesa la promoción de Colecciones Julio 2026 con 30% de descuento en fotografía y video para bodas. Me gustaría recibir más información."
      : "Hello! ☀️ I'm interested in the July 2026 Collections promotion with 30% off on wedding photography and video. I would like more information.";

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
