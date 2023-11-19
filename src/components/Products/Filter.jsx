import { useState } from "react";
import InputSelect from "../Ui/InputSelect";
import { useSelector } from "react-redux";
import Search from "../Ui/Search";
import Title from "../Ui/Title";
import Button from "../Ui/Button";

const Filter = () => {
  const globalCats = useSelector((state) => state.globalCategories);

  const [category_id, setCategory_id] = useState("");
  const [type, setType] = useState("");

  return (
    <>
      <div className="w-[300px] border rounded-md mt-10 flex flex-col">
        <div className="flex flex-col ml-2 items-start">
          <Title
            className="text-xl font-semibold bg-slate-100 border shadow-md px-6 py-2 rounded-sm mb-2 mt-2"
            ttl="Category"
          />
          <InputSelect
            label=""
            className="w-[36%]"
            name="category_id"
            onChange={(e) => setCategory_id(e.target.value)}
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
            ttl="Rate the product"
          />
          <input className="w-[95%]" type="range" name="star" />
        </div>
        <Button
          type="submit"
          className="m-2 bg-green-500 text-white rounded-md"
          variant="default"
          text="Filter"
        />
      </div>
    </>
  );
};

export default Filter;
