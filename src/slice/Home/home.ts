import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { clearErrors, home } from "./HomeAction";
import { Slice, CategoryType } from "../../lib/types";

const initialState: Slice<CategoryType[]> = {
  loading: null,
  success: null,
  msg: "",
  errors: {},
  data: [],
};

const HomeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: {
    // *********** categories ********** //
    [home.pending.type]: (state: Slice<CategoryType[]>) => {
      state.loading = true;
      state.msg = "";
      state.data = [];
      state.errors = {};
      state.success = null;
    },
    [home.fulfilled.type]: (
      state: Slice<CategoryType[]>,
      action: PayloadAction<Slice<CategoryType[]>>
    ) => {
      state.loading = false;
      state.success = action.payload.success;
      state.msg = action.payload.msg;
      state.data = action.payload.data;
      state.errors = {};
    },
    [home.rejected.type]: (
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

export default HomeSlice.reducer;
