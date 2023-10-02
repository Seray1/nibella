import { configureStore } from '@reduxjs/toolkit'
import productReducer from './productSlice'
import favoriteReducer from './favouriteSlice'
import cartReducer from './cartSlice'

const store = configureStore({
  reducer: {
    products: productReducer, // Add your product reducer
    favorites: favoriteReducer,
    cart: cartReducer,
  },
})

export default store
