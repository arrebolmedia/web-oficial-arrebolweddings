"use client";

import { pauliaContent } from "../content";

const WHATSAPP_BASE = "https://wa.me/5217775001071?text=";

export default function PauliaPackagesSection() {
  const { packages } = pauliaContent;
  
  const whatsappUrl = WHATSAPP_BASE + encodeURIComponent(packages.whatsappMessage);

  return (
    <section id="colecciones" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Collections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {packages.collections.map((collection, index) => (
            <div
              key={index}
              className={`bg-[var(--background)] border-2 p-10 h-full flex flex-col relative ${
                collection.highlight 
                  ? 'border-[var(--accent-wine)]' 
                  : 'border-[var(--border-subtle)]'
              }`}
            >
              {/* Header */}
              <div className="mb-6">
                <h3 className="font-[var(--font-heading)] text-2xl md:text-3xl text-[var(--foreground)] mb-4">
                  {collection.name}
                </h3>
              </div>

              {/* Description */}
              <p className="text-[var(--foreground)]/60 leading-relaxed mb-8 text-sm">
                {collection.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8 flex-grow">
                {collection.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <span className="text-[var(--accent-wine)] mt-1">✓</span>
                    <span className="text-sm text-[var(--foreground)]/80">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Price */}
              <div className="pt-6 border-t border-[var(--border-subtle)]">
                <div className="text-center">
                  <p className="text-4xl font-light text-[var(--foreground)] mb-1">
                    {collection.price.split(" ")[0]}
                  </p>
                  <p className="text-sm text-[var(--foreground)]/50 uppercase tracking-wider">
                    {collection.price.split(" ")[1]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info adicional */}
        <div className="bg-[var(--background)] border border-[var(--border-subtle)] p-8 md:p-12 mt-12">
          <p className="text-center text-[var(--foreground)]/70 text-sm leading-relaxed max-w-3xl mx-auto">
            Estas colecciones están diseñadas específicamente para tu boda. Si deseas hacer algún ajuste o tienes necesidades especiales, estaremos encantados de crear una propuesta personalizada.
          </p>
        </div>
      </div>
    </section>
  );
}
