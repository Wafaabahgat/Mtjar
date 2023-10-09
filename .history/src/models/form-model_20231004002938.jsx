import Icon from "../components/Ui/Icon";
import LoginForm from "../components/Form/LoginForm";
import Button from "../components/Ui/Button";
import SignupLoginForm from "../components/Form/SignupLoginForm";

const FormModel = () => {
  return (
    <>
      <div className="w-3/5 p-5 md:w-4/5">
        <div className="font-bold text-left">
          <span className="text-green-500 ">Company</span>Name
        </div>
        <div className="py-10 ">
          <h2 className="text-green-500 font-bold text-3xl mt-2 lg:text-2xl md:text-xl">
            Sign in to Account
          </h2>
          <span className="border-2 border-green-500 inline-block w-10 m5"></span>
          <Icon />
          <p className="my-3 text-gray-400 ">or use your email account</p>
          <div className="flex flex-col items-center">
            <LoginForm />
          </div>
          <div className="flex justify-between w-64 my-3">
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
      </div>

      {/* signUp */}
      <div className="w-2/5 lg:w-3/5 bg-green-500 rounded-tr-2xl rounded-br-2xl py-32 px-12">
        <SignupLoginForm />
        <Button type="submit" text="Sign up" variant={"default"} className="mt-[20px]" />
      </div>
    </>
  );
};

export default FormModel;
