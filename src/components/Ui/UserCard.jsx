import { cn } from "../../lib/utils";
import { FaSignOutAlt, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IsMatch } from "../../hooks/hooks";

const UserCard = ({ user, data, onclick, ...props }) => {
  return (
    <div
      {...props}
      className="absolute z-50 text-sm right-1 top-16 bg-white shadow-md rounded-md w-[250px] border-slate-400 border"
    >
      <div className="py-2">
        <h2 className="py-2 text-xl font-semibold rounded-md text-slate-900">
          {`${user?.first_name}_${user?.last_name}`}
        </h2>
      </div>
      <span className=" bg-slate-400 block h-[1px]"></span>
      <ul className="flex flex-col gap-1 p-2">
        {data?.map((e, i) => (
          <li key={i}>
            <Link
              to={`${e?.link}`}
              className={cn(
                IsMatch(`${e?.link}`)
                  ? "bg-slate-900 text-slate-50 hover:text-slate-900"
                  : "text-slate-900",
                "flex items-center gap-2 font-semibold hover:bg-slate-100 rounded p-2"
              )}
            >
              {e?.icon}
              <span>{e?.ttl}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="p-2 cursor-pointer">
        <ul className="">
          <Link to="/dashboard">
            <li className="font-semibold md:text-lg text-sm">Dashboard</li>
          </Link>
          <Link to="/">
            <li className="p-2 font-semibold bg-main/20 rounded-md md:text-lg text-sm">Home</li>
          </Link>
          <Link to="/Profile">
            <li className="p-2 font-semibold md:text-lg text-sm">Profile</li>
          </Link>
          <Link to="/products">
            <li className="p-2 font-semibold md:text-lg text-sm">Products</li>
          </Link>

          <Link className="flex items-center justify-center" to="/cartItem">
            <FaShoppingBag />
            <li className="p-2 font-semibold md:text-lg text-sm">Cart</li>
          </Link>
        </ul>
        <h2
          className="flex items-center justify-center gap-2 p-2 font-semibold bg-main rounded-md text-white"
          onClick={onclick}
        >
          <FaSignOutAlt />
          Log out
        </h2>
      </div>
    </div>
  );
};

export default UserCard;
