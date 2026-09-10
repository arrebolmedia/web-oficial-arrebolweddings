"use client";

import FadeIn from "@/components/FadeIn";
import { WHATSAPP_BASE } from "@/lib/config";
import { useLanguage } from "../../context/LanguageContext";
import type { CustomPackage, Highlight } from "./landingConfig";

// Paquetes a la medida de una landing (custom_packages en la suite). Sustituye a
// CollectionsView cuando la cotización no es el catálogo de bodas: un bautizo,
// una cobertura corta, variantes con y sin álbum. Mismo lenguaje visual que la
// tarjeta de colecciones-ginna-carlos, la primera cotización así, hecha a mano.
//
// Los textos por defecto no dicen "boda": el evento puede ser cualquiera.

const TEXTOS = {
  es: {
    intro:
      "Una propuesta pensada para su celebración: fotografía y video con una mirada artística y cinematográfica, para que conserven cada momento importante.",
    incluye: "¿Qué incluye?",
    medida:
      "Si tienen algo específico en mente —otro horario, una locación especial o más horas de cobertura— ajustamos la propuesta a su medida.",
    contacto: "Escríbannos por WhatsApp y conversemos sobre su celebración.",
    mensaje: "¡Hola! Vimos la propuesta que nos compartieron y nos gustaría platicar los detalles.",
  },
  en: {
    intro:
      "A proposal designed for your celebration: photography and video with an artistic, cinematic eye, so you can keep every meaningful moment.",
    incluye: "What's included",
    medida:
      "If you have something specific in mind — a different schedule, a special location or more hours of coverage — we'll tailor the proposal to you.",
    contacto: "Message us on WhatsApp and let's talk about your celebration.",
    mensaje: "Hello! We saw the proposal you shared and would like to talk through the details.",
  },
};

// Tailwind solo genera clases que aparecen literales en el código.
const COLUMNAS: Record<number, string> = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
};

function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 0,
  }).format(price);
}

export default function CustomPackagesView({
  packages,
  highlights,
  intro,
  whatsappMessage,
}: {
  packages: CustomPackage[];
  highlights: Highlight[];
  intro: string | null;
  whatsappMessage?: string;
}) {
  const { language, content } = useLanguage();
  const t = language === "en" ? TEXTOS.en : TEXTOS.es;
  // Un solo paquete va centrado y ancho, como la tarjeta de Ginna & Carlos;
  // varios se acomodan en rejilla, como las colecciones del catálogo.
  const solo = packages.length === 1;

  return (
    <>
      <section className="py-16 bg-[var(--background)]">
        <div className={`${solo ? "max-w-4xl" : "max-w-6xl"} mx-auto px-4 sm:px-6 lg:px-8`}>
          <FadeIn delay={200}>
            <p className="mb-12 text-lg text-[var(--foreground)]/80 leading-relaxed text-center max-w-3xl mx-auto">
              {intro || t.intro}
            </p>
          </FadeIn>

          <div className={solo ? "" : "grid grid-cols-1 md:grid-cols-2 gap-8"}>
            {packages.map((pkg, i) => (
              <FadeIn key={i} delay={300 + i * 100}>
                <div
                  className={`bg-white border border-[var(--border-subtle)] ${
                    solo ? "p-10 md:p-14" : "p-10"
                  } h-full flex flex-col`}
                >
                  <div className="mb-6">
                    <h2
                      className={`font-[var(--font-heading)] ${
                        solo ? "text-4xl" : "text-3xl"
                      } text-[var(--foreground)] mb-2`}
                    >
                      {pkg.name}
                    </h2>
                    {pkg.tagline && (
                      <p className="text-xs tracking-[0.3em] uppercase text-[var(--foreground)]/40">
                        {pkg.tagline}
                      </p>
                    )}
                  </div>

                  {pkg.description && (
                    <p className="text-[var(--foreground)]/60 leading-relaxed mb-10 italic text-sm max-w-xl">
                      {pkg.description}
                    </p>
                  )}

                  <div className="space-y-3 mb-10 flex-grow text-sm text-[var(--foreground)]/70">
                    {pkg.features.map((feature, j) => (
                      <p key={j} className="flex items-start gap-3">
                        <span className="mt-0.5 text-[var(--foreground)]/30">—</span>
                        {feature}
                      </p>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-[var(--border-subtle)] text-center">
                    {pkg.original_price ? (
                      <p className="text-lg text-[var(--foreground)]/40 line-through mb-1">
                        {formatPrice(pkg.original_price)}
                      </p>
                    ) : null}
                    <p className="text-3xl font-light text-[var(--foreground)]">
                      {formatPrice(pkg.price)}{" "}
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

      {highlights.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="font-[var(--font-heading)] text-3xl text-[var(--foreground)] text-center mb-12 uppercase">
                {t.incluye}
              </h2>
            </FadeIn>
            <div
              className={`grid grid-cols-1 gap-8 ${
                COLUMNAS[Math.min(highlights.length, 4)] ?? "md:grid-cols-3"
              }`}
            >
              {highlights.map((h, i) => (
                <FadeIn key={i} delay={100 * (i + 1)}>
                  <div className="text-center">
                    <p className="font-[var(--font-heading)] text-5xl text-[var(--foreground)] mb-3">
                      {h.value}
                    </p>
                    <p className="text-xs tracking-[0.25em] uppercase text-[var(--foreground)]/50">
                      {h.label}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={`py-16 ${highlights.length > 0 ? "bg-[var(--background)]" : "bg-white"}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-4">{t.medida}</p>
            <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-8">{t.contacto}</p>
            <a
              href={`${WHATSAPP_BASE}${encodeURIComponent(whatsappMessage || t.mensaje)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border border-[var(--foreground)] text-[var(--foreground)] text-sm tracking-widest uppercase hover:bg-[var(--foreground)] hover:text-white transition-all duration-300"
            >
              {content.colecciones.whatsappButton}
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
