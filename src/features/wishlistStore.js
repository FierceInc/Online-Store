import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = { value: []}
const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: initialStateValue,
    reducers: {
        addToWishlist: (state, action) => {
            state.value.push(action.payload)
        },
        removeWishList: (state, action) => {
           state.value = state.value.filter(items => items.id !== action.payload)
        },
        setSize: (state, action) => {
         // eslint-disable-next-line array-callback-return
         state.value.map(el => {
          if(el.id === action.payload.id) {
               return  el.size = action.payload.size
             }
         })
        }
    }
})
export const { addToWishlist, removeWishList, setSize } = wishlistSlice.actions
export default wishlistSlice.reducer