import { blogPosts } from "@/lib/blog-data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

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
          
          <div className="space-y-6 text-[var(--foreground)]/70 font-light whitespace-pre-line">
            {post.content ? (
              post.content
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

      {/* Navigation Back */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 pb-20">
        <div className="pt-12 border-t border-[var(--foreground)]/10 flex justify-between items-center">
          <Link 
            href="/blog"
            className="text-xs tracking-widest uppercase hover:text-[var(--accent-wine)] transition-colors duration-300 flex items-center gap-2"
          >
            ← Volver al Blog
          </Link>
        </div>
      </div>
    </article>
  );
}
