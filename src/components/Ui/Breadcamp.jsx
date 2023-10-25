import { Link } from "react-router-dom";

const Breadcamp = ({ ttl, links }) => {
  return (
    <div className="flex items-end justify-end mb-6 mt-2">
      <div className="flex items-center flex-wrap md:text-lg sm:text-base text-sm px-2">
        <Link
          key={0}
          className="font-semibold underline mx-1 capitalize"
          to={`/dashboard`}
        >
          dashboard
        </Link>
        {"/"}
        {links?.map((l, i) => (
          <div key={i}>
            {i === links?.length - 1 ? (
              <span className="font-medium mx-1 text-slate-900">{l.name}</span>
            ) : (
              <Link
                className="font-semibold underline mx-1 capitalize"
                to={`/dashboard/${l.link}`}
              >
                {l.name}
              </Link>
            )}
            {i !== links.length - 1 && "/"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breadcamp;
