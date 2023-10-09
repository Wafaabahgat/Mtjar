import React from "react";
import { Outlet } from "react-router-dom";
import nav

const Root = () => {
  return (
    <div>
      <Navbar />

      <Outlet />
    </div>
  );
};

export default Root;
