import { getProduct } from "../products/allproducts";
import { Link, useLoaderData } from "react-router-dom";

export function loader({ params }) {
  const product = getProduct(params.id);
  return product;
}

export default function ProductPage() {
  const product = useLoaderData();

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
          <span className="text-gray my-2 text-center">RM {product.price.toFixed(2)}</span>
          <div className="my-3 p-3 capitalize bg-secondary-focus hover:bg-secondary text-white text-center cursor-pointer w-full">add</div>
          <span className="text-primary my-2">description</span>
          <span className="overflow-hidden text-ellipsis px-1 py-1">{product.description}</span>
          <Link to={'/'} className="mt-auto p-3 capitalize bg-accent hover:bg-accent-focus text-white text-center cursor-pointer w-full justify-end">go back</Link>
        </div>
      </div>
    </>
  );
}
