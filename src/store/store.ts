import login from "../slice/login/login";
import register from "../slice/reg/register";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slice/testSlice";
import forgetPassword from "../slice/forgetPassword/forgetPassword";
import ResetPassword from "../slice/ResetPassword/ResetPassword";
import UpdateProfile from "../slice/Profile/profile";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    login: login,
    register: register,
    forgetPassword,
    ResetPassword,
    UpdateProfile: UpdateProfile,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
