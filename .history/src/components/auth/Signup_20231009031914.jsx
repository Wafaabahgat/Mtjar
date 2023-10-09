import FormModelSignup from "../../models/form-model-signUp";
import MetaDate from "../../lib/metaDate";

const Signup = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full flex-1 px-60 py-28">
        <div className="bg-white rounded-2xl shadow-2xl max-w-[800px] flex md:w-5/6">
        <MetaDate ttl="Login - page" disc="The page" />

          <FormModelSignup />
        </div>
      </div>
    </>
  );
};

export default Signup;
