import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";
import { Slice, CategoryType } from "../../lib/types";
import Cookies from "universal-cookie";
import { RootState } from "../../store/store";

const cookies = new Cookies();
const token = cookies.get("token");
const TOKEN = `Bearer ${token}`;
const config = {
  headers: {
    Authorization: TOKEN,
  },
};

// *********** All *********** //
export const addProductsToCart = createAsyncThunk(
  "cart/addproducts",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState, fulfillWithValue } = thunkAPI;
    const { cartSlice } = getState() as RootState;
    const cartItems = Object.keys(cartSlice.items);
    // console.log("cartItems", cartItems);
    if (!cartItems) {
      return fulfillWithValue([]);
    }

    try {
      const ItemsId = cartItems.map((e) => `id=${e}`).join("&");
      const response = await axios.get(`/cart-user?${ItemsId}`, config);
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
export const deleteProducts = createAsyncThunk(
  "products/delete",
  async (args: number | undefined, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.delete(`/cart-remove/${args}`, config);
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
