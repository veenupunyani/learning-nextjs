export default async function ProductPage({ 
  params 
}: { 
  params: Promise<{ productId: string }> 
}) {
  const { productId } = await params;

  // Example: You could fetch product data here
  // const product = await fetch(`https://api.example.com/products/${productId}`);
  // const productData = await product.json();

  // Simulate some async operation
  await new Promise(resolve => setTimeout(resolve, 100));

  return (
    <div>
      <h1>Product {productId}</h1>
      <p>This is the details page for product {productId}.</p>
      {/* You could display fetched data here */}
      {/* <p>Price: ${productData.price}</p> */}
    </div>
  );
}
