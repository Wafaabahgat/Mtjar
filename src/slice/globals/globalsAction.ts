import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";
import { UserData } from "../../lib/types";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const user = cookies.get("token");
const TOKEN = `Bearer ${user}`;
const config = {
  headers: {
    Authorization: TOKEN,
  },
};
// *********** globalCategories *********** //
export const globalCategories = createAsyncThunk(
  "globals/categories",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get("/globals/categories", config);
      // Process the response and return a serializable payload
      return data;
    } catch (err) {
      if (err?.response?.data?.message === "Unauthenticated.") {
        return rejectWithValue(err?.response?.data?.message);
      }

      // If the error response itself is not serializable, you can return a custom error object
      return rejectWithValue({ error: "An error occurred" });
    }
  }
);
// *********** globalStores *********** //

export const globalStores = createAsyncThunk(
  "globals/stores",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get("/globals/stores", config);
      // Process the response and return a serializable payload
      return data;
    } catch (err) {
      if (err?.response?.data?.message === "Unauthenticated.") {
        return rejectWithValue(err?.response?.data?.message);
      }

      // If the error response itself is not serializable, you can return a custom error object
      return rejectWithValue({ error: "An error occurred" });
    }
  }
);

export const clearErrors = createAsyncThunk("globals/clear", async () => {
  return true;
});
