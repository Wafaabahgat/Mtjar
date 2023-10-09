import React from "react";
import Logo from "../assets/mainLogo.png";
import {
  AiOutlineShopping,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="bg-green-300 shadow-lg h-[100px] w-[1000px] top-0 left-0">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 ">
        <img src={Logo} alt="Logo" className="w-[80px]"/>
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
