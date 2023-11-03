import { useDispatch, useSelector } from "react-redux";
import Title from "../components/Ui/Title";
import Loader from "../components/Loader";
import { AiOutlineStar } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const BestSellingProd = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
 
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10">
        <Title
          ttl="BestSellingProd"
          className="bg-green-100 w-[500px] p-2 font-semibold text-xl"
        />
        <div className="flex p-4 mt-2 gap-3 ">
          <div className="w-[1100px] h-[370px] shadow-2xl border-t rounded-md py-8 px-4">
            <div className="w-full flex-1">
              <Slider {...settings}>
                {data?.bestSellingProd?.map((e) => {
                  return (
                    <div className="border h-[260px] rounded-md relative hover:scale-105">
                      <button className="flex item-center justify-center right-0 mx-2 mt-2 absolute -top-1 ">
                        <BsCartPlus className="border rounded-full w-[35px] h-[35px] p-1 " />
                      </button>
                      <img
                        key={e?.id}
                        className="object-contain w-full max-h-[120px] mt-4"
                        src={e?.image}
                        alt=""
                      />
                      <p className="font-semibold text-xl">{e.name}</p>
                      <p className="text-md text-slate-400">{e.disc}</p>
                      <div className="flex relative mt-6">
                        <button className="ml-2 flex items-start -mt-2 border rounded-full bg-yellow-200  px-2">
                          <AiOutlineStar className=" w-[35px] h-[35px] p-1" />
                          <p className="flex my-auto">{e.rating}</p>
                        </button>
                        <span className="font-semibold text-xl absolute right-2">
                          {e.price}$
                        </span>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSellingProd;
