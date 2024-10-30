import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState ={
    orders: [],
    loading: false,
    error: null,
}




export const GetOrders = createAsyncThunk(
    "gestionair/List_allMyOrders",
    async (data, thunkAPI) => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get(
          `http://localhost:8080/api/v1/gestionair/List_allMyOrders`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(res);
  
        return res.data;
      } catch (error) {
        console.error(error.response?.data || error.message);
  
        return thunkAPI.rejectWithValue(error);
      }
    }
  );
  const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(GetOrders.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(GetOrders.fulfilled, (state, action) => {
          state.orders = action.payload.orders; // Assigning only the `orders` array from `res.data`
          state.loading = false;
        })
        .addCase(GetOrders.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload || "Failed to fetch orders";
        });
    },
  });

  export default ordersSlice.reducer;
  