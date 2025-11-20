import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import { content } from "@/lib/content";

const About = () => {
  const { about } = content.home;

  return (
    <section className="py-24 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <FadeIn>
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0">
              <Image
                src="/images/gallery/TOP-SyD-162.webp"
                alt="About Arrebol Weddings"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          {/* Text Column */}
          <FadeIn delay={200}>
            <div className="space-y-8">
              <div>
                <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl text-[var(--foreground)] mb-6">
                  {about.title}
                </h2>
              </div>

              <div className="space-y-4 text-[var(--foreground)]/80 leading-relaxed">
                {about.text.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-4">
                <p className="font-[var(--font-heading)] text-xl text-[var(--accent-wine)] italic">
                  Capturamos el tipo de imágenes que se vuelven más valiosas con el tiempo
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;
