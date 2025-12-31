"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "../context/LanguageContext";

export default function ColeccionUno2Videografos() {
  const { content } = useLanguage();
  const { colecciones } = content;

  // Obtener la Colección Uno
  const collectionOne = colecciones.collections[0]; // Colección Uno es la primera

  // Calcular el precio con 2 videógrafos
  const basePrice = 59000; // Precio base de Colección Uno
  const additionalVideographer = 7000; // Precio del videógrafo adicional
  const priceBeforeDiscount = basePrice + additionalVideographer; // $66,000
  const discount = 0.15; // 15% de descuento
  const totalPrice = Math.round(priceBeforeDiscount * (1 - discount)); // $56,100

  // Modificar las features para mostrar 2 videógrafos
  const modifiedFeatures = collectionOne.features.map(feature => {
    if (feature === "1 videógrafo" || feature === "1 videographer") {
      return "2 videógrafos";
    }
    return feature;
  });

  return (
    <>
      <div>
        {/* Header con imagen de fondo */}
        <FadeIn>
          <SectionHeader
            title="Julia & Héctor"
            subtitle="27 de febrero, 2027 • Colección Uno con 2 Videógrafos"
            backgroundImage="/images/gallery/TOP-PyP-505.webp"
          />
        </FadeIn>

        {/* Collection Card */}
        <section className="py-16 bg-[var(--background)]">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn delay={200}>
              <p className="mb-12 text-lg text-[var(--foreground)]/80 leading-relaxed text-center">
                Propuesta especial para <strong>Julia & Héctor</strong>: Nuestra Colección Uno con <strong>2 videógrafos</strong> para capturar su boda desde múltiples ángulos, 
                con un <strong>15% de descuento</strong> especial.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="bg-white border-2 border-[var(--accent)] p-10 shadow-lg">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="font-[var(--font-heading)] text-4xl text-[var(--foreground)] mb-4 text-center">
                    {collectionOne.name}
                  </h3>
                  <p className="text-center text-[var(--accent)] font-semibold text-lg">
                    Con 2 Videógrafos • 27 Feb 2027
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8 text-base text-[var(--foreground)]/80">
                  {modifiedFeatures.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start">
                      <span className="mr-3 text-[var(--accent)] text-xl">✓</span>
                      <p className={feature === "2 videógrafos" ? "font-semibold text-[var(--accent)]" : ""}>
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Price Breakdown */}
                <div className="mb-6 p-4 bg-[var(--background)] rounded">
                  <h4 className="font-semibold text-[var(--foreground)] mb-3 text-center">
                    Desglose de precio:
                  </h4>
                  <div className="space-y-2 text-sm text-[var(--foreground)]/70">
                    <div className="flex justify-between">
                      <span>Colección Uno (base)</span>
                      <span>${basePrice.toLocaleString('es-MX')} MXN</span>
                    </div>
                    <div className="flex justify-between">
                      <span>+ Videógrafo adicional</span>
                      <span>+ ${additionalVideographer.toLocaleString('es-MX')} MXN</span>
                    </div>
                    <div className="flex justify-between text-[var(--foreground)]/50">
                      <span>Subtotal</span>
                      <span>${priceBeforeDiscount.toLocaleString('es-MX')} MXN</span>
                    </div>
                    <div className="flex justify-between text-green-600 font-semibold">
                      <span>🎉 Descuento 15%</span>
                      <span>- ${Math.round(priceBeforeDiscount * discount).toLocaleString('es-MX')} MXN</span>
                    </div>
                    <div className="pt-3 border-t border-[var(--border-subtle)] flex justify-between font-bold text-base text-[var(--foreground)]">
                      <span>Total</span>
                      <span>${totalPrice.toLocaleString('es-MX')} MXN</span>
                    </div>
                  </div>
                </div>

                {/* Price at bottom */}
                <div className="pt-6 border-t-2 border-[var(--accent)] text-center">
                  <p className="text-sm text-[var(--foreground)]/60 mb-2 uppercase tracking-wider">
                    Precio total
                  </p>
                  <p className="text-4xl font-bold text-[var(--accent)] mb-2">
                    ${totalPrice.toLocaleString('es-MX')}
                  </p>
                  <p className="text-sm text-[var(--foreground)]/60 uppercase tracking-wider">
                    MXN56,100 MXN - con 15% descuento
                  </p>
                </div>

                {/* CTA Button */}
                <div className="mt-8 text-center">
                  <a
                    href={`https://wa.me/5218115353339?text=${encodeURIComponent(
                      "¡Hola! Soy Julia/Héctor. Nos interesa la Colección Uno con 2 videógrafos ($56,100 MXN) para nuestra boda el 27 de febrero de 2027. ¿Está disponible esta fecha?"
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[var(--accent)] text-white px-8 py-3 hover:bg-[var(--accent-dark)] transition-colors uppercase tracking-wider text-sm font-semibold"
                  >
                    Consultar disponibilidad
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Back to collections */}
            <div className="mt-12 text-center">
              <Link
                href="/colecciones-2026"
                className="text-[var(--foreground)]/60 hover:text-[var(--accent)] transition-colors text-sm uppercase tracking-wider"
              >
                ← Ver todas las colecciones
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
