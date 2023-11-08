import { BsCartPlus } from "react-icons/bs";
import { adminImgUrl } from "../../lib/utils";

const SingleProducts = () => {

  const handleImg = (e) => {
    return e?.image?.includes("http")
      ? e?.image
      : adminImgUrl({ img: e?.image });
  };

  return (
    <div className="flex  items-center justify-center mt-10">
      <div className="w-[1100px] shadow-2xl border-t border-l rounded-md py-8 px-4">
        <div
          className="relative flex flex-col rounded-lg w-full p-2 hover:scale-105 hover:shadow-lg border border-slate-300 overflow-hidden"
          // key={e.id}
        >
          <button className="flex item-center justify-center right-0 mx-2 mt-2 absolute top-0 ">
            <BsCartPlus className="border rounded-full w-[35px] h-[35px] p-1 " />
          </button>
          <img
            // key={e?.id}
            className="object-contain w-full max-h-[120px] mt-4"
            // src={e?.image ? handleImg(e) : ""}
            alt=""
          />
        </div>

        <h1>hu</h1>
        <h1>hu</h1>
        <h1>hu</h1>
        <h1>hu</h1>
        <h1>hu</h1>
        <h1>hu</h1>
        <h1>hu</h1>
        <h1>hu</h1>
      </div>
    </div>
  );
};

export default SingleProducts;
