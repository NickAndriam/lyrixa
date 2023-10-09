/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./index.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        primary: "#02121D",
        secondary: "#1F2937",
        mycyan: "#216EBB"
        // mycyan: "#1D9FD5"
      }
    },
  },
  plugins: [],
}

