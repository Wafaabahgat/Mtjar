import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full flex-1 px-20 bg-gray-100">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl flex w-2/3">
        <div className="w-3/5 p-5">
          <p className="font-bold">Sign In</p>
        </div>
        <div className="w-2/5 bg-green-500 rounded-tr-2xl rounded-br-2xl py-32 px-12">
          <h2 className="text-white text-3xl font-bold mb-2">Hello, Friend!</h2>
          <span className="border-2 w-10 inline-block mb-3"></span>
          <p className="text-white mb-2">full up your personality information and start journey with us</p>
          <button className="border-2 px-10 py-2 rounded-full text-white font-bold mt-4">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
