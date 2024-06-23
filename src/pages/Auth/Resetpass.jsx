import MetaDate from "../../lib/metaDate";
import ResetPassForm from "../../components/Form/ResetPassForm";

const Resetpass = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 mt-10 bg-green-500 rounded-2xl">
      <MetaDate ttl="ResetPass - page" disc="The Reset Password page" />
      <ResetPassForm />
    </div>
  );
};

export default Resetpass;
