import { Link } from "react-router-dom";

const DashboardContainer = ({ ttl,  link, children }) => {
  return (
    <div className="flex flex-col mx-auto py-3">
      <div>
        <h2 className="font-bold mb-4 text-3xl text-slate-800 py-4">{ttl}</h2>
        {children}
      </div>
    </div>
  );
};

export default DashboardContainer;
