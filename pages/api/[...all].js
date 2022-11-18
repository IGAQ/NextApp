import httpProxyMiddleware from 'next-http-proxy-middleware';
import {API_SERVER} from '../../lib/constants';

export default (req, res) => httpProxyMiddleware(req, res, {
    // You can use the `http-proxy` option
    target: process.env.API_SERVER_URL ?? API_SERVER,
    // In addition, you can use the `pathRewrite` option provided by `next-http-proxy`
    pathRewrite: [
        {
            patternStr: '^/api',
            replaceStr: process.env.API_SERVER_URL ?? API_SERVER,
        },
    ],
});