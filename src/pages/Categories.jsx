import Title from "../components/Ui/Title";
import Loader from "../components/Loader";
import { useSelector } from "react-redux";
import notFound from "../assets/notFound.png";
import Container from "../components/Ui/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

const Categories = () => {
  const { loading, data } = useSelector((state) => state.home);

  if (loading) {
    return <Loader />;
  }

  return (
    <Container className="mt-10">
      <Title
        ttl="Featured Categories"
        className="text-main py-2 font-semibold md:text-2xl text-xl text-start"
      />
      <div className="lg:px-12 md:px-10 sm:px-8 px-6 mt-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={2}
          navigation
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
        >
          {data?.categories?.map((category) => (
            <SwiperSlide key={category.id}>
              <div className="border pb-10 w-full rounded-md">
                <img
                  className="object-contain w-full max-h-[120px] my-4"
                  src={category.image_url ? category.image_url : notFound}
                  alt={category.name}
                />
                <p className="text-xl font-semibold">{category.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default Categories;
