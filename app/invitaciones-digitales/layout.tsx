import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invitaciones Digitales para Bodas | Arrebol Weddings",
  description: "Una página web personalizada para tu boda: cuenta regresiva, itinerario, galería, hoteles, mesa de regalos y confirmación de asistencia. Todo en un enlace.",
  openGraph: {
    title: "Invitaciones Digitales para Bodas | Arrebol Weddings",
    description: "Todo lo que tus invitados necesitan saber, en un solo enlace. Diseño personalizado, RSVP integrado, hoteles, mesa de regalos y más.",
    type: "website",
    images: [
      {
        url: "/images/gallery/TOP-SyP-116.webp",
        width: 1200,
        height: 630,
        alt: "Invitaciones Digitales - Arrebol Weddings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invitaciones Digitales para Bodas | Arrebol Weddings",
    description: "Todo lo que tus invitados necesitan saber, en un solo enlace.",
    images: ["/images/gallery/TOP-SyP-116.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
