import { configureStore } from '@reduxjs/toolkit'
import productReducer from './productSlice'
import favoriteReducer from './favouriteSlice'

const store = configureStore({
  reducer: {
    products: productReducer, // Add your product reducer
    favorites: favoriteReducer,
  },
})

export default store
