/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-gray": "#28282b",
        "medium-gray": "#404041",
        "dim-grey": "#696969",
        "highlight-blue": "#4682b4",
        "dark-bg": "#343434",
        "pale-gray": "#fcfcfc",
        beige: {
          100: "#f5f5dc",
          200: "#f1e6c7",
        },
      },
      height: {
        128: "32rem",
      },
      screens: {
        "min-h-700": { raw: "(min-height: 700px)" },
        "min-h-800": { raw: "(min-height: 800px)" },
        "max-w-600": { raw: "(max-width: 600px)" },
      },
    },
  },
  plugins: [],
};
