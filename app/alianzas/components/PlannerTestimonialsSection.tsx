"use client";

import { useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { alianzasContentEs, alianzasContentEn } from "../content";

export default function PlannerTestimonialsSection() {
  const { language } = useLanguage();
  const content = language === "es" ? alianzasContentEs : alianzasContentEn;
  const { testimonials } = content;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-[var(--foreground)] text-white">
      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--accent-blush)] mb-4">
            {testimonials.subtitle}
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
            {testimonials.title}
          </h2>
          <span className="inline-block px-4 py-2 bg-white/10 text-white/80 text-sm rounded-full">
            {testimonials.badge}
          </span>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.items.map((item, index) => (
            <div
              key={index}
              className={`p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 cursor-pointer ${
                activeIndex === index ? "bg-white/10" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="mb-6">
                <span className="text-[var(--accent-blush)] text-sm font-medium">
                  {item.highlight}
                </span>
              </div>
              <p className="text-white/80 italic leading-relaxed mb-6">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div>
                <p className="text-white font-medium">{item.name}</p>
                <p className="text-white/60 text-sm">{item.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
