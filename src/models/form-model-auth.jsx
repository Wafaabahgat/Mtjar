import SignupLoginForm from "../components/Form/SignupLoginForm";
import SignupLoginmodel from "./SignupLoginmodel";

const FormModelAuth = ({ children, isLogin, ...props }) => {
  return (
    <>
      {!isLogin ? (
        <>
          {/* Signup */}
          <div className="lg:w-2/5 bg-green-500 sm:block hidden rounded-tl-2xl rounded-bl-2xl py-32 px-4 ">
            <SignupLoginForm
              link={"/login"}
              text="Sign in"
              name=" Hello,Friend!"
              ttl="full up your personality information and start journey with us"
            />
          </div>

          {/* signin */}
          <div className="lg:w-3/5 p-4">
            <SignupLoginmodel text="Sign up to Account" />
            <form {...props} className="flex flex-col items-center ">
              {children}
            </form>
          </div>
        </>
      ) : (
        <>
          {/* SignIn */}
          <div className="lg:w-3/5 p-5">
            <SignupLoginmodel text="Sign In to Account" />
            <form {...props} className="flex flex-col items-center mt-[-15px]">
              {children}
            </form>
          </div>
          {/* signUp */}
          <div className="lg:w-2/5 bg-green-500 sm:block hidden rounded-tr-2xl rounded-br-2xl py-32 px-12">
            <SignupLoginForm
              link={"/signup"}
              text="Sign Up"
              name="Hello,Friend!"
              ttl="full up your personality information and start journey with us"
            />
          </div>
        </>
      )}
    </>
  );
};

export default FormModelAuth;
