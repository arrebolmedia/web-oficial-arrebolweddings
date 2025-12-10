"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import { landingContentEs, landingContentEn } from "../content";

interface MediaItem {
  filename: string;
  index: number;
  aspectRatio: number;
  type: "image" | "video";
}

// Lista de imágenes de la galería (verificadas)
const galleryImages = [
  "AyJ-109.webp",
  "AyJ-149.webp",
  "AyJ-394.webp",
  "AyJ-447.webp",
  "AyJ-493.webp",
  "AyJ-93.webp",
  "aym-76.webp",
  "aym-84.webp",
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
  "KandE-102.webp",
  "KandE-145.webp",
  "KandE-151.webp",
  "KandE-157.webp",
  "KandE-337.webp",
  "KandE-430.webp",
  "KandE-474.webp",
  "KyB-1.webp",
  "KyB-235.webp",
  "KyB-285.webp",
  "KyB-304.webp",
  "KyB-463.webp",
  "KyB-564.webp",
  "KyB-607.webp",
  "PyC-174.webp",
  "PyC-259.webp",
  "PyC-275.webp",
  "PyC-59.webp",
  "PyP-110.webp",
  "PyP-128.webp",
  "PyP-14.webp",
  "PyP-154.webp",
  "PyP-370.webp",
  "PyP-395.webp",
  "PyP-432.webp",
  "PyP-535.webp",
  "PyP-80.webp",
  "RandK-102.webp",
  "RandK-112.webp",
  "RandK-76.webp",
  "RandK-84.webp",
  "SandJ-207.webp",
  "SandJ-214.webp",
  "SandJ-404.webp",
  "SandJ-414.webp",
  "SandJ-857.webp",
  "Sofía-y-Pablo-118.webp",
  "Sofía-y-Pablo-276.webp",
  "Sofía-y-Pablo-286.webp",
  "Sofía-y-Pablo-452.webp",
  "SyD-96.webp",
  "SYO-221.webp",
  "SYO-532.webp",
  "SYO-654.webp",
  "SYO-716.webp",
  "SYO-726.webp",
  "SYO-792.webp",
  "SYO-796.webp",
  "SYO-832.webp",
  "SyP-109.webp",
  "SyP-217.webp",
  "SyP-273.webp",
  "TandM-115.webp",
  "TandM-188.webp",
  "TandM-643.webp",
  "TOP-AyJ-178.webp",
  "TOP-AyJ-500.webp",
  "TOP-CyD-41.webp",
  "TOP-CyD-67.webp",
  "TOP-KyB-23.webp",
  "TOP-KyB-236.webp",
  "TOP-MG1228.webp",
  "TOP-PyC-312.webp",
  "TOP-PyP-505.webp",
  "TOP-SyD-125.webp",
  "TOP-SyD-162.webp",
  "TOP-SyP-116.webp",
  "TOP-SyP-324.webp",
  "_MG_0739.webp",
  "_MG_0967.webp",
  "_MG_1134.webp",
  "_MG_1174.webp",
  "_MG_1308.webp",
  "_MG_1430.webp",
  "_MG_1471.webp",
];

// Lista de videos optimizados
const galleryVideos = [
  "clip00086729.mp4",
  "clip00088550.mp4",
  "clip00088938.mp4",
  "clip2_00086400.mp4",
  "clip2_00086546.mp4",
  "clip2_00086810.mp4",
  "clip2_00086973.mp4",
  "clip2_00087810.mp4",
  "clip4_00086769.mp4",
  "clip4_00087082.mp4",
  "clip4_00087271.mp4",
  "clip5_00086622.mp4",
  "clip5_00088046.mp4",
  "clip5_00090626.mp4",
];

export default function LandingGallerySection() {
  const { language } = useLanguage();
  const content = language === "es" ? landingContentEs : landingContentEn;

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
            aspectRatio: 1080 / 608, // ~1.78 (16:9 horizontal)
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
      <section className="py-16 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center min-h-[400px]">
            <p className="text-[var(--foreground)]/50">{content.gallery.loading}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-[var(--background)]">
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
                      src={`/images/gallery/${item.filename}`}
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
