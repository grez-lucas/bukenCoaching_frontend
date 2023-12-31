/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      main: "#227447",
      secondary: "#252525",
      accent1: "#C0392B",
      accent2: "#F39C12",
      neutral1: "#FFFFFF",
      neutral2: "#F5F5F5",
      neutral3: "#CCCCCC",
      transparent: "transparent",
      white: {
        DEFAULT: "#FFFFFF",
      },
      black: "#000000",
      gray: "#CCCCCC",
      dark: {
        DEFAULT: "#262626",
        500: "#737373",
      },
      red: {
        DEFAULT: "#C0392B",
        500: "#E74C3C",
        600: "#C0392B",
      },
      slate: {
        DEFAULT: "#252525",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
        900: "#0f172a",
      },
      neutral: {
        DEFAULT: "#CCCCCC",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
        900: "#0f172a",
      }
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Roboto Slab", "serif"],
      display: ["Oswald"],
      // Additional font families can be added here
      custom: ["Poppins", "sans-serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        rotate90: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(90deg)" },
        },
      },
      animation: {
        rotate90: "rotate90 1s ease-in-out",
      },
      backgroundImage: {
        'most-muscular': 'url("/src/static/most_muscular.png")',
        'front-relaxed': 'url("/src/static/front-relaxed.png")',
        'side-relaxed': 'url("/src/static/side_relaxed_rectangle_high.png")',
        'buken-casual3': 'url("/src/static/buken-casual3.png")',
        'logo-black': 'url("/src/static/Buken_Coaching_Logo_Black.png")',
        'logo-white': 'url("/src/static/Buken_Coaching_Logo.png")',
      },
      backgroundPosition: {
      }
    },
  },
  plugins: [
    require("tw-elements-react/dist/plugin.cjs"),
    require("tw-elements/dist/plugin.cjs")
  ],
};
