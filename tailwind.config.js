const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        liquid: "url('assets/liquid.png')",
      },
      fontFamily: {
        display: ["Rubik Glitch", ...fontFamily.sans],
        body: ["Comfortaa", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
  ],
};
