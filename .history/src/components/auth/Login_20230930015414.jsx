import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full flex-1 px-20 bg-gray-100">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl flex w-2/3">
        <div className="w-3/5 p-5">
          <p className="font-bold">Sign In</p>
        </div>
        <div className="w-2/5 bg-green-500 rounded-tr-2xl rounded-br-2xl py-32 px-12">
          <h1 className="text-white text-3xl">Hello,Friend</h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
