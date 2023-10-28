import { cn } from "../../lib/utils";
import Label from "./Label";

const InputSelect = ({ name, label, options, error,emptyOption, ...props }) => {
  const onErr = error ? "block" : "hidden";

  return (
    <div className="flex flex-col gap-2 w-full justify-start items-start mb-3">
      <Label>{label}</Label>
      <select
        className="px-2 py-2 border border-border/50 rounded-md flex items-center w-full"
        name={name}
        id={name}
        {...props}
      >
        <option hidden>Select {label}</option>
        {emptyOption && <option value={null || ""}>{emptyOption}</option>}
        {options?.map((e) => (
          <option key={e.val} value={e.val}>
            {e.name}
          </option>
        ))}
      </select>
      <span className={cn(onErr, "text-red-700 text-[13px] font-semibold")}>
        *{error}
      </span>
    </div>
  );
};

export default InputSelect;
