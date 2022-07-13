const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    publicPath: '/demo',
    outputDir: process.env.VUE_APP_ENV === 'prod' ? 'dist' : 'beta',
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].title = 'demo';
            return args;
        });
    },
    devServer: {
        historyApiFallback: true,
        allowedHosts: 'all'
    },
    css: {
        loaderOptions: {
            postcss: {
                postcssOptions: {
                    plugins: [
                        require('postcss-pxtorem')({ rootValue: 100 }) // 换算的基数
                    ]
                }
            }
        }
    },
    productionSourceMap: process.env.VUE_APP_ENV !== 'prod'
});
