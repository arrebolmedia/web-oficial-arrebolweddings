import { blogPostsEs } from "@/lib/blog-data";
import type { Metadata } from "next";
import BlogPostContent from "./BlogPostContent";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  // Generate static params from Spanish posts (slugs are language-independent)
  return blogPostsEs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  // Use Spanish posts for metadata (default)
  const post = blogPostsEs.find((p) => p.slug === slug);

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
  
  return <BlogPostContent slug={slug} />;
}
