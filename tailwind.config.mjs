/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
import typography from '@tailwindcss/typography'
import colors from 'tailwindcss/colors'
import daisyui from 'daisyui';

const primary = colors.zinc;

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: primary,
				accent: 'var(--ACCENT)',
			},
			boxShadow: {
				'outline': `2px 2px ${primary['950']}`,
				'outline-dark': `2px 2px ${primary['50']}`,
				'outline-accent': '2px 2px var(--ACCENT)',
				'outline-hover': `4px 4px`,
			},
			fontFamily: {
				header: ['Space Grotesk', defaultTheme.fontFamily.sans],
				body: ['Poly', defaultTheme.fontFamily.serif],
				code: ['JetBrains Mono', defaultTheme.fontFamily.mono],
				system: [defaultTheme.fontFamily.system],
			},
			animation: {
				fadein: 'fadeIn 0.5s ease-in-out',
			},
			keyframes: {
				fadeIn: {
				  '0%': { opacity: '0', transform: 'translateY(1rem)'},
				  '50%': { opacity: '0', transform: 'translateY(1rem)'},
				  '100%': { opacity: '1', transform: 'translateY(0)'},
				},
			},
			typography: () => ({
				DEFAULT: {
				  css: {
					a: {
						color: 'var(--ACCENT)',
						'&:hover': {
							color: 'var(--ACCENT)',
						},
					}
				  },
				},
			}),
		},
	},
	darkMode: 'class',
	plugins: [typography, daisyui]
}
