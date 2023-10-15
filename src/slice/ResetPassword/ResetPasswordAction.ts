import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";

// *********** Supplier *********** //
export const ResetPass = createAsyncThunk(
  "Auth/ResetPass",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.post("/password/reset", args);
      return data;
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  }
);

export const clearErrors = createAsyncThunk("login/clear", async () => {
  return true;
});
