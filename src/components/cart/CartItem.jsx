import MetaDate from "../../lib/metaDate";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { removeFromCart } from "../../slice/cart/cartSlice";
import { adminImgUrl } from "../../lib/utils";

const CartItem = () => {
  const { items } = useSelector((e) => e.cartSlice);
  const dispatch = useDispatch();

  const calculateTotal = () => {
    let total = 0;
    items.map((e) => (total += e.price * e?.quantity));
    // console.log(total);

    return total;
  };

  const handleDelete = (itemId) => {
    dispatch(removeFromCart({ id: itemId }));
  };
  const handleImg = (e) => {
    return e?.imageUrl?.includes("http")
      ? e?.imageUrl
      : adminImgUrl({ img: e?.imageUrl });
  };

  return (
    <div className="flex flex-col flex-1  mt-24">
      <div className="w-[1300px] h-full">
        <MetaDate ttl="cart - page" disc="The Cart page" />
        <div onClick={calculateTotal}>
          <h2 className="font-bold text-3xl text-green-500 mb-6">
            Shopping Cart
          </h2>
          <div className="flex flex-col gap-4 justify-between ml-10">
            {items &&
              items.map((e) => {
                console.log(e);
                return (
                  <React.Fragment key={e?.id}>
                    <div className="flex">
                      <img
                        // src={e.imageUrl ? adminImgUrl(e.imageUrl) : "5"}
                        src={e?.imageUrl ? handleImg(e) : "6"}
                        className="object-contain w-full max-w-[300px] h-[150px] block m-auto rounded-md"
                        // alt={e.name}
                      />

                      <div className="w-[500px]">
                        <p className="text-xl font-bold">{e?.name}</p>
                        <h4 className="m-2">
                          price : <span>{e?.price}$</span>
                        </h4>
                        <h4>
                          Qty : <span>{e?.quantity}</span>
                        </h4>
                        <button
                          className="bg-red-500 text-white px-2 py-1 rounded mt-2"
                          onClick={() => handleDelete(e?.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    <span className="w-[1300px] h-[1px] bg-slate-300"></span>
                  </React.Fragment>
                );
              })}
          </div>
          <h2 className=" m-4 text-xl text-right">
            <span className="font-semibold text-green-500">Subtotal: </span>
            {calculateTotal()}$
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
