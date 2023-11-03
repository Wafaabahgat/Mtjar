import Loader from "../Loader";
import { AiOutlineStar } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Pagination from "../components/Ui/Pagination";
import useGet from "../../hooks/useGet";
import { mainProducts } from "../../slice/Home/MainProductsAction";
import { adminImgUrl } from "../../lib/utils";
import Title from "../Ui/Title";
import Search from "../Ui/Search";

const ProductCard = () => {
  const handleImg = (e) => {
    return e?.image?.includes("http")
      ? e?.image
      : adminImgUrl({ img: e?.image });
  };

  const { loading, data } = useGet({
    states: "MainProducts",
    allData: mainProducts,
  });

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10">
        <Title
          ttl="All Products"
          className="bg-green-100 w-[500px] p-2 font-semibold text-xl mb-4"
        />
        <Search/>
        <div className="flex mt-2">
          <div className="w-[1100px] shadow-2xl border-t border-l rounded-md py-8 px-4">
            <div className="w-full gap-4 p-2 grid grid-cols-4">
              {data?.data?.map((e) => {
                return (
                  <div
                    className="relative flex flex-col rounded-lg w-full p-2 hover:scale-105 hover:shadow-lg border border-slate-300 overflow-hidden"
                    key={e.id}
                  >
                    <button className="flex item-center justify-center right-0 mx-2 mt-2 absolute top-0 ">
                      <BsCartPlus className="border rounded-full w-[35px] h-[35px] p-1 " />
                    </button>
                    <img
                      key={e?.id}
                      className="object-contain w-full max-h-[120px] mt-4"
                      src={e?.image ? handleImg(e) : ""}
                      alt=""
                    />
                    <p className="font-semibold text-xl">{e.name}</p>
                    <p className="text-md text-slate-400 ">{e.disc}</p>
                    <div className="flex relative mt-4">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
