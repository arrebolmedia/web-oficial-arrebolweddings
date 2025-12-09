import BlogPageContent from "./BlogPageContent";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const currentPage = Math.max(1, parseInt(params.page || "1", 10));

  return <BlogPageContent currentPage={currentPage} />;
}

