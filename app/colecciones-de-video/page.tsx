"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "../context/LanguageContext";

export default function ColeccionesDeVideo() {
  const { content } = useLanguage();
  const { colecciones } = content;

  // Colecciones solo de video con precios a la mitad
  const videoCollections = colecciones.collections.map(col => {
    const priceNum = parseInt(col.price.replace(/[^0-9]/g, ''));
    const halfPrice = Math.round(priceNum / 2);
    
    return {
      name: col.name,
      features: col.features.filter(f => 
        !f.toLowerCase().includes('fotógrafo') && 
        !f.toLowerCase().includes('fotografía') &&
        !f.toLowerCase().includes('photobook') &&
        !f.toLowerCase().includes('galería')
      ),
      price: `$${halfPrice.toLocaleString('es-MX')} MXN`,
      description: col.description
    };
  });

  return (
    <>
      <div>
      {/* Header con imagen de fondo */}
      <FadeIn>
        <SectionHeader
          title="Colecciones de Video"
          subtitle="Contamos la historia de su boda en movimiento"
          backgroundImage="/images/gallery/TOP-PyP-505.webp"
        />
      </FadeIn>

      {/* Collections */}
      <section className="py-16 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={200}>
            <p className="mb-12 text-lg text-[var(--foreground)]/80 leading-relaxed text-center max-w-3xl mx-auto">
              Nuestras colecciones de video cinematográfico capturan la emoción y el movimiento de su boda. Cada colección está diseñada para contar su historia de manera auténtica y emotiva.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoCollections.map((collection, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="bg-white border border-[var(--border-subtle)] p-10 h-full flex flex-col">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="font-[var(--font-heading)] text-3xl text-[var(--foreground)] mb-4">
                      {collection.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-[var(--foreground)]/60 leading-relaxed mb-8 italic text-sm">
                    {collection.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-8 flex-grow text-sm text-[var(--foreground)]/70">
                    {collection.features.map((feature, fIndex) => (
                      <p key={fIndex}>
                        {feature}
                      </p>
                    ))}
                  </div>

                  {/* Price at bottom */}
                  <div className="pt-6 border-t border-[var(--border-subtle)] text-center">
                    <p className="text-2xl font-light text-[var(--foreground)]">
                      {collection.price.split(' ')[0]} <span className="text-sm text-[var(--foreground)]/50 uppercase tracking-wider">{collection.price.split(' ')[1]}</span>
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="mt-16 overflow-x-auto hidden lg:block">
            <FadeIn delay={500}>
              <h3 className="font-[var(--font-heading)] text-3xl text-[var(--foreground)] text-center mb-8 uppercase">
                Comparación de colecciones
              </h3>
              <table className="w-full bg-white border border-[var(--border-subtle)]">
                <thead>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <th className="p-4 text-left font-[var(--font-heading)] text-lg text-[var(--foreground)] bg-[var(--background)]">
                      Características
                    </th>
                    {videoCollections.map((collection, index) => (
                      <th key={index} className="p-4 text-center font-[var(--font-heading)] text-lg text-[var(--foreground)] bg-[var(--background)] min-w-[180px]">
                        {collection.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">Horas de cobertura</td>
                    <td className="p-4 text-center text-[var(--foreground)]">8</td>
                    <td className="p-4 text-center text-[var(--foreground)]">10</td>
                    <td className="p-4 text-center text-[var(--foreground)]">12</td>
                    <td className="p-4 text-center text-[var(--foreground)]">12</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">Videógrafos</td>
                    <td className="p-4 text-center text-[var(--foreground)]">1</td>
                    <td className="p-4 text-center text-[var(--foreground)]">1</td>
                    <td className="p-4 text-center text-[var(--foreground)]">1</td>
                    <td className="p-4 text-center text-[var(--foreground)]">2</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">Video (duración)</td>
                    <td className="p-4 text-center text-[var(--foreground)]">15–20 min</td>
                    <td className="p-4 text-center text-[var(--foreground)]">25–30 min</td>
                    <td className="p-4 text-center text-[var(--foreground)]">35–45 min</td>
                    <td className="p-4 text-center text-[var(--foreground)]">50–60 min</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">Video corto (3–5 min)</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">Video 1 minuto</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">Sesión pre boda</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">Sesión post boda</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">Dron para tomas aéreas</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">Creador de contenido</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">Invitación digital</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                  </tr>
                  <tr className="bg-[var(--background)]">
                    <td className="p-4 font-[var(--font-heading)] text-lg text-[var(--foreground)]">Precio</td>
                    {videoCollections.map((collection, index) => (
                      <td key={index} className="p-4 text-center">
                        <div className="text-2xl font-light text-[var(--foreground)]">{collection.price.split(' ')[0]}</div>
                        <div className="text-xs text-[var(--foreground)]/60 uppercase">{collection.price.split(' ')[1]}</div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Custom Note */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-8">
              {colecciones.customNote}
            </p>
            <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-8">
              {colecciones.whatsappText}
            </p>
            <a
              href={`https://wa.me/5217775001071?text=${encodeURIComponent("¡Hola! Deseo más información sobre sus colecciones de video")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border border-[var(--foreground)] text-[var(--foreground)] text-sm tracking-widest uppercase hover:bg-[var(--foreground)] hover:text-white transition-all duration-300"
            >
              {colecciones.whatsappButton}
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
    </>
  );
}
