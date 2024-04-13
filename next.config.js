/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ["default", "en", "de"],
		defaultLocale: "default",
	},
	trailingSlash: true,
	images: {
		dangerouslyAllowSVG: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "tailwindui.com",
				port: "",
			},
		],
	},
};

module.exports = nextConfig;
