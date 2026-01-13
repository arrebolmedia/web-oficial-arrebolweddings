"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "./context/LanguageContext";

export default function NotFound() {
  const { language } = useLanguage();

  const t = {
    es: {
      title: "404",
      subtitle: "Página no encontrada",
      message: "Lo sentimos, la página que buscas no existe o ha sido movida.",
      backHome: "Volver al inicio",
      viewCollections: "Ver colecciones"
    },
    en: {
      title: "404",
      subtitle: "Page not found",
      message: "Sorry, the page you're looking for doesn't exist or has been moved.",
      backHome: "Back to home",
      viewCollections: "View collections"
    }
  };

  const translations = t[language as keyof typeof t];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)] px-4">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn>
          <h1 className="font-[var(--font-heading)] text-9xl md:text-[12rem] text-[var(--accent)] mb-4">
            {translations.title}
          </h1>
        </FadeIn>
        
        <FadeIn delay={100}>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl text-[var(--foreground)] mb-6 uppercase">
            {translations.subtitle}
          </h2>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="text-lg text-[var(--foreground)]/70 mb-12 max-w-md mx-auto">
            {translations.message}
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="inline-block bg-[var(--foreground)] text-white px-8 py-3 hover:bg-[var(--foreground)]/80 transition-colors uppercase tracking-wider text-sm font-semibold"
            >
              {translations.backHome}
            </Link>
            <Link
              href="/colecciones"
              className="inline-block border border-[var(--foreground)] text-[var(--foreground)] px-8 py-3 hover:bg-[var(--foreground)] hover:text-white transition-colors uppercase tracking-wider text-sm font-semibold"
            >
              {translations.viewCollections}
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
