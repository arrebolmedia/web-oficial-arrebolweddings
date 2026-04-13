"use client";

import { useState, useEffect } from "react";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "../app/context/LanguageContext";
import { WHATSAPP_BASE } from "@/lib/config";

const PACKAGES_API = "https://suite.arrebolweddings.com/api/packages";

export interface Package {
  id: string;
  name: string;
  price: number;
  coverage_hours: number;
  photographers_count: number;
  videographers_count: number;
  photos_range: string;
  video_duration: string;
  features: string[];
  description: string;
  comparison: {
    short_video: boolean;
    one_minute_video: boolean;
    photobook: string | null;
    pre_wedding: boolean;
    post_wedding: boolean;
    drone: boolean;
    content_creator: boolean;
    digital_invitation: boolean;
  };
}

interface CollectionsViewProps {
  // Ajuste de precio para planners/promos
  adjustmentType?: "none" | "percentage" | "fixed";
  adjustmentValue?: number;
  // Mostrar tachado y badge de descuento
  showDiscount?: boolean;
  // Mensaje WhatsApp personalizado
  whatsappMessage?: string;
}

function calculatePrice(
  basePrice: number,
  adjustmentType: string,
  adjustmentValue: number
): number {
  if (adjustmentType === "percentage") {
    return Math.round(basePrice * (1 + adjustmentValue / 100));
  }
  if (adjustmentType === "fixed") {
    return basePrice + adjustmentValue;
  }
  return basePrice;
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 0,
  }).format(price);
}

const CHECK = "✓";
const DASH = "—";

export default function CollectionsView({
  adjustmentType = "none",
  adjustmentValue = 0,
  showDiscount = false,
  whatsappMessage,
}: CollectionsViewProps) {
  const { content } = useLanguage();
  const { colecciones } = content;
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(PACKAGES_API)
      .then((r) => r.json())
      .then((data) => setPackages(data))
      .catch(() => setPackages([]))
      .finally(() => setLoading(false));
  }, []);

  const finalMessage = whatsappMessage || colecciones.whatsappMessage;

  if (loading) {
    return (
      <div className="py-32 text-center text-[var(--foreground)]/40">
        {content.common.loading}
      </div>
    );
  }

  const comparisonRows = [
    {
      label: colecciones.comparisonLabels.coverage,
      getValue: (p: Package) => String(p.coverage_hours),
    },
    {
      label: colecciones.comparisonLabels.photographers,
      getValue: (p: Package) => String(p.photographers_count),
    },
    {
      label: colecciones.comparisonLabels.photos,
      getValue: (p: Package) => p.photos_range,
    },
    {
      label: colecciones.comparisonLabels.videographers,
      getValue: (p: Package) => String(p.videographers_count),
    },
    {
      label: colecciones.comparisonLabels.videoDuration,
      getValue: (p: Package) => p.video_duration,
    },
    {
      label: colecciones.comparisonLabels.shortVideo,
      getValue: (p: Package) => (p.comparison.short_video ? CHECK : DASH),
    },
    {
      label: colecciones.comparisonLabels.oneMinuteVideo,
      getValue: (p: Package) => (p.comparison.one_minute_video ? CHECK : DASH),
    },
    {
      label: colecciones.comparisonLabels.photobook,
      getValue: (p: Package) => p.comparison.photobook ?? DASH,
    },
    {
      label: colecciones.comparisonLabels.preWedding,
      getValue: (p: Package) => (p.comparison.pre_wedding ? CHECK : DASH),
    },
    {
      label: colecciones.comparisonLabels.postWedding,
      getValue: (p: Package) => (p.comparison.post_wedding ? CHECK : DASH),
    },
    {
      label: colecciones.comparisonLabels.drone,
      getValue: (p: Package) => (p.comparison.drone ? CHECK : DASH),
    },
    {
      label: colecciones.comparisonLabels.contentCreator,
      getValue: (p: Package) => (p.comparison.content_creator ? CHECK : DASH),
    },
    {
      label: colecciones.comparisonLabels.digitalInvitation,
      getValue: (p: Package) =>
        p.comparison.digital_invitation ? CHECK : DASH,
    },
  ];

  return (
    <>
      {/* Cards de colecciones */}
      <section className="py-16 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={200}>
            <p className="mb-12 text-lg text-[var(--foreground)]/80 leading-relaxed text-center max-w-3xl mx-auto">
              {colecciones.intro}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packages.map((pkg, index) => {
              const adjustedPrice = calculatePrice(
                pkg.price,
                adjustmentType,
                adjustmentValue
              );
              const isDiscount =
                showDiscount &&
                adjustmentType === "percentage" &&
                adjustmentValue < 0;

              return (
                <FadeIn key={pkg.id} delay={index * 100}>
                  <div className="bg-white border border-[var(--border-subtle)] p-10 h-full flex flex-col">
                    <div className="mb-6">
                      <h3 className="font-[var(--font-heading)] text-3xl text-[var(--foreground)] mb-4">
                        {pkg.name}
                      </h3>
                    </div>

                    <p className="text-[var(--foreground)]/60 leading-relaxed mb-8 italic text-sm">
                      {pkg.description}
                    </p>

                    <div className="space-y-2 mb-8 flex-grow text-sm text-[var(--foreground)]/70">
                      {pkg.features.map((feature, fIndex) => (
                        <p key={fIndex}>{feature}</p>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-[var(--border-subtle)] text-center">
                      {isDiscount ? (
                        <>
                          <p className="text-lg text-[var(--foreground)]/40 line-through mb-1">
                            {formatPrice(pkg.price)}
                          </p>
                          <p className="text-2xl font-light text-[var(--foreground)]">
                            {formatPrice(adjustedPrice)}{" "}
                            <span className="text-sm text-[var(--foreground)]/50 uppercase tracking-wider">
                              MXN
                            </span>
                          </p>
                          <p className="text-sm text-[#C67B5C] font-semibold mt-2">
                            {Math.abs(adjustmentValue)}% OFF
                          </p>
                        </>
                      ) : (
                        <p className="text-2xl font-light text-[var(--foreground)]">
                          {formatPrice(adjustedPrice)}{" "}
                          <span className="text-sm text-[var(--foreground)]/50 uppercase tracking-wider">
                            MXN
                          </span>
                        </p>
                      )}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {/* Tabla comparativa — generada desde los datos */}
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
                    {packages.map((pkg) => (
                      <th
                        key={pkg.id}
                        className="p-4 text-center font-[var(--font-heading)] text-lg text-[var(--foreground)] bg-[var(--background)] min-w-[180px]"
                      >
                        {pkg.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, rIndex) => (
                    <tr
                      key={rIndex}
                      className="border-b border-[var(--border-subtle)]"
                    >
                      <td className="p-4 text-[var(--foreground)]/70">
                        {row.label}
                      </td>
                      {packages.map((pkg) => (
                        <td
                          key={pkg.id}
                          className="p-4 text-center text-[var(--foreground)] text-sm"
                        >
                          {row.getValue(pkg)}
                        </td>
                      ))}
                    </tr>
                  ))}
                  {/* Fila de precios */}
                  <tr className="bg-[var(--background)]">
                    <td className="p-4 font-[var(--font-heading)] text-lg text-[var(--foreground)]">
                      {colecciones.priceTitle}
                    </td>
                    {packages.map((pkg) => {
                      const adjustedPrice = calculatePrice(
                        pkg.price,
                        adjustmentType,
                        adjustmentValue
                      );
                      const isDiscount =
                        showDiscount &&
                        adjustmentType === "percentage" &&
                        adjustmentValue < 0;
                      return (
                        <td key={pkg.id} className="p-4 text-center">
                          {isDiscount ? (
                            <>
                              <div className="text-base text-[var(--foreground)]/40 line-through">
                                {formatPrice(pkg.price)}
                              </div>
                              <div className="text-2xl font-light text-[var(--foreground)]">
                                {formatPrice(adjustedPrice)}
                              </div>
                              <div className="text-xs text-[#C67B5C] font-semibold">
                                {Math.abs(adjustmentValue)}% OFF
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="text-2xl font-light text-[var(--foreground)]">
                                {formatPrice(adjustedPrice)}
                              </div>
                              <div className="text-xs text-[var(--foreground)]/60 uppercase">
                                MXN
                              </div>
                            </>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                </tbody>
              </table>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Adicionales */}
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

      {/* CTA WhatsApp */}
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
              href={`${WHATSAPP_BASE}${encodeURIComponent(finalMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border border-[var(--foreground)] text-[var(--foreground)] text-sm tracking-widest uppercase hover:bg-[var(--foreground)] hover:text-white transition-all duration-300"
            >
              {colecciones.whatsappButton}
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
