import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <div>Header</div>
      <div>
        <Outlet />
      </div>
      <div>Footer</div>
    </>
  );
}

export default Root;
