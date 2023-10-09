import Button from "../components/Ui/Button";
import SignupLoginForm from "../components/Form/SignupLoginForm";
import SignupLoginmodel from "./SignupLoginmodel";
import LoginForm from "../components/Form/LoginForm";

const FormModelSignup = () => {
  return (
    <>
      {/* SignIn */}
      <div className="w-3/5 p-5 md:w-4/5">
        <SignupLoginmodel text="Sign In to Account"/>
        <div className="flex flex-col items-center mt-[-15px]">
          <LoginForm />
        </div>
        <div className="flex justify-between w-64 my-3 mx-20">
          <label className="flex items-center  text-sm md:text-xs text-gray-400">
            <input type="checkbox" name="remember" className="mr-1" />
            Remember Me
          </label>
          <a
            href="#"
            className="text-sm md:text-xs text-gray-400 hover:text-green-500 "
          >
            Forget Password?
          </a>
        </div>
        <Button
          type="submit"
          text="Sign In"
          variant={"default"}
          className="bg-green-500"
        />
      </div>

      
    </>
  );
};

export default FormModelSignup;
