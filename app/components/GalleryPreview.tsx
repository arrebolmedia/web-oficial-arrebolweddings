"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { content } from "@/lib/content";

interface ImageData {
  filename: string;
  index: number;
  aspectRatio: number;
}

const GalleryPreview = () => {
  const { galeria } = content;
  const [columns, setColumns] = useState(3);
  const [imagesWithDimensions, setImagesWithDimensions] = useState<ImageData[]>([]);

  // Cargar dimensiones de las imágenes
  useEffect(() => {
    const shuffledImages = [...galeria.images]
      .sort(() => Math.random() - 0.5)
      .slice(0, 30);

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
  
  const displayImages = imagesWithDimensions;

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

  // No renderizar hasta que las dimensiones estén cargadas
  if (imagesWithDimensions.length === 0) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center min-h-[400px]">
            <p className="text-[var(--foreground)]/50">Cargando galería...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4">
          {imageColumns.map((column, colIndex) => (
            <div key={colIndex} className="flex-1 flex flex-col gap-4">
              {column.map((image) => {
                // Determinar el aspect ratio basado en la orientación
                const isVertical = image.aspectRatio < 1;
                const aspectClass = isVertical ? 'aspect-[4/5]' : 'aspect-[3/2]';
                
                return (
                  <FadeIn key={image.index} delay={image.index * 50}>
                    <div
                      className={`relative overflow-hidden bg-gray-200 ${aspectClass}`}
                    >
                      <Image
                        src={`/images/gallery/${image.filename}`}
                        alt="Arrebol Weddings"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
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
              Ver galería completa
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default GalleryPreview;
