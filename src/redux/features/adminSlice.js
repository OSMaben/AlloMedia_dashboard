import { counter } from "@fortawesome/fontawesome-svg-core";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Initial state
const initialState = {
  isLoading: false,
  error: null,
  status: false,
  restoCounter: 0,
  resturs: [],
  restaurantsapproved: [],
};

export const userWithResto = createAsyncThunk(
  "admin/userWithResto",
  async (data, thunkAPI) => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        `http://localhost:8080/api/v1/admin/userWithResto`,
        data,
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

export const getRestoPending = createAsyncThunk(
  "admin/getRestoPending",
  async (data, thunkAPI) => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(
        `http://localhost:8080/api/v1/admin/restaurants/pending`,
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

export const accepterResto = createAsyncThunk(
  "admin/accepterResto",
  async (data, thunkAPI) => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(
        `http://localhost:8080/api/v1/admin//restaurants/${data.id}/accept`,
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

export const refuseResto = createAsyncThunk(
  "admin/refuseResto",
  async (data, thunkAPI) => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(
        `http://localhost:8080/api/v1/admin//restaurants/${data.id}/refuse`,
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

export const getrestaurantsapproved = createAsyncThunk(
  "admin/getrestaurantsapproved",
  async (data, thunkAPI) => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(
        `http://localhost:8080/api/v1/admin/restaurants/approved`,
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
// Create the slice
const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // userWithResto
    builder
      .addCase(userWithResto.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.status = false;
      })
      .addCase(userWithResto.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.status = true;
      })
      .addCase(userWithResto.rejected, (state, action) => {
        state.status = false;
        state.isLoading = false;
        state.error = action.payload.response.data.message;
      });
    // getRestoPending
    builder
      .addCase(getRestoPending.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.status = false;
      })
      .addCase(getRestoPending.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.status = true;
        console.log(action.payload.restaurants);
        state.resturs = action.payload.restaurants;
      })
      .addCase(getRestoPending.rejected, (state, action) => {
        state.status = false;
        state.isLoading = false;
        state.error = action.payload.response.data.message;
      });

    // getrestaurantsapproved
    builder
      .addCase(getrestaurantsapproved.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.status = false;
      })
      .addCase(getrestaurantsapproved.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.status = true;
        console.log(action.payload.restaurants);
        state.restaurantsapproved = action.payload.restaurants;
      })
      .addCase(getrestaurantsapproved.rejected, (state, action) => {
        state.status = false;
        state.isLoading = false;
        state.error = action.payload.response.data.message;
      });

    // accepterResto
    builder
      .addCase(accepterResto.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.status = false;
      })
      .addCase(accepterResto.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.status = true;
        state.restoCounter += 1;
      })
      .addCase(accepterResto.rejected, (state, action) => {
        state.status = false;
        state.isLoading = false;
        state.error = action.payload.response.data.message;
      });

    // refuseResto
    builder
      .addCase(refuseResto.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.status = false;
      })
      .addCase(refuseResto.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.status = true;
        state.restoCounter += 1;
      })
      .addCase(refuseResto.rejected, (state, action) => {
        state.status = false;
        state.isLoading = false;
        state.error = action.payload.response.data.message;
      });
  },
});

export default adminSlice.reducer;
