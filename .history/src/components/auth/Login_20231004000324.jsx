import LoginForm from "../Form/LoginForm";
import Button from "../Ui/Button";
import Icon from "../Ui/Icon";

const Login = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full flex-1 px-60 py-10 bg-gray-100">
        
          </div>

          {/* signUp */}
          <div className="w-2/5 lg:w-3/5 bg-green-500 rounded-tr-2xl rounded-br-2xl py-32 px-12">
            <h2 className="text-white text-3xl font-bold mb-2 lg:text-2xl md:text-xl">
              Hello,Friend!
            </h2>
            <span className="border-2 w-10 inline-block mb-3"></span>
            <p className="text-white mb-2 md:text-sm">
              full up your personality information and start journey with us
            </p>
            <Button type="submit" text="Sign up" variant={"default"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

{
  /* <Link to="/signup"> </Link> */
}
