import React from "react";
import Button from "../";

const SignupLoginForm = () => {
  return (
    <>
      <h2 className="text-white text-3xl font-bold mb-2 lg:text-2xl md:text-xl">
        Hello,Friend!
      </h2>
      <span className="border-2 w-10 inline-block mb-3"></span>
      <p className="text-white mb-2 md:text-sm">
        full up your personality information and start journey with us
      </p>
      <Button type="submit" text="Sign up" variant={"default"} />
    </>
  );
};

export default SignupLoginForm;
