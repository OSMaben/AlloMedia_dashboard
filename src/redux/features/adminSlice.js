import { counter } from "@fortawesome/fontawesome-svg-core";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Initial state
const initialState = {
  isLoading: false,
  error: null,
  status: false,
  restoCounter: 0,
  unreadCount: 0,
  resturs: [],
  restaurantsapproved: [],
  ListNotification: [],
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
        `http://localhost:8080/api/v1/admin/restaurants/${data.id}/accept`,
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

export const deleteRestaurant = createAsyncThunk(
  "admin/deleteRestaurant",
  async (data, thunkAPI) => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.delete(
        `http://localhost:8080/api/v1/admin/deleted/restaurants/${data.id}`,
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

export const suspendResto = createAsyncThunk(
  "admin/suspendResto",
  async (data, thunkAPI) => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(
        `http://localhost:8080/api/v1/admin/banneRestaurant/restaurants/${data.id}`,
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

export const activeResto = createAsyncThunk(
  "admin/activeResto",
  async (data, thunkAPI) => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(
        `http://localhost:8080/api/v1/admin/active/restaurants/${data.id}`,
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

export const getListNotification = createAsyncThunk(
  "admin/getListNotification",
  async (data, thunkAPI) => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(
        `http://localhost:8080/api/v1/admin/getListNotification`,
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

export const updutListNotification = createAsyncThunk(
  "admin/updutListNotification",
  async (data, thunkAPI) => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(
        `http://localhost:8080/api/v1/admin/updutListNotification`,
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
  reducers: {
    addNotification(state, action) {
      state.restoCounter += 1;
      state.unreadCount += 1;
      state.ListNotification = [action.payload, ...state.ListNotification];
    },
  },
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

    // getListNotification
    builder
      .addCase(getListNotification.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.status = false;
      })
      .addCase(getListNotification.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.status = true;
        console.log(action.payload);
        state.ListNotification = action.payload.notifications;
        state.unreadCount = action.payload.unreadCount;
      })
      .addCase(getListNotification.rejected, (state, action) => {
        state.status = false;
        state.isLoading = false;
        state.error = action.payload.response.data.message;
      });

    // updutListNotification
    builder
      .addCase(updutListNotification.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.status = false;
      })
      .addCase(updutListNotification.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.status = true;
        state.unreadCount = action.payload.unreadCount;
      })
      .addCase(updutListNotification.rejected, (state, action) => {
        state.status = false;
        state.isLoading = false;
        state.error = action.payload.response.data.message;
      });

    // deleteRestaurant
    builder
      .addCase(deleteRestaurant.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.status = false;
      })
      .addCase(deleteRestaurant.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.status = true;
        state.restoCounter += 1;
      })
      .addCase(deleteRestaurant.rejected, (state, action) => {
        state.status = false;
        state.isLoading = false;
        state.error = action.payload.response.data.message;
      });
    // suspendResto
    builder
      .addCase(suspendResto.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.status = false;
      })
      .addCase(suspendResto.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.status = true;
        state.restoCounter += 1;
      })
      .addCase(suspendResto.rejected, (state, action) => {
        state.status = false;
        state.isLoading = false;
        state.error = action.payload.response.data.message;
      });

    // activeResto
    builder
      .addCase(activeResto.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.status = false;
      })
      .addCase(activeResto.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.status = true;
        state.restoCounter += 1;
      })
      .addCase(activeResto.rejected, (state, action) => {
        state.status = false;
        state.isLoading = false;
        state.error = action.payload.response.data.message;
      });
  },
});
export const { addNotification } = adminSlice.actions;
export default adminSlice.reducer;
