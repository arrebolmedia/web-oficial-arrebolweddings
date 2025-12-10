"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "../context/LanguageContext";

interface MediaData {
  filename: string;
  index: number;
  aspectRatio: number;
  type: 'image' | 'video';
}

type FilterType = 'all' | 'photos' | 'clips';

// Lista de videos disponibles
const videoFiles = [
  "clip00086729.mp4", "clip00088550.mp4", "clip00088938.mp4",
  "clip2_00086400.mp4", "clip2_00086546.mp4", "clip2_00086810.mp4",
  "clip2_00086973.mp4", "clip2_00087810.mp4",
  "ZOOM_clip3_00086765.mp4", "ZOOM_clip3_00088702.mp4", "ZOOM_clip3_00092678.mp4",
  "clip4_00086769.mp4", "clip4_00087082.mp4", "clip4_00087271.mp4",
  "clip5_00086622.mp4", "clip5_00088046.mp4", "clip5_00090626.mp4",
];

export default function Galeria() {
  const { content } = useLanguage();
  const { galeria } = content;
  const [selectedMedia, setSelectedMedia] = useState<MediaData | null>(null);
  const [columnHeights, setColumnHeights] = useState<number[]>([]);
  const [columns, setColumns] = useState(3);
  const [mediaWithDimensions, setMediaWithDimensions] = useState<MediaData[]>([]);
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const containerRef = useRef<HTMLDivElement>(null);

  // Cargar dimensiones de las imágenes y videos
  useEffect(() => {
    const loadMediaDimensions = async () => {
      // Cargar imágenes
      const shuffledImages = [...galeria.images].sort(() => Math.random() - 0.5);
      const imagesData = await Promise.all(
        shuffledImages.map((filename, index) => {
          return new Promise<MediaData>((resolve) => {
            const img = document.createElement('img');
            img.onload = () => {
              const aspectRatio = img.width / img.height;
              resolve({ filename, index, aspectRatio, type: 'image' });
            };
            img.onerror = () => {
              resolve({ filename, index, aspectRatio: 0.8, type: 'image' });
            };
            img.src = `/images/gallery/${filename}`;
          });
        })
      );

      // Cargar videos
      const shuffledVideos = [...videoFiles].sort(() => Math.random() - 0.5);
      const videosData = await Promise.all(
        shuffledVideos.map((filename, index) => {
          return new Promise<MediaData>((resolve) => {
            const video = document.createElement('video');
            video.onloadedmetadata = () => {
              const aspectRatio = video.videoWidth / video.videoHeight;
              resolve({ filename, index: imagesData.length + index, aspectRatio, type: 'video' });
            };
            video.onerror = () => {
              resolve({ filename, index: imagesData.length + index, aspectRatio: 16/9, type: 'video' });
            };
            video.src = `/videos/optimized/${filename}`;
          });
        })
      );

      // Mezclar imágenes y videos distribuyéndolos
      const allMedia: MediaData[] = [];
      let imageIndex = 0;
      let videoIndex = 0;
      let photosSinceLastVideo = 0;

      while (imageIndex < imagesData.length || videoIndex < videosData.length) {
        // Agregar un video cada 4-6 fotos
        if (videoIndex < videosData.length && photosSinceLastVideo >= 4) {
          allMedia.push({ ...videosData[videoIndex], index: allMedia.length });
          videoIndex++;
          photosSinceLastVideo = 0;
        } else if (imageIndex < imagesData.length) {
          allMedia.push({ ...imagesData[imageIndex], index: allMedia.length });
          imageIndex++;
          photosSinceLastVideo++;
        } else if (videoIndex < videosData.length) {
          allMedia.push({ ...videosData[videoIndex], index: allMedia.length });
          videoIndex++;
        }
      }

      setMediaWithDimensions(allMedia);
    };

    loadMediaDimensions();
  }, [galeria.images]);

  // Filtrar media según el filtro activo
  const filteredMedia = mediaWithDimensions.filter(media => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'photos') return media.type === 'image';
    if (activeFilter === 'clips') return media.type === 'video';
    return true;
  });

  // Calcular número de columnas basado en el ancho de la ventana
  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width < 768) setColumns(1);
      else if (width < 1024) setColumns(2);
      else setColumns(3);
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  // Inicializar alturas de columnas
  useEffect(() => {
    setColumnHeights(new Array(columns).fill(0));
  }, [columns]);

  // Función para obtener la columna más corta
  const getShortestColumn = (heights: number[]) => {
    return heights.indexOf(Math.min(...heights));
  };

  // Organizar media en columnas
  const organizeMedia = () => {
    if (filteredMedia.length === 0) return [];
    
    const mediaColumns: MediaData[][] = Array.from({ length: columns }, () => []);
    const heights = new Array(columns).fill(0);

    filteredMedia.forEach((media) => {
      const shortestCol = getShortestColumn(heights);
      mediaColumns[shortestCol].push(media);
      // Usar el aspect ratio real para calcular la altura
      const isVertical = media.aspectRatio < 1;
      const baseHeight = isVertical ? 400 : 300;
      heights[shortestCol] += baseHeight;
    });

    return mediaColumns;
  };

  const mediaColumns = organizeMedia();

  return (
    <>
      <div>
        {/* Header con imagen de fondo */}
        <FadeIn>
          <SectionHeader
            title={galeria.title}
            subtitle={galeria.subtitle}
            backgroundImage="/images/gallery/TOP-KyB-236.webp"
          />
        </FadeIn>

        {/* Gallery Masonry */}
        <section className="py-16 bg-[var(--background)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn delay={200}>
              <p className="mb-8 text-lg text-[var(--foreground)]/80 leading-relaxed text-center max-w-3xl mx-auto">
                {galeria.intro}
              </p>
            </FadeIn>

            {/* Filter Menu */}
            <FadeIn delay={300}>
              <div className="flex justify-center gap-8 mb-12">
                <button
                  onClick={() => setActiveFilter('all')}
                  className={`text-sm tracking-widest uppercase transition-all duration-300 pb-2 border-b-2 ${
                    activeFilter === 'all'
                      ? 'text-[var(--foreground)] border-[var(--foreground)]'
                      : 'text-[var(--foreground)]/50 border-transparent hover:text-[var(--foreground)]/80'
                  }`}
                >
                  {galeria.filters.all}
                </button>
                <button
                  onClick={() => setActiveFilter('photos')}
                  className={`text-sm tracking-widest uppercase transition-all duration-300 pb-2 border-b-2 ${
                    activeFilter === 'photos'
                      ? 'text-[var(--foreground)] border-[var(--foreground)]'
                      : 'text-[var(--foreground)]/50 border-transparent hover:text-[var(--foreground)]/80'
                  }`}
                >
                  {galeria.filters.photos}
                </button>
                <button
                  onClick={() => setActiveFilter('clips')}
                  className={`text-sm tracking-widest uppercase transition-all duration-300 pb-2 border-b-2 ${
                    activeFilter === 'clips'
                      ? 'text-[var(--foreground)] border-[var(--foreground)]'
                      : 'text-[var(--foreground)]/50 border-transparent hover:text-[var(--foreground)]/80'
                  }`}
                >
                  {galeria.filters.clips}
                </button>
              </div>
            </FadeIn>

            {mediaWithDimensions.length === 0 ? (
              <div className="flex justify-center items-center min-h-[400px]">
                <p className="text-[var(--foreground)]/50">{galeria.loading}</p>
              </div>
            ) : (
              <div 
                ref={containerRef}
                className="flex gap-4"
              >
              {mediaColumns.map((column, colIndex) => (
                <div key={colIndex} className="flex-1 flex flex-col gap-4">
                  {column.map((media) => {
                    // Determinar el aspect ratio basado en la orientación
                    const isVertical = media.aspectRatio < 1;
                    const aspectClass = isVertical ? 'aspect-[4/5]' : 'aspect-[3/2]';
                    
                    return (
                      <FadeIn key={`${media.type}-${media.filename}`} delay={media.index * 50}>
                        <div
                          className={`relative overflow-hidden cursor-pointer bg-gray-200 ${aspectClass}`}
                          onClick={() => setSelectedMedia(media)}
                        >
                          {media.type === 'image' ? (
                            <Image
                              src={`/images/gallery/${media.filename}`}
                              alt="Arrebol Weddings"
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              priority={media.index < 15}
                              loading={media.index < 15 ? "eager" : "lazy"}
                            />
                          ) : (
                            <video
                              src={`/videos/optimized/${media.filename}`}
                              className="w-full h-full object-cover"
                              autoPlay
                              muted
                              loop
                              playsInline
                            />
                          )}
                        </div>
                      </FadeIn>
                    );
                  })}
                </div>
              ))}
              </div>
            )}

            {/* CTA para TODO - Ambos botones */}
            {activeFilter === 'all' && (
              <FadeIn delay={400}>
                <div className="mt-16 text-center">
                  <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-6 max-w-2xl mx-auto">
                    {galeria.combined.text}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="https://arrebol.pic-time.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-8 py-3 border border-[var(--foreground)] text-[var(--foreground)] text-sm tracking-widest uppercase hover:bg-[var(--foreground)] hover:text-white transition-all duration-300"
                    >
                      {galeria.combined.picTimeButton}
                    </a>
                    <a
                      href="https://galleries.vidflow.co/karymeybrian"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-8 py-3 border border-[var(--foreground)] text-[var(--foreground)] text-sm tracking-widest uppercase hover:bg-[var(--foreground)] hover:text-white transition-all duration-300"
                    >
                      {galeria.combined.vidflowButton}
                    </a>
                  </div>
                </div>
              </FadeIn>
            )}

            {/* CTA para Fotografías - Pic-Time */}
            {activeFilter === 'photos' && (
              <FadeIn delay={400}>
                <div className="mt-16 text-center">
                  <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-6 max-w-2xl mx-auto">
                    {galeria.picTime.text}
                  </p>
                  <a
                    href="https://arrebol.pic-time.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 border border-[var(--foreground)] text-[var(--foreground)] text-sm tracking-widest uppercase hover:bg-[var(--foreground)] hover:text-white transition-all duration-300"
                  >
                    {galeria.picTime.button}
                  </a>
                </div>
              </FadeIn>
            )}

            {/* CTA para Clips - Vidflow */}
            {activeFilter === 'clips' && (
              <FadeIn delay={400}>
                <div className="mt-16 text-center">
                  <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-6 max-w-2xl mx-auto">
                    {galeria.vidflow.text}
                  </p>
                  <a
                    href="https://galleries.vidflow.co/karymeybrian"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 border border-[var(--foreground)] text-[var(--foreground)] text-sm tracking-widest uppercase hover:bg-[var(--foreground)] hover:text-white transition-all duration-300"
                  >
                    {galeria.vidflow.button}
                  </a>
                </div>
              </FadeIn>
            )}
          </div>
        </section>

        {/* WhatsApp CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-8">
                {galeria.whatsappText}
              </p>
              <a
                href={`https://wa.me/5217775001071?text=${encodeURIComponent(galeria.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 border border-[var(--foreground)] text-[var(--foreground)] text-sm tracking-widest uppercase hover:bg-[var(--foreground)] hover:text-white transition-all duration-300"
              >
                {galeria.whatsappButton}
              </a>
            </FadeIn>
          </div>
        </section>

        {/* Lightbox */}
        {selectedMedia && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedMedia(null)}
          >
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-[var(--accent-blush)] transition-colors"
              onClick={() => setSelectedMedia(null)}
            >
              ×
            </button>
            <div className="max-w-5xl w-full">
              {selectedMedia.type === 'image' ? (
                <div className="relative aspect-[4/5] md:aspect-[3/2] rounded-sm overflow-hidden">
                  <Image
                    src={`/images/gallery/${selectedMedia.filename}`}
                    alt="Arrebol Weddings"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                </div>
              ) : (
                <div className="relative aspect-video rounded-sm overflow-hidden">
                  <video
                    src={`/videos/optimized/${selectedMedia.filename}`}
                    className="w-full h-full object-contain"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
