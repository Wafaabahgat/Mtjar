import { FaRegEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import FormInput from "./FormInput";
import Button from "../Ui/Button";
import FormModelAuth from "../../models/form-model-auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../slice/login/loginAction";
import { useSelector } from "react-redux";
import Loader from "../Loader";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();

  const { loading, errors } = useSelector((state) => state.login);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handelSignup = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <FormModelAuth onSubmit={handelSignup} isLogin>
      <FormInput
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
        error={errors?.email}
        previcon={<FaRegEnvelope className="mr-3 text-gray-400" />}
      />

      <FormInput
        type={visible ? "text" : "password"}
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        error={errors?.password}
        previcon={<MdLockOutline className="text-gray-400 " />}
        icon={
          visible ? (
            <FaEyeSlash
              className="w-20 text-gray-400 cursor-pointer"
              onClick={() => setVisible(!visible)}
            />
          ) : (
            <FaEye
              className="text-gray-400 cursor-pointer"
              onClick={() => setVisible(!visible)}
            />
          )
        }
      />

      <div className="flex justify-between w-64 my-3 ">
        <label className="flex items-center text-sm text-gray-400">
          <input type="checkbox" name="remember" className="mr-1" />
          Remember Me
        </label>
        <Link
          to="/forgetpass"
          className="text-sm text-gray-400 hover:text-main "
        >
          Forget Password?
        </Link>
      </div>
      <Button
        type="submit"
        text="Sign In"
        variant={"default"}
        className="bg-main sm:px-6 w-[200px]"
      />
    </FormModelAuth>
  );
};

export default LoginForm;
