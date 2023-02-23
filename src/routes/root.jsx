import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

function Root() {
  return (
    <div className="flex flex-col p-0 m-0 min-h-screen">
      <Header />
      <main className="flex-grow web-width-container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Root;
