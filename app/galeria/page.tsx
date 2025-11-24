"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "../context/LanguageContext";

interface ImageData {
  filename: string;
  index: number;
  aspectRatio: number;
}

export default function Galeria() {
  const { content } = useLanguage();
  const { galeria } = content;
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [columnHeights, setColumnHeights] = useState<number[]>([]);
  const [columns, setColumns] = useState(3);
  const [imagesWithDimensions, setImagesWithDimensions] = useState<ImageData[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Cargar dimensiones de las imágenes
  useEffect(() => {
    const shuffledImages = [...galeria.images].sort(() => Math.random() - 0.5);

    const loadImageDimensions = async () => {
      const imagesData = await Promise.all(
        shuffledImages.map((filename, index) => {
          return new Promise<ImageData>((resolve) => {
            const img = document.createElement('img');
            img.onload = () => {
              const aspectRatio = img.width / img.height;
              resolve({ filename, index, aspectRatio });
            };
            img.onerror = () => {
              // Default to 4:5 if image fails to load
              resolve({ filename, index, aspectRatio: 0.8 });
            };
            img.src = `/images/gallery/${filename}`;
          });
        })
      );
      setImagesWithDimensions(imagesData);
    };

    loadImageDimensions();
  }, [galeria.images]);

  const allImages = imagesWithDimensions;

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

  // Organizar imágenes en columnas
  const organizeImages = () => {
    if (imagesWithDimensions.length === 0) return [];
    
    const imageColumns: ImageData[][] = Array.from({ length: columns }, () => []);
    const heights = new Array(columns).fill(0);

    imagesWithDimensions.forEach((image) => {
      const shortestCol = getShortestColumn(heights);
      imageColumns[shortestCol].push(image);
      // Usar el aspect ratio real para calcular la altura
      const isVertical = image.aspectRatio < 1;
      const baseHeight = isVertical ? 400 : 300;
      heights[shortestCol] += baseHeight;
    });

    return imageColumns;
  };

  const imageColumns = organizeImages();

  return (
    <>
      <div>
        {/* Header */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <SectionHeader
                title={galeria.title}
                subtitle={galeria.subtitle}
              />
            </FadeIn>
          </div>
        </section>

        {/* Gallery Masonry */}
        <section className="py-16 bg-[var(--background)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn delay={200}>
              <p className="mb-12 text-lg text-[var(--foreground)]/80 leading-relaxed text-center max-w-3xl mx-auto">
                {galeria.intro}
              </p>
            </FadeIn>
            {imagesWithDimensions.length === 0 ? (
              <div className="flex justify-center items-center min-h-[400px]">
                <p className="text-[var(--foreground)]/50">{galeria.loading}</p>
              </div>
            ) : (
              <div 
                ref={containerRef}
                className="flex gap-4"
              >
              {imageColumns.map((column, colIndex) => (
                <div key={colIndex} className="flex-1 flex flex-col gap-4">
                  {column.map((image) => {
                    // Determinar el aspect ratio basado en la orientación
                    const isVertical = image.aspectRatio < 1;
                    const aspectClass = isVertical ? 'aspect-[4/5]' : 'aspect-[3/2]';
                    
                    return (
                      <FadeIn key={image.index} delay={image.index * 50}>
                        <div
                          className={`relative overflow-hidden cursor-pointer bg-gray-200 ${aspectClass}`}
                          onClick={() => setSelectedImage(image)}
                        >
                          <Image
                            src={`/images/gallery/${image.filename}`}
                            alt="Arrebol Weddings"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            priority={image.index < 9}
                            loading={image.index < 9 ? "eager" : "lazy"}
                          />
                        </div>
                      </FadeIn>
                    );
                  })}
                </div>
              ))}
              </div>
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
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-[var(--accent-blush)] transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <div className="max-w-5xl w-full">
              <div className="relative aspect-[4/5] md:aspect-[3/2] rounded-sm overflow-hidden">
                <Image
                  src={`/images/gallery/${selectedImage.filename}`}
                  alt="Arrebol Weddings"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
