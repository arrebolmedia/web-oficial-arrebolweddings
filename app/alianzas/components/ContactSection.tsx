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

  const secondary =
    "px-8 py-4 border border-white/50 text-white text-sm tracking-widest uppercase hover:bg-white/10 transition-all duration-300 rounded-sm text-center";

  return (
    <section id="contacto" className="py-24 md:py-32 bg-[var(--accent-wine)] text-white">
      <div className="max-w-4xl mx-auto px-5 md:px-8 lg:px-12 text-center">
        <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
          {contact.title}
        </h2>
        <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          {contact.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-white text-[var(--accent-wine)] text-sm tracking-widest uppercase font-medium rounded-sm hover:bg-[var(--foreground)] hover:text-white transition-all duration-300 text-center"
          >
            {contact.whatsapp}
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
          <a href={mailUrl} className={secondary}>
            {contact.email}
          </a>
          <a
            href={ALIANZAS_INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className={secondary}
          >
            {contact.instagram}
          </a>
        </div>

        <p className="mt-8 text-sm text-white/70">
          {ALIANZAS_EMAIL} · @arrebolweddings
        </p>
      </div>
    </section>
  );
}
