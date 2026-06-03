"use client";

import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import CollectionsView from "@/components/CollectionsView";
import { useLanguage } from "../context/LanguageContext";
import { WHATSAPP_BASE } from "@/lib/config";

const WHATSAPP_MESSAGE = "¡Hola! Soy Aranza, del equipo de Alan Betech Wedding Planner. Te escribo por la propuesta para la boda de Andrea y Likith el 8 de noviembre de 2026 en Las Mañanitas.";

const customFeatures = [
  "12 horas de cobertura",
  "2 fotógrafos",
  "1 videógrafo",
  "1,000 fotografías editadas",
  "Galería digital",
  "Sneak peek de 25–40 fotos (1 semana después)",
  "Película larga de 25 minutos",
  "Highlight de 3–5 minutos",
  "Versión 1 minuto",
];

export default function ColeccionesAndreaLikith() {
  return (
    <div>
      <FadeIn>
        <SectionHeader
          title="ANDREA & LIKITH"
          subtitle="Las Mañanitas · 8 de noviembre de 2026"
          backgroundImage="/images/gallery/TOP-PyP-505.webp"
        />
      </FadeIn>

      <section className="py-16 bg-[var(--background)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={100}>
            <p className="text-center text-sm tracking-widest uppercase text-[#C67B5C] font-semibold mb-4">
              Propuesta personalizada
            </p>
            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl text-[var(--foreground)] text-center mb-4 uppercase">
              Paquete a la medida
            </h2>
            <p className="text-lg text-[var(--foreground)]/80 leading-relaxed text-center max-w-2xl mx-auto mb-12">
              Diseñada especialmente para la boda de Andrea y Likith en Las Mañanitas, con la cobertura y entregables que nos compartieron.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="max-w-2xl mx-auto bg-white border-2 border-[#C67B5C] p-10 flex flex-col">
              <div className="mb-6">
                <h3 className="font-[var(--font-heading)] text-3xl text-[var(--foreground)] mb-2">
                  Fotografía y Video
                </h3>
                <p className="text-sm text-[var(--foreground)]/50 uppercase tracking-wider">
                  Andrea &amp; Likith · Las Mañanitas · 8 de noviembre de 2026
                </p>
              </div>

              <div className="space-y-2 mb-8 flex-grow text-sm text-[var(--foreground)]/70">
                {customFeatures.map((feature, i) => (
                  <p key={i}>{feature}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-[var(--border-subtle)] text-center">
                <p className="text-lg text-[var(--foreground)]/40 line-through mb-1">
                  $99,000
                </p>
                <p className="text-3xl font-light text-[var(--foreground)]">
                  $69,300 <span className="text-sm text-[var(--foreground)]/50 uppercase tracking-wider">MXN</span>
                </p>
                <p className="text-sm text-[#C67B5C] font-semibold mt-2">
                  30% OFF
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="pt-8 pb-4 bg-[var(--background)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-sm tracking-widest uppercase text-[var(--foreground)]/60">
              También pueden elegir
            </p>
            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl text-[var(--foreground)] text-center mt-4 uppercase">
              Nuestras colecciones
            </h2>
          </FadeIn>
        </div>
      </section>

      <CollectionsView
        adjustmentType="fixed"
        adjustmentValue={20000}
        whatsappMessage={WHATSAPP_MESSAGE}
      />
    </div>
  );
}
