import { useDispatch, useSelector } from "react-redux";
import Title from "../components/Ui/Title";
import { useState } from "react";
import Loader from "../components/Loader";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";

const Categories = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const dispatch = useDispatch();
  const { loading, data, errors } = useSelector((state) => state.home);

  // const handleNext = () => {
  //   if (data?.categories?.length === catCurrent) {
  //     setCatCurrent(1);
  //   } else {
  //     setCatCurrent(catCurrent + 1);
  //   }
  // };
  // const handlePrev = () => {
  //   if (catCurrent > 1) {
  //     setCatCurrent(catCurrent - 1);
  //   } else {
  //     setCatCurrent(data?.categories?.length);
  //   }
  // };
  //   console.log(data?.categories);

  //   console.log(data);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10">
        <Title
          ttl="All Categories"
          className="bg-green-100 lg:w-[500px] md:w-[380px] w-[300px] p-2 font-semibold lg:text-xl text-md"
        />
        <div className="flex flex-col items-center justify-center p-4 mt-2 gap-3 ">
          <div className="lg:w-[1100px] md:w-[800px] sm:w-[600px] w-[400px] h-[340px] shadow-2xl border-t rounded-md py-8 px-4">
            <div className="w-full flex-1">
              <Slider {...settings} className="">
                {data?.categories?.map((e) => {
                  return (
                    <div className="border h-[250px] rounded-md" key={e.id}>
                      <button className="flex mx-2 mt-2">
                        <BsCartPlus className="border rounded-full w-[35px] h-[35px] p-1 " />
                      </button>
                      <img
                        key={e?.id}
                        className="object-contain w-full max-h-[120px] mt-4"
                        src={e?.image}
                        alt=""
                      />
                      <p className="font-semibold text-xl">{e.name}</p>
                      <button className="ml-2 flex items-start border rounded-full bg-yellow-200  px-2">
                        <AiOutlineStar className=" w-[35px] h-[35px] p-1" />
                      </button>
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

export default Categories;
