// =====================================================
// cryptoSlice.js
// -----------------------------------------------------
// Manages:
// - crypto coins data
// - loading state
// - error state
// - async thunk for API requests
//
// NOTE: This slice handles ALL API communication.
// React components stay clean and focused on UI.
// =====================================================

// =====================================================
// cryptoSlice.js
// -----------------------------------------------------
// Manages:
// - crypto coins data
// - loading state
// - error state
// - async thunk for API requests
//
// =====================================================

// =====================================================
// cryptoSlice.js
// -----------------------------------------------------
// Manages:
// - crypto coins data
// - loading state
// - error state
// - async thunk for API requests
//
// =====================================================

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../api/axiosClient";

// -----------------------------------------------------
// Async Thunk: Fetch top 10 crypto coins
// -----------------------------------------------------
export const getCryptoData = createAsyncThunk(
  "crypto/getCryptoData",
  async () => {
    const response = await axiosClient.get(
      "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1"
    );
    return response.data;
  }
);

// -----------------------------------------------------
// Initial State
// -----------------------------------------------------
const initialState = {
  coins: [],
  loading: false,
  error: null,
};

// -----------------------------------------------------
// Slice
// -----------------------------------------------------
const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {},

  // IMPORTANT:
  // extraReducers MUST be a function (builder) => {...}
  extraReducers: (builder) => {
    builder

      // -------------------------------
      // PENDING
      // -------------------------------
      .addCase(getCryptoData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // -------------------------------
      // FULFILLED
      // -------------------------------
      .addCase(getCryptoData.fulfilled, (state, action) => {
        state.loading = false;
        state.coins = action.payload;
      })

      // -------------------------------
      // REJECTED
      // -------------------------------
      .addCase(getCryptoData.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to load crypto data";
      });
  },
});

export default cryptoSlice.reducer;
