import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { clearErrors, addproducts } from "./addproductsAction";
import { Slice, CategoryType } from "../../lib/types";

const initialState: Slice<CategoryType[]> = {
  loading: null,
  success: null,
  msg: "",
  errors: {},
  data: [],
};

const AddproductsSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: {
    // *********** categories ********** //
    [addproducts.pending.type]: (state: Slice<CategoryType[]>) => {
      state.loading = true;
      state.msg = "";
      state.data = [];
      state.errors = {};
      state.success = null;
    },
    [addproducts.fulfilled.type]: (
      state: Slice<CategoryType[]>,
      action: PayloadAction<Slice<CategoryType[]>>
    ) => {
      state.loading = false;
      state.success = action.payload.success;
      state.msg = action.payload.msg;
      state.data = action.payload.data;
      state.errors = {};
    },
    [addproducts.rejected.type]: (
      state: Slice<CategoryType[]>,
      action: PayloadAction<Slice<CategoryType[]>>
    ) => {
      state.loading = false;
      state.success = false;
      state.msg = action.payload?.msg;
      state.errors = action.payload?.errors || action.payload;
    },
    [clearErrors.fulfilled.type]: (state: Slice<CategoryType[]>) => {
      state.loading = false;
      state.success = null;
      state.msg = "";
      state.errors = {};
    },
  },
});

export default AddproductsSlice.reducer;
