"use client";

import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import CollectionsView from "@/components/CollectionsView";
import CustomPackagesView from "./CustomPackagesView";
import { useLanguage } from "../../context/LanguageContext";
import type { LandingConfig } from "./landingConfig";

// Misma composición que las landings estáticas de promoción
// (ver app/colecciones-septiembre-2026/page.tsx), pero con los textos
// llegando desde la suite en vez de estar escritos en el archivo.
export default function DynamicLandingClient({ config }: { config: LandingConfig }) {
  const { language } = useLanguage();

  const subtitle =
    language === "es"
      ? config.subtitle ?? undefined
      : config.subtitle_en ?? config.subtitle ?? undefined;

  const whatsappMessage =
    (language === "es" ? config.whatsapp_message_es : config.whatsapp_message_en) ??
    config.whatsapp_message_es ??
    undefined;

  return (
    <div>
      <FadeIn>
        <SectionHeader
          title={config.title}
          subtitle={subtitle}
          backgroundImage={config.hero_image ?? undefined}
        />
      </FadeIn>
      {/* Una cotización a la medida sustituye al catálogo; el descuento de la
          landing solo aplica a este último. */}
      {config.custom_packages.length > 0 ? (
        <CustomPackagesView
          packages={config.custom_packages}
          highlights={config.highlights}
          intro={config.intro}
          whatsappMessage={whatsappMessage}
        />
      ) : (
        <CollectionsView
          adjustmentType={config.adjustment_type}
          adjustmentValue={config.adjustment_value}
          showDiscount={config.show_discount}
          whatsappMessage={whatsappMessage}
        />
      )}
    </div>
  );
}
