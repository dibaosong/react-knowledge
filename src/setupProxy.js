const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        createProxyMiddleware('/jeecg-boot', {  //`api`是需要转发的请求
            target: 'http://118.190.199.43:3000',  // 这里是接口服务器地址
            changeOrigin: true,
        })
    )
}