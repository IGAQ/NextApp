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
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    compiler: {
        styledComponents: true,
    },
    env: nextConfig.env,
};
