"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/app/context/LanguageContext";

const Philosophy = () => {
  const { content } = useLanguage();
  const { philosophy } = content.home;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  const sliderImages = ["KyB-607.webp", "SyP-217.webp", "PyP-535.webp", "AyJ-447.webp"];

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const promises = sliderImages.map((src) => {
        return new Promise((resolve, reject) => {
          const img = document.createElement("img");
          img.src = `/images/gallery/${src}`;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(promises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    preloadImages();
  }, []);

  // Auto-advance slider every 4 seconds
  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % sliderImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [imagesLoaded, sliderImages.length]);

  return (
    <section className="relative bg-[var(--background)]">
      <div className="w-full">
        {/* Image and text container */}
        <div className="relative aspect-[16/5] w-full">
          {/* Background Image Slider */}
          <div className="absolute inset-0">
            {sliderImages.map((image, index) => (
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
                  alt="Philosophy background"
                  fill
                  className="object-cover"
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
            {/* Dark overlay for text contrast */}
            <div className="absolute inset-0 bg-black/40 z-10" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center px-8 sm:px-12 lg:px-16">
            <FadeIn>
              <div className="text-white space-y-3 text-center max-w-4xl mx-auto">
                <p className="text-base md:text-lg leading-snug uppercase">
                  {philosophy.line1}
                </p>
                <p className="text-base md:text-lg leading-snug uppercase">
                  {philosophy.line2}
                </p>
                <p className="text-base md:text-lg leading-snug uppercase">
                  {philosophy.line3}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
