"use client";

import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "@/app/context/LanguageContext";

const Process = () => {
  const { content } = useLanguage();
  const { process } = content.home;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Text Content */}
          <div>
            <FadeIn>
              <SectionHeader title={process.title} />
            </FadeIn>

            <div className="mt-16 space-y-12">
              {process.steps.map((step, index) => (
                <FadeIn key={index} delay={index * 100}>
                  <div className="flex flex-col gap-3">
                    <h3 className="font-[var(--font-heading)] text-3xl text-[var(--foreground)]">
                      {step.title}
                    </h3>
                    <p className="text-[var(--foreground)]/70 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Ver m├ís button */}
            <FadeIn delay={500}>
              <div className="mt-12">
                <Link
                  href="/el-proceso"
                  className="inline-block px-8 py-3 border border-[var(--foreground)] text-[var(--foreground)] text-sm tracking-widest uppercase hover:bg-[var(--foreground)] hover:text-white transition-all duration-300"
                >
                  {content.common.viewMore}
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right Column - Image */}
          <FadeIn delay={200}>
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 lg:ml-auto lg:sticky lg:top-24">
              <Image
                src="/images/gallery/SyP-109.webp"
                alt="El proceso"
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

export default Process;
