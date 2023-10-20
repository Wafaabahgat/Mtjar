import { cn } from "../../lib/utils";

const FormInput = ({
  name,
  type,
  className,
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
            ? "ring-red-500 border-red-500 ring-1 lg:w-64 md:w-52 flex items-center p-3 mb-3 rounded-md "
            : "bg-gray-200 outline-none lg:w-64 h-10 md:w-52 flex items-center p-3 mb-3 rounded-md"
        }
      >
        {previcon}
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className={cn(
            error ? "bg-white outline-none" : " bg-transparent outline-none"
          )}
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

