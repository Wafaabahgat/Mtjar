import Loader from "../Loader";
import { AiOutlineStar } from "react-icons/ai";
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
import CartIcon from "../cart/CartIcon";

const ProductCard = ({ product }) => {
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
            <div className="w-full gap-4 p-2 grid grid-cols-3">
              {data?.data?.map((e) => {
                return (
                  <>
                    <div className="relative flex flex-col rounded-lg w-full p-2 hover:scale-105 hover:shadow-lg border border-slate-300 overflow-hidden">
                      <CartIcon e={product} />
                      <Link key={e.id} to={`/SingleProducts/${e?.slug}`}>
                        <div className="flex item-center justify-center">
                          <img
                            key={e?.id}
                            className="object-contain w-[200px] rounded-lg h-[180px] mt-4"
                            src={e?.image ? handleImg(e) : notFound}
                            alt="notFound"
                          />
                        </div>
                        <div className="flex flex-col  mb-3">
                          <h2 className="font-semibold text-lg text-start line-clamp-1">
                            {e.name}
                          </h2>
                          <p className="text-md text-slate-400 line-clamp-2 text-start">
                            {e.disc}
                          </p>
                        </div>

                        <div className="flex justify-between mt-auto">
                          <div className="ml-2 flex items-center -mt-2 border rounded-full bg-yellow-200 px-2">
                            <AiOutlineStar className=" w-[35px] h-[35px] p-1" />
                            {e.rating}
                          </div>
                          <p className="text-xl font-semibold flex items-center gap-1">
                            {e?.compare_price && (
                              <span className="line-through text-base text-red-700">
                                {e?.compare_price}$
                              </span>
                            )}
                            {e?.price}$
                          </p>
                        </div>
                      </Link>
                    </div>
                  </>
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
