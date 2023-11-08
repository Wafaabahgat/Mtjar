import { useState } from "react";
import FormInputDash from "../../../components/Form/FormInputDash";
import InputFile from "../../../components/Form/InputFile";
import Loader from "../../../components/Loader";
import Button from "../../../components/Ui/Button";
import DashboardContainer from "../../../components/Ui/DashboardContainer";
import InputSelect from "../../../components/Ui/InputSelect";
import useCreate from "../../../hooks/useCreate";
import {
  createProduct,
  clearErrors,
} from "../../../slice/products/productsAction";
import { uploadImg } from "../../../lib/utils";
import { useSelector } from "react-redux";

const links = [
  {
    name: "products",
    link: "products",
  },
  {
    name: "create",
  },
];
const CreateProduct = () => {
  const { loading, errors, handelCreate } = useCreate({
    states: "createProducts",
    createFn: createProduct,
    clearFn: clearErrors(),
  });

  // Globals
  const globalCats = useSelector((state) => state.globalCategories);
  const globalStores = useSelector((state) => state.globalStores);

  const [name, setName] = useState("");
  const [disc, setDisc] = useState("");
  const [price, setPrice] = useState("");
  const [compare_price, setCompare_price] = useState("");
  const [image, setimage] = useState();
  const [type, setType] = useState("");
  const [rating, setrating] = useState("5");
  const [category_id, setCategory_id] = useState("");
  const [store_id, setStore_id] = useState("");

  const fetchData = (e) => {
    e.preventDefault();
    const formData = new FormData();
    name && formData.append("name", name);
    disc && formData.append("disc", disc);
    category_id && formData.append("category_id", category_id);
    store_id && formData.append("store_id", store_id);
    price && formData.append("price", price);
    compare_price && formData.append("compare_price", compare_price);
    type && formData.append("type", type);
    rating && formData.append("rating", rating);
    image?.img && formData.append("image", image.img);
    handelCreate(formData);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <DashboardContainer ttl="Product" links={links}>
      <div className="border m-auto px-6 border-slate-300 rounded-lg lg:w-[800px] md:w-[680px] sm:w-[450px] w-[350px] py-4">
        <h3 className="font-semibold lg:text-xl text-lg pb-2">Create New Product</h3>
        <form
          className="flex flex-col justify-start items-start w-[750px]"
          onSubmit={fetchData}
        >
          <FormInputDash
            placeholder="Products Name..."
            ttl="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={errors?.name}
            required
          />
          <FormInputDash
            placeholder="Products Disc..."
            ttl="Disc"
            type="text"
            value={disc}
            onChange={(e) => setDisc(e.target.value)}
            error={errors?.disc}
          />
          <FormInputDash
            placeholder="Products Price..."
            ttl="Price"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            error={errors?.price}
          />
          <FormInputDash
            placeholder="Products Compare_price..."
            ttl="Compare-Price"
            type="text"
            value={compare_price}
            onChange={(e) => setCompare_price(e.target.value)}
            error={errors?.compare_price}
          />
          <InputSelect
            label="category"
            name="category_id"
            onChange={(e) => setCategory_id(e.target.value)}
            error={errors?.category_id}
            options={globalCats?.data?.map((e) => {
              if (e.id == e.data) {
                return;
              }
              return { val: e?.id, name: e?.name };
            })}
          />
          <InputSelect
            label="store"
            name="store_id"
            onChange={(e) => setStore_id(e.target.value)}
            error={errors?.store_id}
            options={globalStores?.data?.map((e) => {
              if (e.id == e.data) {
                return;
              }
              return { val: e?.id, name: e?.name };
            })}
          />
          <InputSelect
            label="Rating"
            name="rating"
            options={[
              { name: "5", val: "5" },
              { name: "4", val: "4" },
              { name: "3", val: "3" },
              { name: "2", val: "2" },
              { name: "1", val: "1" },
            ]}
            value={rating}
            onChange={(e) => setrating(e.target.value)}
          />
          <InputFile
            name="image"
            label="Selcet Product img"
            onChange={(e) => setimage(uploadImg(e))}
            error={errors?.image}
          />
          {image?.img && (
            <div className="p-2">
              <img
                src={image?.img && URL?.createObjectURL(image?.img)}
                className="h-24 w-24 object-contain"
                alt=""
              />
            </div>
          )}
          <InputSelect
            label="Type"
            name="type"
            options={[
              { name: "hot", val: "hot" },
              { name: "new", val: "new" },
              { name: "top_rated", val: "top_rated" },
              { name: "best_selling", val: "best_selling" },
            ]}
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          <Button
            type="submit"
            text="Create"
            variant={"default"}
            className="bg-green-500 text-slate-50 rounded-md lg:w-[750px] md:w-[630px] sm:w-[410px] w-[300px]"
          />
        </form>
      </div>
    </DashboardContainer>
  );
};

export default CreateProduct;
