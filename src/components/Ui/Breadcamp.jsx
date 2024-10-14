import { Link } from "react-router-dom";

const Breadcamp = ({ ttl, links, isDash = true }) => {
  return (
    <div className="flex items-center flex-wrap justify-between ml-6 my-6">
      <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-main">{ttl}</h2>
      <div className="flex items-center flex-wrap md:text-lg sm:text-base text-sm px-2">
        {isDash && (
          <>
            <Link
              key={0}
              className="font-semibold underline mx-1"
              to={`/dashboard`}
            >
              Dashboard
            </Link>
            {"/"}
          </>
        )}

        {links?.map((l, i) => (
          <div key={i}>
            {i === links?.length - 1 ? (
              <span className="font-medium mx-1 text-slate-900">{l.name}</span>
            ) : (
              <Link
                className="font-semibold underline mx-1 capitalize"
                to={isDash ? `/dashboard/${l.link}` : `${l.link}`}
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
