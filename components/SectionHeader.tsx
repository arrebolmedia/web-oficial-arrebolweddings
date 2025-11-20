interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

const SectionHeader = ({
  title,
  subtitle,
  className = "",
  centered = true,
}: SectionHeaderProps) => {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl text-[var(--foreground)] mb-4 whitespace-pre-line uppercase">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[var(--foreground)]/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
