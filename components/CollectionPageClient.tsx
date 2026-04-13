"use client";

import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import CollectionsView from "@/components/CollectionsView";
import { useLanguage } from "../app/context/LanguageContext";

interface LandingData {
  title: string;
  subtitle: string;
  slug: string;
  hero_image: string;
  landing_type: string;
  adjustment_type: string;
  adjustment_value: number;
  show_badge: boolean;
  badge_text: string;
}

interface CollectionPageClientProps {
  landingData: LandingData;
}

export default function CollectionPageClient({ landingData }: CollectionPageClientProps) {
  const { content } = useLanguage();
  const { colecciones } = content;

  const whatsappMessage =
    landingData.landing_type === "planner"
      ? `Hola! Soy ${landingData.title} y me gustaría conocer más detalles sobre las colecciones para mi boda.`
      : colecciones.whatsappMessage;

  const isDiscount =
    landingData.adjustment_type === "percentage" && landingData.adjustment_value < 0;

  return (
    <div>
      <FadeIn>
        <div className="relative">
          <SectionHeader
            title={landingData.title}
            subtitle={landingData.subtitle}
            backgroundImage={landingData.hero_image}
          />
          {landingData.show_badge && landingData.badge_text && (
            <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
              <span className="text-xs tracking-[0.3em] uppercase px-4 py-2 border border-white/60 bg-black/30 backdrop-blur-sm text-white">
                {landingData.badge_text}
              </span>
            </div>
          )}
        </div>
      </FadeIn>

      <CollectionsView
        adjustmentType={landingData.adjustment_type as "none" | "percentage" | "fixed"}
        adjustmentValue={landingData.adjustment_value}
        showDiscount={isDiscount}
        whatsappMessage={whatsappMessage}
      />
    </div>
  );
}
