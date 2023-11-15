const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devtool: "source-map",
  },
  chainWebpack: (config) => {
    config.module
        .rule('xml')
        .test(/\.xml$/)
        .use('raw-loader')
        .loader('raw-loader')
        .end();
  },
})
