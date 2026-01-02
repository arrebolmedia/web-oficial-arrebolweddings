"use client";

import { useEffect, useState, useRef } from "react";

const allVideos = [
  "/videos/clip00086729.mp4",
  "/videos/clip00088550.mp4",
  "/videos/clip00088938.mp4",
  "/videos/clip2_00086400.mp4",
  "/videos/clip2_00086546.mp4",
  "/videos/clip2_00086810.mp4",
  "/videos/clip2_00086973.mp4",
  "/videos/clip2_00087810.mp4",
  "/videos/clip3_00086765.mp4",
  "/videos/clip3_00088702.mp4",
];

// Función para obtener la serie del video
const getVideoSeries = (video: string) => {
  const filename = video.split('/').pop() || '';
  // Extraer el prefijo antes del primer '_' o números
  const match = filename.match(/^([a-zA-Z]+\d*)/);
  return match ? match[1] : filename;
};

// Función para barajar evitando consecutivos de la misma serie
const shuffleArray = (array: string[]) => {
  let shuffled = [...array].sort(() => Math.random() - 0.5);
  
  // Intentar reorganizar para evitar series consecutivas
  for (let attempt = 0; attempt < 10; attempt++) {
    let hasConsecutive = false;
    
    for (let i = 0; i < shuffled.length - 1; i++) {
      const currentSeries = getVideoSeries(shuffled[i]);
      const nextSeries = getVideoSeries(shuffled[i + 1]);
      
      if (currentSeries === nextSeries) {
        hasConsecutive = true;
        // Intentar intercambiar con un video más adelante de diferente serie
        for (let j = i + 2; j < shuffled.length; j++) {
          const targetSeries = getVideoSeries(shuffled[j]);
          if (targetSeries !== currentSeries && 
              (i === 0 || targetSeries !== getVideoSeries(shuffled[i - 1]))) {
            [shuffled[i + 1], shuffled[j]] = [shuffled[j], shuffled[i + 1]];
            break;
          }
        }
      }
    }
    
    if (!hasConsecutive) break;
    // Si todavía hay consecutivos, intentar otro shuffle
    if (attempt < 9) shuffled = [...array].sort(() => Math.random() - 0.5);
  }
  
  return shuffled;
};

export default function EmotionHero() {
  const [videos, setVideos] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Barajar videos solo en el cliente al montar
  useEffect(() => {
    const shuffled = shuffleArray(allVideos);
    console.log("Videos shuffled:", shuffled.map(v => v.split('/').pop())); // Para debug
    setVideos(shuffled);
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleVideoEnd = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("ended", handleVideoEnd);
      // Precargar el siguiente video
      const nextIndex = (currentIndex + 1) % videos.length;
      const preload = document.createElement("link");
      preload.rel = "preload";
      preload.as = "video";
      preload.href = videos[nextIndex];
      document.head.appendChild(preload);
      
      return () => {
        videoElement.removeEventListener("ended", handleVideoEnd);
      };
    }
  }, [currentIndex, isClient, videos]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video de fondo */}
      {videos.length > 0 && (
        <video
          ref={videoRef}
          key={currentIndex}
          autoPlay
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover grayscale"
        >
          <source src={videos[currentIndex]} type="video/mp4" />
        </video>
      )}

      {/* Overlay oscuro para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Contenido centrado */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-wide text-white md:text-4xl lg:text-4xl">
            La emoción es primero
          </h1>
        </div>
      </div>
    </section>
  );
}
