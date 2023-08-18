/** @type {import('next').NextConfig} */
function getBasePath() {
    let basePath = "";
    if (process.env.BASE_PATH) {
        if (process.env.BASE_PATH.startsWith("/")) {
            basePath = process.env.BASE_PATH;
        } else {
            basePath = "/" + process.env.BASE_PATH;
        }
    }
    return basePath;
}

const nextConfig = {
    basePath: getBasePath(),
    // i18n,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "static.showniq.ai",
                port: "",
                pathname: "/public/app/**",
            },
            {
                protocol: "https",
                hostname: "showniq.ocmg.vn",
            },
        ],
    },
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: "/myApi/:path*",
            },
        ];
    },
};

module.exports = nextConfig;
