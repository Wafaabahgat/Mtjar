import React from "react";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

const Login = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 ">
        <div className="bg-white rounded-2xl shadow-2xl max-w-4xl flex w-2/3 ">
          {/* SignIn */}
          <div className="w-3/5 p-5 md:w-4/5 sm:w-4/5">
            <div className="font-bold text-left">
              <span className="text-green-500 ">Company</span>Name
            </div>
            <div className="py-10 ">
              <h2 className="text-green-500 font-bold text-3xl mt-2 lg:text-2xl md:text-xl">
                Sign in to Account
              </h2>
              <span className="border-2 border-green-500 inline-block w-10 m5"></span>
              <div className="flex justify-center ">
                <a className="border-2 rounded-full p-4 mr-2 border-green-100 mt-3 cursor-pointer hover:bg-green-500 hover:text-white">
                  <FaFacebookF />
                </a>
                <a className="border-2 rounded-full p-4 mr-2 border-green-100 mt-3 cursor-pointer hover:bg-green-500 hover:text-white">
                  <FaLinkedinIn />
                </a>
                <a className="border-2 rounded-full p-4 border-green-100 mt-3 cursor-pointer hover:bg-green-500 hover:text-white">
                  <FaGoogle />
                </a>
              </div>
              <p className="my-3 text-gray-400 ">or use your email account</p>
              <div className="flex flex-col items-center">
                <form className="bg-gray-200 w-64 flex items-center p-3 mb-3 lg:w-61 ">
                  <FaRegEnvelope className="mr-3 text-gray-400 " />
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    className="outline-none bg-gray-200 "
                  />
                </form>
                <form className="bg-gray-200 w-64 flex items-center p-3 lg:w-61">
                  <MdLockOutline className="mr-3 text-gray-400 " />
                  <input
                    placeholder="Password"
                    type="password"
                    name="password"
                    className="outline-none bg-gray-200 "
                  />
                </form>
                <div className="flex justify-between w-64 my-3">
                  <label className="flex items-center  text-sm md:text-xs text-gray-400">
                    <input type="checkbox" name="remember" className="mr-1" />
                    Remember Me
                  </label>
                  <a
                    href="#"
                    className="text-sm md:text-xs text-gray-400 hover:text-green-500 "
                  >
                    Forget Password?
                  </a>
                </div>
                <button className="border-2 px-10 py-2 rounded-full text-white font-bold mt-4 bg-green-500 hover:bg-white hover:text-green-500">
                  <Link to="/home">Sign In</Link>
                </button>
              </div>
            </div>
          </div>

          {/* signUp */}
          <div className="w-2/5 lg:w-3/5 bg-green-500 rounded-tr-2xl rounded-br-2xl py-32 px-12">
            <h2 className="text-white text-3xl font-bold mb-2 lg:text-2xl md:text-xl">
              Hello,Friend!
            </h2>
            <span className="border-2 w-10 inline-block mb-3"></span>
            <p className="text-white mb-2 md:text-sm">
              full up your personality information and start journey with us
            </p>
            <button className="border-2 px-10 py-2 md:py-1 md:px-5 rounded-full text-white font-bold mt-4 hover:bg-white hover:text-green-500">
              <Link to="/signup"> Sign Up</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
