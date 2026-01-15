"use client";

import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";

const WhoWeAre = () => {
  const { content } = useLanguage();
  const { whoWeAre } = content.home;

  return (
    <section className="py-24 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Column - Now on the right */}
          <FadeIn delay={200} className="lg:order-2">
            <div className="space-y-8">
              <div>
                <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl text-[var(--foreground)] mb-6">
                  {whoWeAre.title}
                </h2>
              </div>

              <div className="space-y-4 text-[var(--foreground)]/80 leading-relaxed">
                {whoWeAre.text.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Image Column - Now on the left */}
          <FadeIn className="lg:order-1">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0">
              <Image
                src="/images/us/us2.webp"
                alt="Brenda and Anthony - Arrebol Weddings"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
