"use client";

import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import { landingContentEs, landingContentEn } from "../content";

const storyImages = [
  "/images/gallery/KyB-285.webp",
  "/images/gallery/CyD-65.webp",
  "/images/gallery/SYO-654.webp",
];

const galleryUrls = [
  "https://arrebol.pic-time.com/-karymeybrian/gallery",
  "https://arrebol.pic-time.com/-carlaydiego/gallery",
  "https://arrebol.pic-time.com/-bodasofiayoscar/gallery",
];

const WHATSAPP_BASE = "https://wa.me/5217775001071?text=";

export default function RealStoriesSection() {
  const { language } = useLanguage();
  const content = language === "es" ? landingContentEs : landingContentEn;
  const { stories } = content;

  const whatsappUrl = WHATSAPP_BASE + encodeURIComponent(
    language === "es" 
      ? "Hola! Vi su landing page y me gustaría platicar sobre mi boda."
      : "Hi! I saw your landing page and would like to talk about my wedding."
  );

  return (
    <section
      id="historias"
      className="py-24 md:py-32 bg-[var(--foreground)]/[0.02]"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--accent-wine)] mb-4">
            {stories.subtitle}
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl text-[var(--foreground)] leading-tight mb-6">
            {stories.title}
          </h2>
          <p className="text-lg text-[var(--foreground)]/70 max-w-2xl mx-auto">
            {stories.description}
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.items.map((story, index) => (
            <article
              key={index}
              className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={storyImages[index]}
                  alt={`${language === "es" ? "Boda de" : "Wedding of"} ${story.couple}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Highlight badge */}
                {story.highlight && (
                  <span className="absolute top-4 left-4 text-xs tracking-wider uppercase bg-white/90 text-[var(--foreground)] px-3 py-1 rounded-full">
                    {story.highlight}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-[var(--font-heading)] text-2xl text-[var(--foreground)] mb-1">
                  {story.couple}
                </h3>
                <p className="text-sm text-[var(--accent-wine)] mb-4">
                  {story.location}
                </p>
                <p className="text-[var(--foreground)]/70 text-sm leading-relaxed mb-4">
                  {story.description}
                </p>
                <a
                  href={galleryUrls[index]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--foreground)] font-medium tracking-wide uppercase hover:text-[var(--accent-wine)] transition-colors inline-flex items-center gap-2"
                >
                  {stories.viewStory}
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-[var(--foreground)]/60 text-sm mb-4">
            {language === "es" ? "¿Te imaginas tu historia aquí?" : "Can you imagine your story here?"}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-[var(--foreground)] text-[var(--foreground)] text-sm tracking-widest uppercase hover:bg-[var(--foreground)] hover:text-white transition-colors duration-300 rounded-sm"
          >
            {language === "es" ? "Platiquemos sobre tu boda" : "Let's talk about your wedding"}
          </a>
        </div>
      </div>
    </section>
  );
}
