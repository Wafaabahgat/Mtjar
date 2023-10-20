import { cn } from "../../lib/utils";

const Input = ({ className, type, previcon, ...props }) => {
  return (
    <div className="px-3 border border-border/50 rounded-md flex items-center w-full">
      {previcon ? previcon : ""}
      <input
        className={cn(
          "flex w-full outline-none bg-transparent px-3 py-1 text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        type={type}
        {...props}
      />
    </div>
  );
};

export default Input;
