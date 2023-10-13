// import React from "react";
import FormInput from "../Form/FormInput";
import { FaRegEnvelope } from "react-icons/fa";
import Button from "../Ui/Button";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import Loader from "../Loader";
import { forgetPass } from "../../slice/forgetPassword/forgetPasswordAction";
import { useNavigate } from "react-router-dom";

const ForgotPass = () => {
  const [email, setemail] = useState("");

  const dispatch = useDispatch();
  const { loading, success, msg } = useSelector(
    (state) => state.forgetPassword
  );

  const handleForgetPass = (e) => {
    e.preventDefault();
    if (!email) {
      return toast.error("Email is required!!");
    }
    dispatch(forgetPass({ email }));
  };
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  useEffect(() => {
    if (success && msg) {
      toast.success(msg);
      navigate("/Resetpass");
    }
    if (!success && msg) {
      toast.error(msg);
    }
  }, [msg, success]);

  if (loading) {
    return <Loader />;
  }
  return (
    <form
      className="w-[500px] h-[300px] sm:w-[360px] sm:h-[260px] bg-white rounded-2xl  py-12 px-12"
      onSubmit={(e) => {
        handleForgetPass(e);
      }}
    >
      <p className="text-green-500 text-3xl font-bold mb-2 lg:text-2xl md:text-xl">
        Forget Password
      </p>
      <p className="font-semibold text-gray-400 sm:text-sm">
        There will be sent a code to your email...
      </p>

      <div className="mt-7 ml-20 sm:ml-5">
        <FormInput
          type="email"
          name="email"
          placeholder="Email@..."
          value={email}
          onChange={(e) => setemail(e.target.value)}
          previcon={<FaRegEnvelope className="mr-3 text-gray-400" />}
        />
      </div>
      <Button
        type="submit"
        text="submit"
        variant="default"
        className="bg-green-500 text-white sm:mt-2"
      />
    </form>
  );
};

export default ForgotPass;
