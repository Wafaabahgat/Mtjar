import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const token = cookies.get("token");
const TOKEN = `Bearer ${token}`;
const config = {
  headers: {
    Authorization: TOKEN,
  },
};

// *********** Supplier *********** //
export const updateProfile = createAsyncThunk(
  "Auth/profile/update",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.post("/profile/update", args, config);
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
