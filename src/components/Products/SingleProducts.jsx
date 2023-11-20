import useSingle from "../../hooks/useSingle";
import { userSingleProducts } from "../../slice/Home/MainProductsAction";
import Loader from "../Loader";
import Breadcamp from "../Ui/Breadcamp";
import { BiSolidStar } from "react-icons/bi";
import Button from "../Ui/Button";
// import { FaCartPlus } from "react-icons/fa";

const links = [
  { name: "Home", link: "/home" },
  { name: "Products", link: "/mainProducts" },
];

const SingleProducts = () => {
  const { loading, data } = useSingle({
    states: "userSingleProducts",
    callfun: userSingleProducts,
  });
  console.log(data);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="flex-1 mt-20 pt-4">
        <Breadcamp
          isDash={false}
          ttl="Product Details"
          links={[...links, { name: data?.slug }]}
        />
        <div className="flex p-6 gap-3">
          <div className="md:w-[55%] w-full ">
            <img
              src={data?.image}
              className="object-contain w-full max-w-[600px] h-[400px] block m-auto rounded-md"
              alt=""
            />
          </div>
          <div className="flex flex-col w-full text-start ml-20 gap-3">
            <span className="block">{data?.category}</span>
            <h2 className="text-xl font-bold ">{data?.name}</h2>
            <span>
              <strong>Brand: </strong>
              {data?.store}
            </span>
            <p className="text-slate-700 text-md">{data?.disc}</p>
            <p className="text-2xl font-bold flex items-center gap-1">
              {data?.compare_price && (
                <span className="line-through text-xl text-red-700">
                  {data?.compare_price}$
                </span>
              )}
              {data?.price}$
            </p>
            <p className="font-bold text-xl">Tags:</p>
            <p className="font-bold text-xl">Rating:</p>
            <span className="flex gap-2 flex-wrap">
              {Array(data?.rating)
                ?.fill("")
                ?.map((i) => (
                  <BiSolidStar key={i} className="text-xl text-yellow-600" />
                ))}
            </span>
            <Button
              type="submit"
              text="Add to card"
              variant="default"
              className="bg-green-500 w-full rounded-md text-white"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProducts;
