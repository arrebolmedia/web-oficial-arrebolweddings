"use client";

import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import CollectionsView from "@/components/CollectionsView";

export default function Colecciones() {
  return (
    <div>
      <FadeIn>
        <SectionHeader
          title="Colecciones"
          subtitle="Fotografía y video para contar su boda de principio a fin"
          backgroundImage="/images/gallery/TOP-PyP-505.webp"
        />
      </FadeIn>
      <CollectionsView />
    </div>
  );
}
