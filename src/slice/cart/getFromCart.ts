import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { clearErrors, getFromCart } from "./addproductsAction";
import { Slice } from "../../lib/types";
import toast from "react-hot-toast";

const initialState: Slice<object[]> = {
  loading: null,
  success: null,
  msg: "",
  errors: {},
  data: [],
};

const getFromCartSlice = createSlice({
  name: "cart/getproducts",
  initialState,
  reducers: {},
  extraReducers: {
    // *********** getFromCart ********** //
    [getFromCart.pending.type]: (state: Slice<object[]>) => {
      state.loading = true;
      state.msg = "";
      state.data = [];
      state.errors = {};
      state.success = null;
    },
    [getFromCart.fulfilled.type]: (
      state: Slice<object[]>,
      action: PayloadAction<Slice<object[]>>
    ) => {
      state.loading = false;
      state.success = action.payload.success;
      state.msg = action.payload.msg;
      state.data = action.payload.data;
      state.errors = {};
      // if (action.payload.success) {
      //   toast.success(action.payload.msg);
      // }
    },
    [getFromCart.rejected.type]: (
      state: Slice<object[]>,
      action: PayloadAction<Slice<object[]>>
    ) => {
      state.loading = false;
      state.success = false;
      state.msg = action.payload?.msg;
      state.errors = action.payload?.errors || action.payload;
      if (action.payload?.success === false) {
        toast.error(action.payload?.msg);
      }
    },
    [clearErrors.fulfilled.type]: (state: Slice<object[]>) => {
      state.loading = false;
      state.success = null;
      state.msg = "";
      state.errors = {};
    },
  },
});

export default getFromCartSlice.reducer;
