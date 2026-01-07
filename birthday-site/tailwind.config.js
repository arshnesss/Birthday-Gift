/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
  extend: {
    fontFamily: {
      handwriting: ['"Dancing Script"', 'cursive'],
      serif: ['"Playfair Display"', 'serif'],
    },
  },
},
  plugins: [],
}
