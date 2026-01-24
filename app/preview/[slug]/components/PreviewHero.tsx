"use client";

const WHATSAPP_BASE = "https://wa.me/5217775001071?text=";

interface LandingData {
  title: string;
  subtitle: string;
  slug: string;
  hero_image: string;
  landing_type: string;
  adjustment_type: string;
  adjustment_value: number;
  show_badge: boolean;
  badge_text: string;
}

interface PreviewHeroProps {
  data: LandingData;
}

export default function PreviewHero({ data }: PreviewHeroProps) {
  const whatsappMessage = `Hola! Soy ${data.title} y me gustaría saber más sobre las colecciones para mi boda.`;
  const whatsappUrl = WHATSAPP_BASE + encodeURIComponent(whatsappMessage);

  const scrollToPackages = () => {
    const packagesSection = document.getElementById("colecciones");
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--background)]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${data.hero_image}')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8 lg:px-12 text-center text-white py-32">
        {/* Badge */}
        {data.show_badge && data.badge_text && (
          <div className="inline-block mb-6">
            <span className="text-xs tracking-[0.3em] uppercase px-4 py-2 border border-white/40 bg-black/20 backdrop-blur-sm">
              {data.badge_text}
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className="font-[var(--font-heading)] text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
          {data.title}
        </h1>

        {/* Subtitle */}
        <div className="mb-8 space-y-2">
          <p className="text-xl md:text-2xl font-light tracking-wide">
            {data.subtitle}
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToPackages}
            className="px-8 py-4 bg-white text-[var(--foreground)] text-sm tracking-widest uppercase hover:bg-white/90 transition-all duration-300 min-w-[220px]"
          >
            Ver colecciones
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-white text-white text-sm tracking-widest uppercase hover:bg-white hover:text-[var(--foreground)] transition-all duration-300 min-w-[220px]"
          >
            Contactar
          </a>
        </div>
      </div>
    </section>
  );
}
