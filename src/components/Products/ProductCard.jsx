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
import { Link } from "react-router-dom";
import notFound from "../../assets/notFound.png";

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
        <Search />
        <div className="flex mt-2">
          <div className="w-[1000px] shadow-2xl border-t border-l rounded-md py-8 px-4">
            <form
              className="w-full gap-4 p-2 grid grid-cols-4"
              // onClick={handleProduct}
            >
              {/* <Link to={`/SingleProducts/${slug}`}> */}
              {data?.data?.map((e) => {
                return (
                  <div
                    className="relative flex flex-col rounded-lg w-full p-2 hover:scale-105 hover:shadow-lg border border-slate-300 overflow-hidden"
                    key={e.id}
                  >
                    <button className="flex item-center justify-center right-0 mx-2 mt-2 absolute top-0 ">
                      <BsCartPlus className="border rounded-full w-[35px] h-[35px] p-1 bg-green-100" />
                    </button>
                    <img
                      key={e?.id}
                      className="object-contain w-[200px] rounded-lg h-[180px] mt-4"
                      src={e?.image ? handleImg(e) : notFound}
                      alt="notFound"
                    />
                    <div className="flex flex-col items-start mb-3">
                      <Link
                        to={`/SingleProducts/${e?.slug}`}
                        className="font-semibold text-lg line-clamp-1"
                      >
                        {e.name}
                      </Link>
                      <p className="text-md text-slate-400 line-clamp-2">
                        {e.disc}
                      </p>
                    </div>

                    <div className="flex justify-between mt-auto">
                      <div className="ml-2 flex items-center -mt-2 border rounded-full bg-yellow-200 px-2">
                        <AiOutlineStar className=" w-[35px] h-[35px] p-1" />
                        {e.rating}
                      </div>
                      <span className="font-semibold text-xl">{e.price}$</span>
                    </div>
                  </div>
                );
              })}
              {/* </Link> */}
            </form>
          </div>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
