import { notFound } from "next/navigation";
import type { Metadata } from "next";
import DynamicLandingClient from "./DynamicLandingClient";
import { getLandingConfig, absoluteUrl, publicPath, SITE_URL } from "./landingConfig";

// Ruta interna. El público llega por la URL plana /colecciones-<slug>,
// reescrita a esta ruta en next.config.ts.

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const config = await getLandingConfig(slug);

  if (!config) return { title: "Arrebol Weddings" };

  const title = config.seo_title ?? `${config.title} | Arrebol Weddings`;
  const description = config.seo_description_es ?? config.subtitle ?? undefined;
  const url = `${SITE_URL}/${publicPath(config.slug)}`;
  const image = absoluteUrl(config.hero_image ?? "");

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    // Las landings personalizadas con nombre de cliente no deben indexarse.
    robots: config.noindex ? { index: false, follow: false } : undefined,
    openGraph: {
      title,
      description,
      type: "website",
      url,
      siteName: "Arrebol Weddings",
      images: [{ url: image, width: 1200, height: 630, alt: config.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: config.seo_description_en ?? description,
      images: [image],
    },
  };
}

export default async function LandingDinamicaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const config = await getLandingConfig(slug);

  // Slug inexistente o landing despublicada -> 404 real, no página vacía.
  if (!config) notFound();

  return <DynamicLandingClient config={config} />;
}
