import { useEffect, useState } from "react";
import { BiSolidStar } from "react-icons/bi";
import Button from "../Ui/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slice/cart/cartSlice";
import ProductCard from "../Products/ProductCard";
import useSingle from "../../hooks/useSingle";
import { userSingleProducts } from "../../slice/Home/MainProductsAction";
import Loader from "../Loader";
import Breadcamp from "../Ui/Breadcamp";

const links = [
  { name: "Home", link: "/" },
  { name: "Products", link: "/mainProducts" },
];

const SingleProducts = ({ product }) => {
  const dispatch = useDispatch();
  const { loading, data } = useSingle({
    states: "userSingleProducts",
    callfun: userSingleProducts,
  });

  const handleAddCard = () => {
    dispatch(
      addToCart({
        id: product?.id,
        name: product?.name,
        price: product?.price,
        imageUrl: product?.image,
        quantity: 1,
      })
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return <Loader />;
  }

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
            src={data?.image}
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
          <div className="flex gap-2">
            <p className="text-xl font-bold">Tags:</p>
            <p className="text-xl font-bold">Rating:</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {Array(data?.rating)
              ?.fill("")
              ?.map((_, index) => (
                <BiSolidStar key={index} className="text-xl text-yellow-600" />
              ))}
          </div>
          <Button
            type="submit"
            text="Add to Cart"
            variant="default"
            className="w-full text-white bg-green-500 rounded-md"
            onClick={handleAddCard}
          />
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
