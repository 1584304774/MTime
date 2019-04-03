module.exports = {//跨域配置项，使用的是中间件http-proxy-middleware,是一种中间件代理
    devServer:{
        proxy:{
            "/abc":{
                target:'https://m.mtime.cn',//需要跨域的路径
                changeOrigin:true,//是否可以跨域
                pathRewrite:{
                    "^/abc":""
                }
            }
        }
    }
}
//http://m.mtime.cn/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=2019422144314703