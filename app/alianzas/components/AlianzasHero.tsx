"use client";

import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import { alianzasContentEs, alianzasContentEn } from "../content";

const WHATSAPP_BASE = "https://wa.me/5217775001071?text=";

export default function AlianzasHero() {
  const { language } = useLanguage();
  const content = language === "es" ? alianzasContentEs : alianzasContentEn;
  const { hero } = content;

  const whatsappUrl = WHATSAPP_BASE + encodeURIComponent(hero.whatsappMessage);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/gallery/TOP-SyP-324-hero.webp"
          alt="Arrebol Weddings - Alianzas con Wedding Planners"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="text-xs tracking-[0.25em] uppercase text-white/80 border border-white/30 px-4 py-2 rounded-full">
              {hero.badge}
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] mb-6 whitespace-pre-line">
            {hero.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed mb-10 max-w-xl">
            {hero.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-white text-[var(--foreground)] text-sm tracking-widest uppercase font-medium rounded-sm hover:bg-[var(--accent-wine)] hover:text-white transition-all duration-300 text-center"
            >
              {hero.ctaPrimary}
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
            <button
              onClick={() => scrollToSection("galeria")}
              className="px-8 py-4 border border-white/50 text-white text-sm tracking-widest uppercase hover:bg-white/10 transition-all duration-300 rounded-sm"
            >
              {hero.ctaSecondary}
            </button>
          </div>

          {/* Trust Badge */}
          <p className="text-sm text-white/70 flex items-center gap-2">
            ✓ {hero.trustBadge}
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={() => scrollToSection("about")}
          className="text-white/60 hover:text-white transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
