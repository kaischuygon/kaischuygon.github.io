/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			boxShadow: {
				'outline': '4px 4px #d4d4d8',
				'outline-dark': '4px 4px #3f3f46'
			},
			fontFamily: {
				header: ['JetBrains Mono', defaultTheme.fontFamily.mono],
				body: ['Rubik', defaultTheme.fontFamily.sans],
				system: [defaultTheme.fontFamily.system],
			},
		},
	},
	darkMode: 'class',
	plugins: [
		require("@tailwindcss/typography")
	],
}
