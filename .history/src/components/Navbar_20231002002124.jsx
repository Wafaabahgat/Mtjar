import React from "react";
import Logo from "../assets/Logo.jpg";
import {
  AiOutlineShopping,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";

const Navbar = () => {
  return (
    <div>
      <div>
        <img src={Logo} alt="Logo" />
        <ul>
          <li>Dashboard</li>
          <li>Home</li>
          <li>Products</li>
          <li>cart</li>
          <li>
            <AiOutlineShopping />
          </li>
        </ul>
        <div><ul><li><ai</li></ul></div>
      </div>
    </div>
  );
};

export default Navbar;
