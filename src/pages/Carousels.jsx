import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { useState } from "react";

const Carousels = () => {
  const { loading, data } = useSelector((state) => state.home);
  const [imgCurrent, setImgCurrent] = useState(1);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="rounded-md">
      <div className="w-full h-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation
          loop={true}
          pagination={{ clickable: true }}
          // autoplay={{
          //   delay: 1000,
          //   disableOnInteraction: false,
          // }}
        >
          {data?.carusels?.map((carusels, i) => {
            return i + 1 === imgCurrent ? (
              <SwiperSlide key={carusels.id}>
                <div className="">
                  <img
                    className="w-full h-full object-cover"
                    src={carusels.image_url ? carusels.image_url : ""}
                    alt={carusels.name}
                  />
                </div>
              </SwiperSlide>
            ) : (
              ""
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousels;
