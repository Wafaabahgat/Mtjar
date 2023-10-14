// import React from 'react'
import FormInput from "../Form/FormInput";
import { FaRegEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import Button from "../Ui/Button";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import Loader from "../Loader";
import { ResetPass } from "../../slice/ResetPassword/ResetPasswordAction";
import { useNavigate } from "react-router-dom";

const ResetpassForm = () => {
  const dispatch = useDispatch();

  const { loading, success, msg } = useSelector((state) => state.ResetPassword);

  const [otp, setOtp] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [errors, setErros] = useState();

  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  const handleCode = (e) => {
    e.preventDefault();
    if (!otp) {
      return toast.error("Code is required!!");
    }
    dispatch(ResetPass({ otp, email, password }));
  };

  useEffect(() => {
    if (success && msg) {
      toast.success(msg);
      navigate("/login");
    }
    if (!success && msg) {
      toast.error(msg);
    }
    if (errors) {
      setErros(errors);
    }
  }, [msg, success, errors]);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <form
        className="w-[510px] h-[450px] sm:w-[360px] sm:h-[260px] bg-white rounded-2xl  py-12 px-12"
        onSubmit={(e) => {
          handleCode(e);
        }}
      >
        <p className="text-green-500 text-3xl font-bold mb-2 lg:text-2xl md:text-xl">
          Reset Password
        </p>
        <p className="font-semibold text-gray-400 sm:text-sm">
          Please check your emails for a message with your code. Your code is 6
          numbers long.
        </p>

        <div className="mt-7 ml-20 sm:ml-5">
          <FormInput
            type="text"
            name="text"
            placeholder="otp.."
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <FormInput
            type="email"
            name="email"
            placeholder="Email@..."
            value={email}
            onChange={(e) => setemail(e.target.value)}
            previcon={<FaRegEnvelope className="mr-3 text-gray-400" />}
          />
          <FormInput
            type={visible ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            error={errors?.password}
            previcon={<MdLockOutline className="mr-3 text-gray-400 w-20" />}
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
          text="submit"
          variant="default"
          className="bg-green-500 text-white sm:mt-2"
        />
      </form>
    </>
  );
};

export default ResetpassForm;
