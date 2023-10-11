import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/mainLogo.png"; // Adjust the path as needed

import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handelNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed left-0 top-0 w-full z-10 shadow-xl bg-white">
      <div className="max-w-[1740px] m-auto flex justify-between items-center p-3">
        <Link to="/home">
          <img src={Logo} alt="Logo" className="w-[80px] ml-3 md:w-[60px]" />
        </Link>
        <ul className="flex text-xl md:text-sm sm:hidden">
          <Link>
            <li className="p-5">Dashboard</li>
          </Link>
          <Link>
            <li className="p-5">Home</li>
          </Link>
          <Link>
            <li className="p-5">Products</li>
          </Link>
          <Link>
            <li className="p-5"> cart</li>
          </Link>
          <Link>
            <li className="p-5">
              <AiOutlineShoppingCart className="text-3xl border p-1 rounded-full border-black md:text-2xl" />
            </li>
          </Link>
        </ul>

        {/* Mobile Screen */}
        <div className="hidden sm:block" onClick={handelNav}>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div
          className={
            nav
              ? "hidden sm:block absolute top-0 mt-[70px] right-0 left-0 w-full h-screen text-center"
              : "hidden sm:block absolute top-0 mt-[70px] right-0 left-[-100%] w-full h-screen text-center"
          }
        >
          <ul>
            <Link>
              <li className="p-5 text-xl shadow-lg">Dashboard</li>
            </Link>
            <Link to="/home">
              <li className="p-5 text-xl shadow-lg">Home</li>
            </Link>
            <Link>
              <li className="p-5 text-xl shadow-lg">Products</li>
            </Link>
            <Link>
              <li className="p-5 text-xl shadow-lg">Cart</li>
            </Link>
            <Link>
              <li className="p-5 text-xl shadow-lg flex justify-center item-center">
                <AiOutlineShoppingCart className="text-3xl border p-1 rounded-full border-black " />
              </li>
            </Link>
          </ul>
        </div>

        {/* Profile */}
        <ul className="flex">
          <li className="p-3">
            <AiOutlineSearch className="text-4xl border-black p-1 md:text-3xl" />
          </li>
          <li className="p-3">
            <AiOutlineUser className="text-4xl border-2 rounded-full border-black p-1 md:text-3xl" />
          </li>
          <li className="p-4 font-semibold ">
            <Link to="/login">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
