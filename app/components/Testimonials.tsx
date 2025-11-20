"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import { content } from "@/lib/content";

const Testimonials = () => {
  const { testimonials } = content.home;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader title={testimonials.title} />
        </FadeIn>

        <div className="mt-16 columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.items.map((testimonial, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div 
                className="break-inside-avoid bg-[var(--background)] p-6 border border-[var(--border-subtle)] cursor-pointer transition-all duration-300 hover:shadow-lg"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <p className={`text-[var(--foreground)]/80 italic leading-relaxed transition-all duration-300 ${
                  expandedIndex === index ? '' : 'line-clamp-4'
                }`}>
                  "{testimonial.quote}"
                </p>
                <p className="font-medium text-[var(--accent-wine)] mt-4">
                  — {testimonial.author}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
