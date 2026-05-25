"use client";

import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import CollectionsView from "@/components/CollectionsView";
import { useLanguage } from "../context/LanguageContext";
import { WHATSAPP_BASE } from "@/lib/config";

const WHATSAPP_MESSAGE = "¡Hola! Soy Lilia, estoy interesada en la propuesta para nuestra boda con Luigi el 27 de febrero de 2027 en Amara Baja.";

const customFeatures = [
  "10 horas de cobertura",
  "1 fotógrafo",
  "600–700 fotografías",
  "Galería digital",
  "1 videógrafo",
  "Video de 25–30 minutos",
  "Versión 3–5 minutos",
  "Versión 1 minuto",
];

export default function ColeccionesAmaraBaja() {
  return (
    <div>
      {/* Header */}
      <FadeIn>
        <SectionHeader
          title="LILIA & LUIGI"
          subtitle="Amara Baja · 27 de febrero de 2027"
          backgroundImage="/images/gallery/TOP-PyP-505.webp"
        />
      </FadeIn>

      {/* Custom intermediate package — destacado */}
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
              Basado en la Colección Dos, ajustado especialmente para la boda de Lilia y Luigi en Amara Baja.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="max-w-2xl mx-auto bg-white border-2 border-[#C67B5C] p-10 flex flex-col">
              <div className="mb-6">
                <h3 className="font-[var(--font-heading)] text-3xl text-[var(--foreground)] mb-2">
                  Fotografía y Video
                </h3>
                <p className="text-sm text-[var(--foreground)]/50 uppercase tracking-wider">
                  Lilia &amp; Luigi · Amara Baja · 27 de febrero de 2027
                </p>
              </div>

              <div className="space-y-2 mb-8 flex-grow text-sm text-[var(--foreground)]/70">
                {customFeatures.map((feature, i) => (
                  <p key={i}>{feature}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-[var(--border-subtle)] text-center">
                <p className="text-3xl font-light text-[var(--foreground)]">
                  $85,000 <span className="text-sm text-[var(--foreground)]/50 uppercase tracking-wider">MXN</span>
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Divider title for standard collections */}
      <section className="pt-8 pb-4 bg-[var(--background)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-sm tracking-widest uppercase text-[var(--foreground)]/60">
              También puedes elegir
            </p>
            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl text-[var(--foreground)] text-center mt-4 uppercase">
              Nuestras colecciones
            </h2>
          </FadeIn>
        </div>
      </section>

      {/* Standard collections (API) — mismas que /colecciones */}
      <CollectionsView
        adjustmentType="fixed"
        adjustmentValue={20000}
        whatsappMessage={WHATSAPP_MESSAGE}
      />
    </div>
  );
}
