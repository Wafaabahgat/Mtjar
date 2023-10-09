import Button from "../components/Ui/Button";
import SignupLoginForm from "../components/Form/SignupLoginForm";
import SignupLoginmodel from "./SignupLoginmodel";
import SignupForm from "../components/Form/SignupForm";
import { useState, useEffect, useSelector } from "react";
import { useDispatch } from "react-redux";

const FormModelSignup = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [erros, seterros] = useState < err > "";

  const handelSignup = (e) => {
    e.preventDefault();
    dispatch(registerUser({ email, password, last_name, first_name, erros }));
  };

  const dispatch = useDispatch();
  useEffect(() => {});

  const data = useSelector((state) => {
    state.register;
  });
  console.log(data);
  return (
    <>
      {/* SignIn */}
      <div className="w-2/5 lg:w-3/5 bg-green-500 rounded-tl-2xl rounded-bl-2xl py-32 px-12 ">
        <SignupLoginForm text="Sign In" on/>
      </div>

      {/* signUp */}
      <div className="w-3/5 p-5">
        <SignupLoginmodel text="Sign up to Account" />
        <div className="flex flex-col items-center ">
          <SignupForm />
          <Button
            type="submit"
            text="Create an account"
            variant={"default"}
            className="bg-green-500"
          />
        </div>
      </div>
    </>
  );
};

export default FormModelSignup;
