import FormModelSignup from "../../models/form-model-signUp";

const Signup = () => {
  return (
    <>
      <div className="flex flex-col-reverse items-center justify-center w-full flex-1 px-60 py-10 bg-gray-100 ">
        <div className="bg-white rounded-2xl shadow-2xl max-w-[800px] flex md:w-5/6">
          <FormModelSignup />
        </div>
      </div>
    </>
  );
};

export default Signup;
