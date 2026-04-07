"use client";

import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "../context/LanguageContext";
import { WHATSAPP_BASE } from "@/lib/config";

const collections = [
  {
    name: "Colección de Video",
    tag: "Solo video · 10 horas",
    description:
      "Cobertura de video cinematográfico de tu boda en Piedra Viva. Diez horas para capturar cada momento con emoción y movimiento.",
    features: [
      "10 horas de cobertura",
      "1 videógrafo",
      "Video de 30–35 minutos",
      "Versión 3–5 minutos",
      "Versión 1 minuto",
    ],
    price: "$22,000",
  },
  {
    name: "Colección de Foto y Video",
    tag: "Fotografía y video · 10 horas",
    description:
      "Cobertura completa de fotografía y video cinematográfico para tu boda en Piedra Viva. Diez horas para documentar cada detalle con una mirada artística y emotiva.",
    features: [
      "10 horas de cobertura",
      "1 fotógrafo",
      "600–700 fotografías",
      "Galería digital",
      "1 videógrafo",
      "Video de 30–35 minutos",
      "Versión 3–5 minutos",
      "Versión 1 minuto",
      'Photobook 8.5x11" (50 páginas)',
    ],
    price: "$36,000",
  },
];

const whatsappMessage = "¡Hola! Soy Fernanda Elías y deseo más información sobre sus colecciones";

export default function ColeccionesFernandaElias() {
  useLanguage();

  return (
    <>
      <div>
        {/* Header */}
        <FadeIn>
          <SectionHeader
            title="Fernanda Elías · Video"
            subtitle="12 de diciembre · Piedra Viva"
            backgroundImage="/images/gallery/TOP-PyP-505.webp"
          />
        </FadeIn>

        {/* Collections */}
        <section className="py-16 bg-[var(--background)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn delay={200}>
              <p className="mb-12 text-lg text-[var(--foreground)]/80 leading-relaxed text-center max-w-3xl mx-auto">
                Dos opciones diseñadas para capturar tu boda con autenticidad y emoción.
                Elige la que mejor se adapte a lo que quieres recordar.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {collections.map((collection, index) => (
                <FadeIn key={index} delay={index * 150}>
                  <div className="bg-white border border-[var(--border-subtle)] p-10 md:p-14 h-full flex flex-col">
                    {/* Header */}
                    <div className="mb-6">
                      <h2 className="font-[var(--font-heading)] text-3xl text-[var(--foreground)] mb-2">
                        {collection.name}
                      </h2>
                      <p className="text-xs tracking-[0.3em] uppercase text-[var(--foreground)]/40">
                        {collection.tag}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-[var(--foreground)]/60 leading-relaxed mb-10 italic text-sm">
                      {collection.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-10 flex-grow text-sm text-[var(--foreground)]/70">
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

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-4">
                Si deseas ajustar algún detalle o tienes algo específico en mente, podemos crear una propuesta a la medida.
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
