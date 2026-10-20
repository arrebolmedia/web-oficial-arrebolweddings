"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import { getAlianzasContent, type AlianzaVariant } from "../content";

interface MediaItem {
  filename: string;
  index: number;
  aspectRatio: number;
  type: "image" | "video";
}

// Solo tres bodas: SyP (incluye "Sofía-y-Pablo"), CyD y TyJ (las "_MG_").
const galleryImages = [
  // SyP
  "SyP-109.webp",
  "SyP-217.webp",
  "SyP-273.webp",
  "TOP-SyP-116.webp",
  "TOP-SyP-324.webp",
  "Sofía-y-Pablo-118.webp",
  "Sofía-y-Pablo-276.webp",
  "Sofía-y-Pablo-286.webp",
  "Sofía-y-Pablo-452.webp",
  // CyD
  "CyD-21.webp",
  "CyD-24.webp",
  "CyD-38.webp",
  "CyD-42.webp",
  "CyD-49.webp",
  "CyD-52.webp",
  "CyD-65.webp",
  "CyD-69.webp",
  "CyD-75.webp",
  "CyD-80.webp",
  "CyD-82.webp",
  "TOP-CyD-41.webp",
  "TOP-CyD-67.webp",
  // TyJ
  "_MG_0739.webp",
  "_MG_0928.webp",
  "_MG_0967.webp",
  "_MG_1134.webp",
  "_MG_1163.webp",
  "_MG_1174.webp",
  "_MG_1228.webp",
  "_MG_1245.webp",
  "_MG_1308.webp",
  "_MG_1430.webp",
  "_MG_1434.webp",
  "_MG_1471.webp",
  "_MG_1498.webp",
];

// Clips de video de estas bodas (los de la galería general no dicen de qué boda son).
const galleryVideos: string[] = [];

export default function AlianzasGallerySection({ variant }: { variant: AlianzaVariant }) {
  const { language } = useLanguage();
  const content = getAlianzasContent(variant, language);

  const [columns, setColumns] = useState(3);
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);

  // Crear lista intercalada: 3 fotos, 1 video
  useEffect(() => {
    const shuffledImages = [...galleryImages].sort(() => Math.random() - 0.5);
    const shuffledVideos = [...galleryVideos].sort(() => Math.random() - 0.5);

    const loadMedia = async () => {
      const items: MediaItem[] = [];
      let imageIndex = 0;
      let videoIndex = 0;
      let globalIndex = 0;

      // Intercalar 3 fotos : 1 video hasta tener ~32 items
      while (items.length < 32 && imageIndex < shuffledImages.length) {
        // Agregar 3 fotos
        for (let i = 0; i < 3 && imageIndex < shuffledImages.length && items.length < 32; i++) {
          const filename = shuffledImages[imageIndex];
          const aspectRatio = await getImageAspectRatio(filename);
          items.push({
            filename,
            index: globalIndex++,
            aspectRatio,
            type: "image",
          });
          imageIndex++;
        }

        // Agregar 1 video (aspect ratio 16:9 horizontal - 1080x608)
        if (videoIndex < shuffledVideos.length && items.length < 32) {
          items.push({
            filename: shuffledVideos[videoIndex],
            index: globalIndex++,
            aspectRatio: 1080 / 608,
            type: "video",
          });
          videoIndex++;
        }
      }

      setMediaItems(items);
    };

    const getImageAspectRatio = (filename: string): Promise<number> => {
      return new Promise((resolve) => {
        const img = document.createElement("img");
        img.onload = () => resolve(img.width / img.height);
        img.onerror = () => resolve(0.8);
        img.src = `/images/gallery/${filename}`;
      });
    };

    loadMedia();
  }, []);

  // Calcular número de columnas basado en el ancho de la ventana
  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width < 768) setColumns(1);
      else if (width < 1024) setColumns(2);
      else setColumns(3);
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  // Función para obtener la columna más corta
  const getShortestColumn = (heights: number[]) => {
    return heights.indexOf(Math.min(...heights));
  };

  // Organizar media en columnas
  const organizeMedia = () => {
    if (mediaItems.length === 0) return [];

    const mediaColumns: MediaItem[][] = Array.from({ length: columns }, () => []);
    const heights = new Array(columns).fill(0);

    mediaItems.forEach((item) => {
      const shortestCol = getShortestColumn(heights);
      mediaColumns[shortestCol].push(item);
      const isVertical = item.aspectRatio < 1;
      const baseHeight = isVertical ? 400 : 300;
      heights[shortestCol] += baseHeight;
    });

    return mediaColumns;
  };

  const mediaColumns = organizeMedia();

  // Loading state
  if (mediaItems.length === 0) {
    return (
      <section id="galeria" className="py-16 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center min-h-[400px]">
            <p className="text-[var(--foreground)]/50">{content.gallery.loading}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="galeria" className="py-16 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4">
          {mediaColumns.map((column, colIndex) => (
            <div key={colIndex} className="flex-1 flex flex-col gap-4">
              {column.map((item) => {
                const isVertical = item.aspectRatio < 1;

                if (item.type === "video") {
                  return (
                    <div
                      key={item.index}
                      className="relative overflow-hidden bg-gray-200"
                    >
                      <video
                        src={`/videos/optimized/${item.filename}`}
                        className="w-full h-auto"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    </div>
                  );
                }

                return (
                  <div
                    key={item.index}
                    className={`relative overflow-hidden bg-gray-200 ${isVertical ? "aspect-[4/5]" : "aspect-[3/2]"}`}
                  >
                    <Image
                      src={encodeURI(`/images/gallery/${item.filename}`)}
                      alt="Arrebol Weddings"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
