import { Link } from "react-router-dom";
import Logo from "../../assets/mainLogo.png";
import { BiShoppingBag } from "react-icons/bi";
import Avatar from "../Ui/Avatar";
import Search from "../Ui/Search";
import { IoApps } from "react-icons/io5";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { items } = useSelector((e) => e.cartSlice);

  return (
    <div className="fixed left-0 top-0 w-full z-10 shadow-xl bg-white">
      <div className="max-h-[80px] m-auto flex justify-between items-center gap-x-7 p-3">
        <Link to="/home">
          <img src={Logo} alt="Logo" className="lg:w-[65px] ml-3 w-[50px] " />
        </Link>

        <Search />

        {/* Profile */}
        <ul className="flex items-center gap-3">
          <Link
            className="relative flex items-center justify-center border border-slate-300 rounded-full w-[37px] h-[37px] cursor-pointer active:scale-95"
            to="/mainProducts"
          >
            <IoApps className="text-slate-700 text-[25px]" />
          </Link>

          <div className="relative flex items-center justify-center border border-slate-300 rounded-full w-[37px] h-[37px] cursor-pointer active:scale-95">
            <BiShoppingBag className="text-slate-700 text-[25px]" />
            <span className="absolute -top-1 left-6 w-5 h-5 text-sm bg-green-900 flex items-center justify-center text-white rounded-full">
              {items?.length}
            </span>
          </div>

          <li className="">
            <Avatar />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
