import { clearErrors, deleteCategory } from "./categoriesAction";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { UserData } from "../../lib/types";

const initialState: Slice<object> = {
  loading: null,
  success: null,
  msg: "",
  errors: {},
  data: {},
};

const DeleteCategorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: {
    // *********** Delete -Store ********** //
    [deleteCategory.pending.type]: (state: Slice<object>) => {
      state.loading = true;
      state.msg = "";
      state.data = {};
      state.errors = {};
      state.success = null;
    },
    [deleteCategory.fulfilled.type]: (
      state: Slice<object>,
      action: PayloadAction<Slice<object>>
    ) => {
      state.loading = false;
      state.success = action.payload.success;
      state.msg = action.payload.msg;
      state.data = action.payload.data;
      state.errors = {};
    },
    [deleteCategory.rejected.type]: (
      state: Slice<object>,
      action: PayloadAction<Slice<object>>
    ) => {
      state.loading = false;
      state.success = false;
      state.msg = action.payload?.msg;
      state.errors = action.payload?.errors;
    },
    [clearErrors.fulfilled.type]: (state: Slice<object>) => {
      state.loading = false;
      state.success = null;
      state.msg = "";
      state.errors = {};
    },
  },
});

export default DeleteCategorySlice.reducer;
