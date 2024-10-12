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
    <div>
      <h5 className="font-semibold lg:text-md text-sm">{ttl}</h5>
      <div className="mt-1 lg:w-[750px] md:w-[630px] sm:w-[410px] w-[300px] mb-2">
        <Input name={name} type={type} placeholder={placeholder} {...props} />
      </div>
    </div>
  );
};

export default FormInputDash;
