import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { clearErrors, getFromfavourite } from "./favouriteAction";
import { CategoryType, Slice } from "../../lib/types";

const initialState: Slice<CategoryType[]> = {
  loading: null,
  success: null,
  msg: "",
  errors: {},
  data: [],
};

const getfavourite = createSlice({
  name: "favourite/getfavourite",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFromfavourite.pending, (state: Slice<CategoryType>) => {
        state.loading = true;
        state.msg = "";
        state.data = [];
        state.errors = {};
        state.success = null;
      })
      .addCase(
        getFromfavourite.fulfilled,
        (
          state: Slice<CategoryType[]>,
          action: PayloadAction<Slice<CategoryType[]>>
        ) => {
          state.loading = false;
          state.success = action.payload.success;
          state.msg = action.payload.msg;
          state.data = action.payload.data;
          state.errors = {};
          if (action.payload.success) {
            toast.success(action.payload.msg);
            // window.location.reload();
          }
        }
      )
      .addCase(
        getFromfavourite.rejected,
        (
          state: Slice<CategoryType[]>,
          action: PayloadAction<Slice<CategoryType[]>>
        ) => {
          state.loading = false;
          state.success = false;
          state.msg = action.payload?.msg;
          state.errors = action.payload?.errors || action.payload;
          if (action.payload.success === false) {
            toast.error(action.payload.msg);
          }
        }
      )
      .addCase(clearErrors.fulfilled, (state: Slice<CategoryType[]>) => {
        state.loading = false;
        state.success = null;
        state.msg = "";
        state.errors = {};
      });
  },
});

export { getFromfavourite };

export default getfavourite.reducer;
