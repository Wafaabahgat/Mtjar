import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { clearErrors, globalCategories } from "./globalsAction";
import { Slice, CategoryType } from "../../lib/types";

const initialState: Slice<CategoryType[]> = {
  loading: null,
  success: null,
  msg: "",
  errors: {},
  data: [],
};

const GlobalCategoriesSlice = createSlice({
  name: "globals",
  initialState,
  reducers: {},
  extraReducers: {
    // *********** globals ********** //
    [globalCategories.pending.type]: (state: Slice<CategoryType>) => {
      state.loading = true;
      state.msg = "";
      state.data = [];
      state.errors = {};
      state.success = null;
    },
    [globalCategories.fulfilled.type]: (
      state: Slice<CategoryType>,
      action: PayloadAction<Slice<CategoryType>>
    ) => {
      state.loading = false;
      state.success = action.payload.success;
      state.msg = action.payload.msg;
      state.data = action.payload.data;
      state.errors = {};
    },
    [globalCategories.rejected.type]: (
      state: Slice<CategoryType>,
      action: PayloadAction<Slice<CategoryType>>
    ) => {
      state.loading = false;
      state.success = false;
      state.msg = action.payload?.msg;
      state.errors = action.payload?.errors;
    },
    [clearErrors.fulfilled.type]: (state: Slice<CategoryType>) => {
      state.loading = false;
      state.success = null;
      state.msg = "";
      state.errors = {};
    },
  },
});

export default GlobalCategoriesSlice.reducer;
