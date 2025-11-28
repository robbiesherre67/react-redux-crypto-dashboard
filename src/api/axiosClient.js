// =====================================================
// axiosClient.js
// -----------------------------------------------------
// Creates a preconfigured Axios instance so we don't
// repeat baseURL, headers, or error handling.
// This is how real production React apps organize APIs.
// =====================================================

import axios from "axios";

// Using CoinGecko public API
const axiosClient = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
  timeout: 10000, // helps prevent stuck requests
});

export default axiosClient;