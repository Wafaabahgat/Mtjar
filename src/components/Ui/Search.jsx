import { useSearchParams } from "react-router-dom";
import { cn } from "../../lib/utils";
import Input from "./Input";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

const Search = ({ className }) => {
  
  const [search, setSearch] = useSearchParams("");
  const currentName = search.get("name") || "";

  const [name, setname] = useState(currentName);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(search.toString());
  };

  return (
   
      <form className="w-full" onSubmit={handleSearch}>
        <Input
          type="text"
          value={name}
          placeholder="Search..."
          className={cn("py-3 text-md", className)}
          onChange={(e) => {
            setname(e.target.value);
            search.set("name", e.target.value);
          }}
          previcon={
            <AiOutlineSearch
              className="text-slate-800 cursor-pointer text-2xl"
              onClick={() => setSearch(search.toString())}
            />
          }
        />
      </form>
    
  );
};

export default Search;
