const { fontFamily } = require("tailwindcss/defaultTheme");

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }
}

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ["Playfair Display", ...fontFamily.serif],
        body: ["Lato", ...fontFamily.sans],
      },
      colors: {
        'accent': withOpacityValue('--accent'),
        'primary': withOpacityValue('--primary'),
        'background': withOpacityValue('--background'),
        'foreground': withOpacityValue('--foreground'),
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