function ProductCard({product}) {
  return (
    <div className="product-card flex flex-col items-center bg-white mx-1 my-2">
      <div>
        <img className="product-img" src={product.image} alt="img" />
      </div>
      <span>{product.name}</span>
      <br />
      <span className="text-gray">RM {product.price.toFixed(2)}</span>
    </div>
  );
}

export default ProductCard;
