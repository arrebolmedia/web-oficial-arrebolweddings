"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "../context/LanguageContext";

export default function ColeccionesGioSullivan() {
  const { content } = useLanguage();
  const { colecciones } = content;

  return (
    <>
      <div>
      {/* Header con imagen de fondo */}
      <FadeIn>
        <SectionHeader
          title="PARA GIO SULLIVAN"
          subtitle="Fotografía y Video de Bodas"
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
            {colecciones.collections.map((collection, index) => (
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
                {colecciones.comparisonTitle}
              </h3>
              <table className="w-full bg-white border border-[var(--border-subtle)]">
                <thead>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <th className="p-4 text-left font-[var(--font-heading)] text-lg text-[var(--foreground)] bg-[var(--background)]">
                      {colecciones.featuresTitle}
                    </th>
                    {colecciones.collections.map((collection, index) => (
                      <th key={index} className="p-4 text-center font-[var(--font-heading)] text-lg text-[var(--foreground)] bg-[var(--background)] min-w-[180px]">
                        {collection.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{colecciones.comparisonLabels.coverage}</td>
                    <td className="p-4 text-center text-[var(--foreground)]">8</td>
                    <td className="p-4 text-center text-[var(--foreground)]">10</td>
                    <td className="p-4 text-center text-[var(--foreground)]">10</td>
                    <td className="p-4 text-center text-[var(--foreground)]">12</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{colecciones.comparisonLabels.photographers}</td>
                    <td className="p-4 text-center text-[var(--foreground)]">1</td>
                    <td className="p-4 text-center text-[var(--foreground)]">1</td>
                    <td className="p-4 text-center text-[var(--foreground)]">2</td>
                    <td className="p-4 text-center text-[var(--foreground)]">2</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{colecciones.comparisonLabels.videos}</td>
                    <td className="p-4 text-center text-[var(--foreground)]">1</td>
                    <td className="p-4 text-center text-[var(--foreground)]">1</td>
                    <td className="p-4 text-center text-[var(--foreground)]">1</td>
                    <td className="p-4 text-center text-[var(--foreground)]">1</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{colecciones.comparisonLabels.photosDelivered}</td>
                    <td className="p-4 text-center text-[var(--foreground)]">300+</td>
                    <td className="p-4 text-center text-[var(--foreground)]">400+</td>
                    <td className="p-4 text-center text-[var(--foreground)]">500+</td>
                    <td className="p-4 text-center text-[var(--foreground)]">600+</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{colecciones.comparisonLabels.deliveryTime}</td>
                    <td className="p-4 text-center text-[var(--foreground)]" colSpan={4}>5 a 7 semanas</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{colecciones.comparisonLabels.onlineGallery}</td>
                    <td className="p-4 text-center text-[var(--foreground)]" colSpan={4}>✓</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{colecciones.comparisonLabels.highRes}</td>
                    <td className="p-4 text-center text-[var(--foreground)]" colSpan={4}>✓</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{colecciones.comparisonLabels.printRights}</td>
                    <td className="p-4 text-center text-[var(--foreground)]" colSpan={4}>✓</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{colecciones.comparisonLabels.highlights}</td>
                    <td className="p-4 text-center text-[var(--foreground)]" colSpan={4}>2-3 min</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{colecciones.comparisonLabels.fullCeremony}</td>
                    <td className="p-4 text-center text-[var(--foreground)]" colSpan={4}>✓</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{colecciones.comparisonLabels.toastsSpeeches}</td>
                    <td className="p-4 text-center text-[var(--foreground)]" colSpan={4}>✓</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-[var(--foreground)]/70">{colecciones.comparisonLabels.fullParty}</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✗</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✗</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                  </tr>
                </tbody>
              </table>
            </FadeIn>
          </div>

          {/* CTA */}
          <FadeIn delay={600}>
            <div className="mt-16 text-center">
              <p className="text-xl text-[var(--foreground)]/70 mb-8 max-w-2xl mx-auto">
                {colecciones.ctaText}
              </p>
              <Link
                href="/contacto"
                className="inline-block bg-[var(--foreground)] text-[var(--background)] px-10 py-4 text-sm tracking-widest uppercase hover:bg-[var(--foreground)]/90 transition-colors"
              >
                {colecciones.ctaButton}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
      </div>
    </>
  );
}
