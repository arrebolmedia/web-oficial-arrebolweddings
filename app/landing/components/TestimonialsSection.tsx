"use client";

import { useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { landingContentEs, landingContentEn } from "../content";

export default function TestimonialsSection() {
  const { language } = useLanguage();
  const content = language === "es" ? landingContentEs : landingContentEn;
  const { testimonials } = content;

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--accent-wine)] mb-4">
            {testimonials.subtitle}
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl text-[var(--foreground)] leading-tight mb-6">
            {testimonials.title}
          </h2>
          <p className="text-sm text-[var(--foreground)]/60">
            {testimonials.badge}
          </p>
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto">
          {/* Main testimonial display */}
          <div className="bg-white p-8 md:p-12 rounded-sm shadow-sm border border-[var(--border-subtle)] mb-8">
            {/* Quote icon */}
            <div className="text-[var(--accent-blush)] text-6xl leading-none mb-6 font-serif">
              "
            </div>

            {/* Quote text */}
            <blockquote className="text-xl md:text-2xl text-[var(--foreground)] leading-relaxed mb-8 font-light">
              {testimonials.items[activeIndex].quote}
            </blockquote>

            {/* Attribution */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="font-[var(--font-heading)] text-xl text-[var(--foreground)]">
                  {testimonials.items[activeIndex].couple}
                </p>
                <p className="text-sm text-[var(--foreground)]/60">
                  {testimonials.items[activeIndex].location}
                </p>
              </div>

              {testimonials.items[activeIndex].highlight && (
                <span className="inline-block text-xs tracking-wider uppercase bg-[var(--accent-blush)]/20 text-[var(--accent-wine)] px-4 py-2 rounded-full">
                  {testimonials.items[activeIndex].highlight}
                </span>
              )}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3">
            {testimonials.items.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-[var(--accent-wine)] w-8"
                    : "bg-[var(--foreground)]/20 hover:bg-[var(--foreground)]/40"
                }`}
                aria-label={`${testimonials.viewTestimonial} ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
