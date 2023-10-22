import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { clearErrors, stores } from "./storeAction";
import { Slice, StoreType } from "@/lib/types";

const initialState: Slice<StoreType[]> = {
  loading: null,
  success: null,
  msg: "",
  errors: {},
  data: [],
};

const StoresSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {},
  extraReducers: {
    // *********** register ********** //
    [stores.pending.type]: (state: Slice<StoreType[]>) => {
      state.loading = true;
      state.msg = "";
      state.data = [];
      state.errors = {};
      state.success = null;
    },
    [stores.fulfilled.type]: (
      state: Slice<StoreType[]>,
      action: PayloadAction<Slice<StoreType[]>>
    ) => {
      state.loading = false;
      state.success = action.payload.success;
      state.msg = action.payload.msg;
      state.data = action.payload.data;
      state.errors = {};
    },
    [stores.rejected.type]: (
      state: Slice<StoreType[]>,
      action: PayloadAction<Slice<StoreType[]>>
    ) => {
      state.loading = false;
      state.success = false;
      state.msg = action.payload?.msg;
      state.errors = action.payload?.errors || action.payload;
    },
    [clearErrors.fulfilled.type]: (state: Slice<StoreType[]>) => {
      state.loading = false;
      state.success = null;
      state.msg = "";
      state.errors = {};
    },
  },
});

export default StoresSlice.reducer;
