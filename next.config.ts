import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ['image/webp'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizePackageImports: ['react-intersection-observer'],
  },
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      // fallback: solo se evalúa cuando ninguna ruta real coincidió, así que
      // las ~48 landings estáticas (/colecciones-julio-2026, etc.) siguen
      // sirviéndose desde su archivo. Cualquier otro /colecciones-<slug> se
      // resuelve dinámicamente contra la suite.
      fallback: [
        { source: '/colecciones-:slug', destination: '/landing-dinamica/:slug' },
      ],
    };
  },
};

export default nextConfig;
