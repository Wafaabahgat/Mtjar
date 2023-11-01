import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { clearErrors, carousels } from "./CarouselsAction";
import { Slice, CategoryType } from "../../lib/types";

const initialState: Slice<CategoryType[]> = {
  loading: null,
  success: null,
  msg: "",
  errors: {},
  data: [],
};

const CarouselsSlice = createSlice({
  name: "carousels",
  initialState,
  reducers: {},
  extraReducers: {
    // *********** categories ********** //
    [carousels.pending.type]: (state: Slice<CategoryType[]>) => {
      state.loading = true;
      state.msg = "";
      state.data = [];
      state.errors = {};
      state.success = null;
    },
    [carousels.fulfilled.type]: (
      state: Slice<CategoryType[]>,
      action: PayloadAction<Slice<CategoryType[]>>
    ) => {
      state.loading = false;
      state.success = action.payload.success;
      state.msg = action.payload.msg;
      state.data = action.payload.data;
      state.errors = {};
    },
    [carousels.rejected.type]: (
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

export default CarouselsSlice.reducer;
