/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        API_SERVER_URL: process.env.API_SERVER_URL,
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:8080/:path*',
            },
        ];
    },
};

module.exports = {
    compiler: {
        styledComponents: true,
    },
    env: nextConfig.env,
};
