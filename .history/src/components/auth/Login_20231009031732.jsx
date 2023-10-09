import FormModel from "../../models/form-model-login";

const Login = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full flex-1 px-60 py-40">
        <div className="bg-white rounded-2xl shadow-2xl flex flex-row max-w-[800px] ">
          <MetaDate ttl="Login - page" disc="The login page" />

          <FormModel />
        </div>
      </div>
    </>
  );
};

export default Login;

{
  /* <Link to="/signup"> </Link> */
}
