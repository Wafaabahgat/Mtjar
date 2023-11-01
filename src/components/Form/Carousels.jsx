import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousels = () => {
  const dispatch = useDispatch();
  const { loading, data, errors } = useSelector((state) => state.home);
  const [imgCurrent, setImgCurrent] = useState(1);

  const handleNext = () => {
    console.log(data?.carusels?.length);

    if (data?.carusels?.length === imgCurrent) {
      setImgCurrent(1);
    } else {
      setImgCurrent(imgCurrent + 1);
    }
  };
  const handlePrev = () => {
    if (imgCurrent > 1) {
      setImgCurrent(imgCurrent - 1);
    } else {
      setImgCurrent(data?.carusels?.length);
    }
  };
  console.log(data?.carusels);

  console.log(data);
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <div className=" mx-auto bg-green-200 rounded-md">
        <div className="relative flex w-[1100px] h-[400px] max-h-[500px]">
          <div className="w-full flex-1">
            {data?.carusels?.map((e, i) => {
              return i + 1 === imgCurrent ? (
                <img
                  key={e?.id}
                  className="object-contain w-full h-[500px] max-h-[500px]"
                  src={e?.image}
                  alt=""
                />
              ) : (
                ""
              );
            })}
          </div>
          <button
            className="absolute top-0 left-0 bottom-0 flex justify-center items-center"
            onClick={handlePrev}
          >
            <FaArrowLeft className="text-2xl text-slate-50" />
          </button>
          <button
            className="absolute top-0 right-0 bottom-0 flex justify-center items-center"
            onClick={handleNext}
          >
            <FaArrowRight className="text-2xl text-slate-50" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousels;
