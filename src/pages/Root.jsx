import { Outlet } from "react-router-dom";
import Navbar from "../components/Layouts/Navbar";

const Root = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
