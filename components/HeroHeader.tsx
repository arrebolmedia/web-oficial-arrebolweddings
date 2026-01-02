"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/app/context/LanguageContext";
import { useLoading } from "@/app/context/LoadingContext";

const HeroHeader = () => {
  const { content, language, toggleLanguage } = useLanguage();
  const { isLoading } = useLoading();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const [sliderImages, setSliderImages] = useState<string[]>([]);
  const pathname = usePathname();

  // Scroll detection logic
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, []);

  // Seleccionar imágenes TOP-: primera siempre TOP-SyP-324-hero (optimizada), las demás randomizadas
  useEffect(() => {
    const topImages = content.galeria.images.filter(img => img.startsWith('TOP-'));
    const firstImage = 'TOP-SyP-324-hero.webp';
    const regularFirstImage = 'TOP-SyP-324.webp';
    const otherImages = topImages.filter(img => img !== regularFirstImage).sort(() => Math.random() - 0.5);
    setSliderImages([firstImage, ...otherImages]);
  }, []);

  // Precargar solo la primera imagen para LCP rápido
  useEffect(() => {
    if (sliderImages.length === 0) return;
    
    // Solo precargar la primera imagen
    const firstImg = document.createElement('img');
    firstImg.onload = () => {
      setImagesLoaded(true);
      
      // Precargar las demás imágenes en segundo plano después
      setTimeout(() => {
        sliderImages.slice(1).forEach((image) => {
          const img = document.createElement('img');
          img.src = `/images/gallery/${image}`;
        });
      }, 1000);
    };
    firstImg.src = `/images/gallery/${sliderImages[0]}`;
  }, [sliderImages]);

  // Auto-avanzar el slider cada 4 segundos (solo cuando las imágenes estén cargadas)
  useEffect(() => {
    if (!imagesLoaded || sliderImages.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % sliderImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [imagesLoaded, sliderImages.length]);

  const { setLanguage } = useLanguage();
  
  const links = [
    { href: `/`, label: content.common.navigation.home },
    { href: `/galeria`, label: content.common.navigation.gallery },
    { href: `/el-proceso`, label: content.common.navigation.process },
    { href: `/colecciones-2026`, label: content.common.navigation.collections },
    { href: `/blog`, label: content.common.navigation.blog },
    { href: `/contacto`, label: content.common.navigation.contact },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const { hero } = content.home;
  const isHomePage = pathname === "/";
  const isBlogPage = pathname.startsWith("/blog");
  const shouldUseDarkNav = isHomePage || isBlogPage;
  
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Logo centrado arriba - Solo en páginas que NO son home */}
      {!isHomePage && (
        <div className={`fixed top-0 left-0 right-0 z-40 flex justify-center items-center py-6 transition-opacity duration-500 ${isVisible && !isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <Link 
            href="/" 
            className={`text-xl md:text-2xl transition-all duration-300 hover:opacity-70 ${shouldUseDarkNav || hasScrolled ? 'text-[var(--foreground)]' : 'text-white'}`}
            style={{ fontFamily: 'benton-modern-display-conden, serif', fontWeight: 300 }}
          >
            ARREBOL WEDDINGS
          </Link>
        </div>
      )}

      {/* Language Switcher - Fixed Top Left */}
      <div className={`fixed top-8 left-8 z-50 text-sm tracking-widest uppercase transition-all duration-500 ${isVisible && !isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'} ${shouldUseDarkNav || hasScrolled ? 'text-[var(--foreground)]' : 'text-white'}`}>
        <button 
          onClick={() => setLanguage("es")}
          className={language === "es" ? "font-bold" : "font-light hover:opacity-70"}
        >
          ES
        </button>
        <span className="mx-2">|</span>
        <button 
          onClick={() => setLanguage("en")}
          className={language === "en" ? "font-bold" : "font-light hover:opacity-70"}
        >
          EN
        </button>
      </div>

      {/* Hamburger Menu Button - Fixed */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-8 right-8 z-50 text-sm tracking-widest uppercase hover:opacity-70 transition-all duration-500 ${isVisible && !isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'} ${shouldUseDarkNav || hasScrolled ? 'text-[var(--foreground)]' : 'text-white'}`}
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
                  fetchPriority={index === 0 ? "high" : "auto"}
                  sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
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
