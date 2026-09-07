import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://arrebolweddings.com"),
  title: "Colecciones - Ginna & Carlos | Arrebol Weddings",
  description:
    "Propuesta de fotografía y video para Ginna & Carlos - 3 de octubre 2026, Atrio. Cobertura de 4 horas, foto + video con dron, $20,000 MXN.",
  openGraph: {
    title: "Colecciones - Ginna & Carlos | Arrebol Weddings",
    description:
      "Propuesta especial de fotografía y video para su boda. 3 de octubre 2026 · Atrio · 4 horas · dron · $20,000 MXN.",
    type: "website",
    url: "https://arrebolweddings.com/colecciones-ginna-carlos",
    siteName: "Arrebol Weddings",
    images: [
      {
        url: "https://arrebolweddings.com/images/gallery/TOP-PyP-505.webp",
        width: 1200,
        height: 630,
        alt: "Colecciones Ginna & Carlos - Arrebol Weddings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Colecciones - Ginna & Carlos | Arrebol Weddings",
    description:
      "Fotografía y video para Ginna & Carlos. 3 de octubre 2026 · Atrio.",
    images: ["https://arrebolweddings.com/images/gallery/TOP-PyP-505.webp"],
  },
};

export default function ColeccionesGinnaCarlosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
