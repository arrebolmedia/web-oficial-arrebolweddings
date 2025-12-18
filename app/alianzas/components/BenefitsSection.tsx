"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { alianzasContentEs, alianzasContentEn } from "../content";

export default function BenefitsSection() {
  const { language } = useLanguage();
  const content = language === "es" ? alianzasContentEs : alianzasContentEn;
  const { benefits } = content;

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--accent-wine)] mb-4">
            {benefits.subtitle}
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl text-[var(--foreground)] leading-tight mb-6">
            {benefits.title}
          </h2>
          <p className="text-[var(--foreground)]/70 leading-relaxed">
            {benefits.description}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.items.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-[var(--background)] hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-[var(--accent-wine)]/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-[var(--accent-wine)] font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-[var(--font-heading)] text-xl text-[var(--foreground)] mb-3">
                {item.title}
              </h3>
              <p className="text-[var(--foreground)]/70 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
