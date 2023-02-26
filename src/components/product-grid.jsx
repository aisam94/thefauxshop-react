import ProductCard from "./product-card";
import { getProductsArray } from "../products/allproducts";

function ProductGrid() {
  const allProducts = getProductsArray();

  return (
    <>
      <section className="product-grid-container grid grid-cols-3 my-3">
        {allProducts.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </section>
    </>
  );
}

export default ProductGrid;
