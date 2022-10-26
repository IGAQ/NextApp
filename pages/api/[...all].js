import httpProxyMiddleware from 'next-http-proxy-middleware';

export default (req, res) => httpProxyMiddleware(req, res, {
    // You can use the `http-proxy` option
    target: process.env.API_SERVER_URL ?? 'http://216.19.190.177:63520',
    // In addition, you can use the `pathRewrite` option provided by `next-http-proxy`
    pathRewrite: {
        '^/api': process.env.API_SERVER_URL ?? 'http://216.19.190.177:63520',
    },
});