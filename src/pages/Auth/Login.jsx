import MetaDate from "../../lib/metaDate";
import LoginForm from "../../components/Form/LoginForm";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full flex-1 px-60 py-40">
      <div className="bg-white rounded-2xl shadow-2xl flex flex-row max-w-[800px] ">
        <MetaDate ttl="Login - page" disc="The login page" />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
