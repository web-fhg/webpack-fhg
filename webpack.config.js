const baseConfig = require("./build/webpack.base");
const devConfig = require("./build/webpack.dev");
const prodConfig = require("./build/webpack.prod");

module.exports = function (env) {
    if (env && env.prod) {
        //生产环境
        const config = {
            ...baseConfig,
            ...prodConfig
        }
        config.plugins = [
            ...baseConfig.plugins,
            ...prodConfig.plugins
        ]
        return config;
    } else {
        //开发环境
        return {
            ...baseConfig,
            ...devConfig
        }
    }
}

