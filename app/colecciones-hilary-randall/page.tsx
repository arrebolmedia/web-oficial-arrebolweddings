"use client";

import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "../context/LanguageContext";
import { WHATSAPP_BASE } from "@/lib/config";

const WHATSAPP_MESSAGE = "¡Hola! Soy Hilary, estoy interesada en la propuesta para nuestra boda con Randall el 19 de diciembre de 2026 en Posada del Tepozteco.";

const features = [
  "10 horas de cobertura",
  "2 videógrafos",
  "Video de 25–30 minutos",
  "Versión 3–5 minutos",
  "Versión 1 minuto",
  "Dron para tomas aéreas",
  "Creador de contenido",
];

export default function ColeccionesHilaryRandall() {
  const { content } = useLanguage();
  const { colecciones } = content;

  return (
    <div>
      <FadeIn>
        <SectionHeader
          title="HILARY & RANDALL"
          subtitle="Posada del Tepozteco · 19 de diciembre de 2026"
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
              Cobertura de Video
            </h2>
            <p className="text-lg text-[var(--foreground)]/80 leading-relaxed text-center max-w-2xl mx-auto mb-12">
              Diseñada especialmente para la boda de Hilary y Randall en Posada del Tepozteco. Cobertura de 10 horas con dos videógrafos, dron y creador de contenido.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="max-w-2xl mx-auto bg-white border-2 border-[#C67B5C] p-10 flex flex-col">
              <div className="mb-6">
                <h3 className="font-[var(--font-heading)] text-3xl text-[var(--foreground)] mb-2">
                  Cinematografía
                </h3>
                <p className="text-sm text-[var(--foreground)]/50 uppercase tracking-wider">
                  Hilary &amp; Randall · Posada del Tepozteco · 19 de diciembre de 2026
                </p>
              </div>

              <div className="space-y-2 mb-8 flex-grow text-sm text-[var(--foreground)]/70">
                {features.map((feature, i) => (
                  <p key={i}>{feature}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-[var(--border-subtle)] text-center">
                <p className="text-lg text-[var(--foreground)]/40 line-through mb-1">
                  $52,500
                </p>
                <p className="text-3xl font-light text-[var(--foreground)]">
                  $42,000 <span className="text-sm text-[var(--foreground)]/50 uppercase tracking-wider">MXN</span>
                </p>
                <p className="text-sm text-[#C67B5C] font-semibold mt-2">
                  20% OFF
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 bg-white">
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
  );
}
