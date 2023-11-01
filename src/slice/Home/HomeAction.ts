import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";
import { Slice, CategoryType } from "../../lib/types";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const token = cookies.get("token");
const TOKEN = `Bearer ${token}`;
const config = {
  headers: {
    Authorization: TOKEN,
  },
};

// *********** All *********** //
export const home = createAsyncThunk("home/home", async (args, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    // const { data } = await axios.post("/register", args);

    // const { data } = await axios.get(`/home${args ? args : ""}`, config);
    const { data } = await axios.get("/home", args);
    return data;
  } catch (err) {
    if (err?.response?.data?.message === "Unauthenticated.") {
      return rejectWithValue(err?.response?.data?.message);
    }

    return rejectWithValue(err?.response?.data);
  }
});

export const clearErrors = createAsyncThunk("home/clear", async () => {
  return true;
});
