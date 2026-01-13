"use client";

import { useEffect, useState, useRef } from "react";
import { useLoading } from "@/app/context/LoadingContext";
import { useLanguage } from "@/app/context/LanguageContext";

const allVideos = [
  "/videos/emotionhero/clip2_00086400.mp4",
  "/videos/emotionhero/clip2_00086810.mp4",
  "/videos/emotionhero/clip2_00087810.mp4",
  "/videos/emotionhero/clip3_00088702.mp4",
  "/videos/emotionhero/clip3_00092678.mp4",
  "/videos/emotionhero/clip4_00086769.mp4",
  "/videos/emotionhero/clip4_00087082.mp4",
  "/videos/emotionhero/clip4_00087271.mp4",
  "/videos/emotionhero/clip5_00086622.mp4",
  "/videos/emotionhero/clip5_00088046.mp4",
  "/videos/emotionhero/clip5_00090626.mp4",
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
  const { setIsLoading } = useLoading();
  const { content } = useLanguage();
  const [localLoading, setLocalLoading] = useState(true);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [activeVideo, setActiveVideo] = useState<1 | 2>(1);

  // Activar loading al montar y barajar videos solo en el cliente
  useEffect(() => {
    setIsLoading(true);
    setLocalLoading(true);
    const shuffled = shuffleArray(allVideos);
    console.log("Videos shuffled:", shuffled.map(v => v.split('/').pop()));
    setVideos(shuffled);
    setIsClient(true);
  }, [setIsLoading]);

  // Inicializar primer video
  useEffect(() => {
    if (!isClient || videos.length === 0) return;

    const video1 = video1Ref.current;
    const video2 = video2Ref.current;
    const startTime = Date.now();

    if (video1 && video2) {
      // Cargar primer video
      video1.src = videos[0];
      video1.load();
      
      // Cuando el primer video esté listo para reproducir
      const handleCanPlay = () => {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, 1000 - elapsedTime);
        
        // Esperar al menos 1 segundo desde que empezó la carga
        setTimeout(() => {
          video1.play().catch(e => console.log("Play error:", e));
          setIsLoading(false);
          setLocalLoading(false);
        }, remainingTime);
      };
      
      video1.addEventListener('canplay', handleCanPlay);

      // Precargar segundo video
      video2.src = videos[1 % videos.length];
      video2.load();
      
      return () => {
        video1.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, [isClient, videos, setIsLoading, setLocalLoading]);

  // Manejar cambios de video
  useEffect(() => {
    if (!isClient || videos.length === 0) return;

    const currentVideoRef = activeVideo === 1 ? video1Ref : video2Ref;
    const currentVideo = currentVideoRef.current;

    if (!currentVideo) return;

    const handleEnded = () => {
      const nextVideoRef = activeVideo === 1 ? video2Ref : video1Ref;
      const nextVideo = nextVideoRef.current;
      const nextIndex = (currentIndex + 1) % videos.length;
      
      if (nextVideo) {
        // Verificar si el siguiente video está listo
        const canPlay = nextVideo.readyState >= 3; // HAVE_FUTURE_DATA o más
        
        if (canPlay) {
          // Reproducir el siguiente video
          nextVideo.play().catch(e => console.log("Play error:", e));
          
          // Cambiar al siguiente video instantáneamente
          setActiveVideo(activeVideo === 1 ? 2 : 1);
          setCurrentIndex(nextIndex);
          
          // Precargar el siguiente video en el que acaba de terminar
          setTimeout(() => {
            const preloadIndex = (nextIndex + 1) % videos.length;
            currentVideo.src = videos[preloadIndex];
            currentVideo.load();
          }, 100);
        } else {
          // Si el siguiente video no está listo, esperar a que se cargue
          const handleCanPlay = () => {
            nextVideo.play().catch(e => console.log("Play error:", e));
            setActiveVideo(activeVideo === 1 ? 2 : 1);
            setCurrentIndex(nextIndex);
            
            setTimeout(() => {
              const preloadIndex = (nextIndex + 1) % videos.length;
              currentVideo.src = videos[preloadIndex];
              currentVideo.load();
            }, 100);
            
            nextVideo.removeEventListener('canplay', handleCanPlay);
          };
          
          nextVideo.addEventListener('canplay', handleCanPlay);
          
          // Forzar carga si no está cargando
          if (nextVideo.readyState === 0) {
            nextVideo.load();
          }
        }
      }
    };

    currentVideo.addEventListener("ended", handleEnded);

    return () => {
      currentVideo.removeEventListener("ended", handleEnded);
    };
  }, [isClient, videos, currentIndex, activeVideo]);

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
        
        {isClient && videos.length > 0 && (
          <>
            {/* Video 1 */}
            <video
              ref={video1Ref}
              muted
              playsInline
              className={`absolute inset-0 h-full w-full object-cover grayscale ${
                activeVideo === 1 ? 'z-0' : '-z-10 opacity-0'
              }`}
            />
            
            {/* Video 2 */}
            <video
              ref={video2Ref}
              muted
              playsInline
              className={`absolute inset-0 h-full w-full object-cover grayscale ${
                activeVideo === 2 ? 'z-0' : '-z-10 opacity-0'
              }`}
            />
          </>
        )}

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
