import { configureStore } from '@reduxjs/toolkit';
import wishList from '../features/wishlistStore'
import cart from '../features/cartSlice'

const store = configureStore({
  reducer: {
    wishList,
    cart
  }
},
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;