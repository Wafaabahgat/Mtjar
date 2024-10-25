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

// *********** Get *********** //
export const getFromfavourite = createAsyncThunk(
  "favourite/getfavourite",
  async (args, thunkAPI) => {
    console.log("get", args);
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await axios.get("/favorite-user", config);
      console.log("getFromfavourite", response.data);
      return response.data;
    } catch (err: any) {
      if (err?.response?.data?.message === "Unauthenticated.") {
        return rejectWithValue(err?.response?.data?.message);
      }

      return rejectWithValue(err?.response?.data);
    }
  }
);

// *********** Add *********** //
export const addTofavourite = createAsyncThunk(
  "favourite/addfavourite",
  async (args, thunkAPI) => {
    // console.log(args, "args");
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await axios.get(`/favorite/${args.id}`, config);
      // console.log("response", response);
      return response.data;
    } catch (err: any) {
      if (err?.response?.data?.message === "Unauthenticated.") {
        return rejectWithValue(err?.response?.data?.message);
      }

      return rejectWithValue(err?.response?.data);
    }
  }
);

// *********** Delete *********** //
export const removeFromfavourite = createAsyncThunk(
  "favourite/remove",
  async (args: number | undefined, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get(`/favorite-remove/${args}`, config);

      return data;
    } catch (err: any) {
      if (err?.response?.data?.message === "Unauthenticated.") {
        return rejectWithValue(err?.response?.data?.message);
      }
      return rejectWithValue(err?.response?.data);
    }
  }
);

export const clearErrors = createAsyncThunk("products/clear", async () => {
  return true;
});
