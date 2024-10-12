import { useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import notFound from "../assets/notFound.png";

const Carousels = () => {
  const { loading, data } = useSelector((state) => state.home);
  const [imgCurrent, setImgCurrent] = useState(1);

  const handleNext = () => {
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

  if (loading) {
    return <Loader />;
  }
  
  return (
    <>
      <div className="mx-auto border rounded-md border-slate-300 h-fit max-h-[600px]">
        <div className="relative fflex h-full w-full max-h-[500px]">
          <div className="w-full h-full max-h-[500px] flex-1">
            {data?.carusels?.map((e, i) => {
              return i + 1 === imgCurrent ? (
                <img
                  key={e?.id}
                  className="object-contain w-full h-full max-h-[500px]"
                  src={e?.image_url ? e?.image_url : notFound}
                  alt=""
                />
              ) : (
                ""
              );
            })}
          </div>
          <button
            className="absolute top-0 bottom-0 flex items-center justify-center left-2"
            onClick={handlePrev}
          >
            <FaArrowLeft className="text-xl rounded-full lg:text-2xl text-slate-50 bg-slate-800" />
          </button>
          <button
            className="absolute top-0 bottom-0 flex items-center justify-center right-2"
            onClick={handleNext}
          >
            <FaArrowRight className="text-xl rounded-full lg:text-2xl text-slate-50 bg-slate-800" />
          </button>
          <div className="absolute flex items-center gap-4 -translate-x-1/2 bottom-3 right-1/2 left-1/2">
            {data?.carusels?.map((e, i) => (
              <span
                key={e?.id}
                className={
                  (i === imgCurrent - 1 ? "bg-slate-800" : "bg-slate-300",
                  " cursor-pointer w-3 h-3 block rounded-full")
                }
              ></span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousels;
