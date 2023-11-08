import { cn } from "../../lib/utils";
import Label from "../Ui/Label";

const InputFile = ({ name, label, error, ...props }) => {
  const onErr = error ? "block" : "hidden";
  return (
    <div className="flex flex-col gap-2  justify-start items-start mb-2 lg:w-[750px] md:w-[630px] sm:w-[410px] w-[300px]">
      <Label>{label}</Label>
      <input
        className="p-4 cursor-pointer border-2 border-slate-400 border-dashed w-full"
        type="file"
        name={name}
        id={name}
        {...props}
      />
      <span className={cn(onErr, "text-red-700 text-[13px] font-semibold")}>
        *{error}
      </span>
    </div>
  );
};

export default InputFile;
