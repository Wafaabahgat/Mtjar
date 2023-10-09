import React from "react";
import Logo from "../assets/mainLogo.png";
import {
  AiOutlineShopping,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 w-full z-10">
      <div className="max-w-[1940px] m-auto flex justify-between items-center p-4 bg-green-200">
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
              <AiOutlineUser />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
