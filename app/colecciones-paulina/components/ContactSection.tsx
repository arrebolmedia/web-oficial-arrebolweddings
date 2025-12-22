"use client";

import { pauliaContent } from "../content";

const WHATSAPP_BASE = "https://wa.me/5217775001071?text=";

export default function ContactSection() {
  const { contact } = pauliaContent;
  
  const whatsappUrl = WHATSAPP_BASE + encodeURIComponent(contact.whatsappMessage);

  return (
    <section className="py-24 md:py-32 bg-[var(--background)]">
      <div className="max-w-4xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--accent-wine)] mb-4">
            {contact.subtitle}
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl text-[var(--foreground)] leading-tight mb-6">
            {contact.title}
          </h2>
          <p className="text-lg text-[var(--foreground)]/70 leading-relaxed mb-8">
            {contact.description}
          </p>
        </div>

        {/* WhatsApp CTA */}
        <div className="bg-white border border-[var(--border-subtle)] p-10 text-center">
          <p className="text-[var(--foreground)]/70 mb-6">
            {contact.whatsappText}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 bg-[var(--accent-wine)] text-white text-sm tracking-widest uppercase hover:bg-[var(--accent-wine)]/90 transition-all duration-300"
          >
            {contact.whatsappButton}
          </a>
        </div>
      </div>
    </section>
  );
}
