import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-primary pt-2 pb-1 text-white">
      <div className="flex flex-col web-width-container">
        <h1 className="text-center">TheFauxShop</h1>
        <div className="flex justify-center mt-4 mb-5">
          <ul className="mx-3">
            <Link to={"/about"}>about</Link>
          </ul>
          <ul className="mx-3">
            <Link to={"/contact"}>contact</Link>
          </ul>
        </div>
        <span className="text-center text-xs">© 2023 TheFauxShop</span>
      </div>
    </footer>
  );
}

export default Footer;
