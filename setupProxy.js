const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://146.71.78.231:3307', // Replace with your HTTP endpoint
      changeOrigin: true,
      secure: false,
    })
  );
};