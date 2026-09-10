// Configuración de una landing dinámica, servida por la suite.
// Crear una landing es un registro en la BD: no genera archivos ni requiere deploy.

const LANDINGS_API = "https://suite.arrebolweddings.com/api/landings/slug";

export const SITE_URL = "https://arrebolweddings.com";

/** Paquete a la medida (custom_packages en la suite). */
export interface CustomPackage {
  name: string;
  tagline?: string;
  description?: string;
  features: string[];
  price: number;
  original_price?: number;
}

/** Cifra destacada bajo los paquetes a la medida. */
export interface Highlight {
  value: string;
  label: string;
}

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
  /** Vacío = la landing muestra el catálogo de colecciones. */
  custom_packages: CustomPackage[];
  highlights: Highlight[];
  intro: string | null;
}

const DEFAULT_HERO = "/images/gallery/TOP-SyP-324-hero.webp";

// La suite valida al guardar, pero la página que ve el cliente no debe romperse
// por un registro viejo o editado a mano: un paquete sin nombre o sin precio
// numérico se descarta en vez de salir como "$NaN".
function paquetesValidos(v: unknown): CustomPackage[] {
  if (!Array.isArray(v)) return [];
  return v
    .filter((p: any) => p && typeof p.name === "string" && Number.isFinite(Number(p.price)))
    .map((p: any) => ({
      name: p.name,
      tagline: typeof p.tagline === "string" && p.tagline.trim() ? p.tagline : undefined,
      description: typeof p.description === "string" && p.description.trim() ? p.description : undefined,
      // Un renglón en blanco salía como un guion suelto en la tarjeta.
      features: Array.isArray(p.features)
        ? p.features.filter((f: unknown) => typeof f === "string" && f.trim() !== "")
        : [],
      price: Number(p.price),
      original_price:
        p.original_price != null && Number.isFinite(Number(p.original_price))
          ? Number(p.original_price)
          : undefined,
    }));
}

function cifrasValidas(v: unknown): Highlight[] {
  if (!Array.isArray(v)) return [];
  return v.filter((h: any) => h && typeof h.value === "string" && typeof h.label === "string");
}

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
      custom_packages: paquetesValidos(raw.custom_packages),
      highlights: cifrasValidas(raw.highlights),
      // Un intro en blanco dejaba un párrafo vacío en vez del texto por defecto.
      intro: typeof raw.intro === "string" && raw.intro.trim() ? raw.intro.trim() : null,
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
