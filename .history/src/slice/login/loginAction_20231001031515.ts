import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";
import Cookies from "universal-cookie";
import { UserData } from "@/lib/types";

const cookies = new Cookies();
const token = cookies.get("egypt-user");
const TOKEN = `Bearer ${token?.access_token}`;
const config = {
  headers: {
    "Content-Type": "multipart/form-data",
    "auth-token": token?.access_token,
    Authorization: TOKEN,
  },
};

// *********** Supplier *********** //
export const loginUser = createAsyncThunk(
  "login/login",
  async (args: UserData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.post("/login", args, config);
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
