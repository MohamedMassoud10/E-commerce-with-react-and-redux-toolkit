import { configureStore } from "@reduxjs/toolkit";
import cart from "./redux/cartSystem"
let store =configureStore({
    reducer:{
        products:cart,
    }
})
export default store

