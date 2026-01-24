"use client";

import { getAdjustedCollections, formatPrice } from '@/lib/pricing';

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

interface PreviewPackagesSectionProps {
  data: LandingData;
}

export default function PreviewPackagesSection({ data }: PreviewPackagesSectionProps) {
  const whatsappMessage = `Hola! Soy ${data.title} y me gustaría conocer más detalles sobre las colecciones para mi boda.`;
  const whatsappUrl = WHATSAPP_BASE + encodeURIComponent(whatsappMessage);

  // Get collections with adjusted prices
  const collections = getAdjustedCollections(
    data.adjustment_type,
    data.adjustment_value
  );

  return (
    <section id="colecciones" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Adjustment Info */}
        {data.adjustment_type !== 'none' && (
          <div className="bg-green-50 border border-green-200 p-6 mb-12 text-center">
            <p className="text-green-800 font-medium">
              {data.adjustment_type === 'percentage' 
                ? `Precios con ${data.adjustment_value > 0 ? 'incremento' : 'descuento'} del ${Math.abs(data.adjustment_value)}%`
                : `Precios con ajuste de ${formatPrice(Math.abs(data.adjustment_value))}`
              }
            </p>
          </div>
        )}

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="bg-[var(--background)] border border-[var(--border-subtle)] p-10 h-full flex flex-col"
            >
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

              {/* Price */}
              <div className="pt-6 border-t border-[var(--border-subtle)] text-center">
                {data.adjustment_type === 'percentage' && data.adjustment_value < 0 ? (
                  <>
                    <p className="text-lg text-[var(--foreground)]/40 line-through mb-1">
                      {formatPrice(collection.basePrice)}
                    </p>
                    <p className="text-2xl font-light text-[var(--foreground)]">
                      {formatPrice(collection.price)} <span className="text-sm text-[var(--foreground)]/50 uppercase tracking-wider">MXN</span>
                    </p>
                    <p className="text-sm text-[var(--foreground)]/70 font-semibold mt-2">
                      {Math.abs(data.adjustment_value)}% OFF
                    </p>
                  </>
                ) : (
                  <p className="text-2xl font-light text-[var(--foreground)]">
                    {formatPrice(collection.price)} <span className="text-sm text-[var(--foreground)]/50 uppercase tracking-wider">MXN</span>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Info adicional */}
        <div className="bg-[var(--background)] border border-[var(--border-subtle)] p-8 md:p-12 mb-16">
          <p className="text-center text-[var(--foreground)]/70 text-sm leading-relaxed max-w-3xl mx-auto">
            Si su boda tiene características muy específicas (bodas destino, celebraciones de varios días, eventos íntimos fuera de la ciudad), podemos ajustar cualquiera de estas colecciones o crear una propuesta a la medida. Escríbannos y lo diseñamos juntos.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto hidden lg:block">
          <h3 className="font-[var(--font-heading)] text-3xl text-[var(--foreground)] text-center mb-8 uppercase">
            Tabla Comparativa
          </h3>
          <table className="w-full bg-white border border-[var(--border-subtle)]">
            <thead>
              <tr className="border-b border-[var(--border-subtle)]">
                <th className="p-4 text-left font-[var(--font-heading)] text-lg text-[var(--foreground)] bg-[var(--background)]">
                  Características
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
                <td className="p-4 text-[var(--foreground)]/70">Horas de cobertura</td>
                <td className="p-4 text-center text-[var(--foreground)]">8</td>
                <td className="p-4 text-center text-[var(--foreground)]">10</td>
                <td className="p-4 text-center text-[var(--foreground)]">10</td>
                <td className="p-4 text-center text-[var(--foreground)]">12</td>
              </tr>
              <tr className="border-b border-[var(--border-subtle)]">
                <td className="p-4 text-[var(--foreground)]/70">Fotógrafos</td>
                <td className="p-4 text-center text-[var(--foreground)]">1</td>
                <td className="p-4 text-center text-[var(--foreground)]">1</td>
                <td className="p-4 text-center text-[var(--foreground)]">2</td>
                <td className="p-4 text-center text-[var(--foreground)]">2</td>
              </tr>
              <tr className="border-b border-[var(--border-subtle)]">
                <td className="p-4 text-[var(--foreground)]/70">Fotografías</td>
                <td className="p-4 text-center text-[var(--foreground)]">400–500</td>
                <td className="p-4 text-center text-[var(--foreground)]">600–700</td>
                <td className="p-4 text-center text-[var(--foreground)]">800–900</td>
                <td className="p-4 text-center text-[var(--foreground)]">1000+</td>
              </tr>
              <tr className="border-b border-[var(--border-subtle)]">
                <td className="p-4 text-[var(--foreground)]/70">Videógrafos</td>
                <td className="p-4 text-center text-[var(--foreground)]">1</td>
                <td className="p-4 text-center text-[var(--foreground)]">1</td>
                <td className="p-4 text-center text-[var(--foreground)]">2</td>
                <td className="p-4 text-center text-[var(--foreground)]">2</td>
              </tr>
              <tr className="border-b border-[var(--border-subtle)]">
                <td className="p-4 text-[var(--foreground)]/70">Duración del video</td>
                <td className="p-4 text-center text-[var(--foreground)]">20–25 min</td>
                <td className="p-4 text-center text-[var(--foreground)]">30–35 min</td>
                <td className="p-4 text-center text-[var(--foreground)]">40–45 min</td>
                <td className="p-4 text-center text-[var(--foreground)]">50–55 min</td>
              </tr>
              <tr className="border-b border-[var(--border-subtle)]">
                <td className="p-4 text-[var(--foreground)]/70">Video corto (3-5 min)</td>
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
                <td className="p-4 text-[var(--foreground)]/70">Photobook</td>
                <td className="p-4 text-center text-[var(--foreground)]">—</td>
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
                <td className="p-4 text-[var(--foreground)]/70">Dron</td>
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
                {collections.map((collection, index) => (
                  <td key={index} className="p-4 text-center">
                    {data.adjustment_type === 'percentage' && data.adjustment_value < 0 ? (
                      <>
                        <div className="text-base text-[var(--foreground)]/40 line-through">{formatPrice(collection.basePrice)}</div>
                        <div className="text-2xl font-light text-[var(--foreground)]">{formatPrice(collection.price)}</div>
                        <div className="text-xs text-[#C67B5C] font-semibold">{Math.abs(data.adjustment_value)}% OFF</div>
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
        </div>
      </div>
    </section>
  );
}
