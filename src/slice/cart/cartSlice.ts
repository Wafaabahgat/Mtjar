import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { RootState } from "../../store/store";
import { clearErrors, addProductsToCart } from "./addproductsAction";
import { Slice, Tproduct } from "../../lib/types";

interface IcartState {
  items: { [key: string]: number };
  productInfo: Tproduct[];
}

const initialState: IcartState = {
  items: {},
  productInfo: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProductsToCart.pending, (state: Slice<IcartState>) => {
        state.loading = true;
        state.msg = "";
        state.productInfo = [];
        state.errors = {};
        state.success = null;
      })
      .addCase(
        addProductsToCart.fulfilled,
        (
          state: Slice<IcartState[]>,
          action: PayloadAction<Slice<IcartState[]>>
        ) => {
          state.loading = false;
          state.success = action.payload.success;
          state.msg = action.payload.msg;
          state.productInfo = action.payload.data;
          state.errors = {};
        }
      )
      .addCase(
        addProductsToCart.rejected,
        (
          state: Slice<IcartState[]>,
          action: PayloadAction<Slice<IcartState[]>>
        ) => {
          state.loading = false;
          state.success = false;
          state.msg = action.payload?.msg;
          state.errors = action.payload?.errors || action.payload;
        }
      )
      .addCase(clearErrors.fulfilled, (state: Slice<IcartState[]>) => {
        state.loading = false;
        state.success = null;
        state.msg = "";
        state.errors = {};
      });
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

export { totalItems, addProductsToCart };

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
