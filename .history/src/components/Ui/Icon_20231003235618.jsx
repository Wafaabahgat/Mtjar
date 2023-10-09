const Icon = () => {
  return (
    <>
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
    </>
  );
};

export default Icon;
