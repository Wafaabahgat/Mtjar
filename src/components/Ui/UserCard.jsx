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
      <div className="p-2 ">
        <h2 className="text-slate-900 text-lg bg-slate-100 p-2 rounded-md font-semibold">
          {`${user?.first_name}_${user?.last_name}`}
        </h2>
      </div>
      <span className=" bg-slate-400 block h-[1px]"></span>
      <ul className="flex flex-col p-2 gap-1">
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
            <li className="font-semibold ">Dashboard</li>
          </Link>
          <Link to="/">
            <li className="p-2 font-semibold bg-green-100 rounded-md">Home</li>
          </Link>
          <Link to="/Profile">
            <li className="p-2 font-semibold">Profile</li>
          </Link>
          <Link to="/products">
            <li className="p-2 font-semibold">Products</li>
          </Link>

          <Link className="flex items-center justify-center">
            <FaShoppingBag />
            <li className="p-2 font-semibold">Cart</li>
          </Link>
        </ul>
        <h2
          className="text-slate-900 flex items-center justify-center gap-2 bg-green-500 p-2 rounded-md font-semibold "
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
