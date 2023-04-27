/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
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
