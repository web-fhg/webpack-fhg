//开发配置

module.exports = {
    mode: "development",
    devServer: {
        port: 10086,
        open: true,
        openPage: "list.html",
        proxy: {
            "/api": {
                target: "http://yuanjin.tech:5100/",
                changeOrigin: true
            }
        }
    }
}