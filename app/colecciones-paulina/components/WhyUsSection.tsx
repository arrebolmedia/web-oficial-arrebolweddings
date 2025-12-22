"use client";

import { pauliaContent } from "../content";

export default function WhyUsSection() {
  const { whyUs } = pauliaContent;

  return (
    <section className="py-24 md:py-32 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--accent-wine)] mb-4">
            {whyUs.subtitle}
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl text-[var(--foreground)] leading-tight">
            {whyUs.title}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {whyUs.reasons.map((reason, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-[var(--font-heading)] text-2xl text-[var(--foreground)]">
                {reason.title}
              </h3>
              <p className="text-[var(--foreground)]/70 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
