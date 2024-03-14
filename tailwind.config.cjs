/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

	theme: {
		fontFamily: {
			sans: ['Exo, sans-serif']
		},
			extend: {
				colors: {	customBlack: '#0c0a09',
				customOrange :'#ea580c',
				customBlue: '#0c4a6e',
				  },
			}
		},
	variants:{},
	plugins: [],
}
