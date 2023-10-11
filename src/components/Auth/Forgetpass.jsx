import React from "react";
import MetaDate from "../../lib/metaDate";
import FormInput from "../Form/FormInput";
import { FaRegEnvelope } from "react-icons/fa";
import Button from "../Ui/Button";

const Forgetpass = () => {
  return (
    <div className="flex flex-col items-center justify-center  mt-10 rounded-2xl flex-1 bg-green-500">
      <div className="w-[500px] h-[300px]  bg-white rounded-2xl  py-12 px-12">
        <MetaDate ttl="ForgetPass - page" disc="The Forget Password page" />
        <div>
          <p className="text-green-500 text-3xl font-bold mb-2 lg:text-2xl md:text-xl">
            Forget Password
          </p>
          <div className="mt-10 ml-20">
            <FormInput
              type="email"
              name="email"
              placeholder="Email"
              previcon={<FaRegEnvelope className="mr-3 text-gray-400" />}
            />
          </div>
          <Button
            type="submit"
            text="submit"
            className="bg-green-500 text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Forgetpass;
