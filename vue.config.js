const { defineConfig } = require('@vue/cli-service')

/* AIM: element-plus 按需引入
   DOC: https://element-plus.org/zh-CN/guide/quickstart.html
*/
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: './build',

  configureWebpack: {
    devServer: {
      port: '8080',
      proxy: {
        '^/api': {
          target: 'http://10.168.0.210:8087',
          pathRewrite: {
            '^/api': ''
          },
          changeOrigin: true
        }
      }
    },

    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
})
