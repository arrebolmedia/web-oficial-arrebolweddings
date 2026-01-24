// Precios base de las 4 colecciones estándar
export const basePrices = [
  { name: 'Colección Uno', price: 59000 },
  { name: 'Colección Dos', price: 72000 },
  { name: 'Colección Tres', price: 95000 },
  { name: 'Colección Diamante', price: 110000 },
];

// Definiciones completas de las colecciones estándar
export const baseCollections = [
  {
    name: "Colección Uno",
    features: [
      "8 horas de cobertura",
      "1 fotógrafo",
      "400–500 fotografías",
      "Galería digital",
      "1 videógrafo",
      "Video de 20–25 minutos",
      "Versión 1 minuto",
    ],
    description: "Ideal para bodas íntimas en una sola ubicación, capturando los preparativos, la ceremonia y la recepción. Diseñada para resaltar los momentos más especiales y la conexión personal de celebraciones con hasta 150 invitados.",
    basePrice: 59000,
  },
  {
    name: "Colección Dos",
    features: [
      "10 horas de cobertura",
      "1 fotógrafo",
      "600–700 fotografías",
      "Galería digital",
      "1 videógrafo",
      "Video de 30–35 minutos",
      "Versión 3–5 minutos",
      "Versión 1 minuto",
      'Photobook 8.5x11" (50 páginas)',
      "Sesión pre boda",
    ],
    description: "Diseñada para una cobertura integral de bodas en una o varias locaciones, capturando cada detalle del día. Desde los preparativos hasta los momentos más espectaculares. Incluye una sesión previa que pueden usar para fotos casuales, el civil, rehearsal dinner o cualquier otro momento especial.",
    basePrice: 72000,
  },
  {
    name: "Colección Tres",
    features: [
      "10 horas de cobertura",
      "2 fotógrafos",
      "800–900 fotografías",
      "Galería digital",
      "2 videógrafos",
      "Video de 40–45 minutos",
      "Versión 3–5 minutos",
      "Versión 1 minuto",
      "Dron para tomas aéreas",
      'Photobook 11x11" (50 páginas)',
      "Sesión pre boda",
    ],
    description: "Ideal para bodas que se celebran en múltiples locaciones o durante varios días. Particularmente adecuada para una cobertura extendida de la fiesta. Incluye una sesión previa y otra posterior, que pueden utilizarse con el propósito que ustedes deseen. Cada momento se captura desde múltiples ángulos, permitiendo una visión dinámica y precisa.",
    basePrice: 95000,
  },
  {
    name: "Colección Diamante",
    features: [
      "12 horas de cobertura",
      "2 fotógrafos",
      "1000+ fotografías",
      "Galería digital",
      "2 videógrafos",
      "Video de 50–55 minutos",
      "Versión 3–5 minutos",
      "Versión 1 minuto",
      "Creador de contenido",
      "Dron para tomas aéreas",
      'Photobook 12x12" (50 páginas)',
      "Invitación digital",
      "Sesión pre boda",
      "Sesión post boda",
    ],
    description: "Diseñada para celebrar en grande, con cobertura en múltiples locaciones. Con sesiones antes y después de la boda. Cada detalle se captura desde múltiples ángulos, permitiendo una visión dinámica y precisa. Recomendada para grandes celebraciones con más de 300 invitados y para la cobertura dirigida a redes sociales.",
    basePrice: 110000,
  },
];

// Calcular precio ajustado basado en el tipo de ajuste
export function calculateAdjustedPrice(
  basePrice: number,
  adjustmentType: string,
  adjustmentValue: number
): number {
  if (adjustmentType === 'percentage') {
    const adjustment = basePrice * (adjustmentValue / 100);
    return basePrice + adjustment;
  } else if (adjustmentType === 'fixed') {
    return basePrice + adjustmentValue;
  }
  return basePrice;
}

// Formatear precio en pesos mexicanos
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 0,
  }).format(price);
}

// Obtener colecciones con precios ajustados
export function getAdjustedCollections(
  adjustmentType: string,
  adjustmentValue: number
) {
  return baseCollections.map(col => ({
    ...col,
    price: calculateAdjustedPrice(col.basePrice, adjustmentType, adjustmentValue),
  }));
}
