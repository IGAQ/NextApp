import httpProxyMiddleware from 'next-http-proxy-middleware';

export default (req, res) => httpProxyMiddleware(req, res, {
    // You can use the `http-proxy` option
    target:'http://localhost:8080',
    // In addition, you can use the `pathRewrite` option provided by `next-http-proxy`
    pathRewrite: {
        '^/api':'http://localhost:8080',
    },
});