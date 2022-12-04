import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSystem";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
