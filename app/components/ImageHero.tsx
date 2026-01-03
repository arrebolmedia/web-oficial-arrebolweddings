"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";

const ImageHero = () => {
  const { content } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [sliderImages, setSliderImages] = useState<string[]>([]);

  // Seleccionar imágenes TOP-: primera siempre TOP-SyP-324-hero (optimizada), las demás randomizadas
  useEffect(() => {
    const topImages = content.galeria.images.filter(img => img.startsWith('TOP-'));
    const firstImage = 'TOP-SyP-324-hero.webp';
    const regularFirstImage = 'TOP-SyP-324.webp';
    const otherImages = topImages.filter(img => img !== regularFirstImage).sort(() => Math.random() - 0.5);
    setSliderImages([firstImage, ...otherImages]);
  }, [content.galeria.images]);

  // Precargar solo la primera imagen
  useEffect(() => {
    if (sliderImages.length === 0) return;
    
    const firstImg = document.createElement('img');
    firstImg.onload = () => {
      setImagesLoaded(true);
      
      // Precargar las demás imágenes en segundo plano
      setTimeout(() => {
        sliderImages.slice(1).forEach((image) => {
          const img = document.createElement('img');
          img.src = `/images/gallery/${image}`;
        });
      }, 1000);
    };
    firstImg.src = `/images/gallery/${sliderImages[0]}`;
  }, [sliderImages]);

  // Auto-avanzar el slider cada 3 segundos
  useEffect(() => {
    if (!imagesLoaded || sliderImages.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % sliderImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [imagesLoaded, sliderImages.length]);

  const { hero } = content.home;

  return (
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
          {hero.taglinePart1}{" "}
          <span className="italic font-light text-[var(--foreground)]/60">
            {hero.taglinePart2}
          </span>{" "}
          {hero.taglinePart3}
        </p>
      </div>
    </section>
  );
};

export default ImageHero;
