import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import FormInput from "./FormInput";
import Button from "../Ui"

const LoginForm = () => {
  return (
    <>
      <div className="bg-gray-200 w-64 flex items-center p-3 lg:w-61 mb-3">
        <FaRegEnvelope className="mr-3 text-gray-400 " />
        <FormInput type="email" name="email" placeholder="Email" />
      </div>
      <div className="bg-gray-200 w-64 flex items-center p-3 lg:w-61">
        <MdLockOutline className="mr-3 text-gray-400 " />
        <FormInput type="password" name="password" placeholder="Password" />
      </div>
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
      <Button
        type="submit"
        text="Sign In"
        variant={"default"}
        className="bg-green-500"
      />
    </>
  );
};

export default LoginForm;
