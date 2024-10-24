import DashboardContainer from "../../../components/Ui/DashboardContainer";
import InputFile from "../../../components/Form/InputFile";
import Button from "../../../components/Ui/Button";
import Loader from "../../../components/Loader";
import { useEffect, useState } from "react";
import { uploadImg } from "../../../lib/utils";
import useUpdate from "../../../hooks/useUpdate ";

import useSingle from "../../../hooks/useSingle";
import { useParams } from "react-router-dom";
import {
  clearErrors,
  singleCarousels,
  updateCarousels,
} from "../../../slice/carousels/CarouselsAction";

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
    if (data?.image) {
      setImage({ ...image, imgApi: data?.image });
    }
  }, [data]);

  if (loading || updateLD) {
    return <Loader />;
  }

  return (
    <DashboardContainer ttl="Update Carousels" links={links}>
      <div className="border m-auto px-6 border-slate-300 rounded-lg lg:w-[800px] md:w-[680px] sm:w-[450px] w-[350px] py-4">
        <h3 className="font-semibold lg:text-xl text-md pb-2 mb-2">Update</h3>
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
          {image?.imgApi ? (
            <div className="p-2">
              <img
                src={`http://localhost:8000/storage/${image?.imgApi}`}
                className="h-24 w-24 object-contain"
                alt=""
              />
            </div>
          ) : (
            <div className="p-2">
              <img
                src={image?.img && URL?.createObjectURL(image?.img)}
                className="h-24 w-24 object-contain"
                alt="img"
              />
            </div>
          )}

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

export default UpdateCarousels;
