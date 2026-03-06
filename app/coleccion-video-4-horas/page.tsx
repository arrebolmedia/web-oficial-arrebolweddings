"use client";

import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "../context/LanguageContext";
import { WHATSAPP_BASE } from "@/lib/config";

const collection = {
  name: "Colección Esencial",
  description:
    "Capturamos lo que importa, sin importar el tamaño o tipo de tu evento. Cuatro horas de cobertura cinematográfica que preservan los momentos más significativos.",
  features: [
    "4 horas de cobertura",
    "1 videógrafo",
    "Video de 15–20 minutos",
    "Versión 1 minuto",
    "Entrega en galería digital",
  ],
};

const whatsappMessage = "¡Hola! Deseo más información sobre la Colección de Video de 4 Horas";

export default function ColeccionVideo4Horas() {
  const { content } = useLanguage();

  return (
    <>
      <div>
        {/* Header */}
        <FadeIn>
          <SectionHeader
            title="Colección de Video · 4 Horas"
            subtitle="Contamos la historia de su celebración en movimiento"
            backgroundImage="/images/gallery/TOP-PyP-505.webp"
          />
        </FadeIn>

        {/* Intro + Collection Card */}
        <section className="py-16 bg-[var(--background)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn delay={200}>
              <p className="mb-12 text-lg text-[var(--foreground)]/80 leading-relaxed text-center">
                Una cobertura esencial para quienes desean preservar su evento con autenticidad y emoción.
                Capturamos cada momento significativo con una mirada cinematográfica auténtica.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="bg-white border border-[var(--border-subtle)] p-10 md:p-14 flex flex-col">
                {/* Header */}
                <div className="mb-6">
                  <h2 className="font-[var(--font-heading)] text-4xl text-[var(--foreground)] mb-2">
                    {collection.name}
                  </h2>
                  <p className="text-xs tracking-[0.3em] uppercase text-[var(--foreground)]/40">
                    Solo video · 4 horas
                  </p>
                </div>

                {/* Description */}
                <p className="text-[var(--foreground)]/60 leading-relaxed mb-10 italic text-sm max-w-xl">
                  {collection.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-10 text-sm text-[var(--foreground)]/70">
                  {collection.features.map((feature, i) => (
                    <p key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 text-[var(--foreground)]/30">—</span>
                      {feature}
                    </p>
                  ))}
                </div>

                {/* Price */}
                <div className="pt-6 border-t border-[var(--border-subtle)] text-center">
                  <p className="text-3xl font-light text-[var(--foreground)]">
                    $15,000{" "}
                    <span className="text-sm text-[var(--foreground)]/50 uppercase tracking-wider">
                      MXN
                    </span>
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* What's included detail */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="font-[var(--font-heading)] text-3xl text-[var(--foreground)] text-center mb-12 uppercase">
                ¿Qué incluye?
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FadeIn delay={100}>
                <div className="text-center">
                  <p className="font-[var(--font-heading)] text-5xl text-[var(--foreground)] mb-3">4</p>
                  <p className="text-xs tracking-[0.25em] uppercase text-[var(--foreground)]/50">
                    Horas de cobertura
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={200}>
                <div className="text-center">
                  <p className="font-[var(--font-heading)] text-5xl text-[var(--foreground)] mb-3">15–20</p>
                  <p className="text-xs tracking-[0.25em] uppercase text-[var(--foreground)]/50">
                    Minutos de video
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={300}>
                <div className="text-center">
                  <p className="font-[var(--font-heading)] text-5xl text-[var(--foreground)] mb-3">2</p>
                  <p className="text-xs tracking-[0.25em] uppercase text-[var(--foreground)]/50">
                    Versiones entregadas
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[var(--background)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-4">
                Si tienes algo específico en mente —un horario distinto, una locación especial
                o necesitas combinar elementos— podemos armar una propuesta a la medida.
              </p>
              <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-8">
                ¿Listo para reservar tu fecha? Escríbenos por WhatsApp y conversemos sobre tu celebración.
              </p>
              <a
                href={`${WHATSAPP_BASE}${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 border border-[var(--foreground)] text-[var(--foreground)] text-sm tracking-widest uppercase hover:bg-[var(--foreground)] hover:text-white transition-all duration-300"
              >
                Contactar por WhatsApp
              </a>
            </FadeIn>
          </div>
        </section>
      </div>
    </>
  );
}
