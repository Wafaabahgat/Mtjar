import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/mainLogo.png"; // Adjust the path as needed

import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";
import Avatar from "../Ui/Avatar";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handelNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed left-0 top-0 w-full z-10 shadow-xl bg-white">
      <div className="max-h-[80px] m-auto flex justify-between items-center p-3">
        <Link to="/home">
          <img src={Logo} alt="Logo" className="w-[70px] ml-3 md:w-[55px]" />
        </Link>
        <div className="md:block hidden">
          <ul className="flex text-xl ">
            <Link>
              <li className="p-5">Home</li>
            </Link>
            <Link>
              <li className="p-5">Products</li>
            </Link>
            <Link>
              <li className="p-5">Contact</li>
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
        </div>

        {/* Profile */}
        <ul className="flex">
          <li className="p-3">
            <AiOutlineSearch className="text-4xl border-black p-1 md:text-3xl" />
          </li>
          <li className="p-3">
            <Avatar />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
