"use client";

import { useEffect, useState } from "react";
import PreviewHero from "./components/PreviewHero";
import PreviewPackagesSection from "./components/PreviewPackagesSection";

interface LandingData {
  title: string;
  subtitle: string;
  slug: string;
  hero_image: string;
  landing_type: string;
  adjustment_type: string;
  adjustment_value: number;
  show_badge: boolean;
  badge_text: string;
}

interface PreviewClientWrapperProps {
  slug: string;
}

export default function PreviewClientWrapper({ slug }: PreviewClientWrapperProps) {
  const [landingData, setLandingData] = useState<LandingData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPreviewData = async () => {
      try {
        const apiUrl = process.env.NODE_ENV === 'production' 
          ? `https://suite.arrebolweddings.com/api/preview/${slug}`
          : `http://localhost:3001/api/preview/${slug}`;
        
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Preview data not found");
        const data = await response.json();
        setLandingData(data);
      } catch (error) {
        console.error("Error fetching preview data:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPreviewData();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8B5A6F] mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando vista previa...</p>
        </div>
      </div>
    );
  }

  if (error || !landingData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Vista previa no disponible</h1>
          <p className="text-gray-600">No se encontraron datos para esta vista previa.</p>
          <p className="text-sm text-gray-500 mt-4">Asegúrate de que el servidor backend esté corriendo en el puerto 3001.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 text-center">
        <p className="font-bold">🔍 MODO PREVIEW</p>
        <p className="text-sm">Esta es una vista previa temporal. Los cambios no están publicados.</p>
      </div>
      <PreviewHero data={landingData} />
      <PreviewPackagesSection data={landingData} />
      
      {/* Contact Section - Generic */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl text-[var(--foreground)] mb-8 uppercase">
            Siguiente Paso
          </h2>
          <h3 className="text-2xl text-[var(--foreground)] mb-6">
            Conversemos sobre tu boda
          </h3>
          <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-8">
            Cuéntanos más sobre tu visión y resolvamos todas tus dudas sobre las colecciones.
          </p>
          <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-8">
            ¿Prefieres contactarnos por WhatsApp?
          </p>
          <a
            href={`https://wa.me/5217775001071?text=${encodeURIComponent(`Hola! Soy ${landingData.title} y me gustaría conocer más detalles sobre las colecciones para mi boda.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#8B5A6F] text-white text-sm tracking-widest uppercase hover:bg-[#8B5A6F]/90 transition-all duration-300"
          >
            Enviar Mensaje
          </a>
        </div>
      </section>
    </div>
  );
}
