import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  pageData: null,
  loaded: false,
  loading: false,
  error: null,
};

export const fetchPages = createAsyncThunk(
  "pages/fetchPages",
  async () => {
    const domain = process.env.REACT_APP_URL;
    const response = await axios.get(`${domain}/home/page`); // Replace with your API endpoint
    return response.data;
  }
);

const pagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    updatePages: (state, action) => {
      state.pageData = action.payload;
      state.loaded = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPages.fulfilled, (state, action) => {
        state.pageData = action.payload;
        state.loaded = true;
        state.loading = false;
      })
      .addCase(fetchPages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const pagesReducer = pagesSlice.reducer;
export const { updatePages } = pagesSlice.actions;
