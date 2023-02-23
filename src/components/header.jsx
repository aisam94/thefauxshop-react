import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-primary text-white py-2">
      <h1 className="text-3xl text-center my-2">TheFauxShop</h1>
      <nav className="flex flex-col bg-red-300">
        <ul className="flex w-1/2 mx-auto justify-around text-center list-none">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/products"}>Shop</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
