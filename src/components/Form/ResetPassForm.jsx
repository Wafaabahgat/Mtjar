// import React from 'react'
import FormInput from "../Form/FormInput";
import Button from "../Ui/Button";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import Loader from "../Loader";
import { ResetPass } from "../../slice/ResetPassword/ResetPasswordAction";
import { useNavigate } from "react-router-dom";

const ResetpassForm = () => {
  const [code, setCode] = useState("");
  const dispatch = useDispatch();
  const { loading, success, msg } = useSelector((state) => state.ResetPassword);

  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  const handleCode = (e) => {
    e.preventDefault();
    if (!code) {
      return toast.error("Code is required!!");
    }
    dispatch(ResetPass({ code }));
  };

  useEffect(() => {
    if (success && msg) {
      toast.success(msg);
      navigate("/login");
    }
    if (!success && msg) {
      toast.error(msg);
    }
  }, [msg, success, navigate]);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <form
        className="w-[500px] h-[300px] sm:w-[360px] sm:h-[260px] bg-white rounded-2xl  py-12 px-12"
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
            placeholder="code.."
            value={code}
            onChange={(e) => setCode(e.target.value)}
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
