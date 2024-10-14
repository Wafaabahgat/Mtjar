import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";

const Icon = () => {
  return (
    <>
      <div className="flex justify-center ">
        <a className="border-2 rounded-full p-4 mr-2 border-main/20 mt-3 cursor-pointer hover:bg-main hover:text-white">
          <FaFacebookF />
        </a>
        <a className="border-2 rounded-full p-4 mr-2 border-main/20 mt-3 cursor-pointer hover:bg-main hover:text-white">
          <FaLinkedinIn />
        </a>
        <a className="border-2 rounded-full p-4 border-main/20 mt-3 cursor-pointer hover:bg-main hover:text-white">
          <FaGoogle />
        </a>
      </div>
    </>
  );
};

export default Icon;
