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
      console.log(data, "dataqq");
      return data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log(err);
        return rejectWithValue(
          err?.response?.data?.message || "Error updating profile"
        );
      } else {
        return rejectWithValue(
          "An unexpected error occurred. Please try again."
        );
      }
    }
  }
);

export const clearErrors = createAsyncThunk("login/clear", async () => {
  return true;
});
