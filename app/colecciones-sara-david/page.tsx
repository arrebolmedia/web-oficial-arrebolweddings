"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import { WHATSAPP_BASE } from "@/lib/config";

// Colección Uno base (fotografía + video) — $59,000 MXN.
// Dos propuestas personalizadas para Sara & David:
//   Opción A: la misma Colección Uno con 40% de descuento.
//   Opción B: la misma Colección Uno con 30% de descuento y 10 horas (en vez de 8).
const options = [
  {
    name: "Colección Uno",
    description:
      "Nuestra Colección Uno completa —fotografía y video— para capturar cada momento de su boda.",
    features: [
      "8 horas de cobertura",
      "1 fotógrafo",
      "400–500 fotografías",
      "Galería digital",
      "1 videógrafo",
      "Video de 20–25 minutos",
      "Versión 1 minuto",
    ],
    price: "$35,400",
  },
  {
    name: "Colección Uno",
    description:
      "La misma Colección Uno, ampliando la cobertura de 8 a 10 horas y añadiendo un álbum impreso para conservar sus mejores fotografías.",
    features: [
      "10 horas de cobertura",
      "1 fotógrafo",
      "400–500 fotografías",
      "Galería digital",
      "1 videógrafo",
      "Video de 20–25 minutos",
      "Versión 1 minuto",
      "Álbum impreso (50 páginas)",
    ],
    price: "$41,300",
  },
];

const whatsappMessage =
  "¡Hola! Somos Sara y David (boda 13 de febrero 2027, Las Mañanitas). Nos interesa su Colección Uno. ¿Está disponible nuestra fecha?";

export default function ColeccionesSaraDavid() {
  return (
    <>
      <div>
        {/* Header con imagen de fondo */}
        <FadeIn>
          <SectionHeader
            title="SARA & DAVID"
            subtitle="13 de febrero 2027 • Las Mañanitas"
            backgroundImage="/images/gallery/TOP-SyP-324-hero.webp"
          />
        </FadeIn>

        {/* Cards de colecciones */}
        <section className="py-16 bg-[var(--background)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn delay={200}>
              <p className="mb-12 text-lg text-[var(--foreground)]/80 leading-relaxed text-center max-w-3xl mx-auto">
                Preparamos dos versiones de nuestra Colección Uno —fotografía y video—
                pensadas especialmente para su boda. Elijan la que mejor se ajuste: la
                esencial, o una ampliada con más horas de cobertura y álbum impreso.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {options.map((option, index) => (
                <FadeIn key={index} delay={index * 100}>
                  <div className="bg-white border border-[var(--border-subtle)] p-10 h-full flex flex-col">
                    <div className="mb-6">
                      <h3 className="font-[var(--font-heading)] text-3xl text-[var(--foreground)] mb-4">
                        {option.name}
                      </h3>
                    </div>

                    <p className="text-[var(--foreground)]/60 leading-relaxed mb-8 italic text-sm">
                      {option.description}
                    </p>

                    <div className="space-y-2 mb-8 flex-grow text-sm text-[var(--foreground)]/70">
                      {option.features.map((feature, fIndex) => (
                        <p key={fIndex}>{feature}</p>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-[var(--border-subtle)] text-center">
                      <p className="text-2xl font-light text-[var(--foreground)]">
                        {option.price}{" "}
                        <span className="text-sm text-[var(--foreground)]/50 uppercase tracking-wider">
                          MXN
                        </span>
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Tabla comparativa */}
            <div className="mt-16 overflow-x-auto hidden lg:block">
              <FadeIn delay={500}>
                <h3 className="font-[var(--font-heading)] text-3xl text-[var(--foreground)] text-center mb-8 uppercase">
                  Comparación de opciones
                </h3>
                <table className="w-full bg-white border border-[var(--border-subtle)]">
                  <thead>
                    <tr className="border-b border-[var(--border-subtle)]">
                      <th className="p-4 text-left font-[var(--font-heading)] text-lg text-[var(--foreground)] bg-[var(--background)]">
                        Características
                      </th>
                      <th className="p-4 text-center font-[var(--font-heading)] text-lg text-[var(--foreground)] bg-[var(--background)] min-w-[180px]">
                        Colección Uno
                      </th>
                      <th className="p-4 text-center font-[var(--font-heading)] text-lg text-[var(--foreground)] bg-[var(--background)] min-w-[180px]">
                        Colección Uno · 10 h
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[var(--border-subtle)]">
                      <td className="p-4 text-[var(--foreground)]/70">Horas de cobertura</td>
                      <td className="p-4 text-center text-[var(--foreground)]">8</td>
                      <td className="p-4 text-center text-[var(--foreground)]">10</td>
                    </tr>
                    <tr className="border-b border-[var(--border-subtle)]">
                      <td className="p-4 text-[var(--foreground)]/70">Fotógrafos</td>
                      <td className="p-4 text-center text-[var(--foreground)]">1</td>
                      <td className="p-4 text-center text-[var(--foreground)]">1</td>
                    </tr>
                    <tr className="border-b border-[var(--border-subtle)]">
                      <td className="p-4 text-[var(--foreground)]/70">Fotografías</td>
                      <td className="p-4 text-center text-[var(--foreground)]">400–500</td>
                      <td className="p-4 text-center text-[var(--foreground)]">400–500</td>
                    </tr>
                    <tr className="border-b border-[var(--border-subtle)]">
                      <td className="p-4 text-[var(--foreground)]/70">Videógrafos</td>
                      <td className="p-4 text-center text-[var(--foreground)]">1</td>
                      <td className="p-4 text-center text-[var(--foreground)]">1</td>
                    </tr>
                    <tr className="border-b border-[var(--border-subtle)]">
                      <td className="p-4 text-[var(--foreground)]/70">Video (duración)</td>
                      <td className="p-4 text-center text-[var(--foreground)]">20–25 min</td>
                      <td className="p-4 text-center text-[var(--foreground)]">20–25 min</td>
                    </tr>
                    <tr className="border-b border-[var(--border-subtle)]">
                      <td className="p-4 text-[var(--foreground)]/70">Versión 1 minuto</td>
                      <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                      <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                    </tr>
                    <tr className="border-b border-[var(--border-subtle)]">
                      <td className="p-4 text-[var(--foreground)]/70">Galería digital</td>
                      <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                      <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                    </tr>
                    <tr className="border-b border-[var(--border-subtle)]">
                      <td className="p-4 text-[var(--foreground)]/70">Álbum impreso</td>
                      <td className="p-4 text-center text-[var(--foreground)]">—</td>
                      <td className="p-4 text-center text-[var(--foreground)]">50 pág</td>
                    </tr>
                    <tr className="bg-[var(--background)]">
                      <td className="p-4 font-[var(--font-heading)] text-lg text-[var(--foreground)]">Precio</td>
                      <td className="p-4 text-center">
                        <div className="text-2xl font-light text-[var(--foreground)]">$35,400</div>
                        <div className="text-xs text-[var(--foreground)]/60 uppercase">MXN</div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="text-2xl font-light text-[var(--foreground)]">$41,300</div>
                        <div className="text-xs text-[var(--foreground)]/60 uppercase">MXN</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA WhatsApp */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-8">
                ¿Listos para reservar su fecha? Escríbannos por WhatsApp indicando la
                opción que prefieren y con gusto resolvemos cualquier duda.
              </p>
              <a
                href={`${WHATSAPP_BASE}${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 border border-[var(--foreground)] text-[var(--foreground)] text-sm tracking-widest uppercase hover:bg-[var(--foreground)] hover:text-white transition-all duration-300"
              >
                Contactar por WhatsApp
              </a>

              <div className="mt-12">
                <Link
                  href="/colecciones"
                  className="text-[var(--foreground)]/60 hover:text-[#C67B5C] transition-colors text-sm uppercase tracking-wider"
                >
                  ← Ver todas las colecciones
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </>
  );
}
