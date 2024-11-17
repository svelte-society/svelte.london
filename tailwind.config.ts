import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						maxWidth: null,
						img: {
							filter:
								'drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));',
							margin: '0 auto',
						},
					},
				},
			},
		},
	},

	daisyui: {
		themes: ['light'],
	},

	plugins: [typography, daisyui],
} satisfies Config;
