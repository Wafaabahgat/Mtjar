import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";
import { Slice, CategoryType } from "../../lib/types";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

// *********** All *********** //
export const categoriesUser = createAsyncThunk(
  "categories/all",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get(
        `/dashboard/categories${args ? args : ""}`,
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

// *********** Delete *********** //
export const deleteCategory = createAsyncThunk(
  "categories/delete",
  async (args: number | undefined, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.delete(
        `/dashboard/categories/${args}`,
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
// *********** Update *********** //
export const UpdateCategory = createAsyncThunk(
  "categories/delete",
  async (args: { dat: FormData; id: number }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.post(
        `/dashboard/categories/${args.id}`,
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
// *********** Create *********** //
export const createCategory = createAsyncThunk(
  "categories/create",
  async (args: FormData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.post("/dashboard/categories", args, config);
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
export const singleCategory = createAsyncThunk(
  "categories/single",
  async (args: number, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get(`/dashboard/categories/${args}`, config);
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
