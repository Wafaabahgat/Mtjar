import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Layouts/Navbar";

const Root = () => {
  const location = useLocation().pathname;
  const isDash = location.split("/").find((e) => e === "dashboard");
  return (
    <div className="w-full h-full flex flex-col">
      {isDash == "dashboard" ? null : <Navbar />}
      <Outlet />
    </div>
  );
};

export default Root;
