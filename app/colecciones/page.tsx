import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: "Colecciones | Arrebol Weddings",
  description:
    "Colecciones de fotografía y video para contar su boda de principio a fin. Desde celebraciones íntimas hasta grandes eventos.",
};

export default function Colecciones() {
  const { paquetes } = content;

  return (
    <>
      <div>
      {/* Header */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title={paquetes.title}
              subtitle={paquetes.subtitle}
            />
          </FadeIn>
        </div>
      </section>

      {/* Collections */}
      <section className="py-16 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={200}>
            <p className="mb-12 text-lg text-[var(--foreground)]/80 leading-relaxed text-center max-w-3xl mx-auto">
              {paquetes.intro}
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {paquetes.collections.map((collection, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="bg-white border border-[var(--border-subtle)] p-10 h-full flex flex-col">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="font-[var(--font-heading)] text-3xl text-[var(--foreground)] mb-4">
                      {collection.name}
                    </h3>
                    <p className="text-4xl text-[var(--foreground)] mb-1">
                      {collection.price.split(' ')[0]}
                    </p>
                    <p className="text-sm text-[var(--foreground)]/50 uppercase tracking-wider">
                      {collection.price.split(' ')[1]}
                    </p>
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

                  {/* CTA */}
                  <div className="pt-4">
                    <Link
                      href="/contacto"
                      className="inline-block w-full text-center px-8 py-3 border border-[var(--foreground)] text-[var(--foreground)] text-sm tracking-widest uppercase hover:bg-[var(--foreground)] hover:text-white transition-all duration-300"
                    >
                      [ Consultar disponibilidad ]
                    </Link>
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
              {paquetes.customNote}
            </p>
            <Link
              href="/contacto"
              className="inline-block px-8 py-3 border border-[var(--foreground)] text-[var(--foreground)] text-sm tracking-widest uppercase hover:bg-[var(--foreground)] hover:text-white transition-all duration-300"
            >
              Ir a contacto
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
    </>
  );
}
