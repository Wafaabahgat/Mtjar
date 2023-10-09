import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import FormInput from "./FormInput";
const LoginForm = () => {
  return (
    <div>
      <form>
        <FaRegEnvelope className="mr-3 text-gray-400 " />
        <FormInput type="email" name="email"  className="outline-none bg-gray-200 "/>
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
    </div>
  );
};

export default LoginForm;
