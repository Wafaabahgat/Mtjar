import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Layouts/Navbar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { globalCategories, globalStores } from "../slice/globals/globalsAction";

const Root = () => {
  const location = useLocation().pathname;
  const isDash = location.split("/").find((e) => e === "dashboard");

  const dispatch = useDispatch();

  // Globals//
  useEffect(() => {
    const fetchData = () => {
      dispatch(globalCategories());
      dispatch(globalStores());
    };
    fetchData();
  }, []);

  return (
    <div className="w-full h-full flex flex-col">
      {isDash == "dashboard" ? null : <Navbar />}
      <Outlet />
    </div>
  );
};

export default Root;
