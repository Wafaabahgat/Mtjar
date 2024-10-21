import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { clearErrors, removeFromCart } from "./addproductsAction";
import { Slice } from "../../lib/types";

const initialState: Slice<object[]> = {
  loading: null,
  success: null,
  msg: "",
  errors: {},
  data: [],
};

const removeFromCartSlice = createSlice({
  name: "cart/remove",
  initialState,
  reducers: {},
  extraReducers: {
    // *********** removeFromCart ********** //
    [removeFromCart.pending.type]: (state: Slice<object[]>) => {
      state.loading = true;
      state.msg = "";
      state.data = [];
      state.errors = {};
      state.success = null;
    },
    [removeFromCart.fulfilled.type]: (
      state: Slice<object[]>,
      action: PayloadAction<Slice<object[]>>
    ) => {
      state.loading = false;
      state.success = action.payload.success;
      state.msg = action.payload.msg;
      state.data = action.payload.data;
      state.errors = {};
    },
    [removeFromCart.rejected.type]: (
      state: Slice<object[]>,
      action: PayloadAction<Slice<object[]>>
    ) => {
      state.loading = false;
      state.success = false;
      state.msg = action.payload?.msg;
      state.errors = action.payload?.errors || action.payload;
    },
    [clearErrors.fulfilled.type]: (state: Slice<object[]>) => {
      state.loading = false;
      state.success = null;
      state.msg = "";
      state.errors = {};
    },
  },
});

export default removeFromCartSlice.reducer;
