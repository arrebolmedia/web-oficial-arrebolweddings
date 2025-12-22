"use client";

import { pauliaContent } from "../content";

export default function IncludedSection() {
  const { includedInBoth, extraInVideo } = pauliaContent;

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Included in Both */}
          <div className="bg-[var(--background)] border border-[var(--border-subtle)] p-8 md:p-10">
            <h3 className="font-[var(--font-heading)] text-2xl md:text-3xl text-[var(--foreground)] mb-8 text-center">
              {includedInBoth.title}
            </h3>
            <div className="space-y-3">
              {includedInBoth.items.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-[var(--accent-wine)] mt-1">✓</span>
                  <span className="text-sm text-[var(--foreground)]/80">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Extra in Video Collection */}
          <div className="bg-[var(--accent-wine)] text-white p-8 md:p-10">
            <h3 className="font-[var(--font-heading)] text-2xl md:text-3xl mb-8 text-center">
              {extraInVideo.title}
            </h3>
            <div className="space-y-3">
              {extraInVideo.items.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="mt-1">✓</span>
                  <span className="text-sm text-white/90">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-sm text-white/80 text-center italic">
                Agrega $24,000 MXN a la Colección Solo Foto
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
