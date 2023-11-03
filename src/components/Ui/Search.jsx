import Input from "./Input";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <>
      <div className="w-full">
        <Input
          type="text"
          placeholder="Search..."
          className="py-3 text-md"
          previcon={
            <AiOutlineSearch className="text-slate-800 cursor-pointer text-2xl" />
          }
        />
      </div>
    </>
  );
};

export default Search;
