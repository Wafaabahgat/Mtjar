import Title from "../Ui/Title";
import { AiOutlineStar } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CartIcon from "../cart/CartIcon";

const NewProd = ({ data, ttl,slidesToShow }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow ,
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

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10">
        <Title
          ttl={ttl}
          className="bg-green-100 lg:w-[500px] md:w-[380px] w-[300px] p-2 font-semibold lg:text-xl text-md"
        />
        <div className="flex gap-3 p-4 mt-2 ">
          <div className="lg:w-[1100px] md:w-[800px] sm:w-[600px] w-[400px] h-[350px] shadow-2xl border-t rounded-md py-8 px-4">
            <div className="flex-1 w-full ">
              <Slider {...settings}>
                {data?.map((e) => {
                  return (
                    <div
                      className="border h-[240px] rounded-md relative hover:scale-105"
                      key={e.id}
                    >
                      <CartIcon />
                      <img
                        key={e?.id}
                        className="object-contain w-full max-h-[120px] mt-4"
                        src={e?.image}
                        alt=""
                      />
                      <p className="text-xl font-semibold line-clamp-1">
                        {e.name}
                      </p>
                      <p className="text-md line-clamp-1 text-slate-400">
                        {e.disc}
                      </p>
                      <div className="relative flex mt-2">
                        <button className="flex items-start px-2 ml-2 bg-yellow-200 border rounded-full">
                          <AiOutlineStar className=" w-[35px] h-[35px] p-1" />
                          <p className="flex my-auto">{e.rating}</p>
                        </button>
                        <span className="absolute text-xl font-semibold right-2">
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

export default NewProd;
