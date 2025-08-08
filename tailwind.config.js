/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#0e1f7a",
				secondary: "#4d8fc2",
				tertiary: "#bb8407",
			},
		},
	},
	plugins: [],
};
