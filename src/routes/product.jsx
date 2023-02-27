import { getProduct } from "../products/allproducts";
import { Link, useLoaderData } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

export function loader({ params }) {
  const product = getProduct(params.id);
  return product;
}

export default function ProductPage() {
  const product = useLoaderData();
  const { addItem } = useCartStore();

  return (
    <>
      <div className="flex mt-10 product-page-width-container">
        <img
          className="product-left-side product-page-img"
          src={product.image}
          alt="img"
        />
        <div className="product-right-side flex flex-col px-5 pt-2">
          <span className="text-2xl font-thin text-center">{product.name}</span>
          <span className="text-gray my-2 text-center">
            RM {product.price.toFixed(2)}
          </span>
          <button
            className="flex space-x-2 justify-center items-center my-3 p-3 bg-secondary hover:bg-secondary-focus text-white text-center cursor-pointer w-full"
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
          >
            <span>Add to Cart</span>
            <img
              className="header-icons w-6 h-6"
              src="/icons/add-to-cart.svg"
            />
          </button>
          <span className="text-primary my-2">description</span>
          <span className="overflow-hidden text-ellipsis px-1 py-1">
            {product.description}
          </span>
          <Link
            to={"/"}
            className="flex space-x-2 mt-auto p-3 capitalize bg-accent hover:bg-accent-focus text-white text-center cursor-pointer w-full justify-center items-center"
          >
            <span>go back</span>
            <img className="header-icons w-5 h-5" src="/icons/back.svg" />
          </Link>
        </div>
      </div>
    </>
  );
}
