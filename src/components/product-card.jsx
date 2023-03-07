import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link
      className="product-card flex flex-col items-center bg-white mx-1 my-2 cursor-pointer"
      to={`/products/${product.id}`}
    >
      <div>
        <img
          className="product-img hover:border-4 hover:border-secondary"
          src={product.image}
          alt="img"
        />
      </div>
      <div className="flex w-full h-full items-center">
        <span className="product-card-name">{product.name}</span>
      </div>
      <br />
      <span className="text-gray">RM {product.price.toFixed(2)}</span>
    </Link>
  );
}

export default ProductCard;
