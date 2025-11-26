import { blogPosts } from "@/lib/blog-data";
import BlogHero from "@/components/BlogHero";
import BlogCard from "@/components/BlogCard";

export default function BlogPage() {
  // Use the first post as the featured hero post
  const featuredPost = blogPosts[0];
  // Use the rest of the posts for the grid
  const gridPosts = blogPosts.slice(1);

  return (
    <main className="min-h-screen bg-[var(--background)] pt-24 pb-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 md:mb-24 text-center">
          <span className="block text-xs tracking-[0.3em] uppercase text-[var(--foreground)]/50 mb-4">
            Journal
          </span>
          <h1 className="font-[var(--font-heading)] text-5xl md:text-7xl text-[var(--foreground)] mb-6">
            Historias & Inspiración
          </h1>
          <p className="font-light text-[var(--foreground)]/70 max-w-2xl mx-auto">
            Un espacio dedicado a compartir bodas reales, consejos de planificación y la belleza detrás de cada detalle.
          </p>
        </div>

        {/* Featured Post */}
        <BlogHero post={featuredPost} />

        {/* Blog Grid */}
        <div className="mt-20 md:mt-32">
          <div className="flex items-end justify-between mb-12 border-b border-[var(--foreground)]/10 pb-6">
            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl text-[var(--foreground)]">
              Últimas Publicaciones
            </h2>
            <span className="hidden md:block text-xs tracking-widest uppercase text-[var(--foreground)]/50">
              Explora nuestro archivo
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {gridPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Newsletter / CTA Section */}
        <div className="mt-32 py-20 bg-[var(--foreground)]/5 text-center rounded-sm md:w-[70%] mx-auto">
          <h3 className="font-[var(--font-heading)] text-3xl md:text-4xl mb-4">
            ¿Planeando tu boda?
          </h3>
          <p className="font-light mb-8 max-w-md mx-auto">
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
    </main>
  );
}
