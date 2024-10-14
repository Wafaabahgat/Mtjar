import { useState } from "react";
import FormInputDash from "../../../components/Form/FormInputDash";
import InputFile from "../../../components/Form/InputFile";
import Button from "../../../components/Ui/Button";
import DashboardContainer from "../../../components/Ui/DashboardContainer";
import { useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import useCreate from "../../../hooks/useCreate";
import {
  clearErrors,
  createCategory,
} from "../../../slice/categories/categoriesAction";
import { uploadImg } from "../../../lib/utils";
import InputSelect from "../../../components/Ui/InputSelect";

const links = [
  {
    name: "categories",
    link: "categories",
  },
  {
    name: "create",
  },
];

const CreateCategory = () => {
  const { data } = useSelector((state) => state.categories);
  const { loading, errors, handelCreate } = useCreate({
    states: "createCategory",
    createFn: createCategory,
    clearFn: clearErrors(),
  });

  const [name, setName] = useState("");
  const [disc, setDisc] = useState("");
  const [image, setImage] = useState();
  const [errs, setErrs] = useState();
  const [parent_id, setparent_id] = useState("");

  console.log(name);

  const fetchData = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("disc", disc);
    formData.append("image", image.img);
    parent_id && formData.append("parent_id", parent_id);
    handelCreate(formData);
  };

  if (loading) {
    return <Loader />;
  }
  // console.log(image);

  return (
    <DashboardContainer ttl="Category" links={links}>
      <div className="border m-auto px-6 border-slate-300 rounded-lg lg:w-[800px] md:w-[680px] sm:w-[450px] w-[350px] py-4">
        {/* <DashboardContainer ttl="Create New Store" /> */}
        <h3 className="font-semibold lg:text-xl text-lg pb-2">Create New Category</h3>
        <form
          className="flex flex-col justify-start items-start w-[750px]"
          onSubmit={fetchData}
        >
          <FormInputDash
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Category Name..."
            ttl="Name"
            type="text"
            required
          />
          <FormInputDash
            value={disc}
            onChange={(e) => setDisc(e.target.value)}
            placeholder="Category Disc..."
            ttl="Disc"
            type="text"
          />
          <InputFile
            label="Select Category Img"
            name="img"
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

          <Button
            type="submit"
            text="Create"
            variant={"default"}
            className="bg-main text-slate-50 rounded-md lg:w-[750px] md:w-[630px] sm:w-[410px] w-[300px]"
          />
        </form>
      </div>
    </DashboardContainer>
  );
};

export default CreateCategory;
