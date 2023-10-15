import MetaDate from "../../lib/metaDate";
import ForgetPass from "../../components/Form/ForgotPass";

const ForgetPassword = () => {
  return (
    <div className="flex flex-col items-center justify-center  mt-10 rounded-2xl flex-1 bg-green-500">
      <MetaDate ttl="ForgetPass - page" disc="The Forget Password page" />
      <ForgetPass />
    </div>
  );
};

export default ForgetPassword;
