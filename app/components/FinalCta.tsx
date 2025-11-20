import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { content } from "@/lib/content";

const FinalCta = () => {
  const { finalCta } = content.home;

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Column */}
          <FadeIn>
            <div className="space-y-6 lg:pr-12">
              <div>
                <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl text-[var(--foreground)] mb-4">
                  {finalCta.title}
                </h2>
              </div>

              <p className="text-[var(--foreground)]/80 leading-relaxed">
                {finalCta.subtitle}
              </p>

              <div className="pt-4">
                <Link
                  href="/contacto"
                  className="inline-block px-8 py-3 border border-[var(--foreground)] text-[var(--foreground)] text-sm tracking-widest uppercase hover:bg-[var(--foreground)] hover:text-white transition-all duration-300"
                >
                  {finalCta.button}
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* Image Column */}
          <FadeIn delay={200}>
            <div className="relative aspect-[4/5] max-w-lg mx-auto lg:mx-0 lg:ml-auto">
              <Image
                src="/images/gallery/_MG_0967.webp"
                alt="Contact us"
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

export default FinalCta;
