const { fontFamily } = require("tailwindcss/defaultTheme");

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(${variable}))`
    }
    return `rgb(${variable}) / ${opacityValue})`
  }
}

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ["Rubik Glitch", ...fontFamily.sans],
        body: ["Rubik", ...fontFamily.sans],
      },
      colors: {
        'accent': 'var(--accent)',
        'background': 'var(--background)',
        'foreground': 'var(--foreground)',
        'background-alt': 'var(--background-alt)'
      }
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