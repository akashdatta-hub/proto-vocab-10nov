/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { ink:"#2a2640", bg:"#f7f6fb", accent:"#7c5cff" }
    },
  },
  plugins: [],
}
