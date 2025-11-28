import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Redux
import { Provider } from "react-redux";
import { store } from "./store/store";

// Theme wrapper (FIXED: moved to its own file)
import ThemeWrapper from "./components/ThemeWrapper.jsx";

// Global CSS
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeWrapper>
      <App />
    </ThemeWrapper>
  </Provider>
);
