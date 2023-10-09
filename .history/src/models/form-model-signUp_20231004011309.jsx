import Button from "../components/Ui/Button";
import SignupLoginForm from "../components/Form/SignupLoginForm";
import SignupLoginmodel from "./SignupLoginmodel";
import LoginForm from "../components/Form/LoginForm";

const FormModelSignup = () => {
  return (
    <>
      {/* signUp */}
      <div className="w-2/5 lg:w-3/5 bg-green-500 rounded-tr-2xl rounded-br-2xl py-32 px-12">
        <SignupLoginForm />
        <Button
          type="submit"
          text="Sign In"
          variant={"default"}
          className="mt-[40px]"
        />
      </div>

      {/* SignIn */}
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
    </>
  );
};

export default FormModelSignup;
