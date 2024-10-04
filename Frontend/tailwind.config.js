/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f42c3",
        secondary: "#f42c37", // changed to lowercase for consistency
        brandYellow: "#2dcc6f",
        brandBlue: "#1376f4",
        brandWhite: "#eeeeee"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
}
