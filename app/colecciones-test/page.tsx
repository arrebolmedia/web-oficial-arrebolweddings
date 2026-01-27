import CollectionPageClient from '@/components/CollectionPageClient';

export const metadata = {
  title: 'test - Arrebol Weddings',
  description: 'test',
};

const landingData = {
  title: "test",
  subtitle: "test",
  slug: "colecciones-test",
  hero_image: "/images/gallery/SandJ-404.webp",
  landing_type: "client",
  adjustment_type: "none",
  adjustment_value: 0,
  show_badge: false,
  badge_text: "",
};

export default function ColeccionesTestPage() {
  return <CollectionPageClient landingData={landingData} />;
}
