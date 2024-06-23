import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Title from "../components/Ui/Title";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineStar } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";

const Categories = () => {
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.home);

  const [imgCurrent, setImgCurrent] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const handleResize = () => {
    if (window.innerWidth >= 1100) {
      setSlidesToShow(3);
    } else if (window.innerWidth >= 600) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(1);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNext = () => {
    if (imgCurrent + slidesToShow < data.categories.length) {
      setImgCurrent(imgCurrent + 1);
    } else {
      setImgCurrent(0);
    }
  };

  const handlePrev = () => {
    if (imgCurrent > 0) {
      setImgCurrent(imgCurrent - 1);
    } else {
      setImgCurrent(data.categories.length - slidesToShow);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10">
        <Title
          ttl="All Categories"
          className="bg-green-100 lg:w-[500px] md:w-[400px] sm:w-[350px] w-[270px] p-2 font-semibold lg:text-xl text-md"
        />
        <div className="flex gap-3 p-4 mt-2">
          <div className="relative lg:w-[1100px] md:w-[800px] sm:w-[600px] w-[400px] h-[340px] shadow-2xl border-t rounded-md py-8 px-4">
            <div className="flex gap-4 overflow-hidden">
              {data?.categories
                ?.slice(imgCurrent, imgCurrent + slidesToShow)
                .map((e) => (
                  <div
                    key={e.id}
                    className="border h-[250px] w-full rounded-md flex flex-col items-center"
                  >
                    <button className="flex mx-2 mt-2">
                      <BsCartPlus className="border rounded-full w-[35px] h-[35px] p-1" />
                    </button>
                    <img
                      key={e.id}
                      className="object-contain w-full max-h-[120px] mt-4"
                      src={e.image}
                      alt=""
                    />
                    <p className="text-xl font-semibold">{e.name}</p>
                    <button className="flex items-start px-2 ml-2 bg-yellow-200 border rounded-full">
                      <AiOutlineStar className="w-[35px] h-[35px] p-1" />
                    </button>
                  </div>
                ))}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
