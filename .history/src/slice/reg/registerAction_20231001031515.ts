import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";
import { UserData } from "@/lib/types";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

// *********** Supplier *********** //
export const registerUser = createAsyncThunk(
  "register/register",
  async (args: UserData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.post("/register", args, config);
      return data;
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  }
);

export const clearErrors = createAsyncThunk("register/clear", async () => {
  return true;
});
