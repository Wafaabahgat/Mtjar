import Breadcamp from "./Breadcamp";
import Title from "./Title";

const DashboardContainer = ({ ttl, links, children, ...props }) => {
  return (
    <div className="flex flex-col mx-auto py-3">
      <Breadcamp links={links} />
      <Title
        className="font-bold mb-4 lg:text-3xl md:text-2xl text-slate-800 py-4"
        ttl={ttl}
      />
      {children}
    </div>
  );
};

export default DashboardContainer;

{
  /* <h2 className={}>{ttl}</h2>
className="font-bold mb-4 text-3xl text-slate-800 py-4" */
}
