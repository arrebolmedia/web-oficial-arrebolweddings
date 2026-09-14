"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "../../context/LanguageContext";
import type { SampleGallery } from "./landingConfig";

// Galerías de ejemplo de una landing (sample_galleries en la suite): los
// entregables reales de otras bodas, enlazados desde la propuesta en vez de
// mandarse aparte por WhatsApp.
//
// Las portadas son las que publica el proveedor —pic-time, vidflow— y se cargan
// desde su CDN: la landing es dinámica y no puede depender de subir imágenes al
// repo y desplegar cada vez que se agrega un ejemplo.

const TEXTOS = {
  es: {
    titulo: "Galerías de ejemplo",
    intro: "Así se ve el trabajo terminado: las mismas galerías que reciben nuestras parejas.",
    foto: "Fotografía",
    video: "Video",
    verFoto: "Ver galería",
    verVideo: "Ver video",
  },
  en: {
    titulo: "Sample galleries",
    intro: "This is what the finished work looks like — the same galleries our couples receive.",
    foto: "Photography",
    video: "Film",
    verFoto: "View gallery",
    verVideo: "Watch film",
  },
};

function Tarjeta({ galeria, verTexto }: { galeria: SampleGallery; verTexto: string }) {
  // Una portada rota no debe dejar un hueco con el icono de imagen partida:
  // la tarjeta cae al fondo con el nombre encima.
  const [sinPortada, setSinPortada] = useState(false);

  return (
    <a
      href={galeria.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[var(--background)] border border-[var(--border-subtle)]">
        {galeria.image && !sinPortada ? (
          // eslint-disable-next-line @next/next/no-img-element -- portada remota del proveedor; ver comentario de arriba
          <img
            src={galeria.image}
            alt={galeria.title}
            loading="lazy"
            decoding="async"
            onError={() => setSinPortada(true)}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-[var(--font-heading)] text-2xl text-[var(--foreground)]/30 px-6 text-center">
              {galeria.title}
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/30" />

        <div className="absolute inset-x-0 bottom-0 p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <span className="text-xs tracking-[0.25em] uppercase text-white">{verTexto}</span>
        </div>
      </div>

      <div className="pt-4 text-center">
        <h3 className="font-[var(--font-heading)] text-xl text-[var(--foreground)]">
          {galeria.title}
        </h3>
        {galeria.meta && (
          <p className="mt-1 text-xs tracking-[0.2em] uppercase text-[var(--foreground)]/45">
            {galeria.meta}
          </p>
        )}
      </div>
    </a>
  );
}

export default function SampleGalleriesSection({ galerias }: { galerias: SampleGallery[] }) {
  const { language } = useLanguage();
  const t = language === "en" ? TEXTOS.en : TEXTOS.es;

  const fotos = galerias.filter((g) => g.kind === "photo");
  const videos = galerias.filter((g) => g.kind === "video");

  const grupos = [
    { titulo: t.foto, ver: t.verFoto, items: fotos },
    { titulo: t.video, ver: t.verVideo, items: videos },
  ].filter((g) => g.items.length > 0);

  if (grupos.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="font-[var(--font-heading)] text-3xl text-[var(--foreground)] text-center uppercase">
            {t.titulo}
          </h2>
          <p className="mt-4 mb-14 text-center text-[var(--foreground)]/70 leading-relaxed max-w-2xl mx-auto">
            {t.intro}
          </p>
        </FadeIn>

        {grupos.map((grupo, gi) => (
          <div key={grupo.titulo} className={gi > 0 ? "mt-16" : ""}>
            <FadeIn>
              <p className="mb-8 text-center text-xs tracking-[0.3em] uppercase text-[var(--foreground)]/40">
                {grupo.titulo}
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {grupo.items.map((galeria, i) => (
                <FadeIn key={galeria.url} delay={100 * (i + 1)}>
                  <Tarjeta galeria={galeria} verTexto={grupo.ver} />
                </FadeIn>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
