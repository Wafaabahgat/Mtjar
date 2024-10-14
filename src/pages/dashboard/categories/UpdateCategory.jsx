import DashboardContainer from "../../../components/Ui/DashboardContainer";
import FormInputDash from "../../../components/Form/FormInputDash";
import InputFile from "../../../components/Form/InputFile";
import Button from "../../../components/Ui/Button";
import InputSelect from "../../../components/Ui/InputSelect";
import Loader from "../../../components/Loader";
import { useEffect, useState } from "react";
import { uploadImg } from "../../../lib/utils";
import useUpdate from "../../../hooks/useUpdate ";
import {
  clearErrors,
  singleCategory,
  updateCategory,
} from "../../../slice/categories/categoriesAction";
import useSingle from "../../../hooks/useSingle";
import { useParams } from "react-router-dom";

const links = [
  {
    name: "categories",
    link: "categories",
  },
  {
    name: "update",
  },
];
const UpdateCategory = () => {
  const { id } = useParams();
  const { loading, data } = useSingle({
    states: "singleCategory",
    callfun: singleCategory,
  });

  const {
    loading: updateLD,
    errors,
    handelUpdate,
    success,
  } = useUpdate({
    states: "updateCategory",
    updateFn: updateCategory,
    clearFn: clearErrors(),
  });

  const [name, setName] = useState("");
  const [disc, setDisc] = useState("");
  const [image, setImage] = useState();
  const [parent_id, setparent_id] = useState("");
  const [errs, setErrs] = useState();
  const [status, setStatus] = useState("");

  const fetchData = (e) => {
    e.preventDefault();
    const formData = new FormData();
    name && formData.append("name", name);
    disc && formData.append("disc", disc);
    parent_id && formData.append("parent_id", parent_id);
    image?.img && formData.append("image", image.img);
    status && formData.append("status", status);
    formData.append("_method", "put");
    handelUpdate({ id, dat: formData });
    console.log(id);
  };
  useEffect(() => {
    if (data?.name) {
      setName(data?.name);
      setDisc(data?.disc);
      setparent_id(data?.parent_id);
      setStatus(data?.status);
      setImage({ ...image, imgApi: data?.image });
    }
  }, [data]);

  if (loading || updateLD) {
    return <Loader />;
  }

  return (
    <DashboardContainer ttl="Update Category" links={links}>
      <div className="border m-auto px-6 border-slate-300 rounded-lg lg:w-[800px] md:w-[680px] sm:w-[450px] w-[350px] py-4">
        <h3 className="font-semibold lg:text-xl text-lg pb-2">Update</h3>
        <form
          className="flex flex-col justify-start items-start w-[750px]"
          onSubmit={fetchData}
        >
          <FormInputDash
            placeholder="Category Name..."
            ttl="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={errors?.name}
          />
          <FormInputDash
            placeholder="Category Disc..."
            ttl="Disc"
            type="text"
            value={disc}
            onChange={(e) => setDisc(e.target.value)}
            error={errors?.disc}
          />
          <InputSelect
            label="Parent Category"
            name="parent_id"
            value={parent_id}
            onChange={(e) => setparent_id(e.target.value)}
            error={errors?.parent_id}
            emptyOption="Main Category"
            options={data?.categories?.map((e) => {
              if (e?.id == e.data) {
                return;
              }
              return { val: e?.data, name: e?.name };
            })}
          />
          <InputFile
            label="Select Category Img"
            name="image"
            onChange={(e) => setImage(uploadImg(e))}
            error={errs?.image}
          />
          <div className="p-2">
            <img
              src={image?.img && URL?.createObjectURL(image?.img)}
              className="h-24 w-24 object-contain"
              alt=""
            />
          </div>
          <InputSelect
            label="Status"
            name="status"
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
            className="bg-main text-slate-50 lg:w-[750px] md:w-[630px] sm:w-[410px] w-[300px] rounded-md"
          />
        </form>
      </div>
    </DashboardContainer>
  );
};

export default UpdateCategory;
