/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			keyframes: {
				wiggle: {
					"0%": {
						transform: "translateY(0)",
					},
					"50%": {
						transform: "translateY(-10px)",
					},
					"100%": { transform: "translateY(0)" },
				},
			},
			animation: {
				"soft-bounce": "wiggle 2s ease-in-out infinite",
			},
		},
	},
	plugins: [],
};
