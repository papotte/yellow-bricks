/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ["en", "de"],
		defaultLocale: "en",
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
