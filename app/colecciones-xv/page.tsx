"use client";

import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "../context/LanguageContext";
import { WHATSAPP_BASE } from "@/lib/config";

export default function ColeccionesXV() {
  const { content } = useLanguage();
  const { coleccionesXV } = content;
  const { collection } = coleccionesXV;

  return (
    <>
      <div>
        {/* Header con imagen de fondo */}
        <FadeIn>
          <SectionHeader
            title={coleccionesXV.title}
            subtitle={coleccionesXV.subtitle}
            backgroundImage="/images/gallery/TOP-PyP-505.webp"
          />
        </FadeIn>

        {/* Collection */}
        <section className="py-16 bg-[var(--background)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn delay={200}>
              <p className="mb-12 text-lg text-[var(--foreground)]/80 leading-relaxed text-center max-w-3xl mx-auto">
                {coleccionesXV.intro}
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="bg-white border border-[var(--border-subtle)] p-10 flex flex-col">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="font-[var(--font-heading)] text-3xl text-[var(--foreground)] mb-4">
                    {collection.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[var(--foreground)]/60 leading-relaxed mb-8 italic text-sm">
                  {collection.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-8 text-sm text-[var(--foreground)]/70">
                  {collection.features.map((feature, fIndex) => (
                    <p key={fIndex}>{feature}</p>
                  ))}
                </div>

                {/* Price at bottom */}
                <div className="pt-6 border-t border-[var(--border-subtle)] text-center">
                  <p className="text-2xl font-light text-[var(--foreground)]">
                    {collection.price.split(' ')[0]}{' '}
                    <span className="text-sm text-[var(--foreground)]/50 uppercase tracking-wider">
                      {collection.price.split(' ')[1]}
                    </span>
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
                {coleccionesXV.addonsTitle}
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coleccionesXV.addons.map((addon, index) => (
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
                {coleccionesXV.customNote}
              </p>
              <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-8">
                {coleccionesXV.whatsappText}
              </p>
              <a
                href={`${WHATSAPP_BASE}${encodeURIComponent(coleccionesXV.whatsappMessage)}`}
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
