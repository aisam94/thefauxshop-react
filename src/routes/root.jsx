import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

function Root() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Root;
