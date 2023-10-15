import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const token = cookies.get("user");
const TOKEN = `Bearer ${token?.token}`;
const config = {
  headers: {
    Authorization: TOKEN,
  },
};

// *********** Supplier *********** //
export const UpdateProfile = createAsyncThunk(
  "Auth/profile/Update",
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
