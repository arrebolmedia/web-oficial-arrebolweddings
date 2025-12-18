"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { alianzasContentEs, alianzasContentEn } from "../content";

const WHATSAPP_BASE = "https://wa.me/5217775001071?text=";

export default function FinalCTASection() {
  const { language } = useLanguage();
  const content = language === "es" ? alianzasContentEs : alianzasContentEn;
  const { cta } = content;

  const whatsappUrl = WHATSAPP_BASE + encodeURIComponent(cta.whatsappMessage);

  return (
    <section className="py-24 md:py-32 bg-[var(--accent-wine)] text-white">
      <div className="max-w-4xl mx-auto px-5 md:px-8 lg:px-12 text-center">
        <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
          {cta.title}
        </h2>
        <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          {cta.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-white text-[var(--accent-wine)] text-sm tracking-widest uppercase font-medium rounded-sm hover:bg-[var(--foreground)] hover:text-white transition-all duration-300 text-center"
          >
            {cta.ctaPrimary}
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-white/50 text-white text-sm tracking-widest uppercase hover:bg-white/10 transition-all duration-300 rounded-sm text-center"
          >
            {cta.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
