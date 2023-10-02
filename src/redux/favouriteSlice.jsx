import { createSlice } from '@reduxjs/toolkit'

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addToFavorites: (state, action) => {
      state.push(action.payload)
    },
    removeFromFavorites: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id)
    },
  },
})

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions
export default favoriteSlice.reducer
