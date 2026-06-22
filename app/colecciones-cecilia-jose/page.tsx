"use client";

import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "../context/LanguageContext";
import { WHATSAPP_BASE } from "@/lib/config";

const WHATSAPP_MESSAGE = "¡Hola! Soy Cecilia, estoy interesada en la propuesta para nuestra boda con José el 22 de agosto de 2026 en Casanueva.";

const photoOnly = {
  title: "Solo Fotografía",
  originalPrice: "$45,000",
  price: "$31,500",
  discount: "30% OFF",
  features: [
    "10 horas de cobertura",
    "1 fotógrafo",
    "600–700 fotografías",
    "Galería digital",
    'Photobook 8.5x11" (50 páginas)',
  ],
};

const photoAndVideo = {
  title: "Fotografía y Video",
  originalPrice: "$85,000",
  price: "$51,000",
  discount: "40% OFF",
  features: [
    "10 horas de cobertura",
    "1 fotógrafo",
    "600–700 fotografías",
    "Galería digital",
    "1 videógrafo",
    "Video de 25–30 minutos",
    "Versión 3–5 minutos",
    "Versión 1 minuto",
    'Photobook 8.5x11" (50 páginas)',
  ],
};

export default function ColeccionesCeciliaJose() {
  const { content } = useLanguage();
  const { colecciones } = content;

  return (
    <div>
      <FadeIn>
        <SectionHeader
          title="CECILIA & JOSÉ"
          subtitle="Casanueva · 22 de agosto de 2026"
          backgroundImage="/images/gallery/TOP-PyP-505.webp"
        />
      </FadeIn>

      <section className="py-16 bg-[var(--background)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={100}>
            <p className="text-center text-sm tracking-widest uppercase text-[#C67B5C] font-semibold mb-4">
              Propuesta personalizada
            </p>
            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl text-[var(--foreground)] text-center mb-4 uppercase">
              Dos opciones a la medida
            </h2>
            <p className="text-lg text-[var(--foreground)]/80 leading-relaxed text-center max-w-2xl mx-auto mb-12">
              Diseñadas especialmente para la boda de Cecilia y José en Casanueva. Una cobertura de 10 horas en dos formatos.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[photoOnly, photoAndVideo].map((pkg, idx) => (
              <FadeIn key={pkg.title} delay={200 + idx * 100}>
                <div className="bg-white border border-[var(--border-subtle)] p-10 h-full flex flex-col">
                  <div className="mb-6">
                    <h3 className="font-[var(--font-heading)] text-3xl text-[var(--foreground)] mb-2">
                      {pkg.title}
                    </h3>
                    <p className="text-sm text-[var(--foreground)]/50 uppercase tracking-wider">
                      Cecilia &amp; José · Casanueva
                    </p>
                  </div>

                  <div className="space-y-2 mb-8 flex-grow text-sm text-[var(--foreground)]/70">
                    {pkg.features.map((feature, i) => (
                      <p key={i}>{feature}</p>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-[var(--border-subtle)] text-center">
                    <p className="text-lg text-[var(--foreground)]/40 line-through mb-1">
                      {pkg.originalPrice}
                    </p>
                    <p className="text-3xl font-light text-[var(--foreground)]">
                      {pkg.price} <span className="text-sm text-[var(--foreground)]/50 uppercase tracking-wider">MXN</span>
                    </p>
                    <p className="text-sm text-[#C67B5C] font-semibold mt-2">
                      {pkg.discount}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
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
