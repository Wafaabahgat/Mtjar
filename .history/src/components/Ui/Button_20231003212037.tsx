import React from "react";
import { Link } from "react-router-dom";


const Button = () => {
  return (
    <button className="border-2 px-10 py-2 md:py-1 md:px-5 rounded-full text-white font-bold mt-4 hover:bg-white hover:text-green-500">
      <Link to="/signup"> Sign Up</Link>
    </button>
  );
};

export default Button;
