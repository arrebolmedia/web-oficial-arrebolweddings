"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { WHATSAPP_BASE } from "@/lib/config";
import { getAlianzasContent, type AlianzaVariant } from "../content";

export default function HowWeWorkSection({ variant }: { variant: AlianzaVariant }) {
  const { language } = useLanguage();
  const { howWeWork } = getAlianzasContent(variant, language);

  const whatsappUrl = WHATSAPP_BASE + encodeURIComponent(howWeWork.whatsappMessage);

  return (
    <section className="py-24 md:py-32 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--foreground)]/60 mb-4">
            {howWeWork.subtitle}
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl text-[var(--foreground)] leading-tight mb-6">
            {howWeWork.title}
          </h2>
          <p className="text-[var(--foreground)]/70 leading-relaxed">
            {howWeWork.description}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howWeWork.steps.map((step, index) => (
            <div key={index} className="text-center">
              <p className="font-[var(--font-heading)] text-2xl text-[var(--foreground)]/40 mb-4">
                {step.number}
              </p>
              <h3 className="font-[var(--font-heading)] text-xl text-[var(--foreground)] mb-3">
                {step.title}
              </h3>
              <p className="text-[var(--foreground)]/70 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-[var(--foreground)] text-[var(--foreground)] text-sm tracking-widest uppercase hover:bg-[var(--foreground)] hover:text-white transition-all duration-300"
          >
            {howWeWork.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
