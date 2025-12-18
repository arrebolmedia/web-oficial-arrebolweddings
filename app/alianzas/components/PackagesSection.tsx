"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { alianzasContentEs, alianzasContentEn } from "../content";

const WHATSAPP_BASE = "https://wa.me/5217775001071?text=";

export default function PackagesSection() {
  const { language } = useLanguage();
  const content = language === "es" ? alianzasContentEs : alianzasContentEn;
  const { packages } = content;

  const whatsappUrl = WHATSAPP_BASE + encodeURIComponent(packages.whatsappMessage);

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--accent-wine)] mb-4">
            {packages.subtitle}
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl text-[var(--foreground)] leading-tight mb-6">
            {packages.title}
          </h2>
          <p className="text-[var(--foreground)]/70 leading-relaxed text-lg">
            {packages.description}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {packages.benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 bg-[var(--background)] border-l-4 border-[var(--accent-wine)]"
            >
              <h3 className="font-[var(--font-heading)] text-xl text-[var(--foreground)] mb-4">
                {benefit.title}
              </h3>
              <p className="text-[var(--foreground)]/70 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[var(--accent-wine)] text-white text-sm tracking-widest uppercase hover:bg-[var(--foreground)] transition-all duration-300"
          >
            {packages.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
