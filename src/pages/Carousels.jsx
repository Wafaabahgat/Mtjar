import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import cn from "../../lib/utils";

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
      <div className="mx-auto border border-slate-300 rounded-md">
        <div className="relative flex lg:w-[1100px] md:w-[770px] lg:h-[400px] md:h-[300px] sm:h-[230px] h-[200px] items-center">
          <div className="w-full flex-1">
            {data?.carusels?.map((e, i) => {
              return i + 1 === imgCurrent ? (
                <img
                  key={e?.id}
                  className="object-contain w-full h-[450px]"
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
            <FaArrowLeft className="lg:text-2xl text-xl text-slate-50 bg-slate-800 rounded-full" />
          </button>
          <button
            className="absolute top-0 right-0 bottom-0 flex justify-center items-center"
            onClick={handleNext}
          >
            <FaArrowRight className="lg:text-2xl text-xl text-slate-50 bg-slate-800 rounded-full" />
          </button>
          <div className="absolute bottom-3 right-1/2 left-1/2 -translate-x-1/2 flex gap-4 items-center">
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
