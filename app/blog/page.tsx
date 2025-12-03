import { blogPosts } from "@/lib/blog-data";
import BlogHero from "@/components/BlogHero";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";

const POSTS_PER_PAGE = 9;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const currentPage = Math.max(1, parseInt(params.page || "1", 10));
  
  // Use the first post as the featured hero post (only on page 1)
  const featuredPost = blogPosts[0];
  // Get all posts except the featured one for pagination
  const allGridPosts = blogPosts.slice(1);
  
  // Calculate pagination
  const totalPosts = allGridPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedPosts = allGridPosts.slice(startIndex, endIndex);
  
  // Ensure current page is valid
  const validCurrentPage = Math.min(currentPage, totalPages || 1);

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

        {/* Featured Post - Only show on first page */}
        {validCurrentPage === 1 && <BlogHero post={featuredPost} />}

        {/* Blog Grid */}
        <div className="mt-20 md:mt-32">
          <div className="flex items-end justify-between mb-12 border-b border-[var(--foreground)]/10 pb-6">
            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl text-[var(--foreground)]">
              {validCurrentPage === 1 ? "Últimas Publicaciones" : `Publicaciones - Página ${validCurrentPage}`}
            </h2>
            <span className="hidden md:block text-xs tracking-widest uppercase text-[var(--foreground)]/50">
              {totalPosts} artículos
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {paginatedPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-16 flex justify-center items-center gap-4">
              {validCurrentPage > 1 && (
                <Link
                  href={validCurrentPage === 2 ? "/blog" : `/blog?page=${validCurrentPage - 1}`}
                  className="px-6 py-2 text-xs tracking-widest uppercase border border-[var(--foreground)]/20 hover:border-[var(--foreground)] transition-colors duration-300"
                >
                  ← Anterior
                </Link>
              )}
              
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Link
                    key={page}
                    href={page === 1 ? "/blog" : `/blog?page=${page}`}
                    className={`w-10 h-10 flex items-center justify-center text-sm transition-colors duration-300 ${
                      page === validCurrentPage
                        ? "bg-[var(--foreground)] text-[var(--background)]"
                        : "hover:bg-[var(--foreground)]/10"
                    }`}
                  >
                    {page}
                  </Link>
                ))}
              </div>

              {validCurrentPage < totalPages && (
                <Link
                  href={`/blog?page=${validCurrentPage + 1}`}
                  className="px-6 py-2 text-xs tracking-widest uppercase border border-[var(--foreground)]/20 hover:border-[var(--foreground)] transition-colors duration-300"
                >
                  Siguiente →
                </Link>
              )}
            </div>
          )}
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
