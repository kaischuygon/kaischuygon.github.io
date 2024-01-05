/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
import typography from '@tailwindcss/typography'
import colors from 'tailwindcss/colors'

const primary = colors.zinc;
const accent = colors.emerald;

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: primary,
				accent: accent
			},
			boxShadow: {
				'outline': `2px 2px ${primary['950']}`,
				'outline-dark': `2px 2px ${primary['50']}`,
				'outline-accent': `2px 2px ${accent['400']}`,
				'outline-hover': '4px 4px'
			},
			fontFamily: {
				header: ['Noto Sans Display', defaultTheme.fontFamily.sans],
				body: ['Noto Sans', defaultTheme.fontFamily.body],
				code: ['JetBrains Mono', defaultTheme.fontFamily.mono],
				system: [defaultTheme.fontFamily.system],
			},
			typography: () => ({
				DEFAULT: {
				  css: {
					a: {
						color: accent,
						'&:hover': {
							color: accent,
						},
					}
				  },
				},
			}),
		},
	},
	darkMode: 'class',
	plugins: [typography]
}
