// import { cn } from "../../lib/utils";
import Input from "../../components/Ui/Input";

const FormInputDash = ({
  name,
  type,
  ttl,
  className,
  placeholder,
  error,
  previcon,
  icon,
  ...props
}) => {
  return (
    <>
      <h5 className="font-semibold">{ttl}</h5>
      <div className="mt-1 w-full mb-2">
        <Input name={name} type={type} placeholder={placeholder} {...props} />
      </div>
    </>
  );
};

export default FormInputDash;
