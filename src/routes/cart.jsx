import { useCartStore } from "../store/cartStore";
import CartItem from "../components/cartItem";
import { useState } from "react";
import { useEffect } from "react";

function Cart() {
  const { cart, removeAllItems } = useCartStore();
  const [subTotalCost, setSubTotalCost] = useState(0);
  const [shippingCost, setShippingCost] = useState(10);
  const [totalCost, setTotalCost] = useState(0);
  const [cartTrigger,setCartTrigger] = useState(0);

  const defaultShippingCost = 10;

  function getSubTotalCost() {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].price * cart[i].stock;
    }
    return sum;
  }
  let subTotal = getSubTotalCost();

  function getShippingCost() {
    if (cart.length === 0) return 0;
    return defaultShippingCost;
  }

  function getTotalCost() {
    return subTotal + getShippingCost();
  }

  useEffect(() => {
    setSubTotalCost(subTotal);
    setShippingCost(getShippingCost);
    setTotalCost(getTotalCost);
  }, [cart, cartTrigger]);

  return (
    <div className="cart-container">
      <div className="cart-item-container">
        <div>
          <h3 className="cart-header">My Cart</h3>
          <span
            className="absolute top-0 right-0 pr-4 cursor-pointer hover:opacity-70"
            onClick={removeAllItems}
          >
            Remove all
          </span>
        </div>
        {cart.length > 0 ? (
          cart.map((product) => {
            return <CartItem key={product.id} product={product} trigger={setCartTrigger}/>;
          })
        ) : (
          <h3 className="mt-2 pb-2 mb-2 text-center">
            Sorry, no item in cart...
          </h3>
        )}
      </div>
      <div className="order-summary-container">
        <h3 className="text-xl cart-header text-center font-bold">
          Order Summary
        </h3>
        <div className="">
          <div className="border-b-2 border-secondary mt-2 pb-2">
            <div className="flex justify-between space-x-1">
              <span>Subtotal</span>
              <span className="truncate">RM {subTotalCost.toFixed(2)}</span>
            </div>
            <div className="flex justify-between space-x-1">
              <span>Shipping</span>
              <span className="truncate">RM {shippingCost.toFixed(2)}</span>
            </div>
          </div>
          <div className="flex justify-between items-center space-x-1">
            <span className="text-xl font-bold">Total</span>
            <span className="truncate">RM {totalCost.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
