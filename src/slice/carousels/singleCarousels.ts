import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { clearErrors, singleCarousels } from "./CarouselsAction";
import { Slice, CategoryType } from "../../lib/types";
import toast from "react-hot-toast";

const initialState: Slice<CategoryType> = {
  loading: null,
  success: null,
  msg: "",
  errors: {},
  data: {},
};

const singleCarouselsSlice = createSlice({
  name: "carousels",
  initialState,
  reducers: {},
  extraReducers: {
    // *********** SingleCategory ********** //
    [singleCarousels.pending.type]: (state: Slice<CategoryType>) => {
      state.loading = true;
      state.msg = "";
      state.data = {};
      state.errors = {};
      state.success = null;
    },
    [singleCarousels.fulfilled.type]: (
      state: Slice<CategoryType>,
      action: PayloadAction<Slice<CategoryType>>
    ) => {
      state.loading = false;
      state.success = action.payload.success;
      state.msg = action.payload.msg;
      state.data = action.payload.data;
      state.errors = {};

      if (action.payload.success) {
        toast.success(action.payload.msg);
      }
    },
    [singleCarousels.rejected.type]: (
      state: Slice<CategoryType>,
      action: PayloadAction<Slice<CategoryType>>
    ) => {
      state.loading = false;
      state.success = false;
      state.msg = action.payload?.msg;
      state.errors = action.payload?.errors;
      if (action.payload?.success === false) {
        toast.error(action.payload?.msg);
      }
    },
    [clearErrors.fulfilled.type]: (state: Slice<CategoryType>) => {
      state.loading = false;
      state.success = null;
      state.msg = "";
      state.errors = {};
    },
  },
});

export default singleCarouselsSlice.reducer;
