import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full flex-1 px-20 bg-gray-100">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl flex w-2/3">
        {/* SignIn */}
        <div className="w-3/5 p-5">
          <div className="font-bold text-left">
            <span className="text-green-500 ">Company</span>Name
          </div>
          <div className="py-10">
            <h2 className="text-green-500 font-bold text-3xl mt-2">Sign in to Account</h2>
          </div>
          <span className="border-2 w-10 bg-green-500"></span>
        </div>

        {/* signUp */}
        <div className="w-2/5 bg-green-500 rounded-tr-2xl rounded-br-2xl py-32 px-12">
          <h2 className="text-white text-3xl font-bold mb-2">Hello,Friend!</h2>
          <span className="border-2 w-10 inline-block mb-3"></span>
          <p className="text-white mb-2">
            full up your personality information and start journey with us
          </p>
          <button className="border-2 px-10 py-2 rounded-full text-white font-bold mt-4 hover:bg-white hover:text-green-500">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
