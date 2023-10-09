import { Link } from "react-router-dom";
import SignupForm from "../Form/SignupForm";
import SignupLoginForm from "../Form/SignupLoginForm";
import SignupLoginmodel from "../../models/SignupLoginmodel"
import Button from "../Ui/Button";

const Signup = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full flex-1 px-60 py-10 bg-gray-100 ">
        <div className="bg-white rounded-2xl shadow-2xl max-w-[800px] flex md:w-5/6">
          {/* signUp */}
          <div className="w-2/5 bg-green-500 rounded-tl-2xl rounded-bl-2xl py-32 px-12">
            <SignupLoginForm />
            <Button
              text="Sign in"
              type="submit"
              variant={"default"}
              className="mt-[40px]"
            />
          </div>
          {/* Signup */}
         
        </div>
      </div>
    </>
  );
};

export default Signup;
