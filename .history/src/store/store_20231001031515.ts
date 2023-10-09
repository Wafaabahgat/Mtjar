import login from "@/slices/login/login";
import register from "@/slices/reg/register";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "@slices/testSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    login: login,
    register: register,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
