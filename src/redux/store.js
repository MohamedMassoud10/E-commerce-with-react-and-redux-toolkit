import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSystem";
import productsSilce from "./product-silce";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        products:productsSilce,
    }
})

export default store;