"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { landingContentEs, landingContentEn } from "../content";

export default function UniqueValueSection() {
  const { language } = useLanguage();
  const content = language === "es" ? landingContentEs : landingContentEn;
  const { uniqueValue } = content;

  return (
    <section className="py-24 md:py-32 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--accent-wine)] mb-4">
            {uniqueValue.subtitle}
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl text-[var(--foreground)] leading-tight">
            {uniqueValue.title}
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {uniqueValue.values.map((value, index) => (
            <div key={index} className="text-center">
              <h3 className="font-[var(--font-heading)] text-2xl text-[var(--foreground)] mb-4">
                {value.title}
              </h3>
              <p className="text-[var(--foreground)]/70 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
