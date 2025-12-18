"use client";

import { useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { alianzasContentEs, alianzasContentEn } from "../content";

export default function FAQSection() {
  const { language } = useLanguage();
  const content = language === "es" ? alianzasContentEs : alianzasContentEn;
  const { faq } = content;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 bg-[var(--background)]">
      <div className="max-w-4xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--accent-wine)] mb-4">
            {faq.subtitle}
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl text-[var(--foreground)] leading-tight">
            {faq.title}
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faq.items.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[var(--foreground)]/10 overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-[var(--foreground)]/5 transition-colors"
              >
                <span className="font-medium text-[var(--foreground)] pr-4">
                  {item.question}
                </span>
                <span
                  className={`text-[var(--accent-wine)] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 text-[var(--foreground)]/70 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
