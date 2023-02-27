import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

function CartItem({ product }) {
  const { removeItem } = useCartStore();

  return (
    <div className="flex border-b-2 border-secondary mt-2 pb-2 mb-2">
      <Link className="mr-2 hover:opacity-70" to={`/products/${product.id}`}>
        <img className="cart-item" src={product.image} alt="img" />
      </Link>
      <div className="flex flex-col">
        <span>{product.name}</span>
        <span className="text-gray">RM {product.price.toFixed(2)}</span>
      </div>
      <div className="ml-auto pr-1 flex flex-col items-center">
        <span>RM {product.price.toFixed(2)}</span>
        <img
          className="header-icons w-8 h-8 mt-6 cursor-pointer hover:scale-110"
          src="/icons/cross.svg"
          onClick={(e) => {
            e.preventDefault;
            removeItem(product.id);
          }}
        />
      </div>
    </div>
  );
}

export default CartItem;
