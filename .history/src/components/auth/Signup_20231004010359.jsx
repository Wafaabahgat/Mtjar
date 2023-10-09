import { Link } from "react-router-dom";
import SignupForm from "../Form/SignupForm";
import SignupLoginForm from "../Form/SignupLoginForm";
import SignupLoginmodel fro
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
          <div className="w-3/5 p-5">
            <SignupLoginmodel text="Sign up to Account" />
            <div className="flex flex-col items-center">
              <SignupForm />
              <div className="flex justify-between w-64 md:text-sm md:w-60 my-3 text-green-500">
                <Link to="/login">Already have an acc?</Link>
              </div>
              <Button
                type="submit"
                text="Create an account"
                variant={"default"}
                className="bg-green-500"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
