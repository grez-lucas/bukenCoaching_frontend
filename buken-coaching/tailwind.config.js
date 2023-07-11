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
      primary: "#227447",
      secondary: "#252525",
      accent1: "#C0392B",
      accent2: "#F39C12",
      neutral1: "#FFFFFF",
      neutral2: "#F5F5F5",
      neutral3: "#CCCCCC",
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#000000",
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
