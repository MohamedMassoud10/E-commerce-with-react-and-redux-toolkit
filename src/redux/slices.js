import { createSlice } from "@reduxjs/toolkit";
export const cartSlice =createSlice({
    initialState:[],
    name:"cartSlice",
    reducers:{
        addtocart:(state,action)=>{
            state.push([action.payload])
            return console.log("add")
        },
        deletfromcart:(state,action)=>{},
    }
})

export let {addtocart,deletfromcart}=cartSlice.actions;
export default cartSlice.reducer