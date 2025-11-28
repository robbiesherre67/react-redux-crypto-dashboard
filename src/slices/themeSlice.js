// ===============================================
// themeSlice.js
// -----------------------------------------------
// Controls light/dark mode for the entire app.
// This slice stores one value: "light" or "dark"
// and exposes an action to toggle it.
// ===============================================

import { createSlice } from "@reduxjs/toolkit";

// Load saved theme or default to light
const savedTheme = localStorage.getItem("theme") || "light";

const initialState = {
  mode: savedTheme,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      // Switch mode
      state.mode = state.mode === "light" ? "dark" : "light";

      // Persist to localStorage
      localStorage.setItem("theme", state.mode);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
