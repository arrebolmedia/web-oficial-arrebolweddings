"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/app/context/LanguageContext";

interface MediaData {
  filename: string;
  index: number;
  aspectRatio: number;
  type: 'image' | 'video';
}

// Lista de videos optimizados
const videoFiles = [
  "clip00086729.mp4",
  "clip00088550.mp4",
  "clip00088938.mp4",
  "clip2_00086400.mp4",
  "clip2_00086546.mp4",
  "clip2_00086810.mp4",
  "clip2_00086973.mp4",
  "clip2_00087810.mp4",
  "ZOOM_clip3_00086765.mp4",
  "ZOOM_clip3_00088702.mp4",
  "ZOOM_clip3_00092678.mp4",
  "clip4_00086769.mp4",
  "clip4_00087082.mp4",
  "clip4_00087271.mp4",
  "clip5_00086622.mp4",
  "clip5_00088046.mp4",
  "clip5_00090626.mp4",
];

const GalleryPreview = () => {
  const { content } = useLanguage();
  const { galeria } = content;
  const [columns, setColumns] = useState(3);
  const [mediaWithDimensions, setMediaWithDimensions] = useState<MediaData[]>([]);

  // Cargar dimensiones de las imágenes y videos
  useEffect(() => {
    // Shuffle images and pick some
    const shuffledImages = [...galeria.images]
      .sort(() => Math.random() - 0.5)
      .slice(0, 21); // 21 images for gallery

    // Use 9 videos
    const shuffledVideos = [...videoFiles]
      .sort(() => Math.random() - 0.5)
      .slice(0, 9);

    const loadMediaDimensions = async () => {
      // Load image dimensions
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

      // Load video dimensions
      const videosData = await Promise.all(
        shuffledVideos.map((filename, index) => {
          return new Promise<MediaData>((resolve) => {
            const video = document.createElement('video');
            video.onloadedmetadata = () => {
              const aspectRatio = video.videoWidth / video.videoHeight;
              resolve({ filename, index, aspectRatio, type: 'video' });
            };
            video.onerror = () => {
              resolve({ filename, index, aspectRatio: 0.5625, type: 'video' });
            };
            video.src = `/videos/optimized/${filename}`;
          });
        })
      );

      // Intercalar: 3 fotos, 1 video, 3 fotos, 1 video...
      const interleavedMedia: MediaData[] = [];
      let imageIndex = 0;
      let videoIndex = 0;

      // Start with 3 images
      for (let i = 0; i < 3 && imageIndex < imagesData.length; i++) {
        interleavedMedia.push({ ...imagesData[imageIndex], index: interleavedMedia.length });
        imageIndex++;
      }

      // Then alternate: 1 video, 3 images
      while (videoIndex < videosData.length || imageIndex < imagesData.length) {
        // Add 1 video
        if (videoIndex < videosData.length) {
          interleavedMedia.push({ ...videosData[videoIndex], index: interleavedMedia.length });
          videoIndex++;
        }
        // Add 3 images
        for (let i = 0; i < 3 && imageIndex < imagesData.length; i++) {
          interleavedMedia.push({ ...imagesData[imageIndex], index: interleavedMedia.length });
          imageIndex++;
        }
      }

      setMediaWithDimensions(interleavedMedia);
    };

    loadMediaDimensions();
  }, [galeria.images]);
  
  const displayMedia = mediaWithDimensions;

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

  // Función para obtener la columna más corta
  const getShortestColumn = (heights: number[]) => {
    return heights.indexOf(Math.min(...heights));
  };

  // Organizar media en columnas
  const organizeMedia = () => {
    if (mediaWithDimensions.length === 0) return [];
    
    const mediaColumns: MediaData[][] = Array.from({ length: columns }, () => []);
    const heights = new Array(columns).fill(0);

    mediaWithDimensions.forEach((media) => {
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

  // No renderizar hasta que las dimensiones estén cargadas
  if (mediaWithDimensions.length === 0) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center min-h-[400px]">
            <p className="text-[var(--foreground)]/50">{galeria.loading}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4">
          {mediaColumns.map((column, colIndex) => (
            <div key={colIndex} className="flex-1 flex flex-col gap-4">
              {column.map((media) => {
                // Determinar el aspect ratio basado en la orientación
                const isVertical = media.aspectRatio < 1;
                const aspectClass = isVertical ? 'aspect-[4/5]' : 'aspect-[3/2]';
                
                return (
                  <FadeIn key={`${media.type}-${media.index}`} delay={media.index * 50}>
                    <div
                      className={`relative overflow-hidden bg-gray-200 ${aspectClass}`}
                    >
                      {media.type === 'image' ? (
                        <Image
                          src={`/images/gallery/${media.filename}`}
                          alt="Arrebol Weddings"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          priority={media.index < 12}
                          loading={media.index < 12 ? "eager" : "lazy"}
                        />
                      ) : (
                        <video
                          src={`/videos/optimized/${media.filename}`}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          ))}
        </div>

        {/* Ver más */}
        <FadeIn delay={500}>
          <div className="text-center mt-12">
            <Link
              href="/galeria"
              className="inline-block px-8 py-3 border border-[var(--foreground)] text-[var(--foreground)] text-sm tracking-widest uppercase hover:bg-[var(--foreground)] hover:text-white transition-all duration-300"
            >
              {galeria.viewFullGallery}
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default GalleryPreview;
