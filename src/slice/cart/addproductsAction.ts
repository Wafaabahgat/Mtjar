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

// *********** Add *********** //
export const addProductsToCart = createAsyncThunk(
  "cart/addproducts",
  async (args, thunkAPI) => {
    // console.log(args, "args");
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await axios.post(
        `/cart/${args.id}`,
        {
          quantity: args.quantity,
        },
        config
      );
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

// *********** Get *********** //
export const getFromCart = createAsyncThunk(
  "cart/getproducts",
  async (args, thunkAPI) => {
    console.log(args, "args");
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await axios.get("/cart-user", config);
      console.log("response", response);
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
export const removeFromCart = createAsyncThunk(
  "cart/remove",
  async (args: number | undefined, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get(`/cart-remove/${args}`, config);

      return data;
    } catch (err: any) {
      if (err?.response?.data?.message === "Unauthenticated.") {
        return rejectWithValue(err?.response?.data?.message);
      }
      return rejectWithValue(err?.response?.data);
    }
  }
);


// *********** Update *********** //
// export const updateProducts = createAsyncThunk(
//   "products/update",
//   async (args: { dat: FormData; id: number }, thunkAPI) => {
//     const { rejectWithValue } = thunkAPI;
//     try {
//       const { data } = await axios.post(
//         `/dashboard/products/${args.id}`,
//         args.dat,
//         config
//       );
//       return data;
//     } catch (err:any) {
//       if (err?.response?.data?.message === "Unauthenticated.") {
//         return rejectWithValue(err?.response?.data?.message);
//       }
//       return rejectWithValue(err?.response?.data);
//     }
//   }
// );

export const clearErrors = createAsyncThunk("products/clear", async () => {
  return true;
});
