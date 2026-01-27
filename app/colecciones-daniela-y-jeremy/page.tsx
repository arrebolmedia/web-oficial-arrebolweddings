"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "../context/LanguageContext";

export default function ColeccionesDanielaJeremy() {
  const { content } = useLanguage();
  const { colecciones } = content;

  // Filtrar solo las colecciones 2 y 3 (índices 1 y 2)
  const selectedCollections = colecciones.collections.filter((_, index) => index === 1 || index === 2);

  // Aplicar descuento de $6,000 a cada colección
  const collectionsWithDiscount = selectedCollections.map(collection => {
    const priceNumber = parseInt(collection.price.replace(/[^0-9]/g, ''));
    const discountedPrice = priceNumber - 6000;
    return {
      ...collection,
      originalPrice: collection.price,
      price: `$${discountedPrice.toLocaleString('es-MX')} MXN`,
      discount: '$6,000 MXN',
      // Marcar "Sesión pre boda" como tachada en las features
      features: collection.features.map(feature => {
        if (feature === 'Sesión pre boda') {
          return `~~${feature}~~`;
        }
        return feature;
      })
    };
  });

  return (
    <>
      <div>
      {/* Header con imagen de fondo */}
      <FadeIn>
        <SectionHeader
          title="PARA DANIELA & JEREMY"
          subtitle="Colecciones Especiales"
          backgroundImage="/images/gallery/TOP-PyP-505.webp"
        />
      </FadeIn>

      {/* Collections */}
      <section className="py-16 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={200}>
            <p className="mb-12 text-lg text-[var(--foreground)]/80 leading-relaxed text-center max-w-3xl mx-auto">
              {colecciones.intro}
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collectionsWithDiscount.map((collection, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="bg-white border border-[var(--border-subtle)] p-10 h-full flex flex-col relative">
                  {/* Etiqueta de descuento */}
                  <div className="absolute top-4 right-4 bg-[var(--accent-terracotta)] text-white px-3 py-1 text-sm font-semibold">
                    -{collection.discount}
                  </div>

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
                    {collection.features.map((feature, fIndex) => {
                      const isStrikethrough = feature.startsWith('~~') && feature.endsWith('~~');
                      const displayText = isStrikethrough ? feature.slice(2, -2) : feature;
                      return (
                        <p key={fIndex} className={isStrikethrough ? 'line-through' : ''}>
                          {displayText}
                        </p>
                      );
                    })}
                  </div>

                  {/* Price at bottom */}
                  <div className="pt-6 border-t border-[var(--border-subtle)] text-center">
                    <p className="text-sm text-[var(--foreground)]/40 line-through mb-1">
                      {collection.originalPrice}
                    </p>
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
                Comparación de Colecciones
              </h3>
              <table className="w-full bg-white border border-[var(--border-subtle)]">
                <thead>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <th className="p-4 text-left font-[var(--font-heading)] text-lg text-[var(--foreground)] bg-[var(--background)]">
                      Características
                    </th>
                    {collectionsWithDiscount.map((collection, index) => (
                      <th key={index} className="p-4 text-center font-[var(--font-heading)] text-lg text-[var(--foreground)] bg-[var(--background)] min-w-[180px]">
                        {collection.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{colecciones.comparisonLabels.coverage}</td>
                    <td className="p-4 text-center text-[var(--foreground)]">10</td>
                    <td className="p-4 text-center text-[var(--foreground)]">10</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{colecciones.comparisonLabels.photographers}</td>
                    <td className="p-4 text-center text-[var(--foreground)]">1</td>
                    <td className="p-4 text-center text-[var(--foreground)]">2</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{colecciones.comparisonLabels.photos}</td>
                    <td className="p-4 text-center text-[var(--foreground)]">600–700</td>
                    <td className="p-4 text-center text-[var(--foreground)]">800–900</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{colecciones.comparisonLabels.videographers}</td>
                    <td className="p-4 text-center text-[var(--foreground)]">1</td>
                    <td className="p-4 text-center text-[var(--foreground)]">2</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{colecciones.comparisonLabels.videoDuration}</td>
                    <td className="p-4 text-center text-[var(--foreground)]">30–35 min</td>
                    <td className="p-4 text-center text-[var(--foreground)]">40–45 min</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{colecciones.comparisonLabels.shortVideo}</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{colecciones.comparisonLabels.oneMinuteVideo}</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{colecciones.comparisonLabels.photobook}</td>
                    <td className="p-4 text-center text-[var(--foreground)] text-sm">8.5x11" (50 pág)</td>
                    <td className="p-4 text-center text-[var(--foreground)] text-sm">11x11" (50 pág)</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70 line-through">{colecciones.comparisonLabels.preWedding}</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{colecciones.comparisonLabels.drone}</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                  </tr>
                  <tr className="bg-[var(--background)]">
                    <td className="p-4 font-[var(--font-heading)] text-lg text-[var(--foreground)]">{colecciones.priceTitle}</td>
                    {collectionsWithDiscount.map((collection, index) => (
                      <td key={index} className="p-4 text-center">
                        <div className="text-sm text-[var(--foreground)]/40 line-through mb-1">
                          {collection.originalPrice.split(' ')[0]}
                        </div>
                        <div className="text-2xl font-light text-[var(--foreground)]">
                          {collection.price.split(' ')[0]}
                        </div>
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

      {/* CTA Section */}
      <section className="py-16 bg-[var(--background)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn delay={600}>
            <h3 className="font-[var(--font-heading)] text-3xl text-[var(--foreground)] mb-6">
              ¿Lista para reservar?
            </h3>
            <p className="text-[var(--foreground)]/70 mb-8 leading-relaxed">
              Contáctanos para confirmar tu fecha y asegurar tu colección con descuento especial.
            </p>
            <Link
              href="/contacto"
              className="inline-block bg-[var(--foreground)] text-[var(--background)] px-8 py-3 hover:bg-[var(--accent-terracotta)] transition-colors tracking-wide"
            >
              CONTACTAR
            </Link>
          </FadeIn>
        </div>
      </section>
      </div>
    </>
  );
}
