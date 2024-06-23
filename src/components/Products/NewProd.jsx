import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Title from "../Ui/Title";
import CartIcon from "../cart/CartIcon";

const NewProd = ({ data = [], ttl }) => {
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
    if (imgCurrent + slidesToShow < data.length) {
      setImgCurrent(imgCurrent + 1);
    } else {
      setImgCurrent(0);
    }
  };

  const handlePrev = () => {
    if (imgCurrent > 0) {
      setImgCurrent(imgCurrent - 1);
    } else {
      setImgCurrent(data.length - slidesToShow);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <Title
        ttl={ttl}
        className="bg-green-100 lg:w-[500px] md:w-[380px] w-[300px] p-2 font-semibold lg:text-xl text-md"
      />
      <div className="flex gap-3 p-4 mt-2">
        <div className="relative lg:max-w-[1100px] md:max-w-[800px] sm:max-w-[600px] max-w-[400px] h-[340px] shadow-2xl border-t rounded-md py-8 px-4">
          <div className="flex gap-4 overflow-hidden">
            {data.slice(imgCurrent, imgCurrent + slidesToShow).map((e) => (
              <div
                key={e.id}
                className={`h-[240px] w-full rounded-md relative hover:scale-105 ${
                  slidesToShow === 1 ? "w-[100%]" : `w-1/${slidesToShow}`
                }`}
              >
                 <CartIcon />
                <img
                  className="object-contain w-full max-h-[120px] mt-4"
                  src={e?.image}
                  alt=""
                />
                <p className="text-xl font-semibold line-clamp-1">{e.name}</p>
                <p className="text-md line-clamp-1 text-slate-400">{e.disc}</p>
                <div className="relative flex mt-2">
                  <button className="flex items-start px-2 ml-2 bg-yellow-200 border rounded-full">
                    <p className="flex my-auto">{e.rating}</p>
                  </button>
                  <span className="absolute text-xl font-semibold right-2">
                    {e.price}$
                  </span>
                </div>
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
  );
};

export default NewProd;
