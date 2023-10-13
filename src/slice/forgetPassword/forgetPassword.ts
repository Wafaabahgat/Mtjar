import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { clearErrors, forgetPass } from "./forgetPasswordAction";

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

const ForgetPassAuthSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: {
    // *********** Login ********** //
    [forgetPass.pending.type]: (state: Login) => {
      state.loading = true;
      state.msg = "";
      state.errors = {};
      state.success = null;
    },
    [forgetPass.fulfilled.type]: (
      state: Login,
      action: PayloadAction<Login>
    ) => {
      state.loading = false;
      state.success = action.payload.success;
      state.msg = action.payload.msg;
    },
    [forgetPass.rejected.type]: (
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

export default ForgetPassAuthSlice.reducer;
