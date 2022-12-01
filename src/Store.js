import { configureStore } from "@reduxjs/toolkit";
import cart from "./redux/cartSystem"
import { cartSlice } from "./redux/slices";
let store =configureStore({
    reducer:{
        Some:cart,
        Cart:cartSlice,
    }
})
export default store 

