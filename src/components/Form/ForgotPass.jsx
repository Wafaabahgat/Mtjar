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
      // window.location.href = "/Resetpass";
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
      className="lg:w-[400px] w-[300px] h-[250px] flex flex-col items-center bg-white rounded-2xl py-8 px-12"
      onSubmit={(e) => {
        handleForgetPass(e);
      }}
    >
      <p className="text-main font-bold mb-2 lg:text-2xl text-xl">
        Forget Password
                    </p>
      <p className="font-semibold text-gray-400 text-sm">
        There will be sent a code to your email...
      </p>

      <div className="mt-4 ">
        <FormInput
          type="email"
          name="email"
          placeholder="Email@..."
          value={email}
          onChange={(e) => setemail(e.target.value)}
          previcon={<FaRegEnvelope className="mr-3 text-gray-400" />}
        />
        <Button
          type="submit"
          text="submit"
          variant="default"
          className="bg-main text-white px-5"
        />
      </div>
    </form>
  );
};

export default ForgotPass;
