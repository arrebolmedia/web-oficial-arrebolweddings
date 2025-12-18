"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { alianzasContentEs, alianzasContentEn } from "../content";

export default function AlianzasAboutSection() {
  const { language } = useLanguage();
  const content = language === "es" ? alianzasContentEs : alianzasContentEn;
  const { about } = content;

  return (
    <section id="about" className="py-24 md:py-32 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left Column - Main Content */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--accent-wine)] mb-4">
              {about.subtitle}
            </p>
            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl text-[var(--foreground)] leading-tight mb-8">
              {about.title}
            </h2>

            <div className="space-y-6 text-[var(--foreground)]/70 leading-relaxed">
              {about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Quote */}
            <div className="mt-10 pt-8 border-t border-[var(--foreground)]/10">
              <p className="font-[var(--font-heading)] text-xl md:text-2xl text-[var(--foreground)] italic">
                &ldquo;{about.quote}&rdquo;
              </p>
              <p className="mt-3 text-sm text-[var(--foreground)]/60">
                {about.signature}
              </p>
            </div>
          </div>

          {/* Right Column - Values */}
          <div className="space-y-8">
            {about.values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 border-l-2 border-[var(--accent-wine)]"
              >
                <h3 className="font-[var(--font-heading)] text-lg text-[var(--foreground)] mb-2">
                  {value.title}
                </h3>
                <p className="text-[var(--foreground)]/70 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
