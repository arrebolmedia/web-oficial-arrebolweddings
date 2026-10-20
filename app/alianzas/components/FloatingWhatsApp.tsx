"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { WHATSAPP_BASE } from "@/lib/config";
import { getAlianzasContent, type AlianzaVariant } from "../content";

// Botón fijo para escribir por WhatsApp desde cualquier punto de la landing.
export default function FloatingWhatsApp({ variant }: { variant: AlianzaVariant }) {
  const { language } = useLanguage();
  const { contact } = getAlianzasContent(variant, language);

  return (
    <a
      href={WHATSAPP_BASE + encodeURIComponent(contact.whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={contact.floatingLabel}
      className="fixed bottom-5 right-5 z-40 px-5 py-3 bg-[var(--accent-wine)] border border-white/60 text-white text-xs tracking-widest uppercase rounded-full shadow-lg hover:bg-[var(--foreground)] transition-colors duration-300"
    >
      {contact.whatsapp}
    </a>
  );
}
