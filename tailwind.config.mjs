/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			boxShadow: {
				'outline': '4px 4px #020617',
				'outline-dark': '4px 4px #f8fafc'
			},
			fontFamily: {
				header: ['Martian Mono', defaultTheme.fontFamily.mono],
				body: ['Lato', defaultTheme.fontFamily.sans],
				system: [defaultTheme.fontFamily.system],
			},
			
		},
	},
	darkMode: 'class',
	plugins: [
		require("@tailwindcss/typography")
	],
}
