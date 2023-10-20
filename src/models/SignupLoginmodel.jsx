import Icon from "../components/Ui/Icon";
const SignupLoginmodel = ({ text }) => {
  return (
    <>
      <div className="font-bold text-left">
        <span className="text-green-500 ">Company</span>Name
      </div>
      <div className="py-10 ">
        <h2 className="text-green-500 font-bold lg:text-2xl md:text-xl mt-2">
          {text}
        </h2>
        <span className="border-2 border-green-500 inline-block w-10 "></span>
        <Icon />
        <p className="text-gray-400 mt-3 ">or use your email account</p>
      </div>
    </>
  );
};

export default SignupLoginmodel;
