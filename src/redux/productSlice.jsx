import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getProducts } from '../api'

//create an async thunk to fect products

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const data = await getProducts()
    return data
  }
)

const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: [],
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = 'pending'
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = 'idle'
        state.data = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = 'idle'
        state.error = action.error.message
      })
  },
})
export default productSlice.reducer
