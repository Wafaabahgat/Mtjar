import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { clearErrors, ResetPass } from "./ResetPasswordAction";

interface Login {
  loading: boolean | null;
  success: boolean | null;
  msg: string;
  errors: object;
}

const initialState: Login = {
  loading: null,
  success: null,
  msg: "",
  errors: {},
};

const ResetPassAuthSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: {
    // *********** ResetPass ********** //
    [ResetPass.pending.type]: (state: Login) => {
      state.loading = true;
      state.msg = "";
      state.errors = {};
      state.success = null;
    },
    [ResetPass.fulfilled.type]: (
      state: Login,
      action: PayloadAction<Login>
    ) => {
      state.loading = false;
      state.success = action.payload.success;
      state.msg = action.payload.msg;
    },
    [ResetPass.rejected.type]: (
      state: Login,
      action: PayloadAction<Login>
    ) => {
      state.loading = false;
      state.success = false;
      state.msg = action.payload?.msg;
      state.errors = action.payload?.errors;
    },
    [clearErrors.fulfilled.type]: (state: Login) => {
      state.loading = false;
      state.success = null;
      state.msg = "";
    },
  },
});

export default ResetPassAuthSlice.reducer;
