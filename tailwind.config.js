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
        display: ["Martian Mono", ...fontFamily.mono],
        body: ["Lato", ...fontFamily.sans],
        emoji: ["Noto Color Emoji", fontFamily.sans],
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