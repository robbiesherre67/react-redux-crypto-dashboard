// ================================================
// App.jsx
// -----------------------------------------------
// This is the main layout. It renders:
// - Header (title + theme toggle)
// - Main container
// - Placeholder "Crypto Dashboard" text
// ================================================

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./slices/themeSlice";
import { getCryptoData } from "./slices/cryptoSlice";
import { selectFavorites } from "./store/store";
import CryptoList from "./components/CryptoList";

function App() {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  // Load crypto data on first render
  useEffect(() => {
    dispatch(getCryptoData());
  }, [dispatch]);

  return (
    <>
      <header className="header">
        <h2>CryptoTracker Lite</h2>

        <button
          className="theme-toggle"
          onClick={() => dispatch(toggleTheme())}
        >
          Toggle Theme
        </button>
      </header>

      <div className="container">
        <h3>Top Cryptocurrencies</h3>
        <p>Favorites: {favorites.length}</p>

        <CryptoList />
      </div>
    </>
  );
}

export default App;
