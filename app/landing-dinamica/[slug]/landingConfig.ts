// Configuración de una landing dinámica, servida por la suite.
// Crear una landing es un registro en la BD: no genera archivos ni requiere deploy.

const LANDINGS_API = "https://suite.arrebolweddings.com/api/landings/slug";

export const SITE_URL = "https://arrebolweddings.com";

export interface LandingConfig {
  slug: string;
  title: string;
  subtitle: string | null;
  subtitle_en: string | null;
  hero_image: string | null;
  adjustment_type: "none" | "percentage" | "fixed";
  adjustment_value: number;
  show_discount: boolean;
  whatsapp_message_es: string | null;
  whatsapp_message_en: string | null;
  seo_title: string | null;
  seo_description_es: string | null;
  seo_description_en: string | null;
  noindex: boolean;
}

const DEFAULT_HERO = "/images/gallery/TOP-SyP-324-hero.webp";

export async function getLandingConfig(slug: string): Promise<LandingConfig | null> {
  try {
    // no-store: un cambio de precio o descuento debe verse al instante,
    // sin revalidación ni build.
    const res = await fetch(`${LANDINGS_API}/${encodeURIComponent(slug)}`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    const raw = await res.json();

    return {
      slug: raw.slug,
      title: raw.title,
      subtitle: raw.subtitle ?? null,
      subtitle_en: raw.subtitle_en ?? null,
      hero_image: raw.hero_image || DEFAULT_HERO,
      adjustment_type: raw.adjustment_type ?? "none",
      // Postgres devuelve numeric como string ("-30.00"): convertir o el
      // descuento se aplica como NaN y los precios salen vacíos.
      adjustment_value: Number(raw.adjustment_value ?? 0),
      show_discount: raw.show_discount ?? true,
      whatsapp_message_es: raw.whatsapp_message_es ?? null,
      whatsapp_message_en: raw.whatsapp_message_en ?? null,
      seo_title: raw.seo_title ?? null,
      seo_description_es: raw.seo_description_es ?? null,
      seo_description_en: raw.seo_description_en ?? null,
      noindex: raw.noindex ?? false,
    };
  } catch {
    return null;
  }
}

/**
 * Ruta pública de una landing. El slug se guarda con el prefijo "colecciones-"
 * (convención de las landings existentes) pero la URL ya lo lleva, así que
 * anteponerlo otra vez produciría /colecciones-colecciones-<algo>.
 */
export function publicPath(slug: string): string {
  return slug.startsWith("colecciones-") ? slug : `colecciones-${slug}`;
}

/** URL absoluta para OpenGraph; acepta rutas relativas o absolutas. */
export function absoluteUrl(pathOrUrl: string): string {
  return pathOrUrl.startsWith("http") ? pathOrUrl : `${SITE_URL}${pathOrUrl}`;
}
