import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  items: JSON.parse(localStorage.getItem("mtjr_cart")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const cartItems = JSON.parse(localStorage.getItem("mtjr_cart")) || [];
      const isAdded = cartItems?.find((e) => e?.id === id);
      if (!isAdded) {
        localStorage.setItem(
          "mtjr_cart",
          JSON.stringify([...cartItems, action?.payload])
        );
        state.items = [...cartItems, action?.payload];
        toast.success("item has been successfully added to the cart");
      } else {
        state.items = [...cartItems];
        toast.error("item is already added to the cart");
      }
    },
    removeFromCart: (state, action) => {
      const removedItem = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      state.items = removedItem;
      localStorage.setItem("mtjr_cart", JSON.stringify(removedItem));
    },

    // removeFromCart: (state, action) => {
    //   delete state.items[action.payload.id];
    // },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
