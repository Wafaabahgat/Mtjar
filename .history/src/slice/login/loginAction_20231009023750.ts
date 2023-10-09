import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";
import Cookies from "universal-cookie";


const cookies = new Cookies();


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
