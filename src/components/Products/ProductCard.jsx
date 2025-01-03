/* eslint-disable react/prop-types */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Pagination from "../components/Ui/Pagination";
import { adminImgUrl } from "../../lib/utils";
import { Link } from "react-router-dom";
import notFound from "../../assets/notFound.png";
import CartIcon from "../cart/CartIcon";
import { FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addTofavourite } from "../../slice/favourite/favouriteAction";
import { useAppSelector } from "../../store/hooks";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const {data} = useAppSelector((state) => state.getfavourite);
  const handleImg = (e) => {
    return e?.image_url?.includes("http")
      ? e?.image_url
      : adminImgUrl({ img: e?.image_url });
  };

  const handelAddToFavorite = () => {
    dispatch(
      addTofavourite({
        id: product?.id,
      })
    );
  };

  return (
    <div className="w-full border px-4 py-2 hover:border-main rounded-md">
      <Link to={`/SingleProducts/${product?.slug}`} className="text-start">
        <div className="">
          <img
            key={product?.id}
            className="object-contain w-full max-h-[120px] mb-4"
            src={product?.image_url ? handleImg(product) : notFound}
            alt="notFound"
          />
        </div>
        <h2 className="text-[12px] text-gray-400 py-2">{product.name}</h2>

        <p className="md:text-lg text-[15px] line-clamp-2 text-black">
          {product.disc}
        </p>
      </Link>
      <div>
        <div className="flex my-2 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center text-yellow-400 text-lg">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="mt-1 text-lg text-gray-400">{product.rating}</p>
          </div>

          {/* addTofavourite */}
          {
            data?.find((e) => e?.id === product?.id) ? (
              <button
                onClick={handelAddToFavorite}
                className="text-red-500 text-2xl font-bold mt-1 hover:text-red-800 cursor-pointer"
              >
                <FaHeart />
              </button>
            ) : (
              <button
                onClick={handelAddToFavorite}
                className="text-slate-200 text-2xl font-bold mt-1 hover:text-red-800 cursor-pointer"
              >
                <FaHeart />
              </button>
            )
          }
        </div>
        <div className="flex justify-between items-center">
          <p className="flex items-center gap-1 text-xl font-semibold">
            {product?.price}$
            {product?.compare_price && (
              <span className="text-base text-red-700 line-through">
                {product?.compare_price}$
              </span>
            )}
          </p>
          <CartIcon product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
