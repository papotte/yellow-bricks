import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
	content: [
		"./node_modules/flowbite/**/*.js",
		"./node_modules/flowbite-react/lib/**/*.js",
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: colors.zinc,
				secondary: colors.yellow,
				accent: colors.amber,
			},
			fontFamily: {
				lexend: ["var(--font-lexend)"],
				spicy: ["var(--font-spicy-rice)"],
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
export default config;
