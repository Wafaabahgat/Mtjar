import SignupLoginForm from "../components/Form/SignupLoginForm";
import SignupLoginmodel from "./SignupLoginmodel";

const FormModelAuth = ({ children, isLogin, ...props }) => {
  return (
    <>
      {!isLogin ? (
        <>
          {/* Signup */}
          <div className="w-2/5 lg:w-3/5 bg-green-500 rounded-tl-2xl rounded-bl-2xl py-32 px-12 ">
            <SignupLoginForm link={"/login"} text="Sign in" />
          </div>

          {/* signin */}
          <div className="w-3/5 p-5">
            <SignupLoginmodel text="Sign up to Account" />
            <form {...props} className="flex flex-col items-center ">
              {children}
            </form>
          </div>
        </>
      ) : (
        <>
          {/* SignIn */}
          <div className="w-3/5 p-5 md:w-4/5">
            <SignupLoginmodel text="Sign In to Account" />
            <form {...props} className="flex flex-col items-center mt-[-15px]">
              {children}
            </form>
          </div>
          {/* signUp */}
          <div className="w-2/5 lg:w-3/5 bg-green-500 rounded-tr-2xl rounded-br-2xl py-32 px-12">
            <SignupLoginForm link={"/signup"} text="Sign Up" />
          </div>
        </>
      )}
    </>
  );
};

export default FormModelAuth;
