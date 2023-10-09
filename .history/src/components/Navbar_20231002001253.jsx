import React from "react";
import Logo from "../assets/Logo.jpg";

const Navbar = () => {
  return (
    <div>
      <div>
        <img src={Logo} alt="Logo" />
        <ul><li>Dashbord</li></ul>
      </div>
    </div>
  );
};

export default Navbar;
