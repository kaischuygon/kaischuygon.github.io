const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ["Rubik Glitch", ...fontFamily.sans],
        body: ["Rubik", ...fontFamily.sans],
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