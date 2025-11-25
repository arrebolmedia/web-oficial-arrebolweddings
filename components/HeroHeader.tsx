"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/app/context/LanguageContext";

const HeroHeader = () => {
  const { content, language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const [sliderImages, setSliderImages] = useState<string[]>([]);
  const pathname = usePathname();

  // Seleccionar imágenes TOP-: primera siempre TOP-SyP-324, las demás randomizadas
  useEffect(() => {
    const topImages = content.galeria.images.filter(img => img.startsWith('TOP-'));
    const firstImage = 'TOP-SyP-324.webp';
    const otherImages = topImages.filter(img => img !== firstImage).sort(() => Math.random() - 0.5);
    setSliderImages([firstImage, ...otherImages]);
  }, []);

  // Precargar imágenes
  useEffect(() => {
    if (sliderImages.length === 0) return;
    
    let count = 0;
    sliderImages.forEach((image) => {
      const img = document.createElement('img');
      img.onload = () => {
        count++;
        setLoadedCount(count);
        if (count === sliderImages.length) {
          setImagesLoaded(true);
        }
      };
      img.src = `/images/gallery/${image}`;
    });
  }, [sliderImages]);

  // Auto-avanzar el slider cada 4 segundos (solo cuando las imágenes estén cargadas)
  useEffect(() => {
    if (!imagesLoaded || sliderImages.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % sliderImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [imagesLoaded, sliderImages.length]);

  const basePath = language === "en" ? "/en" : "";
  
  const links = [
    { href: `${basePath}/`, label: content.common.navigation.home },
    { href: `${basePath}/galeria`, label: content.common.navigation.gallery },
    { href: `${basePath}/el-proceso`, label: content.common.navigation.process },
    { href: `${basePath}/colecciones`, label: content.common.navigation.collections },
    { href: `${basePath}/contacto`, label: content.common.navigation.contact },
  ];

  const isActive = (href: string) => {
    if (href === "/" || href === "/en/") return pathname === "/" || pathname === "/en" || pathname === "/en/";
    return pathname.startsWith(href);
  };

  const { hero } = content.home;
  const isHomePage = pathname === "/";

  return (
    <>
      {/* Language Switcher - Fixed Left */}
      <div className="fixed top-8 left-8 z-50 px-4 py-2 text-sm tracking-widest uppercase text-[var(--foreground)]">
        <a 
          href="/" 
          className={language === "es" ? "font-bold" : "font-light hover:text-[var(--accent-wine)]"}
        >
          ES
        </a>
        <span className="mx-2">|</span>
        <a 
          href="/en/" 
          className={language === "en" ? "font-bold" : "font-light hover:text-[var(--accent-wine)]"}
        >
          ENG
        </a>
      </div>

      {/* Hamburger Menu Button - Fixed */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-8 right-8 z-50 px-4 py-2 text-sm tracking-widest uppercase text-[var(--foreground)] hover:text-[var(--accent-wine)] transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? content.common.close : content.common.menu}
      </button>

      {/* Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[var(--background)] transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-center min-h-screen">
          <nav className="text-center space-y-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block text-xl md:text-2xl font-[var(--font-heading)] transition-colors tracking-wide ${
                  isActive(link.href)
                    ? "text-[var(--accent-wine)]"
                    : "text-[var(--foreground)] hover:text-[var(--accent-terracotta)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Hero Header Section - Only on homepage */}
      {isHomePage && (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-[var(--background)]">
        {/* Main Title - Positioned absolutely to move it up independently */}
        <h1 className="absolute top-[16vh] font-[var(--font-heading)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center text-[var(--foreground)] tracking-tight leading-none z-10" style={{ fontWeight: 300 }}>
          ARREBOL WEDDINGS
        </h1>

        {/* Featured Image Container with Slider */}
        <div className="relative w-full max-w-[280px] md:max-w-[320px] lg:max-w-[360px] aspect-[3/4] mb-10 overflow-hidden bg-gray-200">
          {sliderImages.length === 0 || !imagesLoaded ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-sm text-gray-400">{content.common.loading}</p>
            </div>
          ) : (
            sliderImages.map((image, index) => (
              <div
                key={image}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  pointerEvents: index === currentImageIndex ? "auto" : "none",
                }}
              >
                <Image
                  src={`/images/gallery/${image}`}
                  alt="Arrebol Weddings"
                  fill
                  className="object-cover"
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            ))
          )}
        </div>

        {/* Tagline */}
        <div className="text-center">
          <p className="font-[var(--font-heading)] text-sm md:text-base text-[var(--foreground)] tracking-wider">
            {content.home.hero.taglinePart1}{" "}
            <span className="italic font-light text-[var(--foreground)]/60">
              {content.home.hero.taglinePart2}
            </span>{" "}
            {content.home.hero.taglinePart3}
          </p>
        </div>
      </section>
      )}
    </>
  );
};

export default HeroHeader;
