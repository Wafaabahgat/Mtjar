import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";
// import { UserData } from "../../lib/types";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

// *********** Supplier *********** //
export const createStore = createAsyncThunk(
  "store/createstore",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    // console.log("jjjjjj");
    try {
      const { data } = await axios.post("/dashboard/stores", args);
      return data;
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  }
);
export const updateStore = createAsyncThunk(
  "store/updatestore",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    // console.log("jjjjjj");
    try {
      const { data } = await axios.post("/dashboard/stores", args);
      return data;
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  }
);

export const clearErrors = createAsyncThunk("register/clear", async () => {
  return true;
});
