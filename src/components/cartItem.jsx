import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
import { useState } from "react";

function CartItem({ product, trigger }) {
  const { removeItem, addItemStock, minusItemStock, updateItemStock } =
    useCartStore();
  const [itemNum, setItemNum] = useState(product.stock);

  function handleItemNum(e) {
    e.preventDefault();
    let newValue = +(e.target.value);
    if (newValue < 1) return;
    setItemNum(newValue);
    updateItemStock(product.id, newValue);
    trigger((i) => i + 1);
  }

  function decrementItemNum(e) {
    e.preventDefault();
    if (itemNum > 1) {
      setItemNum(+itemNum - 1);
      minusItemStock(product.id);
      trigger((i) => i + 1);
    }
  }

  function incrementItemNum(e) {
    e.preventDefault();
    setItemNum(+itemNum + 1);
    addItemStock(product.id);
    trigger((i) => i + 1);
  }

  return (
    <div className="flex border-b-2 border-secondary mt-2 pb-2 mb-2">
      <Link className="mr-2 hover:opacity-70" to={`/products/${product.id}`}>
        <img className="cart-item" src={product.image} alt="img" />
      </Link>
      <div className="flex flex-col">
        <span className="text-sm">{product.name}</span>
        <span className="text-gray text-sm">RM {product.price.toFixed(2)}</span>
        <div className="mt-2">
          <button
            className="border border-secondary w-6 text-white bg-secondary hover:bg-secondary-focus"
            onClick={decrementItemNum}
          >
            -
          </button>
          <input
            className="item-num-input border-secondary"
            type="number"
            value={itemNum}
            onChange={handleItemNum}
          ></input>
          <button
            className="border border-secondary w-6 text-white bg-secondary hover:bg-secondary-focus"
            onClick={incrementItemNum}
          >
            +
          </button>
        </div>
      </div>
      <div className="ml-auto pr-1 flex flex-col items-center text-sm">
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
