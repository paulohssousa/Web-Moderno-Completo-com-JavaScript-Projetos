const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    resolve: {
      fallback: { 'path': require.resolve('path-browserify'), "fs": false },
      extensions: ['.jsx', '.js', '.tsx', '.ts'],
    }
  },
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true
    }
  }
})
