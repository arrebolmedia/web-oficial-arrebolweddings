"use client";

import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";

export default function ColeccionesPaulinaJesus() {
  const collections = [
    {
      name: "Colección Uno",
      description: "Paquete de fotografía profesional con 1 fotógrafo para capturar los momentos especiales de tu boda.",
      price: "$20,000",
      features: [
        "✓ 10 horas de cobertura",
        "✓ 1 fotógrafo profesional",
        "✓ 500-600 fotografías editadas",
        "✓ Galería digital privada",
        "✓ Entrega en 4-6 semanas",
      ]
    },
    {
      name: "Colección Dos",
      description: "Paquete completo con 2 fotógrafos para una cobertura más amplia y diversa de tu celebración.",
      price: "$24,000",
      features: [
        "✓ 10 horas de cobertura",
        "✓ 2 fotógrafos profesionales",
        "✓ 800-900 fotografías editadas",
        "✓ Mayor cobertura de ángulos",
        "✓ Galería digital privada",
        "✓ Entrega en 4-6 semanas",
      ]
    }
  ];

  return (
    <>
      <div>
        {/* Header con imagen de fondo */}
        <FadeIn>
          <SectionHeader
            title="PAULINA & JESÚS"
            subtitle="11 de abril 2026 • Las Mañanitas"
            backgroundImage="/images/gallery/TOP-AyJ-500.webp"
          />
        </FadeIn>

        {/* Intro Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn delay={200}>
              <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl text-[var(--foreground)] mb-6">
                Colecciones de Fotografía
              </h2>
              <p className="text-lg text-[var(--foreground)]/80 leading-relaxed">
                Paquetes diseñados especialmente para capturar cada momento de tu día especial. 
                Elige entre 1 o 2 fotógrafos profesionales con 10 horas de cobertura continua.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Collections */}
        <section className="py-16 bg-[var(--background)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {collections.map((collection, index) => (
                <FadeIn key={index} delay={index * 100}>
                  <div className="bg-white border-2 border-[var(--border-subtle)] p-10 h-full flex flex-col hover:border-[var(--foreground)]/20 transition-all duration-300">
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="font-[var(--font-heading)] text-3xl text-[var(--foreground)] mb-4">
                        {collection.name}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-[var(--foreground)]/60 leading-relaxed mb-8 text-sm">
                      {collection.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-8 flex-grow">
                      {collection.features.map((feature, fIndex) => (
                        <p key={fIndex} className="text-[var(--foreground)]/80 text-sm">
                          {feature}
                        </p>
                      ))}
                    </div>

                    {/* Price at bottom */}
                    <div className="pt-6 border-t border-[var(--border-subtle)] text-center">
                      <p className="text-3xl font-light text-[var(--foreground)] mb-2">
                        {collection.price}
                      </p>
                      <p className="text-sm text-[var(--foreground)]/50 uppercase tracking-wider">
                        MXN
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Comparison Table */}
            <div className="mt-16 overflow-x-auto">
              <FadeIn delay={400}>
                <h3 className="font-[var(--font-heading)] text-3xl text-[var(--foreground)] text-center mb-8 uppercase">
                  Comparación de Colecciones
                </h3>
                <table className="w-full bg-white border border-[var(--border-subtle)]">
                  <thead>
                    <tr className="border-b border-[var(--border-subtle)]">
                      <th className="p-4 text-left font-[var(--font-heading)] text-lg text-[var(--foreground)] bg-[var(--background)]">
                        Características
                      </th>
                      <th className="p-4 text-center font-[var(--font-heading)] text-lg text-[var(--foreground)] bg-[var(--background)] min-w-[200px]">
                        Colección Uno
                      </th>
                      <th className="p-4 text-center font-[var(--font-heading)] text-lg text-[var(--foreground)] bg-[var(--background)] min-w-[200px]">
                        Colección Dos
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[var(--border-subtle)]">
                      <td className="p-4 text-[var(--foreground)]/70">Horas de cobertura</td>
                      <td className="p-4 text-center text-[var(--foreground)] font-medium">10 horas</td>
                      <td className="p-4 text-center text-[var(--foreground)] font-medium">10 horas</td>
                    </tr>
                    <tr className="border-b border-[var(--border-subtle)]">
                      <td className="p-4 text-[var(--foreground)]/70">Número de fotógrafos</td>
                      <td className="p-4 text-center text-[var(--foreground)] font-medium">1</td>
                      <td className="p-4 text-center text-[var(--foreground)] font-medium">2</td>
                    </tr>
                    <tr className="border-b border-[var(--border-subtle)]">
                      <td className="p-4 text-[var(--foreground)]/70">Fotografías editadas</td>
                      <td className="p-4 text-center text-[var(--foreground)]">500-600</td>
                      <td className="p-4 text-center text-[var(--foreground)]">800-900</td>
                    </tr>
                    <tr className="border-b border-[var(--border-subtle)]">
                      <td className="p-4 text-[var(--foreground)]/70">Cobertura de ángulos</td>
                      <td className="p-4 text-center text-[var(--foreground)]">Estándar</td>
                      <td className="p-4 text-center text-[var(--foreground)]">Amplia</td>
                    </tr>
                    <tr className="border-b border-[var(--border-subtle)]">
                      <td className="p-4 text-[var(--foreground)]/70">Galería digital privada</td>
                      <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                      <td className="p-4 text-center text-[var(--foreground)]">✓</td>
                    </tr>
                    <tr className="border-b border-[var(--border-subtle)]">
                      <td className="p-4 text-[var(--foreground)]/70">Tiempo de entrega</td>
                      <td className="p-4 text-center text-[var(--foreground)]">4-6 semanas</td>
                      <td className="p-4 text-center text-[var(--foreground)]">4-6 semanas</td>
                    </tr>
                    <tr className="bg-[var(--background)]">
                      <td className="p-4 font-[var(--font-heading)] text-lg text-[var(--foreground)]">Precio</td>
                      <td className="p-4 text-center">
                        <div className="text-2xl font-light text-[var(--foreground)]">$20,000</div>
                        <div className="text-xs text-[var(--foreground)]/60 uppercase">MXN</div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="text-2xl font-light text-[var(--foreground)]">$24,000</div>
                        <div className="text-xs text-[var(--foreground)]/60 uppercase">MXN</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Addons Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h3 className="font-[var(--font-heading)] text-3xl md:text-4xl text-[var(--foreground)] text-center mb-12 uppercase">
                Adicionales
              </h3>
            </FadeIn>
            <div className="max-w-2xl mx-auto">
              <FadeIn delay={100}>
                <div className="bg-[var(--background)] p-8 border border-[var(--border-subtle)]">
                  <div className="flex justify-between items-center gap-6">
                    <div>
                      <p className="text-[var(--foreground)] font-medium text-lg mb-2">
                        Photobook 50 páginas
                      </p>
                      <p className="text-[var(--foreground)]/60 text-sm">
                        Álbum impreso profesional de alta calidad
                      </p>
                    </div>
                    <p className="text-[var(--foreground)] font-bold text-2xl whitespace-nowrap">
                      $4,200
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[var(--background)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h3 className="font-[var(--font-heading)] text-3xl text-[var(--foreground)] mb-6">
                ¿Tienes dudas?
              </h3>
              <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-8">
                Contáctanos por WhatsApp para resolver cualquier pregunta sobre nuestras colecciones 
                y asegurar tu fecha.
              </p>
              <a
                href="https://wa.me/5217775001071?text=Hola,%20me%20interesan%20las%20colecciones%20de%20fotografía%20para%20Paulina%20y%20Jesús%20-%2011%20de%20abril%202026"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 border-2 border-[var(--foreground)] text-[var(--foreground)] text-sm tracking-widest uppercase hover:bg-[var(--foreground)] hover:text-white transition-all duration-300 font-medium"
              >
                Contactar por WhatsApp
              </a>
            </FadeIn>
          </div>
        </section>
      </div>
    </>
  );
}
