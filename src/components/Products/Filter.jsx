import { useState } from "react";
import InputSelect from "../Ui/InputSelect";
import { useSelector } from "react-redux";
import Search from "../Ui/Search";
import Title from "../Ui/Title";
import Button from "../Ui/Button";
import { useSearchParams } from "react-router-dom";

const options = [
  { val: "100", name: "100" },
  { val: "200", name: "200" },
  { val: "300", name: "300" },
  { val: "400", name: "400" },
  { val: "500", name: "500" },
  { val: "600", name: "600" },
  { val: "700", name: "700" },
  { val: "800", name: "800" },
  { val: "900", name: "900" },
  { val: "1000", name: "1000" },
];

const Filter = () => {
  const [search, setSearch] = useSearchParams("");
  const currentPage = search.get("page") || "1";
  const currentName = search.get("name") || "";

  const globalCats = useSelector((state) => state.globalCategories);

  const [filter, setFilter] = useState({
    price: search.get("price") || "1000",
    category_id: search.get("category_id") || "",
    rating: search.get("rating") || "5",
  });
  const handleFilter = (e) => {
    e.preventDefault();

    setSearch({
      ...filter,
      page: currentPage,
      name: currentName,
    });
  };

  return (
    <>
      <form
        className="w-[300px] border rounded-md mt-10 flex flex-col"
        onSubmit={handleFilter}
      >
        <div className="flex flex-col ml-2 items-start">
          <Title
            className="text-xl font-semibold bg-slate-100 border shadow-md px-6 py-2 rounded-sm mb-2 mt-2"
            ttl="Price"
          />

          <InputSelect
            label=""
            className="w-[36%]"
            name="Price"
            onChange={(e) => {
              setFilter({ ...filter, price: e.target.value });
            }}
            value={filter?.price}
            options={options}
          />
          <Title
            className="text-xl font-semibold bg-slate-100 border shadow-md px-6 py-2 rounded-sm mb-2 mt-2"
            ttl="Category"
          />
          <InputSelect
            label=""
            className="w-[36%]"
            name="category_id"
            onChange={(e) =>
              setFilter({ ...filter, category_id: e.target.value })
            }
            value={filter?.category_id}
            options={globalCats?.data?.map((e) => {
              if (e.id == e.data) {
                return;
              }
              return { val: e?.id, name: e?.name };
            })}
          >
            <Search />
          </InputSelect>
        </div>
        <div className="flex items-start flex-col ml-2 gap-1">
          <Title
            className="text-xl font-semibold mt-4 bg-slate-100 border shadow-md px-6 py-2 rounded-sm mb-2"
            ttl="Rating the product"
          />
          <InputSelect
            label=""
            className="w-[36%]"
            name="Rating"
            onChange={(e) => {
              setFilter({ ...filter, rating: e.target.value });
            }}
            value={filter?.rating}
            options={[
              { val: "1", name: "1" },
              { val: "2", name: "2" },
              { val: "3", name: "3" },
              { val: "4", name: "4" },
              { val: "5", name: "5" },
            ]}
          />
          {/* <input className="w-[95%]" type="range" name="star" /> */}
        </div>
        <Button
          type="submit"
          className="m-2 bg-green-500 text-white rounded-md"
          variant="default"
          text="Filter"
        />
      </form>
    </>
  );
};

export default Filter;
