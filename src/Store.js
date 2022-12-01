import { configureStore } from "@reduxjs/toolkit";
import cartSystem from "./redux/cartSystem"
let store =configureStore({
    reducer:{
        name:cartSystem,
    }
})
export default store

