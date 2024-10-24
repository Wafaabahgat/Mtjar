import MetaDate from "../../lib/metaDate";
import React from "react";
import { adminImgUrl } from "../../lib/utils";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { removeFromCart, updateCart } from "../../slice/cart/addproductsAction";
import Loader from "../Loader";

const CartItem = () => {
  const dispatch = useAppDispatch();
  const { loading, data } = useAppSelector((state) => state.getFromCart);

  if (loading) {
    return <Loader />;
  }

  const handleIncrease = (item) => {
    dispatch(
      updateCart({
        id: item.id,
        quantity: Number(item.quantity) + 1,
      })
    );
  };
  const handleDecrease = (item) => {
    dispatch(
      updateCart({
        id: item.id,
        quantity: Number(item.quantity) - 1,
      })
    );
  };

  const calculateTotal = () => {
    let total = 0;
    data.map((e) => (total += e.price * e?.quantity));
    return total;
  };

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleImg = (e) => {
    return e?.image_url?.includes("http")
      ? e?.image_url
      : adminImgUrl({ img: e?.image_url });
  };

  // console.log("data", data);

  return (
    <div className="flex flex-col mt-24">
      <MetaDate ttl="cart - page" disc="The Cart page" />

      <div>
        <h2 className="my-14 text-2xl font-bold text-main md:text-4xl text-start px-5">
          Shopping Cart
        </h2>
        <div className="flex flex-col">
          {data &&
            data.map((e) => {
              return (
                <React.Fragment key={e?.id}>
                  <div className="flex flex-col justify-between lg:px-24 md:px-20 px-10 md:flex-row my-6">
                    <img
                      // src={e.imageUrl ? adminImgUrl(e.imageUrl) : "5"}
                      src={e?.image_url ? handleImg(e.image_url) : "6"}
                      className="object-contain w-[300px] h-[150px] block rounded-md"
                      alt={e.name}
                    />
                    <div className="">
                      <p className="text-2xl font-bold">{e?.name}</p>

                      <div className="flex justify-between items-center my-3">
                        <div className="flex items-center justify-center gap-4 my-3">
                          {/* quantity  */}
                          <button
                            onClick={() => handleDecrease(e)}
                            className="text-main bg-gray-300 rounded px-2 text-2xl"
                          >
                            -
                          </button>
                          <h4 className=" text-3xl">{e?.quantity}</h4>
                          <button
                            onClick={() => handleIncrease(e)}
                            className="text-main bg-gray-300 rounded px-2 text-2xl"
                          >
                            +
                          </button>
                        </div>

                        <h4 className="m-2 text-xl">{e?.price}$</h4>
                      </div>

                      <button
                        className="w-full py-2 mt-2 text-white bg-red-500 rounded"
                        onClick={() => handleDelete(e?.id)}
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
        <h2 className="m-4 text-xl text-right ">
          <span className="font-semibold text-main">Subtotal: </span>
          {calculateTotal()}$
        </h2>
      </div>
    </div>
  );
};

export default CartItem;
