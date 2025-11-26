"use client";

import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import { useLanguage } from "../context/LanguageContext";

export default function Paquetes() {
  const { content } = useLanguage();
  const { colecciones, common } = content;

  return (
    <div className="pt-20">
      {/* Header con imagen de fondo */}
      <FadeIn>
        <SectionHeader
          title={colecciones.title}
          subtitle={colecciones.subtitle}
          backgroundImage="/images/gallery/TOP-CyD-67.webp"
        />
      </FadeIn>

      {/* Collections */}
      <section className="py-16 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={200}>
            <p className="mb-12 text-lg text-[var(--foreground)]/80 leading-relaxed text-center max-w-3xl mx-auto">
              {colecciones.intro}
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {colecciones.collections.map((collection, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="bg-white border border-[var(--border-subtle)] p-10 h-full flex flex-col">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="font-[var(--font-heading)] text-3xl text-[var(--foreground)] mb-4">
                      {collection.name}
                    </h3>
                    <p className="text-4xl text-[var(--foreground)] mb-1">
                      {collection.price.split(' ')[0]}
                    </p>
                    <p className="text-sm text-[var(--foreground)]/50 uppercase tracking-wider">
                      {collection.price.split(' ')[1]}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-[var(--foreground)]/60 leading-relaxed mb-8 italic text-sm">
                    {collection.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-8 flex-grow text-sm text-[var(--foreground)]/70">
                    {collection.features.map((feature, fIndex) => (
                      <p key={fIndex}>
                        {feature}
                      </p>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <Button 
                      href="/contacto" 
                      variant="outline"
                      className="w-full border border-[var(--foreground)] text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-white py-3"
                    >
                      {colecciones.checkAvailability}
                    </Button>
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
            <p className="text-lg text-[var(--foreground)]/80 leading-relaxed">
              {colecciones.customNote}
            </p>
            <Button href="/contacto" variant="outline">
              {common.goToContact}
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
