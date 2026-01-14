"use client";

import { useEffect, useState, useRef } from "react";
import { useLoading } from "@/app/context/LoadingContext";
import { useLanguage } from "@/app/context/LanguageContext";

export default function EmotionHero() {
  const { setIsLoading } = useLoading();
  const { content } = useLanguage();
  const [localLoading, setLocalLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Inicializar video
  useEffect(() => {
    setIsLoading(true);
    setLocalLoading(true);

    const video = videoRef.current;
    const startTime = Date.now();

    if (video) {
      const handleCanPlay = () => {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, 1000 - elapsedTime);
        
        setTimeout(() => {
          video.play().catch(e => console.log("Play error:", e));
          setIsLoading(false);
          setLocalLoading(false);
        }, remainingTime);
      };
      
      video.addEventListener('canplay', handleCanPlay);
      
      return () => {
        video.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, [setIsLoading]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Loader con fadeout */}
      <div 
        className={`absolute inset-0 bg-[#FAF8F5] z-50 flex items-center justify-center transition-opacity duration-700 ${
          localLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <h1 
          className="text-xl md:text-2xl text-[#2B2B2B]"
          style={{ fontFamily: 'benton-modern-display-conden, serif', fontWeight: 300 }}
        >
          ARREBOL WEDDINGS
        </h1>
      </div>
        
      {/* Video Hero en loop */}
      <video
        ref={videoRef}
        src="/videos/emotionhero/hero-video.mp4"
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover grayscale z-0"
      />

      {/* Overlay oscuro para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Contenido centrado */}
      <div className="relative z-20 flex h-full items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-wide text-white md:text-4xl lg:text-3xl">
            {content.home.hero.emotion}
          </h1>
        </div>
      </div>
    </section>
  );
}

