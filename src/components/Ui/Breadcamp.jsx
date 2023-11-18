import { Link } from "react-router-dom";

const Breadcamp = ({ ttl, links }) => {
  return (
    <div className="flex items-center flex-wrap justify-between ml-6 mb-6">
      <h2 className="md:text-2xl text-xl font-bold text-green-500">{ttl}</h2>
      <div className="flex items-center flex-wrap md:text-lg sm:text-base text-sm px-2">
        <Link
          key={0}
          className="font-semibold underline mx-1"
          to={`/dashboard`}
        >
          Dashboard
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
