import { useCartStore } from "../store/cartStore";
import CartItem from "../components/cartItem";
import { useState } from "react";
import { useEffect } from "react";

function Cart() {
  const { cart, removeAllItems } = useCartStore();
  const [subTotalCost, setSubTotalCost] = useState(0);
  const [shippingCost, setShippingCost] = useState(10);
  const [totalCost, setTotalCost] = useState(0);

  const defaultShippingCost = 10;

  function getSubTotalCost() {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].price;
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
  }, [cart]);

  return (
    <div className="cart-container flex mt-5">
      <div className="cart-left-side w-3/4 pr-3 relative">
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
            return <CartItem key={product.id} product={product} />;
          })
        ) : (
          <h3 className="mt-2 pb-2 mb-2 text-center">
            Sorry, no item in cart...
          </h3>
        )}
      </div>
      <div className="cart-right-side w-1/4 mx-1 px-1">
        <h3 className="text-xl cart-header text-center font-bold">
          Order Summary
        </h3>
        <div className="">
          <div className="border-b-2 border-secondary mt-2 pb-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>RM {subTotalCost.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>RM {shippingCost.toFixed(2)}</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">Total</span>
            <span>RM {totalCost.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
