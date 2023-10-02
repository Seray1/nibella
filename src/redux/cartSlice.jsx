// cartSlice.js
import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      // Check if the product is already in the cart
      const existingProduct = state.find(
        (product) => product.id === action.payload.id
      )

      if (existingProduct) {
        // If the product exists, increase its quantity
        existingProduct.quantity += 1
      } else {
        // If the product is not in the cart, add it with a quantity of 1
        state.push({ ...action.payload, quantity: 1 })
      }
    },
    removeFromCart: (state, action) => {
      // Remove the product from the cart
      return state.filter((product) => product.id !== action.payload.id)
    },
    increaseQuantity: (state, action) => {
      // Increase the quantity of a product in the cart
      const product = state.find((p) => p.id === action.payload.id)
      if (product) {
        product.quantity += 1
      }
    },
    decreaseQuantity: (state, action) => {
      // Decrease the quantity of a product in the cart
      const product = state.find((p) => p.id === action.payload.id)
      if (product && product.quantity > 1) {
        product.quantity -= 1
      }
    },
  },
})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions
export default cartSlice.reducer
