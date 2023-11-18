import { cn } from "../../lib/utils";
import Input from "./Input";
import { AiOutlineSearch } from "react-icons/ai";

const Search = ({ className }) => {
  return (
    <>
      <div className="w-full">
        <Input
          type="text"
          placeholder="Search..."
          className={cn("py-3 text-md", className)}
          previcon={
            <AiOutlineSearch className="text-slate-800 cursor-pointer text-2xl" />
          }
        />
      </div>
    </>
  );
};

export default Search;
