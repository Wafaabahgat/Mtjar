import DashboardContainer from "../../../components/Ui/DashboardContainer";
import InputFile from "../../../components/Form/InputFile";
import Button from "../../../components/Ui/Button";
import Loader from "../../../components/Loader";
import { useEffect, useState } from "react";
import { uploadImg } from "../../../lib/utils";
import useUpdate from "../../../hooks/useUpdate ";

import useSingle from "../../../hooks/useSingle";
import { useParams } from "react-router-dom";
import { clearErrors, singleCarousels, updateCarousels } from "../../../slice/carousels/CarouselsAction";

const links = [
  {
    name: "carousels",
    link: "carousels",
  },
  {
    name: "update",
  },
];
const UpdateCarousels = () => {
  const { id } = useParams();
  const { loading, data } = useSingle({
    states: "singleCarousels",
    callfun: singleCarousels,
  });

  const {
    loading: updateLD,
    errors,
    handelUpdate,
    success,
  } = useUpdate({
    states: "updateCarousels",
    updateFn: updateCarousels,
    clearFn: clearErrors(),
  });

  
  const [image, setImage] = useState();
  const [errs, setErrs] = useState();


  const fetchData = (e) => {
    e.preventDefault();
    const formData = new FormData();
    image?.img && formData.append("image", image.img);
    formData.append("_method", "put");
    handelUpdate({ id, dat: formData });
    console.log(id);
  };
  useEffect(() => {
    if (data?.name) {
      setImage({ ...image, imgApi: data?.image });
    }
  }, [data]);

  if (loading || updateLD) {
    return <Loader />;
  }

  return (
    <DashboardContainer ttl="Update Carousels" links={links}>
      <div className="border m-auto px-6 border-slate-300 rounded-lg max-w-[800px] w-full min-w-[300px] py-4">
        <h3 className="font-semibold text-xl pb-2">UPDATE</h3>
        <form
          className="flex flex-col justify-start items-start w-[750px]"
          onSubmit={fetchData}
        >
          <InputFile
            label="Select Carousels Img"
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

export default UpdateCarousels;
