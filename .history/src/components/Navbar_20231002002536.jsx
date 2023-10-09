import React from "react";
import Logo from "../assets/";
import {
  AiOutlineShopping,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="bg-green-300">
      <div>
        <img src={Logo} alt="Logo" className="w-[150px] bg-green-200"/>
        <ul>
          <li>Dashboard</li>
          <li>Home</li>
          <li>Products</li>
          <li>cart</li>
          <li>
            <AiOutlineShopping />
          </li>
        </ul>
        <div>
          <ul>
            <li>
              <AiOutlineSearch />
            </li>
            <li>
              <AiOutlineSearch />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
