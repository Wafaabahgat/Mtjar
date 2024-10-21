import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addProductsToCart } from "../../slice/cart/cartSlice";
import { cn } from "../../lib/utils";
import toast from "react-hot-toast";

const CartIcon = ({ product, className }) => {
  const dispatch = useDispatch();

  const handleAddCard = () => {
    try {
      dispatch(
        addProductsToCart({
          id: product?.id,
          quantity: 1,
        })
      );
      toast.success("تم اضافه المنتج بنجاح!");
    } catch (error) {
      console.log(error);
      toast.error("حدث خطأ!");
    }
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

export default CartIcon;
