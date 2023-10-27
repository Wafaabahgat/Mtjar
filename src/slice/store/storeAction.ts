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
// *********** All *********** //
export const stores = createAsyncThunk("stores/all", async (args, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const { data } = await axios.get("/dashboard/stores", config);
    return data;
  } catch (err) {
    if (err?.response?.data?.message === "Unauthenticated.") {
      return rejectWithValue(err?.response?.data?.message);
    }

    return rejectWithValue(err?.response?.data);
  }
});
// *********** Create *********** //
export const createStore = createAsyncThunk(
  "stores/create",
  async (args: FormData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.post("/dashboard/stores", args, config);
      return data;
    } catch (err) {
      if (err?.response?.data?.message === "Unauthenticated.") {
        return rejectWithValue(err?.response?.data?.message);
      }
      return rejectWithValue(err?.response?.data);
    }
  }
);
// *********** Single *********** //
export const singleStore = createAsyncThunk(
  "stores/single",
  async (args: number, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get(`/dashboard/stores/${args}`, config);
      return data;
    } catch (err) {
      if (err?.response?.data?.message === "Unauthenticated.") {
        return rejectWithValue(err?.response?.data?.message);
      }

      return rejectWithValue(err?.response?.data);
    }
  }
);
// *********** Delete *********** //
export const deleteStore = createAsyncThunk(
  "stores/delete",
  async (args: number | undefined, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.delete(`/dashboard/stores/${args}`, config);
      return data;
    } catch (err) {
      if (err?.response?.data?.message === "Unauthenticated.") {
        return rejectWithValue(err?.response?.data?.message);
      }

      return rejectWithValue(err?.response?.data);
    }
  }
);

// *********** Update *********** //
export const updateStore = createAsyncThunk(
  "stores/update",
  async (args: { dat: FormData; id: number }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.post(
        `/dashboard/stores/${args.id}`,
        args.dat,
        config
      );
      return data;
    } catch (err) {
      if (err?.response?.data?.message === "Unauthenticated.") {
        return rejectWithValue(err?.response?.data?.message);
      }
      return rejectWithValue(err?.response?.data);
    }
  }
);

export const clearErrors = createAsyncThunk("register/clear", async () => {
  return true;
});
