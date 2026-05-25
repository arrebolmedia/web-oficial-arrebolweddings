"use client";

import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "../context/LanguageContext";
import { WHATSAPP_BASE } from "@/lib/config";

const WHATSAPP_MESSAGE = "¡Hola! Estoy interesada en la propuesta para mi boda el 27 de febrero de 2027 en Amara Baja.";

const features = [
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
  const { content } = useLanguage();
  const { colecciones } = content;

  return (
    <>
      <div>
        {/* Header */}
        <FadeIn>
          <SectionHeader
            title="PROPUESTA ESPECIAL"
            subtitle="Amara Baja · 27 de febrero de 2027"
            backgroundImage="/images/gallery/TOP-PyP-505.webp"
          />
        </FadeIn>

        {/* Intro */}
        <section className="py-16 bg-[var(--background)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn delay={100}>
              <p className="text-lg text-[var(--foreground)]/80 leading-relaxed">
                Preparamos esta propuesta especialmente para tu boda en Amara Baja. Una cobertura completa de 10 horas para capturar cada detalle de tu día.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Collection Card */}
        <section className="pb-16 bg-[var(--background)]">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn delay={200}>
              <div className="bg-white border border-[var(--border-subtle)] p-10 flex flex-col">
                <div className="mb-6">
                  <h3 className="font-[var(--font-heading)] text-3xl text-[var(--foreground)] mb-2">
                    Fotografía y Video
                  </h3>
                  <p className="text-sm text-[var(--foreground)]/50 uppercase tracking-wider">
                    Amara Baja · 27 de febrero de 2027
                  </p>
                </div>

                <div className="space-y-2 mb-8 flex-grow text-sm text-[var(--foreground)]/70">
                  {features.map((feature, i) => (
                    <p key={i}>{feature}</p>
                  ))}
                </div>

                <div className="pt-6 border-t border-[var(--border-subtle)] text-center">
                  <p className="text-3xl font-light text-[var(--foreground)]">
                    $65,000 <span className="text-sm text-[var(--foreground)]/50 uppercase tracking-wider">MXN</span>
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[var(--background)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-8">
                {colecciones.whatsappText}
              </p>
              <a
                href={`${WHATSAPP_BASE}${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 border border-[var(--foreground)] text-[var(--foreground)] text-sm tracking-widest uppercase hover:bg-[var(--foreground)] hover:text-white transition-all duration-300"
              >
                {colecciones.whatsappButton}
              </a>
            </FadeIn>
          </div>
        </section>
      </div>
    </>
  );
}
