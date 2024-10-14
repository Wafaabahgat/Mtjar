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
  const [password, setpassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [errors, setErros] = useState();
  const [email, setemail] = useState("");

  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  const handleCode = (e) => {
    e.preventDefault();
    if (!otp) {
      return toast.error("Otp is required!!");
    }
    dispatch(ResetPass({ otp, password, email }));
  };

  useEffect(() => {
    if (success && msg) {
      toast.success(msg);
      // window.location.href = "/login";
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
        className="lg:w-[400px] md:w-[300px] w-[250px] h-[350px] bg-white rounded-2xl py-6 flex flex-col items-center"
        onSubmit={(e) => {
          handleCode(e);
        }}
      >
        <p className="text-main font-bold mb-2 lg:text-2xl text-xl">
          Reset Password
        </p>
        <p className="font-semibold text-gray-400">
          Please check your emails for a message with your code.
        </p>

        <div className="mt-7">
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
          className="bg-main text-white mt-2 px-6"
        />
      </form>
    </>
  );
};

export default ResetpassForm;
