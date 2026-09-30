"use client";

import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import CollectionsView from "@/components/CollectionsView";
import { useLanguage } from "../context/LanguageContext";

export default function ColeccionesCristinaVilchis() {
  const { content, language } = useLanguage();
  const { colecciones } = content;

  const pageTitle = language === "es"
    ? "COLECCIONES: CRISTINA VILCHIS & ARREBOL WEDDINGS"
    : "COLLECTIONS: CRISTINA VILCHIS & ARREBOL WEDDINGS";

  return (
    <div>
      <FadeIn>
        <SectionHeader
          title={pageTitle}
          subtitle={colecciones.subtitle}
          backgroundImage="/images/gallery/TOP-PyP-505.webp"
        />
      </FadeIn>
      {/* Paquetes vivos del suite, con el 40% de la colaboración. */}
      <CollectionsView
        adjustmentType="percentage"
        adjustmentValue={-40}
        showDiscount={true}
      />
    </div>
  );
}
