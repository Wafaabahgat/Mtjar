import { Link } from "react-router-dom";
// import Logo from "../../assets/mainLogo.png";
import { BiShoppingBag } from "react-icons/bi";
import Avatar from "../Ui/Avatar";
import Search from "../Ui/Search";
import { IoApps } from "react-icons/io5";
// import { useAppSelector } from "../../store/hooks";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { data } = useSelector((e) => e.getFromCart);
  // console.log(data, "iii");

  return (
    <div className="fixed top-0 left-0 z-10 w-full bg-white shadow-xl">
      <div className="max-h-[80px] m-auto flex justify-between items-center gap-x-7 py-3 px-5">
        <Link to="/">
          {/* <img src={Logo} alt="Logo" className="lg:w-[65px] ml-3 w-[50px]" /> */}
          <h1 className="text-2xl text-main font-bold">Storia</h1>
        </Link>
        <Search formClass="md:block hidden" />

        {/* Profile */}
        <ul className="flex items-center gap-3">
          <Link
            className="relative flex items-center justify-center border border-slate-300 rounded-full w-[37px] h-[37px] cursor-pointer active:scale-95"
            to="/products"
          >
            <IoApps className="text-slate-700 text-[25px]" />
          </Link>
          <div>
            <Link
              className="relative flex items-center justify-center border border-slate-300 rounded-full w-[37px] h-[37px] cursor-pointer active:scale-95"
              to="/cartItem"
            >
              <BiShoppingBag className="text-slate-700 text-[25px]" />
              <span className="absolute flex items-center justify-center w-5 h-5 text-sm text-white bg-main rounded-full -top-1 left-6">
                {data?.length}
              </span>
            </Link>
          </div>

          <li>
            <Avatar />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
