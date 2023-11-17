import useSingle from "../../hooks/useSingle";
import { userSingleProducts } from "../../slice/Home/MainProductsAction";
import Loader from "../Loader";

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
      <div className="flex flex-col p-4 mt-20">
        <img
          src={data?.image}
          className="object-contain w-full max-h-[120px] mt-4"
          alt=""
        />
        <div className="flex gap-2">
          <h2 className="text-2xl font-bold my-2">{data?.name}</h2>
          <p className="text-slate-700">{data?.disc}</p>
        </div>
        <h1>hu</h1>
        <h1>hu</h1>
        <h1>hu</h1>
        <h1>hu</h1>
      </div>
    </>
  );
};

export default SingleProducts;
