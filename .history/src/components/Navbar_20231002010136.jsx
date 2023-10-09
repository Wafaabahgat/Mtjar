import React from "react";
import Logo from "../assets/mainLogo.png";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 w-full z-10 shadow-xl">
      <div className="max-w-[1740px] m-auto flex justify-between items-center p-3 bg-green-200">
        <img src={Logo} alt="Logo" className="w-[80px] ml-3 md:" />
        <ul className="flex text-xl md:text-sm">
          <li className="p-5">Dashboard</li>
          <li className="p-5">Home</li>
          <li className="p-5">Products</li>
          <li className="p-5"> cart</li>
          <li className="p-5">
            <AiOutlineShoppingCart className="text-3xl border p-1 rounded-full border-black" />
          </li>
        </ul>

        <ul className="flex">
          <li className="p-3">
            <AiOutlineSearch className="text-4xl border-black p-1" />
          </li>
          <li className="p-3">
            <AiOutlineUser className="text-4xl border-2 rounded-full border-black p-1" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
