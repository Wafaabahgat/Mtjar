import { cn } from "../../lib/utils";

const Input = ({ className, type, previcon, ...props }) => {
  return (
    <div className="flex items-center w-full px-3 border rounded-md border-border/50">
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
