import { FaRegEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdLockOutline, MdDriveFileRenameOutline } from "react-icons/md";
import FormInput from "./FormInput";
import { Link } from "react-router-dom";
import Button from "../Ui/Button";
import FormModelAuth from "../../models/form-model-auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../slice/reg/registerAction";
import { useSelector } from "react-redux";
import Loader from "../Loader";

const SignupForm = () => {
  const dispatch = useDispatch();

  const { loading, errors } = useSelector((state) => state.register);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [visible, setVisible] = useState(false);

  const handelSignup = (e) => {
    e.preventDefault();
    dispatch(registerUser({ email, password, last_name, first_name }));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <FormModelAuth onSubmit={handelSignup}>
      <FormInput
        placeholder="First_Name"
        type="name"
        name="name"
        value={first_name}
        onChange={(e) => setfirst_name(e.target.value)}
        error={errors?.first_name}
        previcon={<MdDriveFileRenameOutline className="mr-3 text-gray-400" />}
      />

      <FormInput
        placeholder="last_Name"
        type="name"
        name="name"
        value={last_name}
        onChange={(e) => setlast_name(e.target.value)}
        error={errors?.last_name}
        previcon={<MdDriveFileRenameOutline className="mr-3 text-gray-400" />}
      />

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
        placeholder="New Password"
        name="password"
        value={password}
        type={visible ? "text" : "password"}
        onChange={(e) => setpassword(e.target.value)}
        error={errors?.password}
        previcon={<MdLockOutline className="text-gray-400 " />}
        icon={
          visible ? (
            <FaEyeSlash
              className="text-gray-400 cursor-pointer"
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

      <div className="flex justify-between w-64 my-3 text-main md:text-sm md:w-60">
        <Link to="/login">Already have an acc?</Link>
      </div>
      <Button
        type="submit"
        text="Create an account"
        variant={"default"}
        className="px-4 bg-main"
      />
    </FormModelAuth>
  );
};

export default SignupForm;
