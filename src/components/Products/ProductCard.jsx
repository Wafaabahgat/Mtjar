import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Pagination from "../components/Ui/Pagination";
import { adminImgUrl } from "../../lib/utils";
import { Link } from "react-router-dom";
import notFound from "../../assets/notFound.png";
import CartIcon from "../cart/CartIcon";
import { FaStar } from "react-icons/fa6";

const ProductCard = ({ product }) => {
  const handleImg = (e) => {
    return e?.image_url?.includes("http")
      ? e?.image_url
      : adminImgUrl({ img: e?.image_url });
  };

  return (
    <div className="w-full border px-2 py-2 hover:border-main rounded-md">
      <div className="">
        <img
          key={product?.id}
          className="object-contain w-full max-h-[120px] mb-4"
          src={product?.image_url ? handleImg(product) : notFound}
          alt="notFound"
        />
      </div>
      <div className="text-start px-3">
        <Link to={`/SingleProducts/${product?.slug}`}>
          <h2 className="text-[12px] text-gray-400 py-2">{product.name}</h2>

          <p className="md:text-lg text-[15px] line-clamp-2 text-black">
            {product.disc}
          </p>
        </Link>
        <div className="flex my-2 gap-2">
          <div className="flex items-center text-yellow-400 text-lg">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="mt-1 text-lg text-gray-400">{product.rating}</p>
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
