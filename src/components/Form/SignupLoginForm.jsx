import { Link } from "react-router-dom";

const SignupLoginForm = ({ text, link,name ,ttl}) => {
  return (
    <div>
      <h2 className="text-white lg:text-2xl md:text-xl font-bold mb-2">
      {name}
      </h2>
      <span className="border-2 w-10 inline-block mb-3"></span>
      <p className="text-white mb-10 ">
       {ttl}
      </p>
      <Link
        className="border-2 lg:px-8 px-4 py-2 rounded-full font-bold text-white hover:bg-white hover:text-main"
        to={link}
      >
        {text}
      </Link>
    </div>
  );
};

export default SignupLoginForm;
