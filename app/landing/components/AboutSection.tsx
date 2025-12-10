"use client";

import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import { landingContentEs, landingContentEn } from "../content";

export default function AboutSection() {
  const { language } = useLanguage();
  const content = language === "es" ? landingContentEs : landingContentEn;
  const { about } = content;

  return (
    <section className="py-24 md:py-32 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0">
            <Image
              src="/images/gallery/TOP-SyD-162.webp"
              alt="Arrebol Weddings - Anthony y Brenda"
              fill
              className="object-cover"
            />
          </div>

          {/* Text Column */}
          <div className="space-y-8">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[var(--accent-wine)] mb-4">
                {about.subtitle}
              </p>
              <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl text-[var(--foreground)] mb-6">
                {about.title}
              </h2>
            </div>

            <div className="space-y-4 text-[var(--foreground)]/80 leading-relaxed">
              {about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-4">
              <p className="font-[var(--font-heading)] text-xl text-[var(--accent-wine)] italic">
                {about.quote}
              </p>
              <p className="text-sm text-[var(--foreground)]/60 mt-2">
                {about.signature}
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {about.values.map((value, index) => (
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
