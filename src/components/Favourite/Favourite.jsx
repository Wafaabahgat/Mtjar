import MetaDate from "../../lib/metaDate";
import React from "react";
import { adminImgUrl } from "../../lib/utils";
import Loader from "../Loader";
import notFound from "../../assets/notFound.png";
import { useSelector } from "react-redux";

const Favourite = () => {
  // const dispatch = useAppDispatch();
  const { loading, data } = useSelector((state) => state.getfavourite);

  if (loading) {
    return <Loader />;
  }

  // const handleDelete = (id) => {
  //   dispatch(removeFromCart(id));
  // };

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
        <div className="flex flex-col">
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
        </div>
      </div>
    </div>
  );
};

export default Favourite;
