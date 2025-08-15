export default async function DocsPage({ 
  params 
}: { 
  params: Promise<{ slug?: string[] }> 
}) {
  const { slug } = await params;

  return (
    <div>
      <h1>Documentation</h1>
      {slug ? (
        <p>Viewing documentation for: {slug.join('/')}</p>
      ) : (
        <p>Welcome to the documentation home page</p>
      )}
    </div>
  );
}
