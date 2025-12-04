"use client";

import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { useLanguage } from "@/app/context/LanguageContext";

export default function BlogPreview() {
  const { language } = useLanguage();
  
  // Get the 3 most recent posts
  const recentPosts = blogPosts.slice(0, 3);

  const content = {
    es: {
      subtitle: "NUESTRO BLOG",
      title: "Consejos, ideas e inspiración",
      description: "Reflexiones sobre bodas, amor y todo lo que hay en medio. Artículos para ayudarte a planear, decidir y disfrutar tu camino al altar.",
      cta: "Ver todas las entradas",
    },
    en: {
      subtitle: "OUR BLOG",
      title: "Tips, ideas & inspiration",
      description: "Reflections on weddings, love, and everything in between. Articles to help you plan, decide, and enjoy your journey to the altar.",
      cta: "View all posts",
    },
  };

  const t = content[language];

  return (
    <section className="py-24 md:py-32 bg-[var(--foreground)]/[0.02]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--foreground)]/60 mb-4">
            {t.subtitle}
          </p>
          <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-6xl mb-6">
            {t.title}
          </h2>
          <p className="font-light text-[var(--foreground)]/70 max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {recentPosts.map((post) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.slug}`}
              className="group"
            >
              <article className="h-full flex flex-col">
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden mb-6">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                
                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <p className="text-xs tracking-[0.2em] uppercase text-[var(--foreground)]/50 mb-3">
                    {post.category}
                  </p>
                  <h3 className="font-[var(--font-heading)] text-xl md:text-2xl mb-3 group-hover:text-[var(--accent-wine)] transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="font-light text-sm text-[var(--foreground)]/60 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block text-xs tracking-widest uppercase border border-[var(--foreground)] px-10 py-4 hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors duration-300"
          >
            {t.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
