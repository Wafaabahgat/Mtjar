import Button from "../components/Ui/Button";
import SignupLoginForm from "../components/Form/SignupLoginForm";
import SignupLoginmodel from "./SignupLoginmodel";
import SignupForm from "../components/Form/SignupForm";
import { Link } from "react-router-dom";

const FormModelSignup = () => {
  return (
    <>
      {/* signUp */}
      <div className="w-2/5 lg:w-3/5 bg-green-500 rounded-tr-2xl rounded-br-2xl py-32 px-12">
        <SignupLoginForm />
        <Button
          type="submit"
          text="Sign In"
          variant={"default"}
          className="mt-[40px]"
        />
      </div>
     
      </div>
    </>
  );
};

export default FormModelSignup;
