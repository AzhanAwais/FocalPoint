/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'], // Use class-based dark mode (can toggle manually via a class)
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				xs: '0',
				sm: '576px',
				md: '768px',
				lg: '992px',
				xl: '1200px',
				xxl: '1400px'
			},
			colors: {
				primary: '#513252',
				secondary: '#C8B897',
				tertiary: '#A8C585',
				quaternary: '#E2E8F0',
				'light-purple': '#F9F1FF',
				'light-secondary': "#FCF9F2",
				'primary-dark': '#EFE2C4',
				'secondary-dark': '#C8B897',
				'tertiary-dark': '#A8C585',
				'quaternary-dark': '#494949'
			},
			fontFamily: {
				sans: [
					'Inter',
					'sans-serif'
				]
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			animation: {
				'custom-pulse': 'customPulse 1.5s ease-in-out infinite',
			},
			keyframes: {
				customPulse: {
					'0%, 100%': {
						opacity: '1',
					},
					'50%': {
						opacity: '0.8',
					},
				},
			},
		},
		
	},
	plugins: [require("tailwindcss-animate")],
};
