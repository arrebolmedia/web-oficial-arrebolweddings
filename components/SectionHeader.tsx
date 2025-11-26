import Image from "next/image";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
  backgroundImage?: string; // Nueva prop para imagen de fondo
}

const SectionHeader = ({
  title,
  subtitle,
  className = "",
  centered = true,
  backgroundImage,
}: SectionHeaderProps) => {
  return (
    <div className={`relative min-h-[60vh] flex items-center justify-center ${centered ? "text-center" : ""} ${className}`}>
      {/* Imagen de fondo */}
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
          />
          {/* Overlay oscuro para mejorar legibilidad */}
          <div className="absolute inset-0 bg-black/30" />
        </>
      )}
      
      {/* Contenido */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-white mb-4 whitespace-pre-line uppercase" style={{ fontWeight: 300 }}>
          {title}
        </h2>
        {subtitle && (
          <p className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default SectionHeader;
