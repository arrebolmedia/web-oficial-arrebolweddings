"use client";

import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "../app/context/LanguageContext";
import { getAdjustedCollections, formatPrice } from "@/lib/pricing";

const WHATSAPP_BASE = "https://wa.me/5217775001071?text=";

interface LandingData {
  title: string;
  subtitle: string;
  slug: string;
  hero_image: string;
  landing_type: string;
  adjustment_type: string;
  adjustment_value: number;
  show_badge: boolean;
  badge_text: string;
}

interface CollectionPageClientProps {
  landingData: LandingData;
}

export default function CollectionPageClient({ landingData }: CollectionPageClientProps) {
  const { content } = useLanguage();
  const { colecciones } = content;

  // Get collections with adjusted prices
  const collections = getAdjustedCollections(
    landingData.adjustment_type,
    landingData.adjustment_value
  );

  // WhatsApp message
  const whatsappMessage = landingData.landing_type === 'planner'
    ? `Hola! Soy ${landingData.title} y me gustaría conocer más detalles sobre las colecciones para mi boda.`
    : colecciones.whatsappMessage;
  
  const whatsappUrl = WHATSAPP_BASE + encodeURIComponent(whatsappMessage);

  return (
    <>
      <div>
        {/* Header con imagen de fondo y badge */}
        <FadeIn>
          <div className="relative">
            <SectionHeader
              title={landingData.title}
              subtitle={landingData.subtitle}
              backgroundImage={landingData.hero_image}
            />
            {/* Badge overlay */}
            {landingData.show_badge && landingData.badge_text && (
              <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
                <span className="text-xs tracking-[0.3em] uppercase px-4 py-2 border border-white/60 bg-black/30 backdrop-blur-sm text-white">
                  {landingData.badge_text}
                </span>
              </div>
            )}
          </div>
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
              {collections.map((collection, index) => (
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
                      {landingData.adjustment_type === 'percentage' && landingData.adjustment_value < 0 ? (
                        <>
                          <p className="text-lg text-[var(--foreground)]/40 line-through mb-1">
                            {formatPrice(collection.basePrice)}
                          </p>
                          <p className="text-2xl font-light text-[var(--foreground)]">
                            {formatPrice(collection.price)} <span className="text-sm text-[var(--foreground)]/50 uppercase tracking-wider">MXN</span>
                          </p>
                          <p className="text-sm text-[#C67B5C] font-semibold mt-2">
                            {Math.abs(landingData.adjustment_value)}% OFF
                          </p>
                        </>
                      ) : (
                        <p className="text-2xl font-light text-[var(--foreground)]">
                          {formatPrice(collection.price)} <span className="text-sm text-[var(--foreground)]/50 uppercase tracking-wider">MXN</span>
                        </p>
                      )}
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
                      {collections.map((collection, index) => (
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
                      <td className="p-4 text-center text-[var(--foreground)]">—</td>
                      <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                      <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                      <td className="p-4 text-center text-[var(--foreground)]">✓</td>
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
                      {collections.map((collection, index) => (
                        <td key={index} className="p-4 text-center">
                          {landingData.adjustment_type === 'percentage' && landingData.adjustment_value < 0 ? (
                            <>
                              <div className="text-base text-[var(--foreground)]/40 line-through">{formatPrice(collection.basePrice)}</div>
                              <div className="text-2xl font-light text-[var(--foreground)]">{formatPrice(collection.price)}</div>
                              <div className="text-xs text-[#C67B5C] font-semibold">{Math.abs(landingData.adjustment_value)}% OFF</div>
                            </>
                          ) : (
                            <>
                              <div className="text-2xl font-light text-[var(--foreground)]">{formatPrice(collection.price)}</div>
                              <div className="text-xs text-[var(--foreground)]/60 uppercase">MXN</div>
                            </>
                          )}
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
                href={whatsappUrl}
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
