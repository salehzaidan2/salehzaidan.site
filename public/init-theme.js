// @ts-check

/**
 * Initialize theme based on local storage or user preference (if not set).
 * This script must be run before any page hydration occurs.
 */
(() => {
  const THEME_KEY = "sz-theme";
  const theme =
    localStorage[THEME_KEY] === "dark" ||
    (!(THEME_KEY in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? "dark"
      : "light";

  document.documentElement.classList.add(theme);
})();
