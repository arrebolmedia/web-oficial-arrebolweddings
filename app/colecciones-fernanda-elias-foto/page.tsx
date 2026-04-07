"use client";

import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "../context/LanguageContext";
import { WHATSAPP_BASE } from "@/lib/config";

const collection = {
  name: "Colección de Fotografía",
  description:
    "Cobertura fotográfica completa de tu boda en Piedra Viva. Diez horas para documentar cada detalle, desde los preparativos hasta la fiesta, con una mirada artística y cuidadosa.",
  features: [
    "10 horas de cobertura",
    "1 fotógrafo",
    "600–700 fotografías",
    "Galería digital",
    'Photobook 8.5x11" (50 páginas)',
    "Sesión pre boda",
  ],
};

const whatsappMessage = "¡Hola! Soy Fernanda Elías y deseo más información sobre la Colección de Fotografía de 10 horas";

export default function ColeccionesFernandaEliasFoto() {
  useLanguage();

  return (
    <>
      <div>
        {/* Header */}
        <FadeIn>
          <SectionHeader
            title="Fernanda Elías · Fotografía"
            subtitle="12 de diciembre · Piedra Viva"
            backgroundImage="/images/gallery/TOP-PyP-505.webp"
          />
        </FadeIn>

        {/* Intro + Collection Card */}
        <section className="py-16 bg-[var(--background)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn delay={200}>
              <p className="mb-12 text-lg text-[var(--foreground)]/80 leading-relaxed text-center">
                Una cobertura fotográfica diseñada para capturar la esencia de tu boda.
                Cada momento queda inmortalizado con autenticidad y detalle.
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
                    Solo fotografía · 10 horas
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
                    $36,000{" "}
                    <span className="text-sm text-[var(--foreground)]/50 uppercase tracking-wider">
                      MXN
                    </span>
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Stats */}
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
                  <p className="font-[var(--font-heading)] text-5xl text-[var(--foreground)] mb-3">10</p>
                  <p className="text-xs tracking-[0.25em] uppercase text-[var(--foreground)]/50">
                    Horas de cobertura
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={200}>
                <div className="text-center">
                  <p className="font-[var(--font-heading)] text-5xl text-[var(--foreground)] mb-3">600+</p>
                  <p className="text-xs tracking-[0.25em] uppercase text-[var(--foreground)]/50">
                    Fotografías entregadas
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={300}>
                <div className="text-center">
                  <p className="font-[var(--font-heading)] text-5xl text-[var(--foreground)] mb-3">1</p>
                  <p className="text-xs tracking-[0.25em] uppercase text-[var(--foreground)]/50">
                    Sesión pre boda incluida
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
                Si tienes algo específico en mente o deseas ajustar algún detalle, podemos crear una propuesta a la medida.
              </p>
              <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-8">
                ¿Lista para reservar tu fecha? Escríbenos por WhatsApp y conversemos sobre tu boda.
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
