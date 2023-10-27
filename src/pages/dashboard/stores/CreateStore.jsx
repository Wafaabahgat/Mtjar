import Button from "../../../components/Ui/Button";
import FormInputDash from "../../../components/Form/FormInputDash";
import DashboardContainer from "../../../components/Ui/DashboardContainer";
import InputFile from "../../../components/Form/InputFile";
import useCreate from "../../../hooks/useCreate";
import { clearErrors } from "../../../slice/categories/categoriesAction";
import { createStore } from "../../../slice/store/storeAction";
import Loader from "../../../components/Loader";
import { useState } from "react";
import { uploadImg } from "../../../lib/utils";

const links = [
  {
    name: "stores",
    link: "stores",
  },
  {
    name: "create",
  },
];
const CreateStore = () => {
  const { loading, handelCreate, errors } = useCreate({
    states: "createStore",
    createFn: createStore,
    clearFn: clearErrors(),
  });

  const [name, setName] = useState("");
  const [disc, setDisc] = useState("");
  const [image, setImage] = useState();
  const [errs, setErrs] = useState();

  const fetchData = (e) => {
    e.preventDefault();
    const formData = new FormData();
    name && formData.append("name", name);
    disc && formData.append("disc", disc);
    formData.append("image", image.img);

    handelCreate(formData);
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <DashboardContainer ttl="Store" links={links}>
      <div className="border m-auto px-6 border-slate-300 rounded-lg max-w-[800px] w-full min-w-[300px] py-4">
        <h3 className="font-semibold text-xl pb-2">Create New Store</h3>
        <form
          className="flex flex-col justify-start items-start w-[750px]"
          onSubmit={fetchData}
        >
          <FormInputDash
            placeholder="Store Name..."
            ttl="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormInputDash
            placeholder="Store Disc..."
            ttl="Disc"
            type="text"
            value={disc}
            onChange={(e) => setDisc(e.target.value)}
          />
          <InputFile
            name="logo"
            label="Selcet Logo img"
            error={errs?.logo}
            onChange={(e) => setImage(uploadImg(e))}
          />
          <div className="p-2">
            <img
              src={image?.img && URL?.createObjectURL(image?.img)}
              className="h-24 w-24 object-contain"
              alt=""
            />
          </div>
          <InputFile
            name="cover"
            label="Select Cover img"
            error={errs?.cover}
            onChange={(e) => setImage(uploadImg(e))}
          />
          <Button
            type="submit"
            text="Create"
            variant={"default"}
            className="bg-green-500 text-slate-50 w-full rounded-md"
          />
        </form>
      </div>
    </DashboardContainer>
  );
};

export default CreateStore;
