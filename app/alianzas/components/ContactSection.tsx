"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { WHATSAPP_BASE } from "@/lib/config";
import {
  ALIANZAS_EMAIL,
  ALIANZAS_INSTAGRAM,
  getAlianzasContent,
  type AlianzaVariant,
} from "../content";

export default function ContactSection({ variant }: { variant: AlianzaVariant }) {
  const { language } = useLanguage();
  const { contact } = getAlianzasContent(variant, language);

  const whatsappUrl = WHATSAPP_BASE + encodeURIComponent(contact.whatsappMessage);
  const mailUrl = `mailto:${ALIANZAS_EMAIL}?subject=${encodeURIComponent(contact.emailSubject)}`;

  // Mismos botones que la página principal: contorno oscuro, sin esquinas redondeadas.
  const outline =
    "px-8 py-3 border border-[var(--foreground)] text-[var(--foreground)] text-sm tracking-widest uppercase hover:bg-[var(--foreground)] hover:text-white transition-all duration-300 text-center";

  return (
    <section id="contacto" className="py-24 md:py-32 bg-[var(--background)]">
      <div className="max-w-4xl mx-auto px-5 md:px-8 lg:px-12 text-center">
        <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl text-[var(--foreground)] leading-tight mb-6">
          {contact.title}
        </h2>
        <p className="text-[var(--foreground)]/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          {contact.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-3 border border-[var(--foreground)] bg-[var(--foreground)] text-white text-sm tracking-widest uppercase hover:bg-transparent hover:text-[var(--foreground)] transition-all duration-300 text-center"
          >
            {contact.whatsapp}
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
          <a href={mailUrl} className={outline}>
            {contact.email}
          </a>
          <a
            href={ALIANZAS_INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className={outline}
          >
            {contact.instagram}
          </a>
        </div>

        <p className="mt-8 text-sm text-[var(--foreground)]/50">
          {ALIANZAS_EMAIL} · @arrebolweddings
        </p>
      </div>
    </section>
  );
}
