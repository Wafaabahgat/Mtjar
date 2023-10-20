import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../../lib/data";
import { BiMenu } from "react-icons/Bi";

const DashSidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        <div className="flex flex-col z-10 shadow-md border-slate-300 h-[80px] justify-center items-center">
          <BiMenu
            className="text-slate-800 w-[120px] cursor-pointer text-4xl "
            onClick={() => setOpen(!open)}
          />
        </div>
        {open ? (
          <div className="bg-white border-slate-300 border-r w-[120px] h-full shadow">
            <ul className="mt-4">
              {data.map((item, index) => (
                <Link key={index} to={item.link}>
                  <span className="text-slate-800 cursor-pointer text-3xl flex justify-center item-center">
                    {item.icon}
                  </span>
                  <h4 className="text-sm mb-6">{item.ttl}</h4>
                </Link>
              ))}
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default DashSidebar;
