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
    formData.append("image", image.img);
    handelCreate(formData);
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <DashboardContainer ttl="Carousels" links={links}>
      <div className="border m-auto px-6 border-slate-300 rounded-lg max-w-[800px] w-full min-w-[300px] py-4">
        <h3 className="font-semibold text-xl pb-2">Create New Carousels</h3>
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
              src={image?.img && URL?.createObjectURL(image?.img)}
              className="h-24 w-24 object-contain"
              alt=""
            />
          </div>
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

export default CreateCarousels;
