import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";
// import { UserData } from "../../lib/types";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

// *********** Supplier *********** //
export const registerUser = createAsyncThunk(
  "Auth/registerUser",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    // console.log("jjjjjj");
    try {
      const { data } = await axios.post("/register", args);
      return data;
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  }
);

export const clearErrors = createAsyncThunk("register/clear", async () => {
  return true;
});
