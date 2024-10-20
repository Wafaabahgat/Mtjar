import MetaDate from "../../lib/metaDate";
import React, { useEffect } from "react";
import { adminImgUrl } from "../../lib/utils";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
// import { removeFromCart } from "../../slice/cart/cartSlice";
import { addProductsToCart, removeFromCart } from "../../slice/cart/cartSlice";
import Loader from "../Loader";

const CartItem = () => {
  const dispatch = useAppDispatch();
  const { items, loading, productInfo } = useAppSelector(
    (state) => state.cartSlice
  );

  useEffect(() => {
    dispatch(addProductsToCart(items));
  }, [dispatch, items]);

  if (loading) {
    return <Loader />;
  }
  // const calculateTotal = () => {
  //   let total = 0;
  //   items.map((e) => (total += e.price * e?.quantity));
  //   // console.log(total);
  //   return total;
  // };

  const handleDelete = (itemId) => {
    dispatch(removeFromCart({ id: itemId }));
    console.log("removeFromCart", removeFromCart);
  };

  const handleImg = (e) => {
    return e?.image_url?.includes("http")
      ? e?.image_url
      : adminImgUrl({ img: e?.image_url });
  };

  console.log("productInfo", productInfo);
  
  return (
    <div className="flex flex-col mt-24">
      <MetaDate ttl="cart - page" disc="The Cart page" />

      <div className="flex flex-col px-10 ">
        <h2 className="mb-16 text-xl font-bold text-main md:text-3xl">
          Shopping Cart
        </h2>
        <div className="flex flex-col justify-between gap-4">
          {productInfo &&
            productInfo.map((e) => {
              // console.log("dd", e);
              return (
                <React.Fragment key={e?.id}>
                  <div className="flex flex-col w-1/2 mx-auto md:flex-row">
                    <img
                      // src={e.imageUrl ? adminImgUrl(e.imageUrl) : "5"}
                      src={e?.image_url ? handleImg(e.image_url) : "6"}
                      className="object-contain w-[300px] h-[150px] block rounded-md"
                      alt={e.name}
                    />

                    <div className="w-full mt-2 md:w-1/2 md:mt-0">
                      <p className="text-xl font-bold">{e?.name}</p>
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
        {/* <h2 className="m-4 text-xl text-right ">
          <span className="font-semibold text-main">Subtotal: </span>
           {calculateTotal()}$
        </h2> */}
      </div>
    </div>
  );
};

export default CartItem;
