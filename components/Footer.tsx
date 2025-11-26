"use client";

import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";

const Footer = () => {
  const { content, language } = useLanguage();
  const { footer } = content;
  
  return (
    <footer className="border-t border-[var(--border-subtle)]">
      {/* Navigation Menu */}
      <div className="py-12 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            <Link
              href={`/`}
              className="text-sm tracking-widest uppercase text-[var(--foreground)] hover:text-[var(--accent-wine)] transition-colors"
            >
              {content.common.navigation.home}
            </Link>
            <Link
              href={`/galeria`}
              className="text-sm tracking-widest uppercase text-[var(--foreground)] hover:text-[var(--accent-wine)] transition-colors"
            >
              {content.common.navigation.gallery}
            </Link>
            <Link
              href={`/el-proceso`}
              className="text-sm tracking-widest uppercase text-[var(--foreground)] hover:text-[var(--accent-wine)] transition-colors"
            >
              {content.common.navigation.process}
            </Link>
            <Link
              href={`/colecciones`}
              className="text-sm tracking-widest uppercase text-[var(--foreground)] hover:text-[var(--accent-wine)] transition-colors"
            >
              {content.common.navigation.collections}
            </Link>
            <Link
              href={`/contacto`}
              className="text-sm tracking-widest uppercase text-[var(--foreground)] hover:text-[var(--accent-wine)] transition-colors"
            >
              {content.common.navigation.contact}
            </Link>
          </nav>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-[var(--border-subtle)] py-8 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Brand */}
            <div className="text-center md:text-left">
              <p className="font-[var(--font-heading)] text-lg text-[var(--foreground)]">
                Arrebol Weddings
              </p>
              <p className="text-xs text-[var(--foreground)]/60 italic mt-1">
                {footer.tagline}
              </p>
            </div>

            {/* Contact */}
            <div className="text-center text-sm text-[var(--foreground)]/70">
              <a
                href={`mailto:${footer.email}`}
                className="hover:text-[var(--accent-wine)] transition-colors"
              >
                {footer.email}
              </a>
              <span className="mx-2">•</span>
              <a
                href="https://instagram.com/arrebolweddings"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent-wine)] transition-colors"
              >
                {footer.instagram}
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-xs text-[var(--foreground)]/60">
                {footer.copyright}
              </p>
              <Link 
                href="/politica-de-privacidad" 
                className="text-[10px] text-[var(--foreground)]/40 hover:text-[var(--accent-wine)] transition-colors mt-1 block"
              >
                {content.common.privacyPolicy.title}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
