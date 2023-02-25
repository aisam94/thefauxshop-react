import ProductCard from "./product-card";
import getAllProducts from "../products/allproducts";

function ProductGrid() {
  const allProducts = getAllProducts();

  return (
    <>
      <section className="product-grid-container grid grid-cols-3 my-3">
        {allProducts.map((group) =>
          group.products.map((product) => {
            return <ProductCard product={product} />;
          })
        )}
      </section>
    </>
  );
}

export default ProductGrid;
