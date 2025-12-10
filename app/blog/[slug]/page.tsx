import { blogPosts } from "@/lib/blog-data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post no encontrado | Arrebol Weddings",
    };
  }

  return {
    title: `${post.title} | Arrebol Weddings`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      locale: "es_MX",
      siteName: "Arrebol Weddings",
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Find previous and next posts
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;

  // Get random related posts (excluding current, prev, and next)
  const excludeIds = [post.id, prevPost?.id, nextPost?.id].filter(Boolean);
  const availablePosts = blogPosts.filter((p) => !excludeIds.includes(p.id));
  
  // Shuffle and pick 3
  const shuffled = [...availablePosts].sort(() => Math.random() - 0.5);
  const relatedPosts = shuffled.slice(0, 3);

  return (
    <article className="min-h-screen bg-[var(--background)] pt-24 pb-20">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] md:h-[70vh]">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <div className="flex items-center space-x-4 text-xs tracking-[0.2em] uppercase mb-6">
            <span>{post.category}</span>
          </div>
          <h1 className="font-[var(--font-heading)] text-4xl md:text-6xl lg:text-7xl max-w-4xl leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="prose prose-lg prose-headings:font-[var(--font-heading)] prose-a:text-[var(--accent-wine)] max-w-none">
          <p className="lead text-xl md:text-2xl font-light text-[var(--foreground)]/80 mb-12 leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="space-y-6 text-[var(--foreground)]/70 font-light">
            {post.content ? (
              (() => {
                const paragraphs = post.content.split('\n\n');
                const elements: React.ReactNode[] = [];
                let i = 0;
                
                while (i < paragraphs.length) {
                  const trimmed = paragraphs[i].trim();
                  
                  // Check if this is the start of a bullet list
                  if (trimmed.startsWith('•')) {
                    const listItems: string[] = [];
                    while (i < paragraphs.length && paragraphs[i].trim().startsWith('•')) {
                      listItems.push(paragraphs[i].trim().substring(1).trim());
                      i++;
                    }
                    elements.push(
                      <ul key={`list-${i}`} className="list-disc list-inside space-y-2 my-6 ml-4">
                        {listItems.map((item, idx) => (
                          <li key={idx} className="text-[var(--foreground)]/70">{item}</li>
                        ))}
                      </ul>
                    );
                    continue;
                  }
                  
                  // Check if paragraph starts with a number followed by a period (e.g., "1. ", "2. ")
                  const isNumberedHeading = /^\d+\.\s/.test(trimmed);
                  
                  // Check if it's a short line that looks like a heading
                  // Must be between 35-80 chars, single line, no punctuation at end
                  // This excludes short list items like "edición profesional"
                  const isTitleLike = !trimmed.includes('\n') && 
                                      trimmed.length < 80 && 
                                      trimmed.length > 35 &&
                                      !trimmed.endsWith('.') && 
                                      !trimmed.endsWith('?') &&
                                      !trimmed.endsWith('!') &&
                                      !trimmed.endsWith('"') &&
                                      !trimmed.endsWith(')') &&
                                      !trimmed.endsWith(':') &&
                                      !trimmed.startsWith('—') &&
                                      !trimmed.startsWith('"') &&
                                      /[a-záéíóúñ]$/i.test(trimmed);
                  
                  if (isNumberedHeading || isTitleLike) {
                    elements.push(
                      <h2 
                        key={i} 
                        className="text-2xl md:text-3xl mt-12 mb-4 text-[var(--foreground)] font-[var(--font-heading)]"
                      >
                        {trimmed}
                      </h2>
                    );
                  } else {
                    elements.push(
                      <p key={i} className="whitespace-pre-line">
                        {paragraphs[i]}
                      </p>
                    );
                  }
                  i++;
                }
                return elements;
              })()
            ) : (
              <>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <h2 className="text-3xl mt-12 mb-6 text-[var(--foreground)]">La Magia de los Detalles</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <blockquote className="border-l-2 border-[var(--accent-wine)] pl-6 italic my-12 text-xl text-[var(--foreground)]">
                  "El amor se compone de una sola alma que habita en dos cuerpos." - Aristóteles
                </blockquote>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full md:w-[70%] mx-auto px-6 mb-20">
        <div className="py-16 bg-[var(--foreground)]/5 text-center rounded-sm">
          <h3 className="font-[var(--font-heading)] text-3xl md:text-4xl mb-4">
            ¿Planeando tu boda?
          </h3>
          <p className="font-light mb-8 max-w-md mx-auto px-4">
            Escríbenos para revisar tu fecha, conocer tus planes y construir juntos el recuerdo de ese día.
          </p>
          <a 
            href="https://wa.me/5217775001071?text=Hola!%20Vengo%20del%20blog%20y%20quisiera%20m%C3%A1s%20informaci%C3%B3n" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs tracking-widest uppercase bg-[var(--foreground)] text-[var(--background)] px-8 py-3 border border-[var(--foreground)] hover:bg-[var(--background)] hover:text-[var(--foreground)] transition-colors duration-300"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <div className="py-20 bg-[var(--foreground)]/[0.02]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <p className="text-xs tracking-[0.3em] uppercase text-[var(--foreground)]/60 mb-4">
                SIGUE LEYENDO
              </p>
              <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl">
                También te puede interesar
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id} 
                  href={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <article className="h-full flex flex-col">
                    <div className="relative aspect-[3/4] overflow-hidden mb-6">
                      <Image
                        src={relatedPost.coverImage}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>
                    
                    <div className="flex-1 flex flex-col">
                      <p className="text-xs tracking-[0.2em] uppercase text-[var(--foreground)]/50 mb-3">
                        {relatedPost.category}
                      </p>
                      <h3 className="font-[var(--font-heading)] text-xl md:text-2xl mb-3 group-hover:text-[var(--accent-wine)] transition-colors duration-300 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="font-light text-sm text-[var(--foreground)]/60 line-clamp-3">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Navigation Back */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 pt-16 pb-20">
        {/* Previous/Next Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {prevPost ? (
            <Link 
              href={`/blog/${prevPost.slug}`}
              className="group p-6 border border-[var(--foreground)]/10 hover:border-[var(--accent-wine)]/30 transition-colors duration-300"
            >
              <span className="text-xs tracking-widest uppercase text-[var(--foreground)]/50 mb-2 block">
                ← Anterior
              </span>
              <span className="font-[var(--font-heading)] text-lg group-hover:text-[var(--accent-wine)] transition-colors duration-300 line-clamp-2">
                {prevPost.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {nextPost ? (
            <Link 
              href={`/blog/${nextPost.slug}`}
              className="group p-6 border border-[var(--foreground)]/10 hover:border-[var(--accent-wine)]/30 transition-colors duration-300 text-right"
            >
              <span className="text-xs tracking-widest uppercase text-[var(--foreground)]/50 mb-2 block">
                Siguiente →
              </span>
              <span className="font-[var(--font-heading)] text-lg group-hover:text-[var(--accent-wine)] transition-colors duration-300 line-clamp-2">
                {nextPost.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* Back to Blog */}
        <div className="pt-8 border-t border-[var(--foreground)]/10 flex justify-center">
          <Link 
            href="/blog"
            className="text-xs tracking-widest uppercase hover:text-[var(--accent-wine)] transition-colors duration-300"
          >
            ← Volver al Blog
          </Link>
        </div>
      </div>
    </article>
  );
}
