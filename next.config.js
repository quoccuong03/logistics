/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	server: {
		BASE_API: process.env.BASE_API,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "static.showniq.ai",
				port: "",
				pathname: "/public/app/**",
			},
		],
	},
};

module.exports = nextConfig;
