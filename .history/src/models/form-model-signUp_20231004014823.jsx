import Button from "../components/Ui/Button";
import SignupLoginForm from "../components/Form/SignupLoginForm";
import SignupLoginmodel from "./SignupLoginmodel";
import SignupForm from "../components/Form/SignupForm";

const FormModelSignup = () => {
  return (
    <>
      {/* SignIn */}
      <div className="w-2/5 lg:w-3/5 bg-green-500 rounded-tl-2xl rounded-bl-2xl py-32 px-12 mt-[10px]">
        <SignupLoginForm text="Sign In" />
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
