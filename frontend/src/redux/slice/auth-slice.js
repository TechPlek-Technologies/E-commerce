import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Initial state for authentication
const initialState = {
  authData: null,
  loading: false,
  error: null,
  isAuthenticated: false,
};

// Async thunk for login
export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }, { rejectWithValue }) => {
    const domain = process.env.REACT_APP_URL;
    try {
      const response = await axios.post(`${domain}/auth/login`, { username, password }, { withCredentials: true });
      if(response.data.success){
        const response1 = await axios.get(`${domain}/auth/session`, { withCredentials: true });
        return response1.data;
      } else {
        return rejectWithValue(response.data);
      }
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Async thunk for logout
export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    const domain = process.env.REACT_APP_URL;
    try {
      const response = await axios.post(`${domain}/auth/logout`, {}, { withCredentials: true });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Slice for authentication
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.authData = action.payload;
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.authData = null;
        state.isAuthenticated = false;
        state.loading = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

// Export the reducer and actions
export const authReducer = authSlice.reducer;
