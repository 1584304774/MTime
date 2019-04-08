module.exports = {//跨域配置项，使用的是中间件http-proxy-middleware,是一种中间件代理
    devServer: {
        proxy: {
            "/Service": {
                target: 'https://m.mtime.cn',//需要跨域的路径
                changeOrigin: true,//是否可以跨域
            },
            "/api": {
                target: 'https://ticket-m.mtime.cn',//需要跨域的路径
                changeOrigin: true,//是否可以跨域 ,   
            }
        }
    }
}




