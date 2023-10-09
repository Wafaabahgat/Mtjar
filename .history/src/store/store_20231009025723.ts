import login from "../slice/login/login";
import register from "../slice/reg/register";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "@slices/testSlice";
import counterSlice from "../";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    login: login,
    register: register,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
