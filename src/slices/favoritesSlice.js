// =====================================================
// favoritesSlice.js
// -----------------------------------------------------
// Stores user-selected favorite coins.
// This is global UI state (NOT persisted yet).
// On Day 3 we will save favorites to localStorage.
// =====================================================

import { createSlice } from "@reduxjs/toolkit";

// Load saved favorites (string → array)
const saved = JSON.parse(localStorage.getItem("favorites") || "[]");

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: saved,
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const coinId = action.payload;

      if (state.items.includes(coinId)) {
        state.items = state.items.filter((id) => id !== coinId);
      } else {
        state.items.push(coinId);
      }

      // Save to localStorage
      localStorage.setItem("favorites", JSON.stringify(state.items));
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;