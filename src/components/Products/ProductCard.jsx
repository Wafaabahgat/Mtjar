import { AiOutlineStar } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Pagination from "../components/Ui/Pagination";
import { adminImgUrl } from "../../lib/utils";
import { Link } from "react-router-dom";
import notFound from "../../assets/notFound.png";
import CartIcon from "../cart/CartIcon";

const ProductCard = ({ product }) => {
  const handleImg = (e) => {
    return e?.image?.includes("http")
      ? e?.image
      : adminImgUrl({ img: e?.image });
  };

  return (
    <>
      <div className="relative flex flex-col rounded-lg w-full p-2 hover:scale-105 hover:shadow-lg border border-slate-300 overflow-hidden">
        <CartIcon product={product} />
        <Link to={`/SingleProducts/${product?.slug}`}>
          <div className="flex item-center justify-center">
            <img
              key={product?.id}
              className="object-contain w-[200px] rounded-lg h-[180px] mt-4"
              src={product?.image ? handleImg(product) : notFound}
              alt="notFound"
            />
          </div>
          <div className="flex flex-col  mb-3">
            <h2 className="font-semibold text-lg text-start line-clamp-1">
              {product.name}
            </h2>
            <p className="text-md text-slate-400 line-clamp-2 text-start">
              {product.disc}
            </p>
          </div>

          <div className="flex justify-between mt-auto">
            <div className="ml-2 flex items-center -mt-2 border rounded-full bg-yellow-200 px-2">
              <AiOutlineStar className=" w-[35px] h-[35px] p-1" />
              {product.rating}
            </div>
            <p className="text-xl font-semibold flex items-center gap-1">
              {product?.compare_price && (
                <span className="line-through text-base text-red-700">
                  {product?.compare_price}$
                </span>
              )}
              {product?.price}$
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
