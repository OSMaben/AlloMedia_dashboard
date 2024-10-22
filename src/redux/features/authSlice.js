import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Initial state
const initialState = {
  isLoading: false,
  user: null,
  error: null,
  erros: null,
  token: null,
  status: false,
  isLogin: false,
  messageForgetPassword: null,
  message: null,
};

// Create async thunk for registering a user
export const registers = createAsyncThunk(
  "auth/register",
  async (data, thunkAPI) => {
    console.log("Data being sent to API:", data);

    try {
      const res = await axios.post(
        "http://localhost:8080/api/auth/register",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response from API:", res.data);

      return res.data;
    } catch (error) {
      console.error(
        "Error while registering:",
        error.response?.data || error.message
      );

      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (data, thunkAPI) => {
  console.log("Data being sent to API:", data);

  try {
    const res = await axios.post("http://localhost:8080/api/auth/login", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Response from API:", res.data);

    return res.data;
  } catch (error) {
    console.error(
      "Error while registering:",
      error.response?.data || error.message
    );

    return thunkAPI.rejectWithValue(error);
  }
});

export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async (data, thunkAPI) => {
    const state = thunkAPI.getState().auth;
    console.log(state);

    console.log("Data being sent to API:", data);
    console.log("Current token:", state.token);

    try {
      const res = await axios.post(
        `http://localhost:8080/api/auth/verifyAcount/${state.token}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response from API:", res.data);

      return res.data;
    } catch (error) {
      console.error(
        "Error while verifying OTP:",
        error.response?.data || error.message
      );

      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const forgetPassword = createAsyncThunk(
  "auth/forgetPassword",
  async (data, thunkAPI) => {
    try {
      const res = await axios.post(
        `http://localhost:8080/api/auth//forgetpassword`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response from API:", res);

      return res.data;
    } catch (error) {
      console.error(
        "Error while verifying OTP:",
        error.response?.data || error.message
      );

      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const UpdatePassword = createAsyncThunk(
  "auth/UpdatePassword",
  async (data, thunkAPI) => {
    console.log(data);

    const state = thunkAPI.getState().auth;

    try {
      const res = await axios.post(
        `http://localhost:8080/api/auth/resetpassword/${state.token}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return res.data;
    } catch (error) {
      console.error(error.response?.data || error.message);

      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const Deconxion = createAsyncThunk(
  "auth/Deconxion",
  async (_, thunkAPI) => {
    const token = localStorage.getItem("token");

    try {
      const res = await axios.get(`http://localhost:8080/api/auth/logout`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    } catch (error) {
      console.error(error.response?.data || error.message);

      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const verifier2FA = createAsyncThunk(
  "auth/verifier2FA",
  async (data, thunkAPI) => {
    const state = thunkAPI.getState().auth;
    try {
      const res = await axios.post(
        `http://localhost:8080/api/auth/verify-otp/${state.token}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response from API:", res.data);

      return res.data;
    } catch (error) {
      console.error(
        "Error while verifying OTP:",
        error.response?.data || error.message
      );

      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const isLogins = createAsyncThunk(
  "auth/isLogins",
  async (token, thunkAPI) => {
    try {
      const res = await axios.get(`http://localhost:8080/api/auth/islogin/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Response from API:", res.data);

      return res.data;
    } catch (error) {
      console.error(
        "Error while verifying login:",
        error.response?.data || error.message
      );

      return thunkAPI.rejectWithValue(error.response?.data || error.message); // Pass specific error message
    }
  }
);

export const UpdatePassword1 = createAsyncThunk(
  "auth/UpdatePassword1",
  async (data, thunkAPI) => {
    const token = localStorage.getItem("token");

    try {
      const res = await axios.post(
        `http://localhost:8080/api/auth/upditPassword`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return res.data;
    } catch (error) {
      console.error(error.response?.data || error.message);

      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resendVerification = createAsyncThunk(
  "auth/resendVerification",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState().auth;
    console.log("=============================================");

    console.log(state.token);

    const token = state.token;

    try {
      const res = await axios.get(
        `http://localhost:8080/api/auth/resendVerification`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return res.data;
    } catch (error) {
      console.error(error.response?.data || error.message);

      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Create the slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Register user
      .addCase(registers.pending, (state) => {
        console.log("is pending");
        state.isLoading = true;
        state.error = null;
        state.status = false;
      })
      .addCase(registers.fulfilled, (state, action) => {
        console.log("is fulfilled");
        state.isLoading = false;
        state.user = action.payload;
        console.log("User registered successfully:", action.payload);
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(registers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.response.data.errors;
        state.status = false;
      });

    builder
      // resed email user
      .addCase(resendVerification.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.status = false;
      })
      .addCase(resendVerification.fulfilled, (state, action) => {
        console.log("is fulfilled");
        state.isLoading = false;
        state.user = action.payload;
        console.log("User registered successfully:", action.payload);
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(resendVerification.rejected, (state, action) => {
        console.log(state.token);

        console.log(action.payload);

        state.isLoading = false;
        state.error = action.payload.response.data.errors;
        state.status = false;
      });

    // login user
    builder
      .addCase(login.pending, (state) => {
        console.log("is pending");
        state.isLoading = true;
        state.status = false;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log("is fulfilled");
        state.isLoading = false;
        state.user = action.payload;
        console.log("User logged in successfully:", action.payload);
        state.token = action.payload.token;
        state.error = null;
        state.status = true;

        console.log(state.token);
      })
      .addCase(login.rejected, (state, action) => {
        console.log("asdasd from redux", action.payload.response.data.message);
        state.isLoading = false;
        state.error = action.payload.response.data.message;
        state.status = false;
      });

    // verifyOtp
    builder
      .addCase(verifyOtp.pending, (state) => {
        console.log("is pending");
        state.isLoading = true;
        console.log(state.token);
        state.status = false;
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        console.log("is fulfilled");
        state.isLoading = false;
        state.user = action.payload;
        console.log("User logged in successfully:", action.payload);
        state.token = action.payload.token;
        state.error = null;
        console.log(state.token);
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.response.data.errors;
        state.status = false;
      });

    // Forget Password
    builder
      .addCase(forgetPassword.pending, (state) => {
        state.isLoading = true;
        state.status = false;
        state.error = null;
      })
      .addCase(forgetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        console.log("User Action", action);
        state.token = action.payload.token;
        state.error = null;
        state.status = true;
      })
      .addCase(forgetPassword.rejected, (state, action) => {
        state.status = false;
        state.isLoading = false;
        console.log(action.payload.response.data.message);

        state.messageForgetPassword = action.payload.response.data.message;
      });

    // UpdatePassword
    builder
      .addCase(UpdatePassword.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.status = false;
      })
      .addCase(UpdatePassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.token = action.payload.token;
        state.error = null;
        state.status = true;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(UpdatePassword.rejected, (state, action) => {
        state.status = false;

        state.isLoading = false;
        console.log(action.payload.response.data.message);

        state.error = action.payload.response.data.message;
      });

    // UpdatePassword1
    builder
      .addCase(UpdatePassword1.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.status = false;
        state.erros = null;
      })
      .addCase(UpdatePassword1.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.token = action.payload.token;
        console.log(action.payload.message);
        state.message = action.payload.message;
        state.error = null;
        state.status = true;
        localStorage.setItem("token", action.payload.token);
        state.erros = null;
      })
      .addCase(UpdatePassword1.rejected, (state, action) => {
        state.status = false;

        state.isLoading = false;

        state.erros = action.payload.response.data.message;
      });

    // log out
    builder
      .addCase(Deconxion.pending, (state) => {
        state.isLoading = true;
        state.status = false;
        state.isLogin = false;
        state.error = null;
      })
      .addCase(Deconxion.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.error = null;
        state.status = true;
        state.isLogin = false;
        state.error = null;
      })
      .addCase(Deconxion.rejected, (state, action) => {
        state.status = false;
        state.isLogin = false;

        state.isLoading = false;
        console.log(action.payload.response.data.message);

        state.error = action.payload.response.data.message;
      });

    builder
      .addCase(verifier2FA.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(verifier2FA.fulfilled, (state, action) => {
        console.log("dghkjlm");
        console.log(action.payload);

        state.isLoading = false;
        state.user = action.payload;
        state.token = action.payload.token;
        state.error = null;
        state.status = null;
        localStorage.setItem("token", action.payload.token);
        state.isLogin = true;
      })
      .addCase(verifier2FA.rejected, (state, action) => {
        state.error = null;
        state.isLoading = false;
        console.log(action.payload.response);

        state.error = action.payload.response.data.message;
      });

    builder
      .addCase(isLogins.pending, (state) => {
        
        state.error = null;
      })
      .addCase(isLogins.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
        state.status = null;
        state.isLogin = true;
        state.error = null;
      })
      .addCase(isLogins.rejected, (state, action) => {
        state.isLoading = false;
        console.log(action.payload.response);

        state.error = action.payload.response.data.message;
      });
  },
});

export default authSlice.reducer;
