import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link
      className="product-card flex flex-col items-center bg-white mx-1 my-2 cursor-pointer"
      to={`products/${product.id}`}
    >
      <div>
        <img className="product-img" src={product.image} alt="img" />
      </div>
      <span>{product.name}</span>
      <br />
      <span className="text-gray">RM {product.price.toFixed(2)}</span>
    </Link>
  );
}

export default ProductCard;
