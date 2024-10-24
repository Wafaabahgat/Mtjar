/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { BiSolidStar } from "react-icons/bi";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../slice/cart/cartSlice";
import ProductCard from "../Products/ProductCard";
import useSingle from "../../hooks/useSingle";
import { userSingleProducts } from "../../slice/Home/MainProductsAction";
import Loader from "../Loader";
import Breadcamp from "../Ui/Breadcamp";
import { adminImgUrl } from "../../lib/utils";
import notFound from "../../assets/notFound.png";
import CartIcon from "../cart/CartIcon";

const links = [
  { name: "Home", link: "/" },
  { name: "Products", link: "/mainProducts" },
];

const SingleProducts = ({ product }) => {
  // const dispatch = useDispatch();
  const { loading, data } = useSingle({
    states: "userSingleProducts",
    callfun: userSingleProducts,
  });

  // const handleAddCard = () => {
  //   dispatch(
  //     addToCart({
  //       id: product?.id,
  //       name: product?.name,
  //       price: product?.price,
  //       imageUrl: product?.image,
  //       quantity: 1,
  //     })
  //   );
  // };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return <Loader />;
  }

  const handleImg = (e) => {
    return e?.image_url?.includes("http")
      ? e?.image_url
      : adminImgUrl({ img: e?.image_url });
  };

  return (
    <div className="flex-1 pt-4 mt-20">
      <Breadcamp
        isDash={false}
        ttl="Product Details"
        links={[...links, { name: data?.slug }]}
      />

      {/* Product Details */}
      <div className="flex flex-col gap-3 p-6 md:flex-row">
        <div className="w-full md:w-1/2 ">
          <img
            src={data?.image_url ? handleImg(data) : notFound}
            className="object-contain w-full max-w-[600px] h-[400px] block m-auto rounded-md"
            alt=""
          />
        </div>
        <div className="flex flex-col w-full gap-3 md:ml-10 text-start">
          <span className="block">{data?.category}</span>
          <h2 className="text-xl font-bold ">{data?.name}</h2>
          <span>
            <strong>Brand: </strong>
            {data?.store}
          </span>
          <p className="text-slate-700 text-md">{data?.disc}</p>
          <p className="flex items-center gap-1 text-2xl font-bold">
            {data?.compare_price && (
              <span className="text-xl text-red-700 line-through">
                {data?.compare_price}$
              </span>
            )}
            {data?.price}$
          </p>
          <div className="flex gap-2 items-center">
            <p className="text-xl font-bold">Rating:</p>

            <div className="flex flex-wrap gap-2">
              {Array(data?.rating)
                ?.fill("")
                ?.map((_, index) => (
                  <BiSolidStar
                    key={index}
                    className="text-xl text-yellow-600"
                  />
                ))}
            </div>
          </div>
          <CartIcon
            data={product}
            Cartclass="flex justify-center item-center"
          />
          {/* <Button
            type="submit"
            text="Add to Cart"
            variant="default"
            className="w-full text-white bg-main rounded-md"
            onClick={handleAddCard}
          /> */}
        </div>
      </div>

      {/* Related Products */}
      <h2 className="m-4 text-2xl font-semibold">You may also like:</h2>
      <div className="grid grid-cols-1 gap-4 m-4 md:grid-cols-2 lg:grid-cols-3">
        {data?.sameProducts?.map((e) => (
          <ProductCard product={e} key={e.id} />
        ))}
      </div>
    </div>
  );
};

export default SingleProducts;
