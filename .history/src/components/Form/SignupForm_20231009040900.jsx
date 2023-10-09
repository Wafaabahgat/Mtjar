import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline, MdDriveFileRenameOutline } from "react-icons/md";
import FormInput from "./FormInput";
import { Link } from "react-router-dom";
import { useState, useEffect, useSelector } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../slice/reg/registerAction";
// import toast from "react-hot-toast";
// import { UserData } from "../../lib/types";

const SignupForm = () => {
  const data = useSelector((state) => {
    state.register;
  });
  console.log(data);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  // const [erros, seterros] = useState < err > "";

  const handelSignup = (e) => {
    e.preventDefault();
    dispatch(registerUser({ email, password, last_name, first_name, erros }));
  };

  const dispatch = useDispatch();
  useEffect(() => {});

  return (
    <>
      <div className="bg-gray-200 w-64 md:w-60 md:p-1 flex items-center p-3 mb-3 ">
        <MdDriveFileRenameOutline className="mr-3 text-gray-400" />
        <FormInput
          placeholder="First_Name"
          type="name"
          name="name"
          value={first_name}
          onChange={(e) => setfirst_name(e.target.value)}
        />
      </div>
      <div className="bg-gray-200 w-64 md:w-60 md:p-1 flex items-center p-3 mb-3 ">
        <MdDriveFileRenameOutline className="mr-3 text-gray-400" />
        <FormInput
          placeholder="last_Name"
          type="name"
          name="name"
          value={last_name}
          onChange={(e) => setlast_name(e.target.value)}
        />
      </div>
      <div className="bg-gray-200 w-64 md:w-60 md:p-1 flex items-center p-3 mb-3">
        <FaRegEnvelope className="mr-3 text-gray-400" />
        <FormInput
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
      </div>
      <div className="bg-gray-200 w-64 md:w-60 md:p-1 flex items-center p-3 mb-3">
        <MdLockOutline className="mr-3 text-gray-400 " />
        <FormInput
          placeholder="New Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
      </div>
      <div className="flex justify-between w-64 md:text-sm md:w-60 my-3 text-green-500">
        <Link to="/login">Already have an acc?</Link>
      </div>
    </>
  );
};

export default SignupForm;
