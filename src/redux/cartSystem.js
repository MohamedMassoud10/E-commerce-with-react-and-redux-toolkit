import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: {}
    },
    reducers: {
        addToCart: (state, action) => {
            if(action.payload in state.products){
                console.log("This product already exists")
            }else{
                state.products[action.payload] = 1
                console.log("ADDED", action.payload)
            }
        },
        removeFromCart: (state, action) => {
            if(action.payload in state.products){
                console.log("REMOVED", action.payload)
                delete state.products[action.payload]
            }else{
                console.log("This product doesn't exist")
            }
        },
        increaseAmount: (state, action) => {
            if(action.payload in state.products){
                console.log("INCREASED", action.payload)
                state.products[action.payload]++
            }else{
                console.log("This product doesn't exist")
            }
        },
        decreaseAmount: (state, action) => {
            if(action.payload in state.products){
                console.log("DECREASED", action.payload)
                state.products[action.payload]--
                if(state.products[action.payload] < 1){
                    console.log("REMOVED", action.payload)
                    delete state.products[action.payload]
                }
            }else{
                console.log("This product doesn't exist")
            }
        }
    },
})

export const { addToCart, removeFromCart, increaseAmount, decreaseAmount } = cartSlice.actions

export default cartSlice.reducer