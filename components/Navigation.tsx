"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/galeria", label: "Galería" },
    { href: "/el-proceso", label: "El Proceso" },
    { href: "/colecciones", label: "Colecciones" },
    { href: "/contacto", label: "Contacto" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/95 backdrop-blur-sm border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo centrado arriba */}
        <div className="flex justify-center py-6 border-b border-[var(--border-subtle)]">
          <Link 
            href="/" 
            className="font-[var(--font-heading)] text-3xl md:text-4xl text-[var(--foreground)] hover:text-[var(--accent-wine)] transition-colors"
          >
            Arrebol Weddings
          </Link>
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

        {/* Mobile: Logo y botón en línea */}
        <div className="md:hidden flex justify-between items-center py-4">
          <div className="flex-1"></div>
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
