import MetaDate from "../../lib/metaDate";
import React from "react";
import { adminImgUrl } from "../../lib/utils";
import Loader from "../Loader";
import notFound from "../../assets/notFound.png";
import { useDispatch, useSelector } from "react-redux";
import { removeFromfavourite } from "../../slice/favourite/favouriteAction";

const Favourite = () => {
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.getfavourite);

  if (loading) {
    return <Loader />;
  }

  const handleDelete = (id) => {
    dispatch(removeFromfavourite(id));
  };

  const handleImg = (e) => {
    return e?.image_url?.includes("http")
      ? e?.image_url
      : adminImgUrl({ img: e?.image_url });
  };

  console.log("dataFavourite", data);

  return (
    <div className="flex flex-col mt-24">
      <MetaDate ttl="Favourite - page" disc="The Cart page" />

      <div>
        <h2 className="my-14 text-2xl font-bold text-main md:text-4xl text-start px-5">
          Favourite Page
        </h2>
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:px-20 md:px-14 sm:px-8 px-4">
          {/* Products Section */}
          <div className="bg-slate-300/35 w-full lg:max-w-[60%] rounded-xl overflow-hidden mx-auto">
            <div className="grid grid-cols-4 lg:gap-4 gap-1 lg:px-10 px-4 py-7 border-b-2 border-slate-300 mx-auto">
              <h2 className="md:text-[20px] text-[16px] font-bold text-second">
                Product
              </h2>
              <h2 className="md:text-[20px] text-[16px] font-bold text-second">
                Price
              </h2>
              <h2 className="md:text-[20px] text-[16px] font-bold text-second">
                Action
              </h2>
            </div>
            {data &&
              data.map((e) => {
                return (
                  <React.Fragment key={e?.id}>
                    <div className="grid grid-cols-4 px-3 py-6 items-center">
                      <div className="flex items-center xl:gap-4 gap-2 md:flex-row flex-col">
                        <img
                          src={e?.image_url ? handleImg(e) : notFound}
                          className="object-cover w-[100px] h-[100px] rounded-md"
                          alt={e.name}
                        />
                        <div className="md:text-start">
                          <p className="md:text-[15px] text-[13px] font-semibold">
                            {e?.name}
                          </p>
                        </div>
                      </div>
                      <h4 className="md:text-lg text-[16px] xl:text-center lg:text-end text-center">
                        ${e?.price.toFixed(2)}
                      </h4>
                      <div>
                        <button
                          className="py-1 px-3 mt-2 text-sm text-white bg-red-500 rounded"
                          onClick={() => handleDelete(e?.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <hr className="w-full border-t border-slate-300" />
                  </React.Fragment>
                );
              })}
          </div>
        </div>
        {/* <div className="flex flex-col">
          {data?.map((e) => {
            return (
              <React.Fragment key={e?.id}>
                <div className="flex flex-col justify-between lg:px-24 md:px-20 px-10 md:flex-row my-6">
                  <img
                    src={e?.image_url ? handleImg(e) : notFound}
                    className="object-contain w-[300px] h-[150px] block rounded-md"
                    alt={e.name}
                  />
                  <div className="">
                    <p className="text-2xl font-bold">{e?.name}</p>
                    <p className="text-2xl font-bold">{e?.price}$</p>
                    <button
                      className="w-full py-2 mt-2 text-white bg-red-500 rounded"
                      // onClick={() => handleDelete(e?.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <span className="max-w-[1500px] h-[1px] bg-slate-300"></span>
              </React.Fragment>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default Favourite;
