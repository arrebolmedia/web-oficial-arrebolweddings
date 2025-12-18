"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "../context/LanguageContext";

export default function ColeccionesDeFoto() {
  const { content } = useLanguage();
  const { colecciones, coleccionesFoto } = content;

  // Colecciones solo de fotografía con precios a la mitad
  const photoCollections = colecciones.collections.map(col => {
    const priceNum = parseInt(col.price.replace(/[^0-9]/g, ''));
    const halfPrice = Math.round(priceNum / 2);
    
    return {
      name: col.name,
      features: col.features.filter(f => 
        !f.toLowerCase().includes('videógrafo') && 
        !f.toLowerCase().includes('videographer') &&
        !f.toLowerCase().includes('video') &&
        !f.toLowerCase().includes('dron') &&
        !f.toLowerCase().includes('drone')
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
          title={coleccionesFoto.title}
          subtitle={coleccionesFoto.subtitle}
          backgroundImage="/images/gallery/TOP-PyP-505.webp"
        />
      </FadeIn>

      {/* Collections */}
      <section className="py-16 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={200}>
            <p className="mb-12 text-lg text-[var(--foreground)]/80 leading-relaxed text-center max-w-3xl mx-auto">
              {coleccionesFoto.intro}
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {photoCollections.map((collection, index) => (
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
                {coleccionesFoto.comparisonTitle}
              </h3>
              <table className="w-full bg-white border border-[var(--border-subtle)]">
                <thead>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <th className="p-4 text-left font-[var(--font-heading)] text-lg text-[var(--foreground)] bg-[var(--background)]">
                      {coleccionesFoto.tableLabels.features}
                    </th>
                    {photoCollections.map((collection, index) => (
                      <th key={index} className="p-4 text-center font-[var(--font-heading)] text-lg text-[var(--foreground)] bg-[var(--background)] min-w-[180px]">
                        {collection.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{coleccionesFoto.tableLabels.coverage}</td>
                    <td className="p-4 text-center text-[var(--foreground)]">8</td>
                    <td className="p-4 text-center text-[var(--foreground)]">10</td>
                    <td className="p-4 text-center text-[var(--foreground)]">12</td>
                    <td className="p-4 text-center text-[var(--foreground)]">12</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{coleccionesFoto.tableLabels.photographers}</td>
                    <td className="p-4 text-center text-[var(--foreground)]">1</td>
                    <td className="p-4 text-center text-[var(--foreground)]">1</td>
                    <td className="p-4 text-center text-[var(--foreground)]">1</td>
                    <td className="p-4 text-center text-[var(--foreground)]">2</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{coleccionesFoto.tableLabels.photos}</td>
                    <td className="p-4 text-center text-[var(--foreground)]">400–500</td>
                    <td className="p-4 text-center text-[var(--foreground)]">600–700</td>
                    <td className="p-4 text-center text-[var(--foreground)]">800–900</td>
                    <td className="p-4 text-center text-[var(--foreground)]">1000+</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{coleccionesFoto.tableLabels.photobook}</td>
                    <td className="p-4 text-center text-[var(--foreground)] text-sm">8.5x11" (50 pág)</td>
                    <td className="p-4 text-center text-[var(--foreground)] text-sm">8.5x11" (50 pág)</td>
                    <td className="p-4 text-center text-[var(--foreground)] text-sm">11x11" (50 pág)</td>
                    <td className="p-4 text-center text-[var(--foreground)] text-sm">12x12" (75 pág)</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{coleccionesFoto.tableLabels.preWedding}</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{coleccionesFoto.tableLabels.postWedding}</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{coleccionesFoto.tableLabels.contentCreator}</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{coleccionesFoto.tableLabels.digitalInvitation}</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                  </tr>
                  <tr className="bg-[var(--background)]">
                    <td className="p-4 font-[var(--font-heading)] text-lg text-[var(--foreground)]">{coleccionesFoto.tableLabels.price}</td>
                    {photoCollections.map((collection, index) => (
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
              href={`https://wa.me/5217775001071?text=${encodeURIComponent(coleccionesFoto.whatsappMessage)}`}
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
