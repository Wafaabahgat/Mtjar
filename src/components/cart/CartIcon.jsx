import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slice/cart/cartSlice";

const CartIcon = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddCard = () => {
    dispatch(
      addToCart({
        id: product?.id,
        name: product?.name,
        price: product?.price,
        imageUrl: product?.image,
        quantity: 1,
      })
    );
  };

  return (
    <>
      <button
        className="-right-2 mx-2 mt-2 absolute -top-2"
        onClick={handleAddCard}
      >
        <BsCartPlus className="rounded-bl-md w-[50px] h-[50px] p-2 bg-green-200" />
      </button>
    </>
  );
};

export default CartIcon;
