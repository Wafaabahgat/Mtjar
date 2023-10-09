import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import Button from "../Ui/Button";
import LoginForm from "../Form/LoginForm";

const Login = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full flex-1 px-60 py-10 bg-gray-100">
        <div className="bg-white rounded-2xl shadow-2xl flex flex-row max-w-[800px] ">
          {/* SignIn */}
          <div className="w-3/5 p-5 md:w-4/5">
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
                <LoginForm />
               
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
            <Button type="submit" text="Sign up" variant={"default"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

{
  /* <Link to="/signup"> </Link> */
}
