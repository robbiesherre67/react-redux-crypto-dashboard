// =====================================================
// CryptoList.jsx
// -----------------------------------------------------
// - Reads crypto data from Redux
// - Handles loading & error UI
// - Renders CryptoCard for each coin
// =====================================================

import { useSelector } from "react-redux";
import { selectCrypto } from "../store/store";
import CryptoCard from "./CryptoCard";

function CryptoList() {
  const { coins, loading, error } = useSelector(selectCrypto);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="crypto-grid">
      {coins.map((coin) => (
        <CryptoCard key={coin.id} coin={coin} />
      ))}
    </div>
  );
}

export default CryptoList;
