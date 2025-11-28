// =====================================================
// CryptoCard.jsx
// -----------------------------------------------------
// Displays:
// - icon
// - name + symbol
// - price
// - 24h change
// - Favorite button (Redux)
// =====================================================

import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../slices/favoritesSlice";
import { selectFavorites } from "../store/store";

function CryptoCard({ coin }) {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.includes(coin.id);

  return (
    <div className="crypto-card">
      <div className="crypto-row">
        <img src={coin.image} alt={coin.name} />
        <button
          className={`favorite-btn ${isFavorite ? "active" : ""}`}
          onClick={() => dispatch(toggleFavorite(coin.id))}
        >
          {isFavorite ? "★" : "☆"}
        </button>
      </div>

      <h3>{coin.name}</h3>
      <p>{coin.symbol.toUpperCase()}</p>

      <div className="crypto-row">
        <strong>${coin.current_price.toLocaleString()}</strong>
        <span
          style={{
            color: coin.price_change_percentage_24h > 0 ? "limegreen" : "red",
          }}
        >
          {coin.price_change_percentage_24h.toFixed(2)}%
        </span>
      </div>
    </div>
  );
}

export default CryptoCard;
