// import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { clearErrors, addProductsToCart } from "./addproductsAction";
// import { Slice, Tproduct } from "../../lib/types";

// const initialState: Slice<Tproduct[]> = {
//   loading: null,
//   success: null,
//   msg: "",
//   errors: {},
//   data: [],
// };

// const addProductsToCartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {},
//   extraReducers: {
//     // *********** categories ********** //
//     [addProductsToCart.pending.type]: (state: Slice<Tproduct[]>) => {
//       state.loading = true;
//       state.msg = "";
//       state.data = [];
//       state.errors = {};
//       state.success = null;
//     },
//     [addProductsToCart.fulfilled.type]: (
//       state: Slice<Tproduct[]>,
//       action: PayloadAction<Slice<Tproduct[]>>
//     ) => {
//       state.loading = false;
//       state.success = action.payload.success;
//       state.msg = action.payload.msg;
//       state.data = action.payload.data;
//       state.errors = {};
//     },
//     [addProductsToCart.rejected.type]: (
//       state: Slice<Tproduct[]>,
//       action: PayloadAction<Slice<Tproduct[]>>
//     ) => {
//       state.loading = false;
//       state.success = false;
//       state.msg = action.payload?.msg;
//       state.errors = action.payload?.errors || action.payload;
//     },
//     [clearErrors.fulfilled.type]: (state: Slice<Tproduct[]>) => {
//       state.loading = false;
//       state.success = null;
//       state.msg = "";
//       state.errors = {};
//     },
//   },
// });

// export default addProductsToCartSlice.reducer;
