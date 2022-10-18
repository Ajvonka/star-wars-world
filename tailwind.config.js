const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      inherit: "inherit",
      white: colors.white,
      green: {
        100: "#dcfce7",
        200: "#535552",
        300: "#485043c4",
        800: "#2e332b",
      },
      orange: {
        500: "#985925b2",
      },
      "light-gray": "#c4bebc",
      slate: {
        600: "#8b8b8b",
      },
      gray: {
        400: "#545257",
        500: "#434246",
      },
      purple: {
        800: "#2f2f3f",
      },
    },
  },
  screens: {
    xs: "480px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
    "3xl": "1920px",
  },
  plugins: [],
};
