"use client";

import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "../context/LanguageContext";
import { WHATSAPP_BASE } from "@/lib/config";

export default function ColeccionesHuayacan() {
  const { content } = useLanguage();
  const { colecciones } = content;

  // Solo Colección Tres
  const collection = colecciones.collections[2];

  const customFeatures = collection.features
    .filter(f => !f.toLowerCase().includes("creador de contenido"))
    .map(f => f.toLowerCase().includes("sesión pre boda") ? "Save The Date" : f.toLowerCase().includes("sesión post boda") ? "Ice Breaker" : f)
    .concat(["Invitación digital"]);

  const originalPrice = "$100,000";
  const customPrice = "$80,000";
  const customDescription = "Ideal para bodas que se celebran en múltiples locaciones o durante varios días. Particularmente adecuada para una cobertura extendida de la fiesta. Incluye dos sesiones adicionales: Save The Date e Ice Breaker, más invitación digital. Cada momento se captura desde múltiples ángulos, permitiendo una visión dinámica y precisa.";

  const whatsappMessage = "Hola! Me gustaría conocer más sobre las colecciones para la boda del 16 de enero 2027 en Huayacán.";

  return (
    <>
      <div>
        {/* Header con imagen de fondo */}
        <FadeIn>
          <SectionHeader
            title="BODA EN HUAYACÁN — 16 ENERO 2027"
            subtitle={colecciones.subtitle}
            backgroundImage="/images/gallery/SandJ-404.webp"
          />
        </FadeIn>

        {/* Collection */}
        <section className="py-16 bg-[var(--background)]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn delay={200}>
              <p className="mb-12 text-lg text-[var(--foreground)]/80 leading-relaxed text-center max-w-3xl mx-auto">
                {colecciones.intro}
              </p>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="bg-white border border-[var(--border-subtle)] p-10 flex flex-col">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="font-[var(--font-heading)] text-3xl text-[var(--foreground)] mb-4">
                    {collection.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[var(--foreground)]/60 leading-relaxed mb-8 italic text-sm">
                  {customDescription}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-8 flex-grow text-sm text-[var(--foreground)]/70">
                  {customFeatures.map((feature, fIndex) => (
                    <p key={fIndex}>{feature}</p>
                  ))}
                </div>

                {/* Price at bottom */}
                <div className="pt-6 border-t border-[var(--border-subtle)] text-center">
                  <p className="text-lg text-[var(--foreground)]/40 line-through mb-1">
                    {originalPrice}
                  </p>
                  <p className="text-2xl font-light text-[var(--foreground)]">
                    {customPrice} <span className="text-sm text-[var(--foreground)]/50 uppercase tracking-wider">MXN</span>
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Addons Section */}
        <section className="py-16 bg-[var(--background)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl text-[var(--foreground)] text-center mb-12 uppercase">
                {colecciones.addonsTitle}
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {colecciones.addons.map((addon, index) => (
                <FadeIn key={index} delay={index * 50}>
                  <div className="bg-white p-6 border border-[var(--border-subtle)]">
                    <div className="flex justify-between items-start gap-4">
                      <p className="text-[var(--foreground)] font-medium">
                        {addon.name}
                      </p>
                      <p className="text-[var(--foreground)] font-bold whitespace-nowrap">
                        {addon.price}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Note */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-8">
                {colecciones.customNote}
              </p>
              <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-8">
                {colecciones.whatsappText}
              </p>
              <a
                href={`${WHATSAPP_BASE}${encodeURIComponent(whatsappMessage)}`}
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
