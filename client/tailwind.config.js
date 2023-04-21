/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}", ],
  theme: {
    extend: {},
    colors: {
      'lavender': {
        100: "#b2a5d4", // light lavender
        200: "#9840d7", // medium lavender
        300: "#6d0fa7", // hover colour of medium lavender
        400: "#342854", // dark lavender
        500: "#22134c" // hover colour of dark lavender
      },
    }
  },
  plugins: [],
}

