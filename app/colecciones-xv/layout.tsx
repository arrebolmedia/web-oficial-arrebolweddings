import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colecciones XV Años | Arrebol Weddings",
  description: "Fotografía y video para tu fiesta de XV años. Cobertura completa de 4 horas con fotógrafo, videógrafo y galería digital.",
  openGraph: {
    title: "Colecciones XV Años | Arrebol Weddings",
    description: "Fotografía y video profesional para XV años. Capturamos cada momento de tu celebración con calidad cinematográfica.",
    type: "website",
    images: [
      {
        url: "/images/gallery/TOP-PyP-505.webp",
        width: 1200,
        height: 630,
        alt: "Colecciones XV Años - Arrebol Weddings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Colecciones XV Años | Arrebol Weddings",
    description: "Fotografía y video para XV años desde $29,500 MXN.",
    images: ["/images/gallery/TOP-PyP-505.webp"],
  },
};

export default function ColeccionesXVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
