"use client";

import { useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { landingContentEs, landingContentEn } from "../content";

const WHATSAPP_BASE = "https://wa.me/5217775001071?text=";

export default function PackagesSection() {
  const { language } = useLanguage();
  const content = language === "es" ? landingContentEs : landingContentEn;
  const { packages } = content;

  const [showComparison, setShowComparison] = useState(false);

  const whatsappUrl = WHATSAPP_BASE + encodeURIComponent(packages.whatsappMessage);

  return (
    <section className="py-24 md:py-32 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--accent-wine)] mb-4">
            {packages.subtitle}
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl text-[var(--foreground)] leading-tight mb-6">
            {packages.title}
          </h2>
          <p className="text-lg text-[var(--foreground)]/70 max-w-3xl mx-auto">
            {packages.intro}
          </p>
        </div>

        {/* Collections Grid - Same style as /colecciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {packages.collections.map((collection, index) => (
            <div
              key={index}
              className="bg-white border border-[var(--border-subtle)] p-10 h-full flex flex-col"
            >
              {/* Header */}
              <div className="mb-6">
                <h3 className="font-[var(--font-heading)] text-3xl text-[var(--foreground)] mb-4">
                  {collection.name}
                </h3>
              </div>

              {/* Description */}
              <p className="text-[var(--foreground)]/60 leading-relaxed mb-8 italic text-sm">
                {collection.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-8 flex-grow text-sm text-[var(--foreground)]/70">
                {collection.features.map((feature, fIndex) => (
                  <p key={fIndex}>{feature}</p>
                ))}
              </div>

              {/* Price at bottom */}
              <div className="pt-6 border-t border-[var(--border-subtle)] text-center">
                <p className="text-2xl font-light text-[var(--foreground)]">
                  {collection.price.split(" ")[0]}{" "}
                  <span className="text-sm text-[var(--foreground)]/50 uppercase tracking-wider">
                    {collection.price.split(" ")[1]}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Comparison */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="text-sm text-[var(--accent-wine)] hover:text-[var(--foreground)] transition-colors underline underline-offset-4"
          >
            {showComparison ? packages.hideComparison : packages.showComparison}
          </button>
        </div>

        {/* Comparison Table */}
        {showComparison && (
          <div className="overflow-x-auto mb-12">
            <h3 className="font-[var(--font-heading)] text-3xl text-[var(--foreground)] text-center mb-8 uppercase">
              {packages.comparisonTitle}
            </h3>
            <table className="w-full bg-white border border-[var(--border-subtle)]">
              <thead>
                <tr className="border-b border-[var(--border-subtle)]">
                  <th className="p-4 text-left font-[var(--font-heading)] text-lg text-[var(--foreground)] bg-[var(--background)]">
                    {packages.features}
                  </th>
                  {packages.collections.map((collection, index) => (
                    <th
                      key={index}
                      className="p-4 text-center font-[var(--font-heading)] text-lg text-[var(--foreground)] bg-[var(--background)] min-w-[150px]"
                    >
                      {collection.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {packages.comparison.rows.map((row, index) => (
                  <tr key={index} className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{row.label}</td>
                    {row.values.map((value, vIndex) => (
                      <td key={vIndex} className="p-4 text-center text-[var(--foreground)]">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
                {/* Price row */}
                <tr className="bg-[var(--background)]">
                  <td className="p-4 font-[var(--font-heading)] text-lg text-[var(--foreground)]">
                    {packages.price}
                  </td>
                  {packages.collections.map((collection, index) => (
                    <td key={index} className="p-4 text-center">
                      <div className="text-2xl font-light text-[var(--foreground)]">
                        {collection.price.split(" ")[0]}
                      </div>
                      <div className="text-xs text-[var(--foreground)]/60 uppercase">
                        {collection.price.split(" ")[1]}
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Custom Note & CTA */}
        <div className="text-center">
          <p className="text-[var(--foreground)]/60 text-sm mb-6 max-w-2xl mx-auto">
            {packages.customNote}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-[var(--foreground)] text-[var(--foreground)] text-sm tracking-widest uppercase hover:bg-[var(--foreground)] hover:text-white transition-all duration-300"
          >
            {packages.requestQuote}
          </a>
        </div>
      </div>
    </section>
  );
}
