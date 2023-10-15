import MetaDate from "../../lib/metaDate";
import ResetPassForm from "../../components/Form/ResetPassForm";

const Resetpass = () => {
  return (
    <div className="flex flex-col items-center justify-center  mt-10 rounded-2xl flex-1 bg-green-500">
      <MetaDate ttl="ResetPass - page" disc="The Reset Password page" />
      <ResetPassForm />
    </div>
  );
};

export default Resetpass;
