import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  blogData: null,
  loaded: false,
  loading: false,
  error: null,
};

export const fetchBlogs = createAsyncThunk(
  "blogs/fetchBlogs",
  async (_,{ rejectWithValue }) => {
    try {
      const domain = process.env.REACT_APP_URL;
      const response = await axios.get(`${domain}/blogs`); // Replace with your API endpoint
      return response.data.blogs;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    updateBlogs: (state, action) => {
      state.blogData = action.payload;
      state.loaded = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.blogData = action.payload;
        state.loaded = true;
        state.loading = false;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const blogsReducer = blogsSlice.reducer;
export const { updateBlogs } = blogsSlice.actions;
