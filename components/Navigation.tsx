"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/app/context/LanguageContext";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const { language, setLanguage, content } = useLanguage();
  const isHome = pathname === "/";

  console.log('Navigation - pathname:', pathname, 'isHome:', isHome);

  const { navigation } = content.common;

  const links = [
    { href: "/", label: navigation.home },
    { href: "/galeria", label: navigation.gallery },
    { href: "/el-proceso", label: navigation.process },
    { href: "/colecciones", label: navigation.collections },
    { href: "/blog", label: navigation.blog },
    { href: "/contacto", label: navigation.contact },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        // Ocultar si bajamos y pasamos de 100px
        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          setIsVisible(false);
        } else {
          // Mostrar si subimos
          setIsVisible(true);
        }
        
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/95 backdrop-blur-sm border-b border-[var(--border-subtle)] transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fila superior: Logo centrado (solo si no es home) + Selector idioma derecha */}
        <div className={`relative flex justify-center items-center border-b border-[var(--border-subtle)] ${isHome ? 'py-4' : 'py-6'}`}>
          {/* DEBUG: Mostrar siempre para verificar */}
          <Link 
            href="/" 
            className="font-[var(--font-heading)] text-3xl md:text-4xl text-[var(--foreground)] hover:text-[var(--accent-wine)] transition-colors"
            style={{ fontWeight: 300 }}
          >
            ARREBOL WEDDINGS {isHome ? '(HOME)' : '(NOT HOME)'}
          </Link>
          
          {/* Selector de idioma - siempre en la derecha */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <button
              onClick={() => setLanguage('es')}
              className={`text-sm font-medium transition-colors ${
                language === 'es'
                  ? 'text-[var(--accent-wine)]'
                  : 'text-[var(--foreground)]/60 hover:text-[var(--foreground)]'
              }`}
            >
              ES
            </button>
            <span className="text-[var(--foreground)]/40">|</span>
            <button
              onClick={() => setLanguage('en')}
              className={`text-sm font-medium transition-colors ${
                language === 'en'
                  ? 'text-[var(--accent-wine)]'
                  : 'text-[var(--foreground)]/60 hover:text-[var(--foreground)]'
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Navegación horizontal centrada abajo */}
        <div className="hidden md:flex justify-center items-center h-16">
          <div className="flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-[var(--accent-wine)]"
                    : "text-[var(--foreground)] hover:text-[var(--accent-terracotta)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile: Selector idioma y botón hamburguesa */}
        <div className="md:hidden flex justify-between items-center py-4">
          {/* Selector de idioma en mobile */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLanguage('es')}
              className={`text-sm font-medium transition-colors ${
                language === 'es'
                  ? 'text-[var(--accent-wine)]'
                  : 'text-[var(--foreground)]/60 hover:text-[var(--foreground)]'
              }`}
            >
              ES
            </button>
            <span className="text-[var(--foreground)]/40">|</span>
            <button
              onClick={() => setLanguage('en')}
              className={`text-sm font-medium transition-colors ${
                language === 'en'
                  ? 'text-[var(--accent-wine)]'
                  : 'text-[var(--foreground)]/60 hover:text-[var(--foreground)]'
              }`}
            >
              EN
            </button>
          </div>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-[var(--foreground)] hover:text-[var(--accent-wine)] transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[var(--background)] border-t border-[var(--border-subtle)]">
          <div className="px-4 pt-2 pb-4 space-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-base font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-[var(--accent-wine)]"
                    : "text-[var(--foreground)] hover:text-[var(--accent-terracotta)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
