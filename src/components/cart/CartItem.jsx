import MetaDate from "../../lib/metaDate";
import React from "react";
import { adminImgUrl } from "../../lib/utils";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { removeFromCart, updateCart } from "../../slice/cart/addproductsAction";
import Loader from "../Loader";
import notFound from "../../assets/notFound.png";

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
    if (item.quantity > 1) {
      dispatch(
        updateCart({
          id: item.id,
          quantity: Number(item.quantity) - 1,
        })
      );
    } else {
      dispatch(removeFromCart(item.id));
    }
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

  return (
    <div className="flex flex-col mt-24">
      <MetaDate ttl="cart - page" disc="The Cart page" />

      <div>
        <h2 className="my-14 text-2xl font-bold text-main md:text-4xl text-start px-5">
          Shopping Cart
        </h2>
        {/* Container */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:px-20 md:px-14 sm:px-8 px-4">
          {/* Products Section */}
          <div className="bg-slate-300/35 w-full lg:max-w-[70%] rounded-xl overflow-hidden">
            <div className="grid grid-cols-4 lg:gap-4 gap-1 lg:px-10 px-4 py-7 border-b-2 border-slate-300">
              <h2 className="md:text-[20px] text-[16px] font-bold text-second">
                Product
              </h2>
              <h2 className="md:text-[20px] text-[16px] font-bold text-second">
                Price
              </h2>
              <h2 className="md:text-[20px] text-[16px] font-bold text-second">
                Quantity
              </h2>
              <h2 className="md:text-[20px] text-[16px] font-bold text-second">
                Total
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
                          <button
                            className="py-1 px-3 mt-2 text-sm text-white bg-red-500 rounded"
                            onClick={() => handleDelete(e?.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <h4 className="md:text-lg text-[16px] xl:text-center lg:text-end text-center">
                        ${e?.price.toFixed(2)}
                      </h4>
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleDecrease(e)}
                          className="text-main bg-gray-300 rounded px-2 md:text-xl text-lg"
                        >
                          -
                        </button>
                        <h4 className="md:text-xl text-lg">{e?.quantity}</h4>
                        <button
                          onClick={() => handleIncrease(e)}
                          className="text-main bg-gray-300 rounded px-2 md:text-xl text-lg"
                        >
                          +
                        </button>
                      </div>
                      <h4 className="md:text-lg text-[16px]">
                        ${(e?.price * e?.quantity).toFixed(2)}
                      </h4>
                    </div>
                    <hr className="w-full border-t border-slate-300" />
                  </React.Fragment>
                );
              })}
          </div>

          {/* Summary Section */}
          <div className="flex flex-col w-full lg:max-w-[30%] bg-slate-300/35 rounded-xl p-6 space-y-6 max-h-[250px]">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-black">Cart Total</h3>
              <dl className="grid grid-cols-2 gap-3">
                <dt className="font-semibold text-gray-800">Discount:</dt>
                <dd className="text-gray-500">10%</dd>
                <dt className="font-semibold text-gray-800">Total:</dt>
                <dd className="text-gray-500">${calculateTotal()}$</dd>
              </dl>
            </div>
            <a href="/checkout">
              <button className="bg-orange-500 text-white py-2 rounded-lg text-lg w-full">
                Checkout
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
