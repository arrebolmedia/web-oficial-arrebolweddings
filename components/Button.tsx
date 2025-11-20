import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) => {
  const baseClasses =
    "inline-block px-8 py-3 rounded-sm font-medium transition-all duration-300 text-center";

  const variantClasses = {
    primary:
      "bg-[var(--accent-wine)] text-white hover:bg-[var(--accent-terracotta)] shadow-sm hover:shadow-md",
    secondary:
      "bg-[var(--accent-blush)] text-[var(--foreground)] hover:bg-[var(--accent-terracotta)] hover:text-white",
    outline:
      "border-2 border-[var(--accent-wine)] text-[var(--accent-wine)] hover:bg-[var(--accent-wine)] hover:text-white",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
