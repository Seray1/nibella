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
    clearFavorites: (state) => {
      return []
    },
  },
})

export const { addToFavorites, removeFromFavorites, clearFavorites } =
  favoriteSlice.actions
export default favoriteSlice.reducer
