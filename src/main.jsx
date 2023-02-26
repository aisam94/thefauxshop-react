import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import './fonts/Roboto/Roboto-Regular.ttf';

import Root from "./routes/root";
import Home from "./routes/home";
import ErrorPage from "./routes/error-page";
import AllProductsPage from "./routes/allproducts";
import ProductPage, {loader as productLoader} from "./routes/product";
import AboutPage from "./routes/about";
import CheckoutPage from "./routes/checkout";
import Contact from "./routes/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <AllProductsPage />,
      },
      {
        path: "/products/:id",
        element: <ProductPage />,
        loader: productLoader,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
