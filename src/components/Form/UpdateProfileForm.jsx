import React, { useEffect, useState } from "react";
import FormInput from "./FormInput";
import Button from "../Ui/Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Cookies from "universal-cookie";
import { useDispatch, useSelector } from "react-redux";
import { UpdateProfile } from "../../slice/Profile/profileAction";
import Loader from "../Loader";
import toast from "react-hot-toast";
const cookies = new Cookies();
const user = cookies.get("user");

const UpdateProfileForm = () => {
  const dispatch = useDispatch();
  const { loading, msg, success, errors } = useSelector(
    (state) => state.UpdateProfile
  );

  const [password, setpassword] = useState("");
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [email, setEmail] = useState("");
  const [visible, setVisible] = useState(false);

  const handelInfo = (e) => {
    e.preventDefault();
    dispatch(UpdateProfile({ first_name, last_name, email }));
  };

  useEffect(() => {
    if (user.email) {
      setfirst_name(user.first_name);
      setlast_name(user.last_name);
      setEmail(user.email);
    }
  }, [user]);

  useEffect(() => {
    if (msg && success === false) {
      toast.error(msg);
    }
    if (msg && success === true) {
      toast.success(msg);
    }
  }, [msg, success]);
  if (loading) {
    <Loader />;
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-1 p-4">
        <div className="max-w-[700px] mx-auto bg-white rounded-md ">
          <div className="h-[190px] mt-6 ">
            <h3 className=" text-gray-500 text-2xl sm:text-xl">General Info</h3>
            <form className="grid grid-cols-2 ml-24 mt-4 sm:grid-cols-1" onSubmit={handelInfo}>
              <FormInput
                placeholder="First_Name"
                type="name"
                name="name"
                value={first_name}
                onChange={(e) => setfirst_name(e.target.value)}
                error={errors?.first_name}
              />
              <FormInput
                placeholder="last_Name"
                type="name"
                name="name"
                value={last_name}
                onChange={(e) => setlast_name(e.target.value)}
                error={errors?.last_name}
              />
              <Button
                type="submit"
                text="UPDATE INFO"
                variant={"default"}
                className="bg-green-500 py-3 px-2 ml-[200px]  " 
              />
            </form>
          </div>
        </div>

        <div className=" bg-white max-w-[700px] mx-auto mt-10 w-[800px] md:w-[700px] sm:w-[500px] rounded-md">
          <div className="h-[190px] mt-6">
            <h3 className=" text-gray-500 text-2xl">Security</h3>
            <form className="grid grid-cols-2 sm:grid-cols-1 ml-24 mt-4">
              <FormInput
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors?.email}
              />
              <FormInput
                type={visible ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                error={errors?.password}
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
              <Button
                type="submit"
                text="Change password"
                variant={"default"}
                className="bg-green-500 py-3 px-2 uppercase ml-[165px] md:ml-[200px] md:w-40 sm:ml-14 sm:h-12  sm:text-sm sm:-mt-1"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProfileForm;
