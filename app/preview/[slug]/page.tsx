import PreviewClientWrapper from "./PreviewClientWrapper";

export default async function PreviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <PreviewClientWrapper slug={slug} />;
}

