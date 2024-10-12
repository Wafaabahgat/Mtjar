import PropTypes from "prop-types";
import { cn } from "../../lib/utils";

const Container = ({ children, className }) => {
  return <div className={cn("px-5", className)}>{children}</div>;
};

// التحقق من نوع الخاصية
Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
