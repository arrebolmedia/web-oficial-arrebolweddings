"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { landingContentEs, landingContentEn } from "../content";

const WHATSAPP_BASE = "https://wa.me/5217775001071?text=";

export default function ProcessSection() {
  const { language } = useLanguage();
  const content = language === "es" ? landingContentEs : landingContentEn;
  const { process } = content;

  const whatsappUrl = WHATSAPP_BASE + encodeURIComponent(process.whatsappMessage);

  return (
    <section className="py-24 md:py-32 bg-[var(--foreground)]/[0.03]">
      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--accent-wine)] mb-4">
            {process.subtitle}
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl text-[var(--foreground)] leading-tight mb-6">
            {process.title}
          </h2>
          <p className="text-lg text-[var(--foreground)]/70 max-w-2xl mx-auto">
            {process.description}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {process.steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Number circle */}
                <div className="relative z-10 w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-[var(--background)] border-2 border-[var(--accent-wine)] rounded-full">
                  <span className="font-[var(--font-heading)] text-xl text-[var(--accent-wine)]">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="bg-white p-6 rounded-sm shadow-sm">
                  <h3 className="font-[var(--font-heading)] text-2xl text-[var(--foreground)] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[var(--foreground)]/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-[var(--foreground)]/60 mb-4">
            {process.readyToStart}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border-2 border-[var(--foreground)] text-[var(--foreground)] text-sm tracking-widest uppercase hover:bg-[var(--foreground)] hover:text-white transition-all duration-300 rounded-sm"
          >
            {process.scheduleCall}
          </a>
        </div>
      </div>
    </section>
  );
}
