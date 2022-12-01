import { createSlice } from "@reduxjs/toolkit";
const cartSystem= createSlice({
    initialState:[],
    name:"cart",
    reducers:{
        AddCart:(state,action)=>{
            state.cart.push(action.payload)
        }
    }
})
export let AddCart =cartSystem.actions;

export default cartSystem.reducer