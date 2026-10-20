"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { WHATSAPP_BASE } from "@/lib/config";
import { getAlianzasContent, type AlianzaVariant } from "../content";

export default function OffersSection({ variant }: { variant: AlianzaVariant }) {
  const { language } = useLanguage();
  const { offers } = getAlianzasContent(variant, language);

  const whatsappUrl = (message: string) => WHATSAPP_BASE + encodeURIComponent(message);

  return (
    <section id="ofrecemos" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--accent-wine)] mb-4">
            {offers.subtitle}
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl text-[var(--foreground)] leading-tight mb-6">
            {offers.title}
          </h2>
          <p className="text-[var(--foreground)]/70 leading-relaxed text-lg">
            {offers.description}
          </p>
        </div>

        {/* Offers */}
        <div className="grid md:grid-cols-3 gap-8">
          {offers.items.map((offer, index) => (
            <div
              key={index}
              className="flex flex-col p-8 bg-[var(--background)] border-l-4 border-[var(--accent-wine)]"
            >
              <span className="font-[var(--font-heading)] text-sm text-[var(--accent-wine)] mb-4">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-[var(--font-heading)] text-2xl text-[var(--foreground)] mb-4">
                {offer.title}
              </h3>
              <p className="text-[var(--foreground)]/70 text-sm leading-relaxed mb-8">
                {offer.description}
              </p>
              <a
                href={whatsappUrl(offer.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-auto self-start px-6 py-3 border border-[var(--accent-wine)] text-[var(--accent-wine)] text-xs tracking-widest uppercase hover:bg-[var(--accent-wine)] hover:text-white transition-all duration-300"
              >
                {offers.cardCta}
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          ))}
        </div>

        {/* Something else */}
        <p className="text-center mt-12 text-[var(--foreground)]/70">
          {offers.otherText}{" "}
          <a
            href={whatsappUrl(offers.otherWhatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent-wine)] underline underline-offset-4 hover:text-[var(--foreground)] transition-colors"
          >
            {offers.otherCta}
          </a>
        </p>
      </div>
    </section>
  );
}
