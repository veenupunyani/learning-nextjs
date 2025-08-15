export default async function ProductReviewPage({ 
  params 
}: { 
  params: Promise<{ productId: string, reviewId: string }> 
}) {
  const { productId, reviewId } = await params;

  // Simulate fetching review data
  await new Promise(resolve => setTimeout(resolve, 100));

  return (
    <div>
      <h1>Review {reviewId} for Product {productId}</h1>
      <p>This is the content of review {reviewId} for product {productId}.</p>
    </div>
  );
}
