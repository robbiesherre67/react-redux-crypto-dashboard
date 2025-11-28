// ===============================================
// Redux Toolkit Store
// -----------------------------------------------
// The store is the central state container for
// the entire app. Redux Toolkit simplifies the
// setup so we avoid the old boilerplate.
// ===============================================

import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../slices/themeSlice";
import cryptoReducer from "../slices/cryptoSlice";
import favoritesReducer from "../slices/favoritesSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    crypto: cryptoReducer,
    favorites: favoritesReducer,
  },
});

export const selectTheme = (state) => state.theme;
export const selectCrypto = (state) => state.crypto;
export const selectFavorites = (state) => state.favorites.items;