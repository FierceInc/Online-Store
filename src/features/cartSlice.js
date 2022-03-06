import { createSlice } from "@reduxjs/toolkit";

const initialValue = {value: []}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialValue,
    reducers: {
        addToCart: (state, action) => {
            state.value.push(action.payload)
        },
        removeCartItem: (state, action) => {
            state.value = state.value.filter(items => items.id !== action.payload)
        },
        updateQuantity: (state, action) => {
        // eslint-disable-next-line array-callback-return
            state.value.map(el => {
                if(el.id === action.payload.id) {
                     return  el.quantity = action.payload.quantity
                   }
               })
        },
        setCartSize: (state, action) => {
            // eslint-disable-next-line array-callback-return
            state.value.map(el => {
             if(el.id === action.payload.id) {
                  return  el.size = action.payload.size
                }
                
            })
           },
           updatePrice: (state, action) => {
               // eslint-disable-next-line array-callback-return
            state.value.map(el => {
                if(el.id === action.payload.id) {
                     return  el.price = action.payload.price
                   }
               })
           }
    }
})

export default cartSlice.reducer
export const {addToCart, removeCartItem, updateQuantity, setCartSize, updatePrice} = cartSlice.actions