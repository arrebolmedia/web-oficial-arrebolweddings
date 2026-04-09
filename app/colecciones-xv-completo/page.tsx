"use client";

import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "../context/LanguageContext";
import { WHATSAPP_BASE } from "@/lib/config";

const collections = [
  {
    name: "Colección XV · 8 Horas",
    tag: "Fotografía y video · 8 horas",
    description:
      "Cobertura completa de tu fiesta de XV años. Fotografía y video desde los preparativos hasta el baile de vals y la fiesta, documentando cada momento especial con una mirada artística.",
    features: [
      "8 horas de cobertura",
      "1 fotógrafo",
      "400–500 fotografías",
      "Galería digital",
      'Photobook 8.5x11" (50 páginas)',
      "1 videógrafo",
      "Video de 20–25 minutos",
      "Versión 1 minuto",
    ],
    price: "$38,000",
  },
  {
    name: "Colección XV · 10 Horas",
    tag: "Fotografía y video · 10 horas",
    description:
      "Cobertura extendida para celebraciones en múltiples locaciones o con programa de varios momentos. Cada detalle queda inmortalizado con fotografía y video de la más alta calidad.",
    features: [
      "10 horas de cobertura",
      "1 fotógrafo",
      "600–700 fotografías",
      "Galería digital",
      'Photobook 8.5x11" (50 páginas)',
      "1 videógrafo",
      "Video de 30–35 minutos",
      "Versión 3–5 minutos",
      "Versión 1 minuto",
    ],
    price: "$46,000",
  },
];

const whatsappMessage = "¡Hola! Soy Maju y deseo más información sobre sus colecciones de XV años";

export default function ColeccionesXVCompleto() {
  const { content } = useLanguage();
  const { coleccionesXV } = content;

  return (
    <>
      <div>
        {/* Header */}
        <FadeIn>
          <SectionHeader
            title="Maju · XV Años"
            subtitle="3 de julio 2026 · Las Mañanitas"
            backgroundImage="/images/gallery/TOP-PyP-505.webp"
          />
        </FadeIn>

        {/* Collections */}
        <section className="py-16 bg-[var(--background)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn delay={200}>
              <p className="mb-12 text-lg text-[var(--foreground)]/80 leading-relaxed text-center max-w-3xl mx-auto">
                {coleccionesXV.intro}
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {collections.map((collection, index) => (
                <FadeIn key={index} delay={index * 150}>
                  <div className="bg-white border border-[var(--border-subtle)] p-10 h-full flex flex-col">
                    <div className="mb-6">
                      <h3 className="font-[var(--font-heading)] text-3xl text-[var(--foreground)] mb-2">
                        {collection.name}
                      </h3>
                      <p className="text-xs tracking-[0.3em] uppercase text-[var(--foreground)]/40">
                        {collection.tag}
                      </p>
                    </div>

                    <p className="text-[var(--foreground)]/60 leading-relaxed mb-8 italic text-sm">
                      {collection.description}
                    </p>

                    <div className="space-y-2 mb-8 flex-grow text-sm text-[var(--foreground)]/70">
                      {collection.features.map((feature, fIndex) => (
                        <p key={fIndex}>{feature}</p>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-[var(--border-subtle)] text-center">
                      <p className="text-2xl font-light text-[var(--foreground)]">
                        {collection.price}{" "}
                        <span className="text-sm text-[var(--foreground)]/50 uppercase tracking-wider">
                          MXN
                        </span>
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Addons */}
        <section className="py-16 bg-[var(--background)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl text-[var(--foreground)] text-center mb-12 uppercase">
                {coleccionesXV.addonsTitle}
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coleccionesXV.addons.map((addon, index) => (
                <FadeIn key={index} delay={index * 50}>
                  <div className="bg-white p-6 border border-[var(--border-subtle)]">
                    <div className="flex justify-between items-start gap-4">
                      <p className="text-[var(--foreground)] font-medium">{addon.name}</p>
                      <p className="text-[var(--foreground)] font-bold whitespace-nowrap">{addon.price}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-8">
                {coleccionesXV.customNote}
              </p>
              <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-8">
                {coleccionesXV.whatsappText}
              </p>
              <a
                href={`${WHATSAPP_BASE}${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 border border-[var(--foreground)] text-[var(--foreground)] text-sm tracking-widest uppercase hover:bg-[var(--foreground)] hover:text-white transition-all duration-300"
              >
                {coleccionesXV.whatsappButton}
              </a>
            </FadeIn>
          </div>
        </section>
      </div>
    </>
  );
}
