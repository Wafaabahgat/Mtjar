import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSingle from "../../../hooks/useSingle";
import {
  clearErrors,
  singleProducts,
  updateProducts,
} from "../../../slice/products/productsAction";
import Loader from "../../../components/Loader";
import DashboardContainer from "../../../components/Ui/DashboardContainer";
import FormInputDash from "../../../components/Form/FormInputDash";
import InputFile from "../../../components/Form/InputFile";
import useUpdate from "../../../hooks/useUpdate ";
import InputSelect from "../../../components/Ui/InputSelect";
import Button from "../../../components/Ui/Button";
import { uploadImg } from "../../../lib/utils";

const links = [
  {
    name: "products",
    link: "products",
  },
  {
    name: "update",
  },
];

const UpdateProduct = () => {
  const { id } = useParams();

  const { loading: updateLD, data } = useSingle({
    states: "singleProducts",
    callfun: singleProducts,
  });

  const { loading, handelUpdate, errors } = useUpdate({
    states: "updateProducts",
    updateFn: updateProducts,
    clearFn: clearErrors(),
  });

  const [name, setName] = useState("");
  const [disc, setDisc] = useState("");
  const [price, setPrice] = useState("");
  const [compare_price, setCompare_price] = useState("");
  const [image, setimage] = useState();
  const [errs, setErrs] = useState();
  const [type, setType] = useState("");
  const [category_id, setCategory_id] = useState("");
  const [store_id, setStore_id] = useState("");
  const [status, setStatus] = useState("");
  const [tags, setTags] = useState("");
  const [rating, setRating] = useState("5");

  const fetchData = (e) => {
    e.preventDefault();
    const formData = new FormData();
    name && formData.append("name", name);
    disc && formData.append("disc", disc);
    status && formData.append("status", status);
    category_id && formData.append("category_id", category_id);
    store_id && formData.append("store_id", store_id);
    price && formData.append("price", price);
    compare_price && formData.append("compare_price", compare_price);
    tags && formData.append("tags", tags);
    rating && formData.append("rating", rating);
    type && formData.append("type", type);
    image?.img && formData.append("image", image.img);
    formData.append("_method", "put");
    handelUpdate({ id, dat: formData });
    console.log(id);
  };

  useEffect(() => {
    if (data?.name) {
      setName(data?.name);
      setDisc(data?.disc);
      setStatus(data?.status);
      setCategory_id(data?.category_id);
      setStore_id(data?.store_id);
      setPrice(data?.price);
      setCompare_price(data?.compare_price);
      setTags(data?.tags);
      setRating(data?.rating);
      setType(data?.type);
      setimage(data?.image);
    }
  }, [data]);

  if (loading || updateLD) {
    return <Loader />;
  }
  return (
    <DashboardContainer ttl="Update Products" links={links}>
      <div className="border m-auto px-6 border-slate-300 rounded-lg max-w-[800px] w-full min-w-[300px] py-4">
        <h3 className="font-semibold text-xl pb-2">Update </h3>
        <form
          className="flex flex-col justify-start items-start w-[750px]"
          onSubmit={fetchData}
        >
          <FormInputDash
            placeholder="Store Name..."
            ttl="Name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={errors?.name}
          />
          <FormInputDash
            placeholder="Products Disc..."
            ttl="Disc"
            name="Disc"
            type="text"
            value={disc}
            onChange={(e) => setDisc(e.target.value)}
            error={errors?.disc}
          />
          <FormInputDash
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            ttl="price"
            placeholder="Product price"
            error={errors?.price}
          />
          <FormInputDash
            type="number"
            value={compare_price}
            onChange={(e) => setCompare_price(e.target.value)}
            ttl="compare_price"
            name="compare_price"
            placeholder="Product compare_price"
            error={errors?.compare_price}
          />
          <InputSelect
            ttl="category_id"
            label="category_id"
            onChange={(e) => setCategory_id(e.target.value)}
            error={errs?.category_id}
            options={[]}
          />
          <InputSelect
            ttl="store_id"
            label="store_id"
            onChange={(e) => setStore_id(e.target.value)}
            error={errs?.store_id}
            options={[]}
          />
          <InputSelect
            ttl="type"
            label="type"
            options={[
              { name: "hot", val: "hot" },
              { name: "new", val: "new" },
              { name: "top", val: "top" },
              { name: "bestSelling", val: "bestSelling" },
            ]}
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          <InputFile
            name="image"
            label="Selcet Product img"
            onChange={(e) => setimage(uploadImg(e))}
            error={errs?.image}
          />
          <div className="p-2">
            <img
              src={image?.img && URL?.createObjectURL(image?.img)}
              className="h-24 w-24 object-contain"
              alt="img"
            />
          </div>

          <InputSelect
            ttl="Status"
            options={[
              { name: "Active", val: "active" },
              { name: "disactive", val: "disactive" },
            ]}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          <Button
            type="submit"
            text="Update"
            variant={"default"}
            className="bg-green-500 text-slate-50 w-full rounded-md"
          />
        </form>
      </div>
    </DashboardContainer>
  );
};

export default UpdateProduct;
