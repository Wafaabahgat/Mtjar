/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { addProductsToCart } from "../../slice/cart/cartSlice";
import { cn } from "../../lib/utils";
import { MdAdd } from "react-icons/md";

const CartIcon = ({ product, className, Cartclass }) => {
  const dispatch = useDispatch();

  // console.log("object", data);

  const handleAddCard = () => {
    dispatch(
      addProductsToCart({
        id: product?.id,
        quantity: 1,
      })
    );
  };

  return (
    <button
      className={`mt-2 text-white py-1 px-3 rounded-md gap-1 bg-main flex items-center ${Cartclass}`}
      onClick={handleAddCard}
    >
      <MdAdd
        className={cn("md:w-[30px] w-[23px] md:h-[30px] h-[23px]", className)}
      />
      Add
    </button>
  );
};

export default CartIcon;
