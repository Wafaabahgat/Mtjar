import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import cn from "../../lib/utils";
import notFound from "../assets/notFound.png";

const Carousels = () => {
  const dispatch = useDispatch();
  const { loading, data, errors } = useSelector((state) => state.home);
  const [imgCurrent, setImgCurrent] = useState(1);

  const handleNext = () => {
    // console.log(data?.carusels?.length);

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
      <div className="mx-auto border rounded-md border-slate-300">
        <div className="relative flex lg:w-[1100px] md:w-[770px] lg:h-[400px] md:h-[300px] sm:h-[230px] h-[200px] items-center">
          <div className="flex-1 w-full">
            {data?.carusels?.map((e, i) => {
              return i + 1 === imgCurrent ? (
                <img
                  key={e?.id}
                  className="object-contain w-full h-[450px]"
                  src={e?.image ? e?.image : notFound}
                  alt=""
                />
              ) : (
                ""
              );
            })}
          </div>
          <button
            className="absolute top-0 bottom-0 left-0 flex items-center justify-center"
            onClick={handlePrev}
          >
            <FaArrowLeft className="text-xl rounded-full lg:text-2xl text-slate-50 bg-slate-800" />
          </button>
          <button
            className="absolute top-0 bottom-0 right-0 flex items-center justify-center"
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
