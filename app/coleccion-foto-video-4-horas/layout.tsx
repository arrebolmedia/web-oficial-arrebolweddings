import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colección Esencial · Foto y Video 4 Horas | Arrebol Weddings",
  description:
    "Cobertura esencial de fotografía y video para bodas íntimas o celebraciones breves. 4 horas, foto + video, $15,000 MXN.",
  openGraph: {
    title: "Colección Esencial · Foto y Video 4 Horas | Arrebol Weddings",
    description:
      "Cobertura esencial de fotografía y video para celebraciones íntimas. 4 horas · $15,000 MXN.",
    type: "website",
    images: [
      {
        url: "/images/gallery/TOP-PyP-505.webp",
        width: 1200,
        height: 630,
        alt: "Colección Esencial · Foto y Video 4 Horas - Arrebol Weddings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Colección Esencial · Foto y Video 4 Horas",
    description: "Fotografía y video para celebraciones íntimas desde $15,000 MXN.",
    images: ["/images/gallery/TOP-PyP-505.webp"],
  },
};

export default function ColeccionFotoVideo4HorasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
