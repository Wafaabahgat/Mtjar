import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import FormInput from "./FormInput";
const LoginForm = () => {
  return (
    <div>
      <form className="bg-gray-200 w-64 flex items-center p-3 lg:w-61">
        <FaRegEnvelope className="mr-3 text-gray-400 " />
        <FormInput type="email" name="email" placeholder="Email" />
      </form>
      <form className="bg-gray-200 w-64 flex items-center p-3 lg:w-61">
        <MdLockOutline className="mr-3 text-gray-400 " />
        <FormInput type="password" name="password" placeholder="Password" />
      </form>
    </div>
  );
};

export default LoginForm;
