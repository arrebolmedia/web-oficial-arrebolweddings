"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "../context/LanguageContext";

export default function ElProceso() {
  const { content } = useLanguage();
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={200}>
            <p className="mb-16 text-lg text-[var(--foreground)]/80 leading-relaxed text-center max-w-3xl mx-auto">
              {proceso.intro}
            </p>
          </FadeIn>
          <div className="space-y-24 lg:space-y-32">
            {proceso.steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const images = [
                "/images/gallery/TOP-SyP-116.webp",
                "/images/gallery/CyD-82.webp",
                "/images/gallery/KyB-285.webp",
                "/images/gallery/PyP-154.webp",
                "/images/gallery/SYO-796.webp",
                "/images/gallery/_MG_1174.webp",
              ];

              return (
                <FadeIn key={index} delay={index * 100}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Text Column */}
                    <div className={!isEven ? 'lg:order-2' : ''}>
                      <h3 className="font-[var(--font-heading)] text-3xl md:text-4xl text-[var(--foreground)] mb-6">
                        {step.title}
                      </h3>
                      <p className="text-[var(--foreground)]/70 text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Image Column */}
                    <div className={!isEven ? 'lg:order-1' : ''}>
                      <div className="relative aspect-[4/5] max-w-md mx-auto">
                        <Image
                          src={images[index]}
                          alt={step.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn delay={500}>
            <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-8">
              {proceso.whatsappText}
            </p>
            <a
              href={`https://wa.me/5217775001071?text=${encodeURIComponent(proceso.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border border-[var(--foreground)] text-[var(--foreground)] text-sm tracking-widest uppercase hover:bg-[var(--foreground)] hover:text-white transition-all duration-300"
            >
              {proceso.whatsappButton}
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
    </>
  );
}
