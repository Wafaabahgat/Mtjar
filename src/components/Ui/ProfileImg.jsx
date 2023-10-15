"use client";
import Profile from "../../assets/profile.png";
import { Link } from "react-router-dom";

const ProfileImg = ({ img, text, link = "/login", ...props }) => {
  return (
    <div
      {...props}
      className="rounded-full cursor-pointer border border-slate-200 flex justify-center items-center w-[35px] h-[35px] bg-slate-100 shadow shadow-slate-500 hover:scale-105 active:scale-95"
    >
      {link ? (
        <Link to={link}>
          <img
            src={img ? img : Profile}
            width={40}
            height={40}
            alt=""
            className="mb-[5px]"
          />
        </Link>
      ) : (
        <>
          <p className="font-semibold text-sm capitalize ">
            {text?.slice(0, 2)}
          </p>
        </>
      )}
    </div>
  );
};

export default ProfileImg;
