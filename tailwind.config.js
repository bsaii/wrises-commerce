module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Halant", "sans-serif"],
      body: ["Nunito-Sans", "sans-serif"],
    },
    extend: {
      colors: {
        "midnight-green": "#073B4C",
      },
    },
    plugins: [],
  },
};
