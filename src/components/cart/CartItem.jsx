import MetaDate from "../../lib/metaDate";
import React, { useEffect } from "react";
import { adminImgUrl } from "../../lib/utils";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import {
  getFromCart,
  removeFromCart,
} from "../../slice/cart/addproductsAction";
import Loader from "../Loader";
import toast from "react-hot-toast";

const CartItem = () => {
  const dispatch = useAppDispatch();
  const { loading, data } = useAppSelector((state) => state.getFromCart);

  useEffect(() => {
    dispatch(getFromCart());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  const calculateTotal = () => {
    let total = 0;
    data.map((e) => (total += e.price * e?.quantity));
    return total;
  };

  const handleDelete = (id) => {
    try {
      dispatch(removeFromCart(id));
      dispatch(getFromCart());
      toast.success("تم حذف المنتج بنجاح!");
    } catch (error) {
      // console.log(error);
      toast.error("حدث خطأ أثناء حذف المنتج!");
    }
  };

  const handleImg = (e) => {
    return e?.image_url?.includes("http")
      ? e?.image_url
      : adminImgUrl({ img: e?.image_url });
  };

  console.log("data", data);

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
                    <h2 className="text-red-400 text-xl">{e.id}</h2>
                    <div className="w-full">
                      <p className="text-2xl font-bold">{e?.name}</p>
                      <h4 className="m-2">
                        price : <span>{e?.price}$</span>
                      </h4>
                      <h4>
                        Qty : <span>{e?.quantity}</span>
                      </h4>
                      <button
                        className="px-2 py-1 mt-2 text-white bg-red-500 rounded"
                        onClick={() => handleDelete(e?.id)}
                      >
                        Delete
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
