import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";
import Cookies from "universal-cookie";


const cookies = new Cookies();
const token = cookies.get("egypt-user");
const TOKEN = `Bearer ${token?.token}`;
const config = {
  headers: {
    "Content-Type": "multipart/form-data",
    "auth-token": token?.token,
    Authorization: TOKEN,
  },
};

// *********** Supplier *********** //
export const loginUser = createAsyncThunk(
  "login/login",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.post("/login", args);
      return data;
    } catch (err) {
      console.log(err);

      return rejectWithValue(err?.response?.data);
    }
  }
);

export const clearErrors = createAsyncThunk("login/clear", async () => {
  return true;
});
