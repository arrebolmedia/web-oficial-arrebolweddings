"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "../context/LanguageContext";

export default function ColeccionesDeVideo2026() {
  const { content } = useLanguage();
  const { colecciones, coleccionesVideo } = content;

  // Colecciones solo de video con precios actualizados (+$20k sobre el precio base)
  const videoCollections = colecciones.collections.map(col => {
    const priceStr = col.price.split(' ')[0].replace(/[^0-9]/g, '');
    const priceNum = parseInt(priceStr);
    const halfPrice = Math.round(priceNum / 2);
    const finalPrice = halfPrice + 20000; // Precio base de video + $20k
    
    return {
      name: col.name,
      features: col.features.filter(f => 
        !f.toLowerCase().includes('fotógrafo') && 
        !f.toLowerCase().includes('photographer') &&
        !f.toLowerCase().includes('fotografía') &&
        !f.toLowerCase().includes('photograph') &&
        !f.toLowerCase().includes('photobook') &&
        !f.toLowerCase().includes('galería') &&
        !f.toLowerCase().includes('gallery')
      ),
      price: `$${finalPrice.toLocaleString('es-MX')} MXN`,
      description: col.description
    };
  });

  return (
    <>
      <div>
      {/* Header con imagen de fondo */}
      <FadeIn>
        <SectionHeader
          title={coleccionesVideo.title}
          subtitle={coleccionesVideo.subtitle}
          backgroundImage="/images/gallery/TOP-PyP-505.webp"
        />
      </FadeIn>

      {/* Collections */}
      <section className="py-16 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={200}>
            <p className="mb-12 text-lg text-[var(--foreground)]/80 leading-relaxed text-center max-w-3xl mx-auto">
              {coleccionesVideo.intro}
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
                {coleccionesVideo.comparisonTitle}
              </h3>
              <table className="w-full bg-white border border-[var(--border-subtle)]">
                <thead>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <th className="p-4 text-left font-[var(--font-heading)] text-lg text-[var(--foreground)] bg-[var(--background)]">
                      {coleccionesVideo.tableLabels.features}
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
                    <td className="p-4 text-[var(--foreground)]/70">{coleccionesVideo.tableLabels.coverage}</td>
                    <td className="p-4 text-center text-[var(--foreground)]">8</td>
                    <td className="p-4 text-center text-[var(--foreground)]">10</td>
                    <td className="p-4 text-center text-[var(--foreground)]">10</td>
                    <td className="p-4 text-center text-[var(--foreground)]">12</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{coleccionesVideo.tableLabels.videographers}</td>
                    <td className="p-4 text-center text-[var(--foreground)]">1</td>
                    <td className="p-4 text-center text-[var(--foreground)]">1</td>
                    <td className="p-4 text-center text-[var(--foreground)]">2</td>
                    <td className="p-4 text-center text-[var(--foreground)]">2</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{coleccionesVideo.tableLabels.videoDuration}</td>
                    <td className="p-4 text-center text-[var(--foreground)]">20–25 min</td>
                    <td className="p-4 text-center text-[var(--foreground)]">30–35 min</td>
                    <td className="p-4 text-center text-[var(--foreground)]">40–45 min</td>
                    <td className="p-4 text-center text-[var(--foreground)]">50–55 min</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{coleccionesVideo.tableLabels.shortVideo}</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{coleccionesVideo.tableLabels.oneMinuteVideo}</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{coleccionesVideo.tableLabels.drone}</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{coleccionesVideo.tableLabels.contentCreator}</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{coleccionesVideo.tableLabels.preWedding}</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{coleccionesVideo.tableLabels.postWedding}</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                  </tr>
                  <tr className="bg-[var(--background)]">
                    <td className="p-4 font-[var(--font-heading)] text-lg text-[var(--foreground)]">{coleccionesVideo.tableLabels.price}</td>
                    {videoCollections.map((collection, index) => (
                      <td key={index} className="p-4 text-center">
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

      {/* Addons Section */}
      <section className="py-16 bg-[var(--background)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl text-[var(--foreground)] text-center mb-12 uppercase">
              {coleccionesVideo.addonsTitle}
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coleccionesVideo.addons && coleccionesVideo.addons.map((addon: any, index: number) => (
              <FadeIn key={index} delay={index * 50}>
                <div className="bg-white p-6 border border-[var(--border-subtle)]">
                  <div className="flex justify-between items-start gap-4">
                    <p className="text-[var(--foreground)] font-medium">
                      {addon.name}
                    </p>
                    <p className="text-[var(--foreground)] font-bold whitespace-nowrap">
                      {addon.price}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Note */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-8">
              {coleccionesVideo.customNote}
            </p>
            <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-8">
              {coleccionesVideo.whatsappText}
            </p>
            <a
              href={`https://wa.me/5217775001071?text=${encodeURIComponent(coleccionesVideo.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border border-[var(--foreground)] text-[var(--foreground)] text-sm tracking-widest uppercase hover:bg-[var(--foreground)] hover:text-white transition-all duration-300"
            >
              {coleccionesVideo.whatsappButton}
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
    </>
  );
}
