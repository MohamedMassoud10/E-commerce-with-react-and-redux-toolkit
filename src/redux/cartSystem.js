import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";


export let fetchProduct = createAsyncThunk("cart/fetchProduct",async()=>{
    let  res= await fetch("https://fakestoreapi.com/products");
    let Data =res.json();
    return Data
})

const cart= createSlice({
    initialState:[],
    name:"cart",
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProduct.fulfilled,(state,action)=>{
            return action.payload
        })
    }
})
export let {} =cart.actions;

export default cart.reducer 