import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
import { clearErrors, registerUser } from "./registerAction";
import { UserData } from "@/lib/types";

const cookies = new Cookies();

interface Login {
  loading: boolean | null;
  success: boolean | null;
  msg: string;
  user: UserData | object | null;
  errors: object;
  data: UserData | object | null | [];
}

const initialState: Login = {
  loading: null,
  success: null,
  msg: "",
  user: {},
  errors: {},
  data: {},
};

const LoginAuthSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: {
    // *********** register ********** //
    [registerUser.pending.type]: (state: Login) => {
      state.loading = true;
      state.msg = "";
      state.user = {};
      state.errors = {};
      state.success = null;
    },
    [registerUser.fulfilled.type]: (
      state: Login,
      action: PayloadAction<Login>
    ) => {
      state.loading = false;
      state.success = action.payload.success;
      state.msg = action.payload.msg;
      state.user = action.payload.data;
      state.errors = {};
      if (state.user.email) {
        cookies.set("user", JSON.stringify(state.user), {
          path: "/",
          maxAge: 3600 * 24 * 10,
        });
      }
    },
    [registerUser.rejected.type]: (
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
      state.errors = {};
    },
  },
});

export default LoginAuthSlice.reducer;
