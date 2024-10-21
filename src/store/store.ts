import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import login from "../slice/login/login";
import register from "../slice/reg/register";
import counterSlice from "../slice/testSlice";
import forgetPassword from "../slice/forgetPassword/forgetPassword";
import ResetPassword from "../slice/ResetPassword/ResetPassword";
import updateProfile from "../slice/Profile/profile";
import stores from "../slice/store/stores";
import createStore from "../slice/store/createstore";
import updateStore from "../slice/store/updatestore";
import deleteStore from "../slice/store/deleteStore";
import singleStore from "../slice/store/singleStore";
import categories from "../slice/categories/categories";
import singleCategory from "../slice/categories/singleCategory";
import updateCategory from "../slice/categories/UpdateCategory";
import deleteCategory from "../slice/categories/deleteCategory";
import createCategory from "../slice/categories/CreateCategory";
import products from "../slice/products/products";
import createProducts from "../slice/products/CreateProducts";
import updateProducts from "../slice/products/UpdateProducts";
import deleteProducts from "../slice/products/deleteProducts";
import singleProducts from "../slice/products/singleProducts";
import carousels from "../slice/carousels/Carousels";
import createCarousels from "../slice/carousels/CreateCarousels";
import deleteCarousels from "../slice/carousels/deleteCarousels";
import updateCarousels from "../slice/carousels/UpdateCarousels";
import singleCarousels from "../slice/carousels/singleCarousels";
import globalCategories from "../slice/globals/globalsCategories";
import globalStores from "../slice/globals/globalStores";
import home from "../slice/Home/home";
import MainProducts from "../slice/Home/MainProducts";
import userSingleProducts from "../slice/Home/userSingleProducts";
import cartSlice from "../slice/cart/cartSlice";
import getFromCart from "../slice/cart/getFromCart";
import removeFromCart from "../slice/cart/removeFromCart";

export const store = configureStore({
  reducer: {
    // Globals
    globalCategories: globalCategories,
    globalStores: globalStores,

    // cart
    cartSlice: cartSlice,
    getFromCart: getFromCart,
    removeFromCart: removeFromCart,

    // Home
    home: home,
    MainProducts: MainProducts,
    userSingleProducts: userSingleProducts,

    // Auth
    counter: counterSlice,
    login: login,
    register: register,
    forgetPassword,
    ResetPassword,
    updateProfile: updateProfile,

    // Stores
    stores,
    singleStore,
    updateStore,
    deleteStore,
    createStore,

    // Categories
    categories,
    singleCategory,
    updateCategory,
    deleteCategory,
    createCategory,

    // Products
    products,
    updateProducts,
    deleteProducts,
    createProducts,
    singleProducts,

    //Carousels
    carousels,
    createCarousels,
    deleteCarousels,
    updateCarousels,
    singleCarousels,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
