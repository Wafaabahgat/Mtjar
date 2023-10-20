import { cn } from "../../lib/utils";

const Label = ({ className, children, ...props }) => {
  return (
    <label
      className={cn("text-sm capitalize font-semibold leading-none", className)}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
