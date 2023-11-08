import Breadcamp from "./Breadcamp";
import Title from "./Title";

const DashboardContainer = ({ ttl, links, children, ...props }) => {
  return (
    <div className="flex flex-col mx-auto py-3">
      <Breadcamp links={links} />
      <Title
        className="font-bold mb-4 lg:text-3xl md:text-2xl text-xl text-slate-800 py-4"
        ttl={ttl}
      />
      {children}
    </div>
  );
};

export default DashboardContainer;

