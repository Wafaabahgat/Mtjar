import { FaRegEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdLockOutline, MdDriveFileRenameOutline } from "react-icons/md";
import FormInput from "./FormInput";
import { Link } from "react-router-dom";
import Button from "../Ui/Button";
import FormModelAuth from "../../models/form-model-auth";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../slice/reg/registerAction";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import Loader from "../Loader";

// import { UserData } from "../../lib/types";

const SignupForm = () => {
  const dispatch = useDispatch();
  const { loading, success, msg, errors } = useSelector(
    (state) => state.register
  );

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [erros, seterros] = useState();
  const [visible, setVisible] = useState(false);

  const handelSignup = (e) => {
    e.preventDefault();
    dispatch(registerUser({ email, password, last_name, first_name }));
  };

  useEffect(() => {
    if (msg && success === false) {
      toast.error(msg);
    }
    if (msg && success === true) {
      toast.success(msg);
      window.location = "/home";
    }
    if (errors) {
      seterros(errors);
    }
  }, [msg, success, errors]);

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
        type="password"
        name="password"
        value={password}
        type={visible ? "text" : "password"}
        onChange={(e) => setpassword(e.target.value)}
        error={errors?.password}
        previcon={<MdLockOutline className="mr-1 text-gray-400 w-20" />}
        icon={
          visible ? (
            <FaEyeSlash
              className="w-20 cursor-pointer text-gray-400"
              onClick={() => setVisible(!visible)}
            />
          ) : (
            <FaEye
              className=" cursor-pointer text-gray-400 w-20"
              onClick={() => setVisible(!visible)}
            />
          )
        }
      />

      <div className="flex justify-between w-64 md:text-sm md:w-60 my-3 text-green-500">
        <Link to="/login">Already have an acc?</Link>
      </div>
      <Button
        type="submit"
        text="Create an account"
        variant={"default"}
        className="bg-green-500"
      />
    </FormModelAuth>
  );
};

export default SignupForm;
