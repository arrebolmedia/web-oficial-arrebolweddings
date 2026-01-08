"use client";

import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "../context/LanguageContext";

export default function ColeccionesTaniaSilva() {
  const { content, language } = useLanguage();
  const { colecciones } = content;

  const pageTitle = language === "es" 
    ? "COLECCIONES: TANIA SILVA & ARREBOL WEDDINGS"
    : "COLLECTIONS: TANIA SILVA & ARREBOL WEDDINGS";

  return (
    <>
      <div>
      {/* Header con imagen de fondo */}
      <FadeIn>
        <SectionHeader
          title={pageTitle}
          subtitle={colecciones.subtitle}
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

                  {/* Price at bottom - CON 30% DESCUENTO */}
                  <div className="pt-6 border-t border-[var(--border-subtle)] text-center">
                    <div className="mb-1">
                      <span className="text-lg font-light text-[var(--foreground)]/40 line-through">
                        {collection.price.split(' ')[0]}
                      </span>
                      {' '}
                      <span className="text-xs text-[var(--foreground)]/30 uppercase tracking-wider">{collection.price.split(' ')[1]}</span>
                      {' '}
                      <span className="text-xs text-[var(--foreground)]/60 uppercase tracking-wider" style={{textDecoration: 'none'}}>30% OFF</span>
                    </div>
                    <p className="text-2xl font-light text-[var(--foreground)]">
                      {(() => {
                        const priceStr = collection.price.split(' ')[0].replace(/[^0-9]/g, '');
                        const priceNum = parseInt(priceStr);
                        const discountedPrice = Math.round(priceNum * 0.7);
                        return `$${discountedPrice.toLocaleString('es-MX')}`;
                      })()} <span className="text-sm text-[var(--foreground)]/50 uppercase tracking-wider">{collection.price.split(' ')[1]}</span>
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
                    <td className="p-4 text-[var(--foreground)]/70">{colecciones.comparisonLabels.photos}</td>
                    <td className="p-4 text-center text-[var(--foreground)]">400–500</td>
                    <td className="p-4 text-center text-[var(--foreground)]">600–700</td>
                    <td className="p-4 text-center text-[var(--foreground)]">800–900</td>
                    <td className="p-4 text-center text-[var(--foreground)]">1000+</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{colecciones.comparisonLabels.videographers}</td>
                    <td className="p-4 text-center text-[var(--foreground)]">1</td>
                    <td className="p-4 text-center text-[var(--foreground)]">1</td>
                    <td className="p-4 text-center text-[var(--foreground)]">2</td>
                    <td className="p-4 text-center text-[var(--foreground)]">2</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{colecciones.comparisonLabels.videoDuration}</td>
                    <td className="p-4 text-center text-[var(--foreground)]">20–25 min</td>
                    <td className="p-4 text-center text-[var(--foreground)]">30–35 min</td>
                    <td className="p-4 text-center text-[var(--foreground)]">40–45 min</td>
                    <td className="p-4 text-center text-[var(--foreground)]">50–55 min</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{colecciones.comparisonLabels.shortVideo}</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{colecciones.comparisonLabels.oneMinuteVideo}</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{colecciones.comparisonLabels.photobook}</td>
                    <td className="p-4 text-center text-[var(--foreground)] text-sm">—</td>
                    <td className="p-4 text-center text-[var(--foreground)] text-sm">8.5x11" (50 pág)</td>
                    <td className="p-4 text-center text-[var(--foreground)] text-sm">11x11" (50 pág)</td>
                    <td className="p-4 text-center text-[var(--foreground)] text-sm">12x12" (75 pág)</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{colecciones.comparisonLabels.preWedding}</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{colecciones.comparisonLabels.postWedding}</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{colecciones.comparisonLabels.drone}</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{colecciones.comparisonLabels.contentCreator}</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                  </tr>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <td className="p-4 text-[var(--foreground)]/70">{colecciones.comparisonLabels.digitalInvitation}</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">—</td>
                    <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                  </tr>
                  <tr className="bg-[var(--background)]">
                    <td className="p-4 font-[var(--font-heading)] text-lg text-[var(--foreground)]">{colecciones.priceTitle}</td>
                    {colecciones.collections.map((collection, index) => (
                      <td key={index} className="p-4 text-center">
                        <div className="mb-1">
                          <span className="text-base font-light text-[var(--foreground)]/40 line-through">
                            {collection.price.split(' ')[0]}
                          </span>
                          {' '}
                          <span className="text-xs text-[var(--foreground)]/60 uppercase tracking-wider" style={{textDecoration: 'none'}}>30% OFF</span>
                        </div>
                        <div className="text-2xl font-light text-[var(--foreground)]">
                          {(() => {
                            const priceStr = collection.price.split(' ')[0].replace(/[^0-9]/g, '');
                            const priceNum = parseInt(priceStr);
                            const discountedPrice = Math.round(priceNum * 0.7);
                            return `$${discountedPrice.toLocaleString('es-MX')}`;
                          })()}
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
              {colecciones.addonsTitle}
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {colecciones.addons.map((addon, index) => (
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
              {colecciones.customNote}
            </p>
            <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-8">
              {colecciones.whatsappText}
            </p>
            <a
              href={`https://wa.me/5217775001071?text=${encodeURIComponent(colecciones.whatsappMessage)}`}
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
