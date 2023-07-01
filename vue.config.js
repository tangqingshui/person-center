const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://www.zhihu.com',
        ws: true,
        changeOrigin: true
      },
    }
  }
})

