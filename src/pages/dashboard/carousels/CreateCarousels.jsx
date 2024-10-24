import { useState } from "react";
import FormInputDash from "../../../components/Form/FormInputDash";
import InputFile from "../../../components/Form/InputFile";
import Button from "../../../components/Ui/Button";
import DashboardContainer from "../../../components/Ui/DashboardContainer";
import InputSelect from "../../../components/Ui/InputSelect";
import useCreate from "../../../hooks/useCreate";
import {
  clearErrors,
  createCarousels,
} from "../../../slice/carousels/CarouselsAction";
import Loader from "../../../components/Loader";
import { uploadImg } from "../../../lib/utils";

const links = [
  {
    name: "carousels",
    link: "carousels",
  },
  {
    name: "create",
  },
];

const CreateCarousels = () => {
  const { loading, errors, handelCreate } = useCreate({
    states: "createCarousels",
    createFn: createCarousels,
    clearFn: clearErrors(),
  });
  const [image, setImage] = useState();
  const [errs, setErrs] = useState();

  const fetchData = (e) => {
    e.preventDefault();
    const formData = new FormData();
    image?.img && formData.append("image", image.img);
    handelCreate(formData);
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <DashboardContainer ttl="Carousels" links={links}>
      <div className="border m-auto px-6 border-slate-300 rounded-lg lg:w-[800px] md:w-[680px] sm:w-[450px] w-[350px] py-4">
        <h3 className="pb-2 mb-2 font-semibold lg:text-xl text-md ">Create New Carousels</h3>
        <form
          className="flex flex-col justify-start items-start w-[750px]"
          onSubmit={fetchData}
        >
      
          <InputFile
            label="Select Carousels Img"
            name="img"
            onChange={(e) => setImage(uploadImg(e))}
            error={errs?.image}
          />
          <div className="p-2">
            <img
              src={image?.image_url && URL?.createObjectURL(image?.image_url)}
              className="object-contain w-24 h-24"
              alt=""
            />
          </div>
          <Button
            type="submit"
            text="Create"
            variant={"default"}
            className="bg-main text-slate-50 lg:w-[750px] md:w-[630px] sm:w-[410px] w-[300px] rounded-md"
          />
        </form>
      </div>
    </DashboardContainer>
  );
};

export default CreateCarousels;
