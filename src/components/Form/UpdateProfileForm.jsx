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
      window.location.reload();
    }
  }, [msg, success]);
  if (loading) {
    <Loader />;
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-1 p-4">
        <div className="bg-white rounded-md p-4">
          <div className="mt-6 ">
            <h3 className=" text-gray-500 text-2xl sm:text-xl mb-3">
              General Info
            </h3>
            <form className="flex flex-col gap-2" onSubmit={handelInfo}>
              <div className="flex sm:flex-row flex-col gap-2 ">
                <FormInput
                  className="w-full bg-transparent"
                  placeholder="First_Name"
                  type="name"
                  name="name"
                  value={first_name}
                  onChange={(e) => setfirst_name(e.target.value)}
                  error={errors?.first_name}
                />
                <FormInput
                  className="w-full bg-transparent"
                  placeholder="last_Name"
                  type="name"
                  name="name"
                  value={last_name}
                  onChange={(e) => setlast_name(e.target.value)}
                  error={errors?.last_name}
                />
              </div>
              <Button
                type="submit"
                text="UPDATE INFO"
                variant={"default"}
                className="bg-green-500 py-3 px-2"
              />
            </form>
          </div>
        </div>

        <div className="bg-white mt-10 rounded-md p-4">
          <div className="mt-6">
            <h3 className=" text-gray-500 text-2xl mb-3">Security</h3>
            <form className="flex flex-col  gap-2">
              <div className="flex sm:flex-row flex-col gap-2 ">
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
              </div>
              <Button
                type="submit"
                text="Change password"
                variant={"default"}
                className="bg-green-500 py-3 px-2 uppercase w-[200px] mx-auto sm:h-12  sm:text-sm sm:-mt-1"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProfileForm;
