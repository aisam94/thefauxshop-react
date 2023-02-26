import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-primary text-white py-2">
      <h1 className="text-3xl text-center my-2">TheFauxShop</h1>
      <nav className="flex flex-col bg-red-300">
        <ul className="flex w-1/2 mx-auto justify-around text-center list-none">
          <li className="flex items-center space-x-1 hover:scale-125 ease-in-out transition">
            <Link to={"/"}>Home</Link>
            <img className="header-icons w-5 h-5" src="/icons/home.svg" />
          </li>
          <li className="flex items-center space-x-1 hover:scale-125 ease-in-out transition">
            <Link to={"/products"}>Shop</Link>
            <img className="header-icons w-5 h-5" src="/icons/shop.svg" />
          </li>
          <li className="flex items-center space-x-1 hover:scale-125 ease-in-out transition">
            <Link to={"/about"}>About</Link>
            <img className="header-icons w-5 h-5" src="/icons/about.svg" />
          </li>
          <li className="flex items-center space-x-1 hover:scale-125 ease-in-out transition">
            <Link to={"/contact"}>Contact</Link>
            <img className="header-icons w-5 h-5" src="/icons/contact.svg" />
          </li>
          <li className="flex items-center space-x-1 hover:scale-125 ease-in-out transition">
            <Link to={"/cart"}>Cart</Link>
            <img className="header-icons w-5 h-5" src="/icons/cart.svg" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
