"use client";

import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import CollectionsView from "@/components/CollectionsView";

const WHATSAPP_MESSAGE = "¡Hola! Soy Jenny, estoy interesada en la propuesta para nuestra boda con Sergio el 9 de abril de 2027 en Casanueva by Las Mañanitas.";

export default function ColeccionesJennySergio() {
  return (
    <div>
      <FadeIn>
        <SectionHeader
          title="JENNY & SERGIO"
          subtitle="Casanueva by Las Mañanitas · 9 de abril de 2027"
          backgroundImage="/images/gallery/TOP-PyP-505.webp"
        />
      </FadeIn>

      <section className="pt-16 pb-4 bg-[var(--background)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn delay={100}>
            <p className="text-center text-sm tracking-widest uppercase text-[#C67B5C] font-semibold mb-4">
              Propuesta personalizada
            </p>
            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl text-[var(--foreground)] text-center mb-4 uppercase">
              30% de descuento
            </h2>
            <p className="text-lg text-[var(--foreground)]/80 leading-relaxed text-center max-w-2xl mx-auto">
              Diseñada especialmente para la boda de Jenny y Sergio en Casanueva by Las Mañanitas, con 30% de descuento en todas nuestras colecciones.
            </p>
          </FadeIn>
        </div>
      </section>

      <CollectionsView
        adjustmentType="percentage"
        adjustmentValue={-30}
        showDiscount={true}
        whatsappMessage={WHATSAPP_MESSAGE}
      />
    </div>
  );
}
