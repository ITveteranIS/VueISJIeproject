const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
const name = process.env.VUE_APP_TITLE  // TODO 网页标题
const port = process.env.VUE_APP_PORT
module.exports={
    devServer: {
        open: true,//TODO 设置自动打开
        host: '0.0.0.0',
        port: port,  //TODO 配置端口
        disableHostCheck: true, // TODO 不检查host
        proxy: {   // TODO 配置代理
            '/': {
                target: `http://localhost:2003`,
                changeOrigin: true,   // TODO 是否允许跨域
                pathRewrite: {  // TODO 请求重写，这里是把ruben替换成空串
                    '^/': '/'
                }
            }
        }
    },

    css: {
        loaderOptions: {
            sass: {
                sassOptions: { outputStyle: "expanded" }
            }
        }
    },
    configureWebpack: {
        externals: {
            'QC': 'QC'
        },
        name: name,
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },
    // 这个是给webpack-dev-server开启可IP和域名访问权限。
    chainWebpack: config => {
        config.devServer.disableHostCheck(true)
    }
    // productionSourceMap:false  不显示源代码,
}
