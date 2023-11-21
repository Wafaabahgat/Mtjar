import MetaDate from "../../lib/metaDate";

const CartItem = () => {
  return (
    <div className="flex flex-col flex-1 items-center mt-24">
      <div className="w-[1300px] h-full">
        <MetaDate ttl="cart - page" disc="The Cart page" />
        <div>
          <h2 className="font-bold text-3xl text-green-500 mb-6">Your Cart</h2>
          <div>
            <ul className="flex flex-row justify-between font-bold text-lg">
              <li>Products</li>
              <li>Name of Products</li>
              <li>Price</li>
              <li>Quantity</li>
              <li>Remove</li>
              <li>Total</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
