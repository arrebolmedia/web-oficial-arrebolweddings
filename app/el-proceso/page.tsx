import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: "El Proceso | Arrebol Weddings",
  description:
    "De la primera llamada a la entrega final. Conoce cómo trabajamos y qué pueden esperar en cada etapa del proceso.",
};

export default function ElProceso() {
  const { proceso } = content;

  return (
    <>
      <div>
      {/* Header */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader title={proceso.title} subtitle={proceso.subtitle} />
          </FadeIn>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-[var(--background)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={200}>
            <p className="mb-12 text-lg text-[var(--foreground)]/80 leading-relaxed text-center max-w-3xl mx-auto">
              {proceso.intro}
            </p>
          </FadeIn>
          <div className="space-y-16">
            {proceso.steps.map((step, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="relative">
                  {/* Content */}
                  <div>
                    <h3 className="font-[var(--font-heading)] text-2xl md:text-3xl text-[var(--foreground)] mb-4">
                      {step.title}
                    </h3>
                    <p className="text-[var(--foreground)]/70 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
