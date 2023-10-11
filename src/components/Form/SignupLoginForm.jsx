import { Link } from "react-router-dom";
import Button from "../../components/Ui/Button";

const SignupLoginForm = ({ text, link }) => {
  return (
    <>
      <h2 className="text-white text-3xl font-bold mb-2 lg:text-2xl md:text-xl">
        Hello,Friend!
      </h2>
      <span className="border-2 w-10 inline-block mb-3"></span>
      <p className="text-white mb-10 md:text-sm">
        full up your personality information and start journey with us
      </p>
      <Link
        className="border-2 px-10 py-2 md:py-1 md:px-5 rounded-full font-bold text-white hover:bg-white hover:text-green-500"
        to={link}
      >
        {text}
      </Link>
    </>
  );
};

export default SignupLoginForm;
