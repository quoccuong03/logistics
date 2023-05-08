/** @type {import('next').NextConfig} */
const nextConfig = {
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
