"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { alianzasContentEs, alianzasContentEn } from "../content";

const WHATSAPP_BASE = "https://wa.me/5217775001071?text=";

export default function HowWeWorkSection() {
  const { language } = useLanguage();
  const content = language === "es" ? alianzasContentEs : alianzasContentEn;
  const { howWeWork } = content;

  const whatsappUrl = WHATSAPP_BASE + encodeURIComponent(howWeWork.whatsappMessage);

  return (
    <section className="py-24 md:py-32 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--accent-wine)] mb-4">
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
              <div className="w-16 h-16 mx-auto mb-6 border-2 border-[var(--accent-wine)] rounded-full flex items-center justify-center">
                <span className="font-[var(--font-heading)] text-xl text-[var(--accent-wine)]">
                  {step.number}
                </span>
              </div>
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
            className="inline-block px-8 py-4 bg-[var(--accent-wine)] text-white text-sm tracking-widest uppercase hover:bg-[var(--foreground)] transition-all duration-300"
          >
            {language === "es" ? "Agendar llamada" : "Schedule a call"}
          </a>
        </div>
      </div>
    </section>
  );
}
