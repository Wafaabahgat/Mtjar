import { Link } from "react-router-dom";
import Breadcamp from "./Breadcamp";

const DashboardContainer = ({ ttl, links, children }) => {
  return (
    <div className="flex flex-col mx-auto py-3">
      <Breadcamp  links={links} />
      <h2 className="font-bold mb-4 text-3xl text-slate-800 py-4">{ttl}</h2>
      {children}
    </div>
  );
};

export default DashboardContainer;
