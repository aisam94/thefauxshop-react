import { useCartStore } from "../store/cartStore";
import CartItem from "../components/cartItem";

function Cart() {
  const { cart } = useCartStore();

  return (
    <div className="cart-container flex mt-5">
      <div className="cart-left-side w-3/4 pr-3">
        <h3 className="cart-header">My Cart</h3>
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
              <span>RM 100</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>RM 10</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">Total</span>
            <span>RM 110</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
