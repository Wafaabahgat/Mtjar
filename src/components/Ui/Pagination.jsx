import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

const Pagination = ({ data }) => {
  return (
    <div className="flex items-center justify-end">
      <Link
        className="paginate__link"
        to={data?.first_page_url?.split("v1")[1]}
      >
        {"<<"}
      </Link>
      <Link
        to={data?.prev_page_url?.split("v1")[1]}
        className={cn(
          data?.prev_page_url !== null
            ? ""
            : "text-gray-600 bg-slate-200 cursor-not-allowed",
          "paginate__link"
        )}
      >
        {"Prev"}
      </Link>

      {data?.links?.map((e, i) => {
        return i === 0 || i === data?.links.length - 1 ? (
          ""
        ) : (
          <Link
            key={i}
            to={e?.url?.split("v1")[1]}
            className={cn(
              e?.active
                ? "z-[1] outline-3 outline outline-sky-400 -outline-offset-2"
                : "",
              "paginate__link whitespace-nowrap"
            )}
          >
            {e.label}
          </Link>
        );
      })}
      <Link
        to={data?.next_page_url?.split("v1")[1]}
        className={cn(
          data?.next_page_url !== null
            ? ""
            : "text-gray-600 bg-slate-200 cursor-not-allowed",
          "paginate__link"
        )}
      >
        {"Next"}
      </Link>

      <Link to={data?.last_page_url?.split("v1")[1]} className="paginate__link">
        {">>"}
      </Link>
    </div>
  );
};

export default Pagination;
