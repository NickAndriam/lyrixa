/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./index.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#02121D",
        secondary: "#1F2937"
      }
    },
  },
  plugins: [],
}

