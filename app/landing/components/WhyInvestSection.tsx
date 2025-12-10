"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { landingContentEs, landingContentEn } from "../content";

export default function WhyInvestSection() {
  const { language } = useLanguage();
  const content = language === "es" ? landingContentEs : landingContentEn;
  const { whyInvest } = content;

  return (
    <section className="py-24 md:py-32 bg-[var(--foreground)] text-white">
      <div className="max-w-4xl mx-auto px-5 md:px-8 lg:px-12 text-center">
        {/* Header */}
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--accent-blush)] mb-4">
          {whyInvest.subtitle}
        </p>
        <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-12">
          {whyInvest.title}
        </h2>

        {/* Paragraphs */}
        <div className="space-y-6 text-white/80 text-lg leading-relaxed mb-12">
          {whyInvest.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Highlight */}
        <div className="border-t border-white/20 pt-8">
          <p className="font-[var(--font-heading)] text-xl md:text-2xl text-white/90 italic">
            {whyInvest.highlight}
          </p>
        </div>
      </div>
    </section>
  );
}
