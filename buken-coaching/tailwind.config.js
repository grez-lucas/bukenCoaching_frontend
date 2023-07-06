/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary:'#227447',
      secondary: '#252525',
      accent1: '#C0392B',
      accent2: '#F39C12',
      neutral1: '#FFFFFF',
      neutral2: '#F5F5F5',
      neutral3: '#CCCCCC',

    },
    extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
    },
  },
  plugins: [],
}

