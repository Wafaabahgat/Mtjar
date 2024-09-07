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
    return e?.image_url?.includes("http")
      ? e?.image_url
      : adminImgUrl({ img: e?.image_url });
  };

  return (
    <>
      <div className="relative flex flex-col w-full p-2 overflow-hidden border rounded-lg hover:scale-105 hover:shadow-lg border-slate-300">
        <CartIcon product={product} />
        <Link to={`/SingleProducts/${product?.slug}`}>
          <div className="flex justify-center item-center">
            <img
              key={product?.id}
              className="object-contain w-[200px] rounded-lg h-[180px] mt-4"
              src={product?.image_url ? handleImg(product) : notFound}
              alt="notFound"
            />
          </div>
          <div className="flex flex-col mb-3">
            <h2 className="text-lg font-semibold text-start line-clamp-1">
              {product.name}
            </h2>
            <p className="text-md text-slate-400 line-clamp-2 text-start">
              {product.disc}
            </p>
          </div>

          <div className="flex justify-between mt-auto">
            <div className="flex items-center px-2 ml-2 -mt-2 bg-yellow-200 border rounded-full">
              <AiOutlineStar className=" w-[35px] h-[35px] p-1" />
              {product.rating}
            </div>
            <p className="flex items-center gap-1 text-xl font-semibold">
              {product?.compare_price && (
                <span className="text-base text-red-700 line-through">
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
