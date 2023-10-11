import { cn } from "../../lib/utils";

const FormInput = ({
  name,
  type,
  placeholder,
  error,
  previcon,
  icon,
  ...props
}) => {
  const onErr = error ? "block" : "hidden";
  return (
    <div>
      <div
        className={
          error
            ? "ring-red-500  border-red-500 ring-1 w-64 md:w-60 md:p-1 flex items-center p-3 mb-3 rounded-md "
            : "bg-gray-200 outline-none w-64 md:w-60 md:p-1 flex items-center p-3 mb-3 rounded-md"
        }
      >
        {previcon}
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className={
            error ? "bg-white outline-none" : "bg-gray-200 outline-none"
          }
          {...props}
        />
        {icon}
      </div>
      <span className={cn(onErr, "text-red-700 text-[10px] font-semibold ")}>
        *{error}
      </span>
    </div>
  );
};

export default FormInput;
// className="bg-gray-200 w-64 md:w-60 md:p-1 flex items-center p-3 mb-3"
