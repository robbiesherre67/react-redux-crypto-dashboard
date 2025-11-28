// =====================================================
// ThemeWrapper.jsx
// -----------------------------------------------------
// This component listens to theme changes in Redux and
// applies the data-theme attribute to the <html> tag.
// It MUST be in its own file because React Fast Refresh
// requires exportable components.
// =====================================================

import { useSelector } from "react-redux";

function ThemeWrapper({ children }) {
  const mode = useSelector((state) => state.theme.mode);

  // Set HTML root attribute for global theming
  document.documentElement.setAttribute(
    "data-theme",
    mode === "dark" ? "dark" : "light"
  );

  return children;
}

export default ThemeWrapper;
