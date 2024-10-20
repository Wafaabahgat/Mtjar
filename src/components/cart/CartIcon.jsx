import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addProductsToCart } from "../../slice/cart/cartSlice";
import { cn } from "../../lib/utils";

const CartIcon = ({ product, className }) => {
  const dispatch = useDispatch();

  const handleAddCard = () => {
    console.log("product", product);
    dispatch(
      addProductsToCart({
        id: product?.id,
        quantity: 1,
        // name: product?.name,
        // price: product?.price,
        // imageUrl: product?.image,
      })
    );
  };

  return (
    <button
      className="mt-2 text-white py-1 px-3 rounded-md gap-1 bg-main flex items-center"
      onClick={handleAddCard}
    >
      <BsCartPlus
        className={cn("md:w-[30px] w-[23px] md:h-[30px] h-[23px]", className)}
      />
      Add
    </button>
  );
};
// class="flex items-center gap-1 px-3 py-1 rounded-md  {{ $className ?? '' }}">
// <x-svg.plus />
// <h4 class="text-sm text-white"> {{__('Add')}}</h4>

export default CartIcon;
