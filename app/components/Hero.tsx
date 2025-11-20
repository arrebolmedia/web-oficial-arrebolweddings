import Button from "@/components/Button";
import { content } from "@/lib/content";

const Hero = () => {
  const { hero } = content.home;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40 z-10" />
        <div className="w-full h-full bg-gradient-to-br from-[var(--accent-blush)] via-[var(--accent-terracotta)] to-[var(--accent-wine)]" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight text-balance">
          {hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          {hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/galeria" variant="primary">
            {hero.cta1}
          </Button>
          <Button href="/contacto" variant="outline" className="border-white text-white hover:bg-white hover:text-[var(--foreground)]">
            {hero.cta2}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
