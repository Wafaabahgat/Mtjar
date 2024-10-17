import { createSelector, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { Tproduct } from "../../lib/types";
import { RootState } from "../../store/store";

interface IcartState {
  items: { [key: string]: number };
  productInfo: Tproduct[];
}

const initialState: IcartState = {
  // items: JSON.parse(localStorage.getItem("mtjr_cart")) || [],
  items: {},
  productInfo: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      if (state.items[id]) {
        state.items[id]++;
        toast.success("item has been successfully added to the cart");
      } else {
        state.items[id] = 1;
        toast.success("Item added to the cart for the first time");
      }

      // const cartItems = JSON.parse(localStorage.getItem("mtjr_cart")) || [];
      // const isAdded = cartItems?.find((e) => e?.id === id);
      // if (!isAdded) {
      //   localStorage.setItem(
      //     "mtjr_cart",
      //     JSON.stringify([...cartItems, action?.payload])
      //   );
      //   state.items = [...cartItems, action?.payload];
      //   toast.success("item has been successfully added to the cart");
      // } else {
      //   state.items = [...cartItems];
      //   toast.error("item is already added to the cart");
      // }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      if (state.items[id]) {
        if (state.items[id] > 1) {
          state.items[id]--;
          toast.success("Item quantity has been decreased");
        } else {
          delete state.items[id];
          toast.success("Item has been removed from the cart");
        }
      }
      // removeFromCart: (state, action) => {
      //   const removedItem = state.items.filter(
      //     (item) => item.id !== action.payload.id
      //   );
      //   state.items = removedItem;
      //   localStorage.setItem("mtjr_cart", JSON.stringify(removedItem));
    },
  },
});

const totalItems = createSelector(
  (state: RootState) => state.cartSlice.items,
  (items) => Object.keys(items).length
  // (items) =>
  //   Object.values(items).reduce((accumulator, currentQuantity) => {
  //     return accumulator + currentQuantity;
  //   }, 0)
);

export { totalItems };
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
