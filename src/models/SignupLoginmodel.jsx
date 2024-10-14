import Icon from "../components/Ui/Icon";
const SignupLoginmodel = ({ text }) => {
  return (
    <div className="mb-10 ">
      <h2 className="text-main font-bold lg:text-2xl md:text-xl mt-2">
        {text}
      </h2>
      <span className="border-2 border-main inline-block w-10"></span>
      <Icon />
      <p className="text-gray-400 mt-3">or use your email account</p>
    </div>
  );
};

export default SignupLoginmodel;
